<script setup>
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import GallerySlider from '@/components/gallery/GallerySlider.vue'
import Reference from '@/components/Reference.vue'
import Contact from '@/components/contact/Contact.vue'
</script>

<template>
  <div>
    <HeroSlider class="h-[80vh]" />
    <About />
    <Services />
    <GallerySlider />
    <Reference />
    <Contact />
  </div>
</template>
