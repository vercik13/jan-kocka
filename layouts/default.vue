<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hlavička -->
    <Header />

    <!-- Obsah stránky -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Patička -->
    <Footer />
  </div>
</template>
