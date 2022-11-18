import { resolve } from "path";
import { defineConfig } from "vite";
// import webp from "vite-plugin-webp";

// const path = require("path");
export default defineConfig({
    // root: "./src/", // aqui va la ruta de la que se sirven los archivos, puede ser en la carpeta src
    // base: "./dist/",
    // publicDir: "/",
    root: resolve(__dirname, "src"),
    resolve: {
        alias: {
            "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
        },
    },
    build: {
        outDir: "../dist/",
        // assetsDir: "public/",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve("./src", "index.html"),
                projects: resolve("./src/", "projects.html"),
                detail: resolve("./src/", "project-detail.html"),
            },

            // output: {
            //     entryFileNames: "entry-[name].css",
            // },
        },
    },
    plugins: [
        // webp({
        //     onlyWebp: path.join(__dirname, "./src/img"),
        //     imageType: [".png", ".jpeg"],
        // }),
    ],
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    // },
    // plugins: [pugPlugin({ pretty: true })],
});
