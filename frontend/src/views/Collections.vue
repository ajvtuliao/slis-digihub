<template>
    <div>
        <v-row class="justify-content-center align-center mx-5 mt-3">
            <v-col cols="12">
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
        </v-row>
        <v-row class="mx-n12" align="center" justify="center">
            <v-simple-table class="table" fixed-header dark>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center">Cover</th>
                            <th class="text-center">Title</th>
                            <th class="text-center">Type</th>
                            <th class="text-center">Year</th>
                            <th class="text-center">Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <!-- Cover -->
                            <td>

                            </td>
                            <!-- Title -->
                            <td>

                            </td>
                            <!-- Type -->
                            <td>

                            </td>
                            <!-- Year -->
                            <td>

                            </td>
                            <!-- Links -->
                            <td>
                                
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
    
}
</script>
<style scoped>

</style>

