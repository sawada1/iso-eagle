<template>
    <div style="min-height: 100vh;">
        <div class="about-page">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> Home </span>
                        <i class="fa-solid fa-chevron-right"></i>
                        <span> About </span>
                    </div>
                    <h3> About ISO Eagle </h3>
                    <p class="mb-10 mt-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
            </div>
            <v-container>
                <div class="our-div mt-10">
                    <div class="d-flex justify-content-center">
                        <h3> Our vision </h3>

                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                        dolor in hendrerit . </p>
                </div>
                <div class="our-div mt-16">
                    <div class="d-flex justify-content-center">
                        <h3> Our sectors </h3>

                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                        dolor in hendrerit . </p>
                </div>

                <div class="text-container">
                    <v-row class="">
                        <v-col class="d-flex justify-content-center" v-for="i in 30" cols="12" xl="4" lg="4" md="6">
                            <div class="item">
                                <div class="dot"></div>
                                <span> Lorem ipsum dolor. </span>
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