// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "./"),
  },
  css: [
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation",
    "@/assets/css/main.css",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    router: {
      scrollBehavior(to) {
        if (to.hash) {
          // pokud existuje element s tímto ID, scrollni na něj
          if (document.querySelector(to.hash)) {
            return {
              el: to.hash,
              behavior: "smooth",
            };
          }
        }
        // jinak scrollni nahoru na začátek stránky
        return { top: 0 };
      },
    },
  },
});
