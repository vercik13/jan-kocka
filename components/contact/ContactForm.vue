<!-- components/contact/ContactForm.vue -->
<template>
  <section
    class="mt-20 bg-cover bg-center bg-no-repeat py-20"
    style="background-image: url('/kovoobrabeni.webp')"
  >
    <h3 class="text-3xl font-bold mb-10 text-center text-white drop-shadow-lg">
      Kontaktujte nás
    </h3>

    <div class="max-w-4xl mx-auto bg-white/85 backdrop-blur-sm rounded-xl shadow-lg p-10">
      <form @submit.prevent class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block mb-2 text-lg font-medium">
              Vaše jméno <span class="text-gray-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Zadejte své jméno"
              class="w-full border rounded-lg px-5 py-3 text-lg"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg font-medium">
              Váš e-mail <span class="text-gray-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="Zadejte svůj e-mail"
              class="w-full border rounded-lg px-5 py-3 text-lg"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg font-medium">
              Telefon <span class="text-gray-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Zadejte své telefonní číslo"
              class="w-full border rounded-lg px-5 py-3 text-lg"
            />
          </div>
        </div>

        <div>
          <label class="block mb-2 text-lg font-medium">
            Vaše zpráva <span class="text-gray-500">*</span>
          </label>
          <textarea
            required
            placeholder="Napište zprávu"
            class="w-full border rounded-lg px-5 py-3 text-lg h-40"
          ></textarea>
        </div>

        <div class="flex items-center gap-3">
          <input type="checkbox" required class="w-5 h-5" />
          <label class="text-sm text-gray-700">
            Souhlasím se zpracováním osobních údajů dle zásad ochrany osobních údajů.
          </label>
        </div>

        <div class="text-center">
          <button type="submit" class="btn-primary">
            Odeslat
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
