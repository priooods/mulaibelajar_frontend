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
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Pemrograman</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Penalaran</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Matematika</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Biologi</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Fisika</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Kimia</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Ekonomi</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Bahasa Indonesia</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Bahasa Inggris</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">Sejarah</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">IPA</span></router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/"><span class="font-popmed text-sm inline text-gray-700 hover:text-blue-500">IPS</span></router-link>
                    </div>
                </div>
                <div>
                    <h5 class="text-sm md:text-base font-popbold md:mb-0 mb-4">Tentang Kami</h5>
                    <div class="mt-2">
                        <router-link to="/tentang" class="text-gray-700 hover:text-blue-500 md:text-md text-sm font-popmed">Tentang Kami</router-link>
                    </div>
                    <div class="mt-2">
                        <router-link to="/contact" class="text-gray-700 hover:text-blue-500 md:text-md text-sm font-popmed">We are Hiring</router-link>
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
    name: "FooterWeb"
}
</script>

<style>

</style>