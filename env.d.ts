/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_API_ENDPOINT: string
    readonly VITE_APP_API_SPRING: string
    readonly VITE_APP_API_MOVIES: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}