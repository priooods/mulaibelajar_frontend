<template>
    <section class="footers">
        <div class="md:container mx-auto py-8 md:px-0 px-3">
            <div class="grid md:grid-cols-4 md:gap-4 gap-8">
                <div class="text-left">
                    <router-link to="/">
                        <img src="../assets/image/logos.png" alt="logo" class="h-16 w-20 md:w-20 md:h-16">
                    </router-link>
                    <p class="text-sm mt-5 font-popmed">Platform belajar tanpa batas untuk kamu generasi hebat Indonesia.</p>
                    <p class="text-sm mt-3 font-popmed">© 2021 Mulai Belajar</p>
                </div>
                <div class="">
                    <h5 class="text-sm md:text-base font-popbold mb-2">Kelas Mulai Belajar</h5>
                    <div class="mt-2">
                        <div @click="openPage('/kelas/soft-skill/ngoding','ngoding')"><span class="font-popmed cursor-pointer text-sm inline text-gray-700 hover:text-blue-500">Pemrograman</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPage('/kelas/soft-skill/nulis','nulis')"><span class="font-popmed cursor-pointer text-sm inline text-gray-700 hover:text-blue-500">Penalaran</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('Matematika')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">Matematika</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('Biologi')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">Biologi</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('Fisika')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">Fisika</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('Kimia')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">Kimia</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('Ekonomi')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">Ekonomi</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('Indonesia')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">Bahasa Indonesia</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('Inggris')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">Bahasa Inggris</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('Sejarah')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">Sejarah</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('IPA')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">IPA</span></div>
                    </div>
                    <div class="mt-2">
                        <div @click="openPel('IPS')"><span class="cursor-pointer font-popmed text-sm inline text-gray-700 hover:text-blue-500">IPS</span></div>
                    </div>
                </div>
                <div>
                    <h5 class="text-sm md:text-base font-popbold md:mb-0 mb-4">Tentang Kami</h5>
                    <div class="mt-2">
                        <router-link to="/tentang" class="text-gray-700 hover:text-blue-500 md:text-md text-sm font-popmed">Tentang Kami</router-link>
                    </div>
                    <div class="mt-2">
                        <a href="https://www.notion.so/Jam-Operasional-2648295ec0a74401a753c31a591bc592" target="_blank" class="text-gray-700 hover:text-blue-500 md:text-md text-sm font-popmed">Jam Operasional</a>
                    </div>
                    <div class="mt-2">
                        <router-link to="/privacypolicy" class="text-gray-700 hover:text-blue-500 md:text-md text-sm font-popmed">Privacy & Policy</router-link>
                    </div>
                    <div class="text-left mt-10">
                        <h5 class="text-sm md:text-base font-popbold mb-2">Butuh Bantuan ?</h5>
                        <div class="inline-flex">
                            <img src="../assets/image/email.svg" alt="email" class="h-5 w-5"><p class="md:text-sm text-xs ml-3 font-popmed">support@mulaibelajar.online</p>
                        </div>
                        <div class="inline-flex w-full mt-2">
                            <img src="../assets/image/whatsapp.svg" alt="whatsapp" class="h-5 w-5"><p class="md:text-sm text-xs ml-3 font-popmed">085925325096</p>
                        </div>
                        <div class="inline-flex mt-2">
                            <img src="../assets/image/telegram.svg" alt="telegram" class="h-5 w-5"><p class="md:text-sm text-xs ml-3 font-popmed">085925325096</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 class="text-sm md:text-base font-popbold md:mb-0 mb-4">Media</h5>
                    <div class="inline-flex mt-3">
                        <a href="https://www.instagram.com/mulaibelajar.co.id/">
                            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" class="cursor-pointer h-7 w-7 md:h-8 md:w-8 mr-4"/>
                        </a>
                        <a href="https://www.tiktok.com/@mulaibelajar.co.id/">
                            <img src="https://img.icons8.com/color/48/000000/tiktok.png" class="cursor-pointer h-7 w-7 md:h-8 md:w-8 mr-4"/>
                        </a>
                        <img src="https://img.icons8.com/color/64/000000/youtube-play.png" class="cursor-pointer h-7 w-7 md:h-8 md:w-8 mr-4"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FooterWeb",
    methods: {
        openPage(end, patch){
            this.$Loading.start();
            this.$store.dispatch('pelajaran/paketall')
            .catch(() => { this.$Message.error("Server Erorr !"); });
            this.$store.dispatch('pelajaran/FindType',patch).then(() => {})
            .catch(() => { this.$Message.error("Server Erorr !"); })
            .finally(() => { 
                this.$Loading.finish();
                this.$router.push({ path: end }) });
        },
        openPel(item){
            this.$Loading.start();
            this.$store.dispatch('pelajaran/paketall')
            .catch(() => { this.$Message.error("Server Erorr !"); });
            this.$store.dispatch('pelajaran/FindPel', item).catch(() => {
                this.$Message.error("Failure Request");
            }).finally(() => {
                this.$Loading.finish();
                return this.$router.push({ path: '/kelas/akademik', meta: { metas: item } });
            });
        },
    },
}
</script>

<style>

</style>