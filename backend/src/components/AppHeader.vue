<template>
    <header class="h-14 shadow flex items-center justify-between px-4">
        <button>
            <Bars3Icon class="w-6"/>
        </button>

        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton class="flex items-center">
                    <img alt="" class="rounded-full w-8 mr-2" src="../assets/user.jpg">
                    <span class="font-light text-sm">Andrejs</span>
                    <ChevronDownIcon
                        aria-hidden="true"
                        class="w-4 fill-black mt-1"
                    />
                </MenuButton>
            </div>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                            >
                                <ArchiveIcon
                                    :active="active"
                                    aria-hidden="true"
                                    class="mr-2 h-5 w-5 text-violet-400"
                                />
                                Profile
                            </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                            >
                                <MoveIcon
                                    :active="active"
                                    aria-hidden="true"
                                    class="mr-2 h-5 w-5 text-violet-400"
                                />
                                Logout
                            </button>
                        </MenuItem>
                    </div>

                </MenuItems>
            </transition>
        </Menu>
    </header>
</template>

<script setup>
import {Bars3Icon} from '@heroicons/vue/24/outline';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/20/solid'

</script>

<style scoped>

</style>
