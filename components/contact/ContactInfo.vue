<script setup>
import { Phone, Mail, MapPin } from "lucide-vue-next";

defineProps({
  phone: String,
  email: String,
  address: String,
  mapSrc: String
});
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8">
    <div class="md:w-1/2 flex justify-center">
      <div class="flex flex-col justify-center space-y-6 text-center md:text-left">
        <h3 class="text-2xl font-bold mb-8">Kde nás najdete?</h3>

        <div class="flex items-center justify-center md:justify-start gap-3">
          <Phone class="w-5 h-5" />
          <p class="text-lg font-medium">{{ phone }}</p>
        </div>

        <div class="flex items-center justify-center md:justify-start gap-3">
          <Mail class="w-5 h-5" />
          <a :href="`mailto:${email}`" class="text-lg font-medium">{{ email }}</a>
        </div>

        <div class="flex items-center justify-center md:justify-start gap-3">
          <MapPin class="w-5 h-5" />
          <p class="text-lg font-medium">{{ address }}</p>
        </div>
      </div>
    </div>

    <div class="md:w-1/2 w-full">
      <iframe
        class="w-full h-80 md:h-96 rounded-lg shadow-lg"
        style="border:none"
        :src="mapSrc"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
