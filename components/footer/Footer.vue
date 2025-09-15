<template>
  <footer class="relative text-white bg-cover bg-center bg-[url('/bg-HP.webp')]">
    <!-- tmavý overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- obsah -->
    <div class="relative container mx-auto px-6 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <nav class="uppercase">
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="hover:text-gray-300">Úvod</NuxtLink></li>
              <li><NuxtLink to="/sluzby" class="hover:text-gray-300">Nabídka služeb</NuxtLink></li>
              <li><NuxtLink to="/galerie" class="hover:text-gray-300">Galerie</NuxtLink></li>
              <li><NuxtLink to="/reference" class="hover:text-gray-300">Reference</NuxtLink></li>
              <li><NuxtLink to="/kontakt" class="hover:text-gray-300">Kontakt</NuxtLink></li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 class="uppercase font-semibold mb-2">Fakturační adresa</h3>
          <p>Jan Kočka</p>
          <p>IČO: 09670297</p>
          <p>Na Kopci 4188</p>
          <p>586 01 Jihlava</p>
        </div>

        <div>
          <h3 class="uppercase font-semibold mb-2">Kontaktní adresa</h3>
          <p>Jan Kočka</p>
          <p>Na Bělidle 5833/3a</p>
          <p>586 01 Jihlava</p>
        </div>

        <div>
          <h3 class="uppercase font-semibold mb-2">Kontaktní údaje</h3>
          <p>739 175 831</p>
          <p>info@jan-kocka.cz</p>
        </div>
      </div>
    </div>

    <p class="relative text-center py-4">© 2025 Jan Kočka – Všechna práva vyhrazena</p>
  </footer>
</template>
