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
                              <v-file-input label="Add image" outlined dense accept="image/png, image/jpeg, image/bmp" class="pr-7"></v-file-input>
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

                            </td>
                            <!-- Author -->
                            <td>

                            </td>
                            <!-- Publisher -->
                            <td>

                            </td>
                            <!-- Year -->
                            <td>

                            </td>
                            <!-- Type -->
                            <td>

                            </td>
                            <!-- Links -->
                            <td>

                            </td>
                            <!-- Edit Details -->
                            <td>

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
export default {
    data: () => ({
      items: ['eBook', 'Podcast', 'Journal', 'Audiobook', 'Video', 'Periodical', 'Article', 'Newspaper', 'Magazine', 'Thesis'],
      author: '',
      title: '',
      title1: '',
      publisher: '',
      link1: '',
      link2: '',
      link3: '',
      link4: '',
    }),
}
</script>
<style scoped>

</style>