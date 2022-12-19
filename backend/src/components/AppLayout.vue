<template>
    <div class="flex min-h-full">
        <Sidebar/>

        <div class="flex-1">
            <AppHeader/>
            <main>
                Main Content
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>

import Sidebar from "./Sidebar.vue";
import AppHeader from "./AppHeader.vue";
</script>

<style scoped>

</style>
