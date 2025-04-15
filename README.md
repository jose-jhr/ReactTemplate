1)
composer create-project laravel/laravel laravel-react
cd laravel-react


2)
npm install
npm install react react-dom
npm install --save-dev @vitejs/plugin-react


3)
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
