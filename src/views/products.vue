<template>
    <div style="min-height: 100vh;">
        <div class="products-container">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> Home </span>
                        <i class="fa-solid fa-chevron-right"></i>
                        <span> Services </span>
                    </div>
                    <h3> All Our Products </h3>
                </div>
            </div>

            <v-container>
                <v-row>
                    <v-col cols="12" xl="4" lg="4">
                        <div class="filter-container">
                            <div class="filters">
                                <div class="filter line d-flex align-items-center gap-3">
                                    <img class="" src="../assets/images/filter.svg" alt="">
                                    <h6 class=" m-0"> Filters </h6>
                                </div>
                                <div
                                    class="d-flex filter align-items-center flex-column mt-5 justify-content-center gap-3">
                                    <div class="d-flex align-items-center justify-content-center gap-3">
                                        <img class="" src="../assets/images/sort.svg" alt="">
                                        <h6 class=" m-0"> Sort by </h6>
                                    </div>
                                    <div class="d-flex align-items-center gap-4">
                                        <div @click="sortActive = 1" class="sortBy"
                                            :class="{ 'active': sortActive  == 1}">
                                            <span>Recent </span>
                                        </div>
                                        <div @click="sortActive = 2" class="sortBy"
                                            :class="{ 'active': sortActive  == 2}">
                                            <span>Trending </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </v-col>
                    <v-col clos="12" xl="8" lg="8">
                        <div class="products">
                            <div class="d-flex justify-content-end">
                                <div class="search-container">
                                    <input type="text" v-model="search" placeholder="Search for product">
                                    <div class="line">
                                    </div>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>

                            </div>

                            <div class="products-cards mt-10">
                                <v-row>
                                    <v-col v-for="item , index in filterdProducts" cols="12" xl="6" lg="6">
                                    <router-link :to="{ name:'product' , params:{id: index + 1}}" >
                                        <div class="product-card">
                                            <div class="image">
                                                <img :src="item.image" alt="">
                                            </div>
                                            <div class="text-container p-3">
                                                <div class="d-flex text-center align-items-center flex-column">
                                                    <h6> {{ item.title }} </h6>
                                                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam
                                                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                                        erat
                                                        .</p>

                                                </div>
                                                <div class="d-flex justify-content-end">
                                                    <span> view more </span>

                                                </div>
                                            </div>
                                        </div>
                                    
                                    </router-link>

                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script setup>
import { ref , computed } from 'vue';

let sortActive = ref(0);

let search = ref('');

let products = ref([
    {
        image: "/src/assets/images/product1.png",
        title: " Fire alarm system"
    },
    {
        image: "/src/assets/images/product2.png",
        title: "Fire Fighting Equipment"
    },
    {
        image: "/src/assets/images/product3.png",
        title: " CO2 Fire Suppression System"
    },
    {
        image: "/src/assets/images/product4.png",
        title: " FM200  Fire Suppression System"
    },
]);


const filterdProducts = computed(() => {
    return products.value.filter((ele) => {
        return ele.title.toLowerCase().includes(search.value.toLowerCase());
    });
});



</script>

<style lang="scss" scoped>


</style>