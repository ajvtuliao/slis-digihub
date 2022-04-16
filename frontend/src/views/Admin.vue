<template>
    <div>
        <v-row class="justify-content-center align-center mx-5 mt-3">
            <!-- Search Bar -->
            <v-col cols="9">
                <v-text-field 
                    class="search"
                    placeholder="Search Collections"
                    outlined
                    dense
                    prepend-inner-icon="mdi-magnify"
                    clearable
                    v-model="search"
                >
                </v-text-field>
            </v-col>
            <!-- Add Books -->
            <v-col cols="1">
                <v-dialog v-model="addRecs" width="80em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="mt-n7 px-2" color="green" dark v-bind="attrs" v-on="on">Add Resource</v-btn>
                    </template>
                    <v-card dark width="80em">
                        <h1 class="text-center font-weight-bold py-7" align="center" justify="center">Add Resource Details</h1>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Title:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-text-field outlined v-model="title" flat class="pr-7"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Author:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-text-field outlined v-model="author" type="text" flat class="pr-7"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Publisher:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-text-field outlined v-model="publisher" type="text" flat class="pr-7"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Year:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-text-field outlined v-model="year" type="number" flat class="pr-7"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Type:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-select v-model="types" :items="items" attach chips multiple outlined clearable class="pr-7"></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Links:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-row>
                                  <v-col cols="4"><v-text-field outlined v-model="link1" type="text" placeholder="Link 1" flat class="pr-2"></v-text-field></v-col>
                                  <v-col cols="4"><v-text-field outlined v-model="link2" type="text" placeholder="Link 2" flat class="pr-2"></v-text-field></v-col>
                                  <v-col cols="4"><v-text-field outlined v-model="link3" type="text" placeholder="Link 3" flat class="pr-7"></v-text-field></v-col>
                              </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col align="right" class="mt-9 mb-4 mr-7">
                              <v-btn
                                x-large
                                text
                                color="green"
                                @click="addBook"
                              >
                                Add Resource
                              </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>
            </v-col>
            <!-- Add in Carousel -->
            <v-col cols="1">     
                <v-dialog v-model="addCarousel" width="60em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="mt-n7 px-2 ml-7" color="green" dark v-bind="attrs" v-on="on">Add Image in Carousel</v-btn>
                    </template>
                    <v-card dark width="60em">
                        <h1 class="text-center font-weight-bold py-7" align="center" justify="center">Add Image in Carousel</h1>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Image:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-file-input label="Add image" outlined dense accept="image/png, image/jpeg, image/bmp" class="pr-7" v-model="imageFile"></v-file-input>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Title:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-text-field outlined v-model="title1" type="text" flat class="pr-7"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                              <h3 class="font-weight-medium px-7 mt-3">Link:</h3>
                            </v-col>
                            <v-col cols="9">
                              <v-text-field outlined v-model="link4" type="text" flat class="pr-7"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col align="right" class="mt-9 mb-4 mr-7">
                              <v-btn
                                x-large
                                text
                                color="green"
                                @click="addImage"
                              >
                                Add Image
                              </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <v-row class="mx-n12" align="center" justify="center">
            <v-simple-table class="table" fixed-header dark>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center">Title</th>
                            <th class="text-center">Author</th>
                            <th class="text-center">Publisher</th>
                            <th class="text-center">Year</th>
                            <th class="text-center">Type</th>
                            <th class="text-center">Links</th>
                            <th class="text-center">Edit Details</th>
                            <th class="text-center">Remove Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <!-- Title -->
                            <td>
                              {{book.title}}
                            </td>
                            <!-- Author -->
                            <td>
                              {{book.author}}
                            </td>
                            <!-- Publisher -->
                            <td>
                              {{book.publisher}}
                            </td>
                            <!-- Year -->
                            <td>
                              {{book.year}}
                            </td>
                            <!-- Type -->
                            <td>
                              <v-chip :color="color(type)">
                                <span>{{book.type}}</span>
                              </v-chip>
                            </td>
                            <!-- Links -->
                            <td>
                              {{book.link1}}
                              {{book.link2}}
                              {{book.link3}}
                            </td>
                            <!-- Edit Details -->
                            <td>
                              <v-btn color="#63bf5e" dark small @click="get_book_details(book.id)">
                                <v-icon>mdi-clipboard-edit</v-icon>
                                <span>Edit Details</span>
                              </v-btn>
                              <!-- Edit Dialog Box -->
                              <v-dialog v-model="dialog2.show" width="800px">

                              </v-dialog>
                            </td>
                            <!-- Remove -->
                            <td>
                                <v-btn v-model="remove" color="red">
                                    Remove
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-row>
        <v-row class="mx-n12 mt-12" align="center" justify="center">
            <v-simple-table class="table" fixed-header dark>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center">Image</th>
                            <th class="text-center">Title</th>
                            <th class="text-center">Link</th>
                            <th class="text-center">Remove from Carousel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <!-- Image -->
                            <td>

                            </td>
                            <!-- Title -->
                            <td>

                            </td>
                            <!-- Link -->
                            <td>

                            </td>
                            <!-- Remove -->
                            <td>
                                <v-btn v-model="remove" color="red" align="center" justify="center">
                                    Remove
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-row>
    </div>
</template>
<script>
// TODO: add a toast component to signify if the book has been uploaded
import axios from 'axios'
export default {
    data: () => ({
      imageFile: null,
      addRecs: false,
      addCarousel: false,
      items: ['eBook', 'Podcast', 'Journal', 'Audiobook', 'Video', 'Periodical', 'Article', 'Newspaper', 'Magazine', 'Thesis'],
      author: '',
      title: '',
      title1: '',
      publisher: '',
      year: '',
      types: [],
      link1: '',
      link2: '',
      link3: '',
      link4: '',
    }),
    beforeMount() {
      this.getBooks()
      this.getImages()
    },
    beforeUpdate() {
      this.getBooks()
      this.getImages()
    },
    methods: {
      // TODO: set books to this and update list of books
      async getBooks() {
        const listBooks = await axios.get('/getBooks');
        console.log(listBooks);
      },
      async getImages() {
        const listImages = await axios.get('/getImages');
        console.log(listImages);
      },
      async addBook() {
        axios.post('/addBook', {
          bookTitle: this.title, 
          bookAuthor: this.author, 
          bookPublisher: this.publisher, 
          bookYear: parseInt(this.year, 10), 
          bookType: JSON.stringify(this.types), 
          bookLink1: this.link1, 
          bookLink2: this.link2,
          bookLink3: this.link3
        }).then((resp) => {
          if (resp.statusText == 'OK') {
            // TODO: set this to end the toast when adding book
            this.author = '';
            this.title = '';
            this.publisher = '';
            this.year = '';
            this.types = '';
            this.link1 = '';
            this.link2 = '';
            this.link3 = '';
            this.addRecs = false;
          }
        })
      },
      async addImage() {
        if (this.imageFile) {
          let formData = new FormData();
          // TODO: try setting the filename of the image
          formData.append('file', this.imageFile, this.imageFile.name)
          formData.append('bookTitle', this.title1)
          formData.append('bookLink', this.link4)
          axios.post('/addImage', formData).then(resp => {
            console.log(resp);
            this.imageFile = null;
            this.title1 = '';
            this.link4 = '';
            this.addCarousel = false;
          }).catch(err => {
            console.log(err);
          })
        } else {
          console.log('There is no image')
        }
      }
    }
}
</script>
<style scoped>

</style>