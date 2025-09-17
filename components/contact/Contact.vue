<script setup>
import ContactInfo from './ContactInfo.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
  <section id="kontakt">
    <div class="section">
        <h2 class="text-3xl font-bold mb-8 uppercase">Kontakt</h2>

        <ContactInfo
        phone="+420 739 175 831"
        email="info@jan-kocka.cz"
        address="Na Bělidle 5833/3a, 586 01 Jihlava"
        mapSrc="https://frame.mapy.cz/s/mukerecato"
        />
    </div>

    <ContactForm backgroundImage="/kovoobrabeni.webp" />
  </section>
</template>
