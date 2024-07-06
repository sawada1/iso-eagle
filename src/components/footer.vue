<template>
    <div>
        <footer>
            <div class="footer-container">
                <v-container>
                    <v-row>
                        <v-col cols="12" xl="4" lg="4">
                            <div class="logo-container">
                                <img src="../assets/images/logo.png" alt="logo" loading="lazy">
                                <p> Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur
                                    lacinia mollis </p>
                                <div class="icons">
                                    <a v-if="general" :href="general.facebook_url" target="_blank" class="icon">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a v-if="general" :href="general.linkedin_url" target="_blank" class="icon">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a v-if="general" :href="general.youtube_url" target="_blank" class="icon">
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="d-flex align-items-center justify-content-center" cols="12" xl="4" lg="4">
                            <div class="links-container">
                                <h5>{{ $t('QuickLink') }}</h5>
                                <div class="links">
                                    <router-link to="/about" class="link">
                                        <img src="../assets/images/arrow2.svg" class="arrow-rtl" alt="arrow"
                                            loading="lazy">
                                        <span> {{ $t('AboutISOEagle') }} </span>
                                    </router-link>
                                    <router-link to="/services" class="link">
                                        <img src="../assets/images/arrow2.svg" class="arrow-rtl" alt="arrow"
                                            loading="lazy">
                                        <span> {{ $t('OurServices') }} </span>
                                    </router-link>
                                    <router-link to="products" class="link">
                                        <img src="../assets/images/arrow2.svg" class="arrow-rtl" alt="arrow"
                                            loading="lazy">
                                        <span>{{ $t('OurProducts') }}</span>
                                    </router-link>
                                    <router-link to="videos" class="link">
                                        <img src="../assets/images/arrow2.svg" class="arrow-rtl" alt="arrow"
                                            loading="lazy">
                                        <span> {{ $t('videos') }} </span>
                                    </router-link>
                                    <router-link to="/contact" class="link">
                                        <img src="../assets/images/arrow2.svg" class="arrow-rtl" alt="arrow"
                                            loading="lazy">
                                        <span> {{ $t('ReviewClients') }} </span>
                                    </router-link>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="d-flex align-items-center justify-content-center" cols="12" xl="4" lg="4">
                            <div class="links-container contact">
                                <h5>{{ $t('ContactUs') }}</h5>
                                <div class="links">
                                    <div class="link">

                                        <span> 5, off Mohamed Farid Street, Cairo </span>
                                    </div>
                                    <div class="link">
                                        <i class="fa-regular fa-clock"></i>
                                        <span> {{ $t('OpeningHours') }}: Mon - Sat: 10.00 AM - 4.00 PM </span>
                                    </div>
                                    <div class="link">
                                        <i class="fa-solid fa-phone"></i>
                                        <span>{{ $t('PhoneCall') }}: 208 7898 809 - 207 997 7696 </span>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <div class="line"></div>
                    <div
                        class="foot d-flex align-items-center text-center flex-column flex-xl-row flex-lg-row  justify-content-between">
                        <p> {{ $t('foot') }} ISO Eagle </p>
                        <div class="d-flex align-items-center gap-4">
                            <router-link to="/terms">
                                <span class="active"> {{ $t('terms') }} </span>
                            </router-link>
                            <router-link to="/policy">
                                <span class=""> {{ $t('policy') }} </span>
                            </router-link>
                        </div>
                    </div>
                </v-container>
            </div>
        </footer>
    </div>
</template>

<script setup>
let props = defineProps(["general"]);


</script>

<style lang="scss" scoped></style>