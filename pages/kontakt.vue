<script setup>
import { Phone, Mail, MapPin } from "lucide-vue-next"
</script>

<template>
  <section id="kontakt" class="container mx-auto py-12">
    <h2 class="text-3xl font-bold mb-8 uppercase text-center">Kontakt</h2>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Levý sloupec: text horizontálně vycentrovaný mezi okrajem a mapou -->
      <div class="md:w-1/2 flex justify-center">
        <div class="flex flex-col justify-center space-y-6 text-center md:text-left">
          <h3 class="text-2xl font-bold mb-8">Kde nás najdete?</h3>

          <div class="flex items-center justify-center md:justify-start gap-3">
            <Phone class="w-5 h-5" />
            <p class="text-lg font-medium">+420 739 175 831</p>
          </div>

          <div class="flex items-center justify-center md:justify-start gap-3">
            <Mail class="w-5 h-5" />
            <a href="mailto:info@jan-kocka.cz" class="text-lg font-medium hover:text-[#6b3f36] transition-colors">
              info@jan-kocka.cz
            </a>
          </div>

          <div class="flex items-center justify-center md:justify-start gap-3">
            <MapPin class="w-5 h-5" />
            <p class="text-lg font-medium">Na Bělidle 5833/3a, 586 01 Jihlava</p>
          </div>
        </div>
      </div>

      <!-- Pravý sloupec: mapa -->
      <div class="md:w-1/2 w-full">
        <iframe
          class="w-full h-80 md:h-96 rounded-lg shadow-lg"
          style="border:none"
          src="https://frame.mapy.cz/s/mukerecato"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>
