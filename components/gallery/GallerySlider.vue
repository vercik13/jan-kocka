<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const images = [
  '/obrabeni-ukazka.webp',
  '/obrabeni-ukazka1.webp',
  '/obrabeni-ukazka2.webp',
  '/obrabeni-ukazka3.webp',
  '/obrabeni-ukazka4.webp',
  '/obrabeni-ukazka5.webp',
  '/obrabeni-ukazka6.webp',
]
</script>

<template>
  <section class="container mx-auto py-12 text-center">
    <h2 class="text-3xl font-bold mb-6 uppercase">Ukázka z naší galerie</h2>

    <Swiper
      :slides-per-view="1"
      :space-between="16"
      :breakpoints="{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      class="mb-8"
    >
      <SwiperSlide v-for="(img, i) in images" :key="i">
        <img :src="img" class="w-full h-64 object-cover rounded-lg shadow-md" />
      </SwiperSlide>
    </Swiper>

    <NuxtLink to="/galerie" class="btn-primary inline-block">
      Zobrazit celou galerii
    </NuxtLink>
  </section>
</template>


