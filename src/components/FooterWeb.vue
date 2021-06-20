<template>
    <div class="footers">
        <div class="md:container mx-auto py-8 md:px-0 px-3" data-scroll-section>
            <div class="grid md:grid-cols-3 md:gap-4 gap-8">
                <div data-scroll class="text-left">
                    <router-link to="/">
                        <img src="../assets/image/logos.png" alt="logo" class="h-16 w-20 md:w-auto md:h-auto">
                    </router-link>
                    <p class="text-base mt-5 font-hasroman">Platform belajar terbaik dari mentor yang sangat berpengalaman di bidangnya masing-masing.</p>
                    <p class="text-base mt-3 font-hasroman">© 2021 Mulai Belajar</p>
                </div>
                <div data-scroll class="text-left">
                    <h5 class="text-base md:text-lg font-hasbold mb-2">Butuh Bantuan ?</h5>
                    <p class="md:text-base text-sm mt-1 font-hasmedium">support@mulaibelajar.com</p>
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
                <div data-scroll class="text-left w-auto">
                    <h5 class="text-base md:text-lg font-hasbold md:mb-0 mb-4">Lainnya</h5>
                    <div class="w-3/12 mt-2 cursor-pointer hover:text-indigo-600">
                        <router-link to="/tentang">
                            <p class="md:text-md text-sm font-hasmedium">Tentang Kami</p>
                        </router-link>
                    </div>
                    <div class="w-3/12 mt-2 cursor-pointer hover:text-indigo-600">
                        <router-link to="/contact">
                            <p class="md:text-md text-sm font-hasmedium">Contact</p>
                        </router-link>
                    </div>
                    <div class="w-4/12 mt-2 cursor-pointer hover:text-indigo-600">
                        <router-link to="/privacypolicy">
                            <p class="md:text-md text-sm font-hasmedium">Privacy & Policy</p>
                        </router-link>
                    </div>
                    <div class="w-4/12 mt-2 cursor-pointer hover:text-indigo-600">
                        <p class="md:text-md text-sm font-hasmedium">Jam Operasional</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterWeb"
}
</script>

<style>

</style>