// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import alpinejs from '@astrojs/alpinejs';


// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Routine Trace',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kaanguru/routinetrace' }],
        customCss: [
            './src/styles/custom.css',
        ],
        head: [
            {
                tag: 'link',
                attrs: {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap',
                },
            },

        ],

		}), alpinejs()],
});