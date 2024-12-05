import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles',
      },
    },
  },
})
