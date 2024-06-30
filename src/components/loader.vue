<template>
    <div class="loader-page">
      <div class="d-flex flex-column align-items-center main">
        <img class="animated-image" src="../assets/images/Logo.svg" alt="">

      </div>
    </div>
  </template>
  
  <script setup>
  import { Vue3Lottie } from "vue3-lottie";
  import network from "../assets/animations/network.json";
  function reloadPage() {
    window.location.reload();
}
  </script>
  
  <style lang="scss" scoped>
  @keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fade {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

.animated-image {
    animation: pulse 1s infinite, fade 1s infinite;
    width:100px;
}
  .loader-page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000096;

    z-index: 5555555555;
    text-align: center;
    h4 {
      color: #2d3a4a;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 40px;
      width:450px;
    }
    button {
      display: flex;
      width: 400px;
      height: 56px;
      padding: 0px 8px;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      border: 1px solid #2d3a4a;
      color: #2d3a4a;
      font-weight: 700;
    }
  }
  
  @media(max-width:900px){
    .loader-page{
        p{
            width:100% !important;
        }
      h4{
        font-size: 22px;
      }
      .main{
        padding: 20px;
      }
      button{
      width: 100% !important;
      height: 48px;
      }
    }
  }
  </style>
  