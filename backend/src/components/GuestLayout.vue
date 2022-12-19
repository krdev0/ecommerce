<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <img alt="Your Company" class="mx-auto h-12 w-auto"
                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{{ title }}</h2>
            </div>
            <slot/>
        </div>
    </div>
</template>

<script setup>
const {title} = defineProps({
    title: String
})
</script>

<style scoped>

</style>
