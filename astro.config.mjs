// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://praetor.reysin.fr',

  integrations: [
      starlight({
          title: 'Praetor',
          social: {
              github: 'https://github.com/ReysinProject/Praetor',
          },
          sidebar: [
              {
                  label: 'Guides',
                  autogenerate: { directory: 'guides' },
              },
              {
                  label: 'Reference',
                  items: [
                      {
                          label: "API Reference",
                          autogenerate: { directory: 'reference/api' },
                      }
                  ],
              },
          ],
          customCss: [
              './src/tailwind.css',
          ]
      }),
      tailwind({
          applyBaseStyles: false,
      })
    ],
});