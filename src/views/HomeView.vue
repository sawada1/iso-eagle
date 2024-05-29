<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css';
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

let modules = ref([Pagination, FreeMode, Navigation, Thumbs]);

</script>

<template>
  <div style="min-height:100vh;">
    <swiper :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
      <swiper-slide>
        <img src="../assets/images/hero1.png" alt="hero1" loading="lazy">
        <div class="text">
          <h3>Security of <br> your industrial investments </h3>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit. </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/hero2.png" alt="hero2" loading="lazy">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/hero3.png" alt="hero3" loading="lazy">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/hero4.png" alt="hero4" loading="lazy">
      </swiper-slide>
    </swiper>

    <v-container>
      <div class="brands-container p-4 m-top">
        <v-row>
          <v-col cols="6" xl="2" lg="2" md="4">
            <img src="../assets/images/brand1.svg" alt="brand1" loading="lazy">
          </v-col>
          <v-col cols="6" xl="2" lg="2" md="4">
            <img src="../assets/images/brand1.svg" alt="brand1" loading="lazy">
          </v-col>
          <v-col cols="6" xl="2" lg="2" md="4">
            <img src="../assets/images/brand3.svg" alt="brand1" loading="lazy">
          </v-col>
          <v-col cols="6" xl="2" lg="2" md="4">
            <img src="../assets/images/brand4.svg" alt="brand1" loading="lazy">
          </v-col>
          <v-col cols="6" xl="2" lg="2" md="4">
            <img src="../assets/images/brand5.svg" alt="brand1" loading="lazy">
          </v-col>
          <v-col cols="6" xl="2" lg="2" md="4">
            <img src="../assets/images/brand6.svg" alt="brand1" loading="lazy">
          </v-col>
        </v-row>
        <div class="d-flex align-items-center justify-content-center">
          <button class="Btn mt-16"> view more </button>
        </div>
      </div>
    </v-container>
    <div class="about-home m-top">
      <div class="text-container">
        <div class="d-flex flex-column gap-5 text-center">
          <h3> About ISO Eagle </h3>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
            accumsan
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
            facilisi.
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="">
          <button class="Btn"> know more </button>
        </div>
      </div>
    </div>

    <div class="what-we-do-container">
      <v-row no-gutters class="h-100">
        <v-col class="d-none d-xl-block d-lg-block h-100" cols="4">
          <div class="img-container">
            <img src="../assets/images/what1.png" alt="what-img" loading="lazy">
          </div>
        </v-col>
        <v-col cols="12" xl="8" lg="8" class="main-text">
          <div class="text-container">
            <div class="text mb-5">
              <h3> What We Do </h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrudt . </p>
            </div>
            <div class="services">
              <h3> Our Services includes: </h3>
              <div class="service">
                <img src="../assets/images/icon1.svg" alt="service1" loading="lazy">
                <span> Procurement </span>
              </div>
              <div class="service">
                <img src="../assets/images/icon2.svg" alt="service1" loading="lazy">
                <span> Special sourcing for hard -to- find products </span>
              </div>
              <div class="service">
                <img src="../assets/images/icon3.svg" alt="service1" loading="lazy">
                <span> Freight & Clearance </span>
              </div>
              <button class="Btn primary"> know more </button>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="products-home">
      <v-container>
        <h3 class=""> Our Products </h3>
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon1.svg" alt="product1" loading="lazy">
              <span> Health, Safety and Environment
                (HSE) </span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon2.svg" alt="product1" loading="lazy">
              <span> Industrial Tools & Machinery
                Equipment </span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon3.svg" alt="product1" loading="lazy">
              <span> Piping Package & Valves </span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon4.svg" alt="product1" loading="lazy">
              <span> Monolithic Isolation Joints </span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon5.svg" alt="product1" loading="lazy">
              <span> Process Control Instruments </span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon6.svg" alt="product1" loading="lazy">
              <span> Measuring, Sampling and
                Inspecting Instruments</span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon7.svg" alt="product1" loading="lazy">
              <span>Welding & Cutting Technology </span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon8.svg" alt="product1" loading="lazy">
              <span> Rescue & Lifting Equipment </span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box">
              <img src="../assets/images/product-icon9.svg" alt="product1" loading="lazy">
              <span>Cathodic Protection Materials </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="videos-home">
      <v-container>
        <h3 class=""> Videos </h3>
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box video">
              <div class="image">
                <img src="../assets/images/hero1.png" alt="product1" loading="lazy">
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
                <img src="../assets/images/video2.png" alt="product1" loading="lazy">
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
              <span> Lorem ipsum dolor sit amet </span>
            </div>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="6">
            <div class="box video">
              <div class="image">
                <img src="../assets/images/video2.png" alt="product1" loading="lazy">
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
              <span> Lorem ipsum dolor sit amet </span>
            </div>
          </v-col>

        </v-row>
        <div class="d-flex align-items-center justify-content-center">
          <button class="Btn mt-16"> view more </button>
        </div>
      </v-container>
    </div>

    <div class="testimonial-container m-top">
      <v-container>
        <v-row>
          <v-col cols="12" xl="4" lg="4">
            <img class="w-100" src="../assets/images/what2.png">
          </v-col>
          <v-col cols="12" xl="8" lg="8" class="" style="overflow: hidden;">
            <div class="testi w-100 ">
              <h3> What Our Client Says </h3>
              <swiper :loop="true" :spaceBetween="70" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                class="testimonal1 w-100">
                <swiper-slide class="" v-for="i in 6">
                  <div class="box">
                    <div class="img-container">
                      <div class="image">
                        <img src="../assets/images/person.png" alt="test" loading="lazy">
                      </div>
                      <div class="d-flex flex-column gap-3">
                        <span> name Client </span>
                        <div class="stars">
                          <img v-for="i in 5" src="../assets/images/star.svg" alt="">
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <div class="test1">
                        <img src="../assets/images/test1.png" alt="">
                      </div>
                      <div class="test2">
                        <img src="../assets/images/test2.png" alt="">
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>

              <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10"  :freeMode="true"
                :watchSlidesProgress="true" :modules="modules" :breakpoints="{
      '300': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '700': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }" class="persons px-3">
                <swiper-slide v-for="i in 6">
                  <div class="box">
                    <img src="../assets/images/person.png" alt="">
                  </div>
                </swiper-slide>


              </swiper>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

  </div>
</template>
