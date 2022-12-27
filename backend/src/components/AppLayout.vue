<template>
    <div class="flex min-h-full">
        <Sidebar/>

        <div class="flex-1">
            <AppHeader/>
            <main>
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
