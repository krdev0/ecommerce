<template>
    <GuestLayout title="Sign in to your account">
        <form action="#" class="mt-8 space-y-6" method="POST" @submit.prevent="login">
            <input name="remember" type="hidden" value="true"/>
            <div class="-space-y-px rounded-md shadow-sm">
                <div>
                    <label class="sr-only" for="email-address">Email address</label>
                    <input v-model="user.email" id="email-address" autocomplete="email" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="email" placeholder="Email address"
                           required=""
                           type="email"/>
                </div>
                <div>
                    <label class="sr-only" for="password">Password</label>
                    <input v-model="user.password" id="password" autocomplete="current-password" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="password" placeholder="Password"
                           required=""
                           type="password"/>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input v-model="user.remember" id="remember-me" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" name="remember-me"
                           type="checkbox"/>
                    <label class="ml-2 block text-sm text-gray-900" for="remember-me">Remember me</label>
                </div>

                <div class="text-sm">
                    <router-link :to="{name: 'forgotPassword'}" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                    </router-link>
                </div>
            </div>

            <div>
                <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        type="submit">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
            </span>
                    Sign in
                </button>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
import {ref} from 'vue';
import store from '../store';
import router from "../router";
import {LockClosedIcon} from '@heroicons/vue/20/solid'
import GuestLayout from "../components/GuestLayout.vue";

let loading = ref(false);
let errorMsg = ref("");

const user = {
    email: '',
    password: '',
    remember: false
}

function login() {
    loading.value = true;
    store.dispatch('login', user)
        .then(() => {
            loading.value = false;
            router.push({name: 'app.dashboard'})
        })
        .catch(({response}) => {
            loading.value = false;
            errorMsg.value = response.data.message;
        })
}
</script>

<style scoped>

</style>
