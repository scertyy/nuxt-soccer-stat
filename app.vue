<script setup>
import http from './services/http'
const envConfig = useRuntimeConfig()
const router = useRouter()

http.initAxiosInstance(envConfig.apiKey, () => router.push({ name: 'network-error' }))

</script>

<template>
  <main class="main">
    <TheHeader />
    <NuxtPage />
  </main>
</template>
