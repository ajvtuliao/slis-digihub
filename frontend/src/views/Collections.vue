<template>
    <div>
        <v-row class="justify-content-center align-center mx-5 mt-3">
            <v-col cols="12">
                <v-text-field class="search" placeholder="Search Collections" outlined dense
                    prepend-inner-icon="mdi-magnify" clearable v-model="search" v-debounce:300ms="searchBook">

                </v-text-field>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.id">
                            <!-- Title -->
                            <td>
                                {{ book.bookTitle }}
                            </td>
                            <!-- Author -->
                            <td>
                                {{ book.bookAuthor }}
                            </td>
                            <!-- Publisher -->
                            <td>
                                {{ book.bookPublisher }}
                            </td>
                            <!-- Year -->
                            <td>
                                {{ book.bookYear }}
                            </td>
                            <!-- Type -->
                            <td>
                                {{ book.bookType.toString()
                                        .replace(",", ", ")
                                        .replace("[", "")
                                        .replace("]", "")
                                        .replaceAll("\"", "")
                                        .trim()
                                }}
                            </td>
                            <!-- Links -->
                            <td>
                                <v-row>
                                    <v-col md="4" class="ml-auto">
                                        <v-btn color="green" v-if="book.bookLink1 != ''" @click="copy(book.bookLink1)">
                                            Link 1</v-btn>
                                    </v-col>
                                    <v-col md="4" class="ml-auto">
                                        <v-btn color="green" v-if="book.bookLink2 != ''" @click="copy(book.bookLink2)">
                                            Link 2</v-btn>

                                    </v-col>
                                    <v-col md="4" class="ml-auto">
                                        <v-btn color="green" v-if="book.bookLink3 != ''" @click="copy(book.bookLink3)">
                                            Link 3</v-btn>

                                    </v-col>
                                </v-row>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <v-snackbar v-model="copiedLink">
                Copied!
                <template v-slot:action="{ attrs }">
                    <v-btn color="pink" text v-bind="attrs" @click="copiedLink = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-row>
    </div>
</template>
<script>
import axios from 'axios';
import Fuse from 'fuse.js';

export default {
    data: () => ({
        books: [],
        copiedLink: false
    }),
    methods: {
        async getBooks() {
            const listBooks = await axios.get('/getBooks');
            this.books = listBooks.data;
            // console.log("books")
            // console.log(this.books);
        },
        async searchBook(book) {
            if (book == "") {
                this.getBooks()
            } else {
                console.log('search')
                console.log(book)
                const fuse = new Fuse(this.books, {
                    keys: ['bookTitle',
                        'bookAuthor',
                        'bookPublisher',
                        'bookYear',
                        'bookType',
                        'bookLink1',
                        'bookLink2',
                        'bookLink3']
                })
                console.log('built index')
                var searchRes = fuse.search(book)
                console.log(searchRes)
                this.books = searchRes.map(x => x.item)
            }
        },
        async copy(url) {
            navigator.clipboard.writeText(url)
            this.copiedLink = true
        }
    },
    mounted() {
        this.getBooks()
    },
}
</script>
<style scoped>
</style>

