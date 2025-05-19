// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      title: "Routine Trace",
      logo: {
        src: "./src/assets/logo.svg",
      },

      favicon: "/favicon.svg",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kaanguru/routinetrace",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap",
          },
        },
      ],
    }),
    alpinejs(),
  ],
});
