<template>
    <div>
        <v-row class="justify-content-center align-center mx-5 mt-3">
            <v-col cols="12">
                <v-text-field class="search" placeholder="Search Collections" outlined dense
                    prepend-inner-icon="mdi-magnify" clearable v-model="search">

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
                                {{ book.bookType }}
                            </td>
                            <!-- Links -->
                            <td>
                                {{ book.bookLink1 }}, {{ book.bookLink2 }}, {{ book.bookLink3 }}
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-row>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        books: []
    }),
    methods: {
        async getBooks() {
            const listBooks = await axios.get('/getBooks');
            this.books = listBooks.data;
            // console.log("books")
            // console.log(this.books);
        },
    },
    mounted() {
        this.getBooks()
    },
}
</script>
<style scoped>
</style>

