<template>
    <!-- component -->
    <div class="fixed top-0 flex items-center justify-center w-full bg-neutral-50/10 backdrop-blur-sm">
        <nav class="w-full max-w-[1024px] flex items-center justify-between px-4 md:px-10 py-5 text-neutral-100">
            <Link :href="route('mainPage')"
                class="flex items-center justify-between gap-4 hover:animate-[waves_3s_ease-in-out_infinite]">
            <ApplicationLogo class="block w-auto text-gray-800 fill-current h-9 dark:text-gray-200" />
            <h1 class="text-xl font-bold text-neutral-50">Bigo's Widgets</h1>
            </Link>

            <div class="items-center hidden gap-10 md:flex">
                <Link :href="route('mainPage')" class="hover:text-white">
                Hava Durumu
                </Link>
                <Link :href="route('mainPage')" class="hover:text-white">
                Müzik
                </Link>
            </div>

            <div class="flex gap-5">
                <button class="text-xl">
                    <i class="fa-solid fa-magnifying-glass "></i>
                </button>
                <button class="block px-3 py-2 text-2xl rounded-lg bg-slate-100 dark:bg-slate-700 md:hidden">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    </div>
</template>

<script>
import NavButton from '@/Components/NavButtons.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';

export default {
    components: { NavButton, Link, ApplicationLogo }
}
</script>

<style></style>