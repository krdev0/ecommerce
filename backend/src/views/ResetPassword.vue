<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form class="sign-up-form">
            <div class="text-component text-center mb-3 lg:mb-5">
                <h1>Request new password</h1>
            </div>

            <div class="mb-3 lg:mb-5">
                <label class="form-label mb-1 lg:mb-1.5" for="input-email">Email</label>
                <input class="form-control w-full" type="email" name="input-email" id="input-email"
                    placeholder="email@myemail.com">
            </div>

            <div class="mb-3 lg:mb-5">
                <button class="btn btn--primary text-[1em] w-full">Submit</button>
            </div>

        </form>
    </div>
</template>
  
<script setup>
</script>

<style scoped>

</style>