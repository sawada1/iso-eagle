<template>
    <div style="min-height: 100vh;">
        <div class="contact-page">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> Home </span>
                        <i class="fa-solid fa-chevron-right"></i>
                        <span> Contact </span>
                    </div>
                    <h3> Contact Us </h3>
                </div>
            </div>

            <div class="form-container">
                <v-container>
                    <v-row>
                        <v-col cols="12" xl="6" lg="6">
                            <div class="main-text">
                                <h4> Feel free to contact us. </h4>
                                <h4> We’d love to hear from you.
                                </h4>
                                <p class="mt-8">Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast
                                    ehicula leo, vel
                                    efficitur felis ultrices non</p>

                                <div class="details d-flex flex-column gap-4 mt-16">
                                    <div class="item">
                                        <h6> Call Us </h6>
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-phone"></i>
                                            <span> 208 7898 809 - 207 997 7696
                                            </span>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h6> Send Us An E-mail </h6>
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-envelope"></i>
                                            <span> iso.procurement@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h6> Call Us </h6>
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-location-crosshairs"></i>
                                            <span> 5, off Mohamed Farid Street, Cairo
                                            </span>
                                        </div>
                                    </div>
                                    <img src="../assets/images/map.png" class="w-100 mt-5" alt="">
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" xl="6" lg="6">
                            <div class="form">
                                <h5> Enter Details in This Form: </h5>
                                <p> Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast ehicula leo, vel
                                    efficitur felis ultrices non. </p>

                                <div class="inputs">
                                    <v-row>
                                        <v-col cols="6">
                                            <div class="input">
                                                <label for=""> Full Name </label>
                                                <input type="text" placeholder="Robot Fox">
                                            </div>
                                        </v-col>
                                        <v-col cols="6">
                                            <div class="input">
                                                <label for=""> Email Address </label>
                                                <input type="email" placeholder="Robot Fox">
                                            </div>
                                        </v-col>
                                        <v-col cols="12">
                                            <div class="input">
                                                <label for=""> Full Address </label>
                                                <input type="text" placeholder="No of Street, City">
                                            </div>
                                        </v-col>
                                        <v-col cols="6">
                                            <div class="input">
                                                <label for=""> Number Phone </label>
                                                <input type="number" placeholder="+123 567 909">
                                            </div>
                                        </v-col>
                                        <v-col cols="6">
                                            <div class="input">
                                                <label for=""> Service Type </label>
                                                <input type="text" placeholder="Services">
                                            </div>
                                        </v-col>
                                        <v-col cols="12">
                                            <div class="input">
                                                <label for=""> Message </label>
                                                <textarea name="" placeholder="Write Message" id="" cols="30"
                                                    rows="10"></textarea>
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <button> Submit </button>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>