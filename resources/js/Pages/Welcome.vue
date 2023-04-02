<template>
    <MainLayout>
        <!-- HAVA DURUMU -->
        <div class="flex flex-col items-center justify-around bg-slate-200/50 h-[50vh]">
            <h1 class="text-5xl font-semibold">Hava Durumu</h1>
            <div>
                <BasicButton class="rounded-full shadow-md bg-sky-500 shadow-sky-300"><i class="mr-2 fa-solid fa-cloud text-sky-50"></i>Hava Durumu</BasicButton>
            </div>
        </div>

        <!-- Müzik -->
        <div class="flex flex-col items-center justify-around bg-rose-200/10 h-[50vh]">
            <h1 class="text-5xl font-semibold">Müzik</h1>
            <div>
                <BasicButton class="rounded-full shadow-md bg-rose-500 shadow-rose-300"><i class="mr-2 text-rose-50 fa-brands fa-itunes-note"></i> Müzik</BasicButton>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout.vue";
import BasicButton from "@/Components/BasicButton.vue";
export default {
    components:{
        MainLayout, BasicButton
    }
}
</script>

<style>

</style>