<template>
  <div class="relative w-full bg-[#f2f2f2] rounded-b-m">
    <section id="sluzby" class="container mx-auto py-12 text-center ">
      <h2 class="text-3xl font-bold mb-4 uppercase">Naše služby</h2>
      <p class="text-lg px-4 sm:px-6 lg:px-36">
        Poskytujeme komplexní služby v oblasti kovoobrábění a svařování, od drobných dílů po větší konstrukce.
      </p>
      <p class="text-lg px-4 sm:px-6 lg:px-36">
        Díky moderním technologiím a dlouholetým zkušenostem dodáváme produkty přesně podle požadavků zákazníka,
        s důrazem na kvalitu, spolehlivost a flexibilitu.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mt-4 mx-auto">
      
        <NuxtLink to="/sluzby/kovoobrabeni" class="group block border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative w-full h-64">
            <img src="/obrabeni.webp" alt="Kovoobrábění" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-semibold mb-2 text-center uppercase">CNC Kovoobrábění</h3>
            <p class="text-gray-600 text-center">Zabýváme se kusovou a malosériovou výrobou. Nabízíme CNC frézování, soustružení, broušení.</p>
          </div>
        </NuxtLink>

        
        <NuxtLink to="/sluzby/svarovani" class="group block border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative w-full h-64">
            <img src="/svarovani.webp" alt="Svařování" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-semibold mb-2 text-center uppercase">Svařování</h3>
            <p class="text-gray-600 text-center">Nabízíme svařování metodou MIG/MAG (CO2) nelegovaných ocelí, výroba ocelových konstrukcí.</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
