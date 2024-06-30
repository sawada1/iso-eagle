<template>
    <div style="min-height: 100vh;">
        <div class="product-page">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> {{ $t('home') }} </span>
                        <i class="fa-solid fa-chevron-right arrow-rtl"></i>
                        <span> {{ $t('products') }} </span>
                    </div>
                    <h3> Health, Safety & Environment (HSE) </h3>
                </div>
            </div>
            <v-container>
                <div class="slider-container">
                    <h3> Fire Alarm System </h3>
                    <v-row>
                        <v-col cols="12" xl="6" lg="6">
                            <div class="image">
                                <img src="../assets/images/slide-product.png" alt="">
                            </div>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6">
                            <div class="text-container">
                                <div v-for="i in 8" class="item">
                                    <img src="../assets/images/shape.svg" alt="">
                                    <h6> Smoke & Heat detector With (Common, Deep, Isolator and Stand-alone Bases).
                                    </h6>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="system-container">
                    <div class="title">
                        <span> {{ $t('ConventionalSystem') }} </span>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit . </p>
                    <img src="../assets/images/img-product1.png" alt="">
                </div>

                <div class="features">
                    <h4 class="text-center mb-8"> {{ $t('Features') }} </h4>
                    <v-row>
                        <v-col cols="12" xl="4" lg="4" md="4">
                            <div class="item">
                                <img src="../assets/images/fet1.svg" alt="">
                                <p> Control panel & devices tend to be cheaper. </p>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4">
                            <div class="item">
                                <img src="../assets/images/fet2.svg" alt="">
                                <p> Simple setup, no configuration required. </p>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4">
                            <div class="item">
                                <img src="../assets/images/fet3.svg" alt="">
                                <p> Wide range of compatibility between manufacturers. </p>
                            </div>
                        </v-col>
                    </v-row>
                </div>

                <div class="system-container mt-16">
                    <div class="title">
                        <span> {{ $t('Addressablesystem') }} </span>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit . </p>
                    <img class="mt-9" src="../assets/images/img-product2.png" alt="">
                </div>


                <div class="features mt-10">
                    <h4 class="text-center mb-8"> {{ $t('Features') }} </h4>
                    <v-row>
                        <v-col v-for="i in 6" cols="12" xl="4" lg="4" md="4">
                            <div class="item">
                                <img src="../assets/images/fet1.svg" alt="">
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                            </div>
                        </v-col>

                    </v-row>
                </div>
            </v-container>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>