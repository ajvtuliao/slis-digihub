const morgan = require('morgan')
const multer = require('multer')
const express = require('express');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const path = require('path')
const sqlite3 = require('sqlite3').verbose();
const app = express()
const fs = require('fs')

/*############################################################################*/

// set session expiry
const oneDay = 1000 * 60 * 60 * 24;
// set port
const port = 5000

/*############################################################################*/

// Serve the frontend in dist
app.use(express.static(path.join(__dirname + '/../frontend/dist')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

/*############################################################################*/

// Set-up sessions
app.use(session({
    secret: crypto.randomBytes(32).toString('hex'),
    saveUninitialized: false,
    cookie: { maxAge: oneDay },
    resave: true,
    rolling: true,
}))
app.use(cookieParser())


/*############################################################################*/

// Set-up storage of photos
if (!fs.existsSync('./images')) {
    fs.mkdirSync('./images')
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/images')
    },
    filename: (req, file, cb) => {
        cb(null, crypto.randomBytes(4).toString('hex')+'.'+file.mimetype.split('/').reverse()[0])
    }
})

const upload = multer({storage: storage})

/*#############################################################################*/

// Set-up the sqlite database
var db = new sqlite3.Database('./digihub.db')

db.serialize(() => {
    db.run(`
        create table if not exists bookImages (
            bookImage text not null,
            bookTitle text primary key not null,
            bookLink text
        );
    `);

    db.run(`
        create table if not exists bookDetails (
            bookId int primary key,
            bookTitle text not null,
            bookAuthor text,
            bookPublisher text,
            bookYear int,
            bookType text not null,
            bookLink1 text,
            bookLink2 text,
            bookLink3 text,
            foreign key (bookTitle)
                references bookImages (bookTitle)
        );
    `);
})

/*############################################################################*/

// Set-up paths

app.post('/login', (req, res) => {
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        var session = req.session
        session.username = req.body.username
        res.json({
            login: true
        })
    }
    return
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
    return
})

app.get('/admin', (req, res) => {
    var session = req.session
    if (!session.username) {
        res.redirect('/')
    } else {
        res.sendFile(
            path.resolve(__dirname + '/../frontend/dist', 'index.html')
        )
    }
    return
})

app.get('/isLoggedIn', (req, res) => {
    var session = req.session
    if (session.username) {
        res.json({
            login: true
        })
    } else {
        res.json({
            login: false
        })
    }
    return
})

app.post('/addBook', (req, res) => {
    db.serialize(() => {
        db.run(`
        insert into bookDetails (bookTitle, bookAuthor, bookPublisher, bookYear,
            bookType, bookLink1, bookLink2, bookLink3)
            values ('${req.body.bookTitle}', '${req.body.bookAuthor}', 
            '${req.body.bookPublisher}', '${req.body.bookYear}', 
            '${req.body.bookType}', '${req.body.bookLink1}', 
            '${req.body.bookLink2}', '${req.body.bookLink3}');
        `, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                console.log(rows)
                res.status(200).send('OK')
            }
        })
    })
    return
})



app.post('/addImage', upload.single('file'), async (req, res) => {
    console.log(req.file)
    db.serialize(() => {
        db.run(`
        insert into bookImages (bookImage, bookTitle, bookLink)
            values ('${req.file.path}', '${req.body.bookTitle}', 
                '${req.body.bookLink}')`
        , (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                console.log(rows)
                res.status(200).send('OK')
            }
        })
    })
    return
})

app.get('/getBooks', (req, res) => {
    db.serialize(() => {
        db.all(`
            select rowid, bookTitle, bookAuthor, bookPublisher, bookYear, 
                bookType, bookLink1, bookLink2, bookLink3 from bookDetails;
        `, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                console.log(rows)
                res.status(200).send(rows)
            }
        })
    })
    return
})

app.get('/getImages', (req, res) => {
    db.serialize(() => {
        db.all(`
            select rowid, bookImage, bookTitle, bookLink from bookImages;
        `, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                console.log(rows)
                res.status(200).send(rows)
            }
        })
    })
    return
})

app.post('/editBook', (req, res) => {
    db.serialize(() => {
        db.run(`
            update bookDetails 
            set bookTitle = '${req.body.bookTitle}', 
            bookAuthor = '${req.body.bookAuthor}', 
            bookPublisher = '${req.body.bookPublisher}', 
            bookYear = '${req.body.bookYear}', 
            bookType = '${req.body.bookType}', 
            bookLink1 = '${req.body.bookLink1}', 
            bookLink2 = '${req.body.bookLink2}', 
            bookLink3 = '${req.body.bookLink3}'
            where rowid = '${req.body.rowid}';
        `, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                console.log(rows)
                res.status(200).send(rows)
            }
        })
    })
})

app.post('/removeImage', (req, res) => {
    db.serialize(() => {
        db.run(`
            delete from bookImages where rowid = ${req.body.rowid};
        `, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                console.log(rows)
                res.status(200).send(rows)
            }
        })
    })
    fs.unlinkSync(`./${req.body.image}`)
    return
})

app.post('/removeBook', (req, res) => {
    db.serialize(() => {
        db.run(`
            delete from bookDetails where rowid = ${req.body.rowid};
        `, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                console.log(rows)
                res.status(200).send(rows)
            }
        })
    })
    return
})


app.get('/images/:image', (req, res) => {
    res.sendFile(
        path.resolve(__dirname + '/images', req.params.image)
    )
    return
})

app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(__dirname + '/../frontend/dist', 'index.html')
    )
    return
})

/*############################################################################*/

// Run the server

app.listen(port, () => {
    console.log(`Starting app at port ${port}`)
})