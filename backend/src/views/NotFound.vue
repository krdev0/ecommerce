<template>
    <div class="flex min-h-full w-full min-w-full justify-center items-center">
        <div class="text-indigo-600 text-7xl px-8 font-bold border-r">404</div>
        <div class="px-8">
            <h1 class="font-bold text-5xl mb-4">Page Not Found</h1>
            <p class="text-gray-500">Please check the url in the address bar and try again</p>
            <router-link :to="{name: 'app.dashboard'}" class="mt-8 group inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Go back home</router-link>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>

</style>
