<template>
    <aside class="w-[200px] bg-indigo-700 text-white">
        <div class="py-4 px-2 flex flex-col gap-4">
            <router-link :to="{name: 'app.dashboard'}"
                         class="flex items-center transition-all hover:bg-black/30 py-1 px-3 rounded">
            <span class="mr-2">
                <HomeIcon class="w-5"/>
            </span>
                <span class="text-md font-light">
                Dashboard
            </span>
            </router-link>
            <router-link :to="{name: 'app.dashboard'}"
                         class="flex items-center transition-all hover:bg-black/30 py-1 px-3 rounded">
            <span class="mr-2">
                <ListBulletIcon class="w-5"/>
            </span>
                <span class="text-md font-light">
                Products
            </span>
            </router-link>
            <router-link :to="{name: 'app.dashboard'}"
                         class="flex items-center transition-all hover:bg-black/30 py-1 px-3 rounded">
            <span class="mr-2">
                <UserIcon class="w-5"/>
            </span>
                <span class="text-md font-light">
                Users
            </span>
            </router-link>
            <router-link :to="{name: 'app.dashboard'}"
                         class="flex items-center transition-all hover:bg-black/30 py-1 px-3 rounded">
            <span class="mr-2">
                <ChartBarIcon class="w-5"/>
            </span>
                <span class="text-md font-light">
                Reports
            </span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import {HomeIcon, UserIcon, ListBulletIcon, ChartBarIcon} from '@heroicons/vue/24/outline'
</script>

<style scoped>

</style>
