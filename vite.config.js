// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import shopifyConfig from './shopify.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [hydrogen(shopifyConfig)],
});