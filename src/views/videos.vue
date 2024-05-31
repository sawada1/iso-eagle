<template>
    <div style="min-height: 10vh;">
        <div class="videos-page">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> Home </span>
                        <i class="fa-solid fa-chevron-right"></i>
                        <span> videos </span>
                    </div>
                    <h3> videos </h3>
                </div>
            </div>

            <v-container>

                <div class="sorting">
                    <div class="sort">
                        <img src="../assets/images/sort.svg" alt="">
                    </div>
                    <div class="sort active">
                        <img src="../assets/images/filter.svg" alt="">
                    </div>
                </div>

                <div class="videos-home page">
                    <h3 class=""> Videos </h3>
                    <v-row>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video1.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video2.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet</span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video3.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video4.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video5.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video6.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video1.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video2.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet</span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video3.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video4.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video5.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="6">
                            <div class="box video">
                                <div class="image">
                                    <img src="../assets/images/video6.png" alt="product1" loading="lazy">
                                    <img class="play" src="../assets/images/play.svg" alt="">
                                </div>
                                <span> Lorem ipsum dolor sit amet </span>
                            </div>
                        </v-col>

                    </v-row>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="pagination">
                            <i @click="backPag()" class="fa-solid fa-chevron-left"></i>
                            <div class="nums">
                                <div class="num" v-for="i , index in 3" @click="paginate = index + 1" :class="{ 'active': paginate == index + 1 }"><span>{{ index + 1
                                        }}</span></div>
                                        <!-- <span>...</span> -->
                            </div>
                            <i @click="addPag()" class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>

                </div>

            </v-container>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let lengthItems = ref(3);
let paginate = ref(1);

const addPag = () => {
    if (paginate.value < lengthItems.value) {
        paginate.value++;
    }
}
const backPag = () => {
    if (paginate.value > 1) {
        paginate.value--;
    }
}

</script>

<style lang="scss" scoped>


</style>