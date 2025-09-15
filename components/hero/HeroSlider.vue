<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, Pagination, Navigation]
</script>

<template>
  <Swiper
    :modules="modules"
    :loop="true"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :navigation="true"
    class="h-screen w-full"
  >
    <SwiperSlide>
      <img src="/realizace-vyroby.webp" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="p-6 rounded-lg" 
               style="background: rgba(0, 0, 0, 0.5);">
            <h2 class="text-white text-xl sm:text-3xl font-semibold text-center uppercase">
              Technická realizace výroby
            </h2>
          </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="/obrabeni.webp" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="p-6 rounded-lg" 
               style="background: rgba(0, 0, 0, 0.5);">
            <h2 class="text-white text-xl sm:text-3xl font-semibold text-center uppercase">
              CNC kovoobrábění
            </h2>
          </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="/svarovani.webp" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="p-6 rounded-lg" 
               style="background: rgba(0, 0, 0, 0.5);">
            <h2 class="text-white text-xl sm:text-3xl font-semibold text-center uppercase">
              Svařování
            </h2>
          </div>
        </div>
    </SwiperSlide>
  </Swiper>
</template>
