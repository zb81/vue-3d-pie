import { resolve } from 'path'
import type { BuildOptions } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import gltf from 'vite-plugin-gltf'

const IS_LIB = process.env.BUILD_MODE === 'lib'

const buildOptionsForLib: BuildOptions = {
  outDir: 'lib',
  lib: {
    entry: resolve(__dirname, 'src/Vue3dPie/index.ts'),
    name: 'Vue3DPie',
    fileName: 'vue-3d-pie',
    formats: ['cjs', 'es', 'umd'],
  },
  rollupOptions: {
    external: ['vue', 'three', 'troisjs'],
    output: {
      globals: { vue: 'Vue' },
    },
  },
}

const buildOptionsForSite: BuildOptions = {
  outDir: 'dist-site',
}

export default defineConfig({
  base: '/vue-3d-pie',
  plugins: [vue(), gltf()],
  build: IS_LIB ? buildOptionsForLib : buildOptionsForSite,
})
