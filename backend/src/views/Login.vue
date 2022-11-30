<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form class="sign-up-form">
            <div class="text-component text-center mb-3 lg:mb-5">
                <h1>Get started</h1>
                <p>
                    Already have an account? <a href="#0">Login</a></p>
            </div>

            <div class="mb-3 lg:mb-5">
                <div class="grid grid-cols-12 gap-2 lg:gap-3">
                    <div class="col-span-12 lg:col-span-6">
                        <label class="form-label mb-1 lg:mb-1.5" for="input-first-name">First name</label>
                        <input class="form-control w-full" type="text" name="input-first-name" id="input-first-name">
                    </div>

                    <div class="col-span-12 lg:col-span-6">
                        <label class="form-label mb-1 lg:mb-1.5" for="input-last-name">Last name</label>
                        <input class="form-control w-full" type="text" name="input-last-name" id="input-last-name">
                    </div>
                </div>
            </div>

            <div class="mb-3 lg:mb-5">
                <label class="form-label mb-1 lg:mb-1.5" for="input-email">Email</label>
                <input class="form-control w-full" type="email" name="input-email" id="input-email"
                    placeholder="email@myemail.com">
            </div>

            <div class="mb-5 lg:mb-8">
                <label class="form-label mb-1 lg:mb-1.5" for="input-password">Password</label>
                <input class="form-control w-full" type="password" name="input-password" id="input-password">
                <p class="text-xs text-contrast-medium mt-1.5 lg:mt-2">Minimum 6 characters</p>
            </div>

            <div class="mb-5 lg:mb-8">
                <router-link :to="{name: 'resetPassword'}" class="no-underline font-medium text-sm text-indigo-600 hover:text-indigo:500">Forgot your password?</router-link>
            </div>

            <div class="mb-3 lg:mb-5">
                <button class="btn btn--primary text-[1.2em] w-full">Join</button>
            </div>

            <div class="text-center">
                <p class="text-xs text-contrast-medium">By joining, you agree to our <a href="#0">Terms</a> and <a
                        href="#0">Privacy Policy</a>.</p>
            </div>
        </form>
    </div>
</template>
  
<script setup>
</script>

<style scoped>

</style>