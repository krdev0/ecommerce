<template>
    <GuestLayout title="Forgot Your Password?">
        <form action="#" class="mt-8 space-y-6" method="POST">
            <input name="remember" type="hidden" value="true"/>
            <div class="-space-y-px rounded-md shadow-sm">
                <div>
                    <label class="sr-only" for="email-address">Email address</label>
                    <input id="email-address" autocomplete="email" class="relative block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="email" placeholder="Email address"
                           required=""
                           type="email"/>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="text-sm">
                    <router-link :to="{name: 'login'}" class="font-medium text-indigo-600 hover:text-indigo-500" href="#">Back to login?</router-link>
                </div>
            </div>

            <div>
                <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        type="submit">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
            </span>
                    Send Password Reset
                </button>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
import {LockClosedIcon} from '@heroicons/vue/20/solid'
import GuestLayout from "../components/GuestLayout.vue";
</script>

<style scoped>

</style>
