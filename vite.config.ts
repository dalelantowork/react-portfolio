import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('@mui')) {
                            return 'vendor_mui';
                        }
                        if (id.includes('swiper')) {
                            return 'vendor_swiper';
                        }
                        if (id.includes('framer-motion')) {
                            return 'vendor_framer';
                        }
                        return 'vendor'; // all other dependencies
                    }
                },
            },
        },
    },
});
