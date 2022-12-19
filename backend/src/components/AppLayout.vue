<template>
    <div class="flex min-h-full">
        <Sidebar/>

        <div class="flex-1">
            <header class="h-8 shadow bg-white">
                Header
            </header>
            <main>
                Main Content
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>

import Sidebar from "./Sidebar.vue";
</script>

<style scoped>

</style>
