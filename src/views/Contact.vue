<template>
  <div class="contact" data-scroll-container>
    <section class="md:flex md:container pt-32 md:pt-0 md:px-0 px-2 mx-auto justify-start items-center h-screen max-h-screen" data-scroll-section>
        <img src="../assets/image/contactus.svg" alt="contact_content" class="md:hidden block" data-scroll>
        <div class="mr-auto" data-scroll>
            <h2 class="font-hasbold text-3xl md:mt-0 mt-16 md:text-5xl" data-scroll>Kami senang membantu <br> anda hari ini !</h2>
            <p class="mt-1 md:mt-4 font-hasroman md:text-xl text-lg" data-scroll>Hubungi kami melalui salah satu channel <br>
             yang telah kami sediakan di bawah</p>
        </div>
        <img src="../assets/image/contactus.svg" alt="contact_content" class="md:block hidden" data-scroll>
    </section>
    <section class="md:mt-24 mb-20 md:mb-32 md:px-0 px-2 md:container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10" data-scroll-section>
        <div class="shadow-lg rounded-xl p-4" data-scroll>
            <img src="../assets/image/ic_whatsapp.svg" alt="wa" data-scroll class="md:h-20 md:w-20 md:mb-9">
            <h4 class="font-hasbold md:text-3xl text-xl" data-scroll>Kontak Melalui <br> Whatsapp</h4>
            <p class="font-hasroman md:text-lg text-sm mt-6" data-scroll>9AM - 5PM (WIB)</p>
            <div class="py-2 cursor-pointer text-center md:mt-10 mt-7 bg-gray-200 text-gray-700 hover:shadow-xl hover:bg-indigo-500 hover:text-white rounded-xl" data-scroll>
                <p class="font-hasmedium text-xs md:text-lg" data-scroll>Hubungi Kami</p>
            </div>
        </div>
        <div class="shadow-lg rounded-xl p-4" data-scroll>
            <img src="../assets/image/ic_email.svg" alt="wa" data-scroll class="md:h-20 md:w-20 md:mb-9">
            <h4 class="font-hasbold md:text-3xl text-xl" data-scroll>Kontak Melalui <br> E-Mail</h4>
            <p class="font-hasroman md:text-lg text-sm mt-6" data-scroll>9AM - 5PM (WIB)</p>
            <div class="py-2 cursor-pointer text-center md:mt-10 mt-7 bg-gray-200 text-gray-700 hover:shadow-xl hover:bg-indigo-500 hover:text-white rounded-xl" data-scroll>
                <p class="font-hasmedium text-xs md:text-lg" data-scroll>Hubungi Kami</p>
            </div>
        </div>
        <div class="shadow-lg rounded-xl p-4" data-scroll>
            <img src="../assets/image/ic_tg.svg" alt="wa" data-scroll class="md:h-20 md:w-20 md:mb-9">
            <h4 class="font-hasbold md:text-3xl text-xl" data-scroll>Kontak Melalui <br> Telegram</h4>
            <p class="font-hasroman md:text-lg text-sm mt-6" data-scroll>9AM - 5PM (WIB)</p>
            <div class="py-2 cursor-pointer text-center md:mt-10 mt-7 bg-gray-200 text-gray-700 hover:shadow-xl hover:bg-indigo-500 hover:text-white rounded-xl" data-scroll>
                <p class="font-hasmedium text-xs md:text-lg" data-scroll>Hubungi Kami</p>
            </div>
        </div>
    </section>
    <section>
        <FooterWeb></FooterWeb>
    </section>
  </div>
</template>

<script>
import LocomotiveScroll from '@/plugin/locomotive.js';
import FooterWeb from '../components/FooterWeb.vue';
export default {
    name: "Contact",
    components: {FooterWeb},
    mixins: [LocomotiveScroll],
}
</script>

<style>

</style>