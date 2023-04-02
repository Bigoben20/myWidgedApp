<template>
    <!-- component -->
    <nav class="fixed top-0 flex flex-col items-center justify-center w-full bg-neutral-400/20 dark:bg-neutral-900/70 backdrop-blur-lg">
        <div class="w-full max-w-[1024px] flex items-center justify-between px-4 md:px-10 py-2 md:py-5 dark:text-neutral-100">
            <Link :href="route('mainPage')"
                class="flex items-center justify-between gap-4 hover:animate-[waves_1s_ease-in-out_infinite]">
            <ApplicationLogo class="block w-auto text-gray-800 fill-current h-9 dark:text-gray-200" />
            <h1 class="text-xl font-bold dark:text-neutral-50">Bigo's Widgets</h1>
            </Link>

            <div class="items-center hidden gap-10 md:flex">
                <Link :href="route('mainPage')" :class="navLink">
                Hava Durumu
                </Link>
                <Link :href="route('mainPage')" :class="navLink">
                Müzik
                </Link>
            </div>

            <div class="flex gap-5">
                <div class="hidden">
                    <Searchbar/>
                </div>
                <button class="hidden text-xl md:block">
                    <i class="fa-solid fa-magnifying-glass "></i>
                </button>
                <button @click="openNav"
                    class="block px-3 py-2 text-2xl rounded-lg bg-slate-100/0 hover:bg-gray-50/70 active:bg-neutral-100 dark:hover:bg-slate-700 dark:active:bg-slate-600 md:hidden">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Nav -->
        <div class="flex flex-col items-start justify-start w-full shadow-md:hidden navbar" :class="{'active': showNav}">
            <div :class="mobileNavLink">
                <Searchbar class="rounded-full bg-neutral-100 dark:bg-neutral-800"/>
            </div>
            <Link :href="route('mainPage')" :class="mobileNavLink">
                <i class="mr-2 fa-solid fa-cloud text-sky-400"></i>Hava Durumu
            </Link>
            <Link :href="route('mainPage')" :class="mobileNavLink">
                <i class="mr-2 text-rose-500 fa-brands fa-itunes-note"></i> Müzik
            </Link>
        </div>
    </nav>
</template>

<script>
import NavButton from '@/Components/NavButtons.vue';
import Searchbar from '@/Components/Searchbar.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';

export default {
    components: { NavButton, Link, ApplicationLogo, Searchbar },
    data() {
        return {
            navLink: 'dark:hover:text-white hover:text-gray-600',
            mobileNavLink:'text-neutral-700 dark:text-neutral-100 dark:hover:text-white hover:text-gray-500 w-full px-4 py-1 my-2 text-4xl transition-all duration-200',
            showNav: false,
            screenWidth: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateScreenWidth)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateScreenWidth)
    },
    methods: {
        openNav(event) {
            this.showNav = !this.showNav
        },
        updateScreenWidth() {
            this.screenWidth = window.innerWidth
            if(this.screenWidth > 767){
                this.showNav = false
            }
        },
    }
}
</script>

<style>
.navbar {
  height: 0;
  overflow: hidden;
  transition: height 0.333s ease-in-out;
}
.navbar.active{
    height: 100vh;
}
</style>