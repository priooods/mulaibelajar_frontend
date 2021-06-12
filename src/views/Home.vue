<template>
  <div class="home layout" data-scroll-container>
    <section class="h-screen max-h-screen w-full flex justify-center items-center" data-scroll-section>
      <div class="text-center" data-scroll>
        <h2 class="font-hasbold md:text-5xl text-3xl">Mulai Belajar Bersama.</h2>
        <h2 class="font-hasbold md:text-5xl text-3xl md:mt-3">Perluas Wawasan Anda.</h2>
        <div class="md:flex w-auto md:mt-0 mt-8">
          <h5 class="font-hasmedium mt-auto text-lg md:text-xl">Platform belajar online tanpa batas.</h5>
          <h5 class="font-hasmedium mt-auto text-lg md:text-xl md:ml-2">Mulai Belajar</h5>
          <h5 class="font-hasmedium mb-auto text-type text-lg md:text-xl md:ml-1" id="type"></h5>
        </div>
      </div>
    </section>
    <section class="bg-indigo-600 py-16 w-full" data-scroll-section>
      <div class="w-full text-center md:px-0 px-3">
        <h2 class="font-hasmedium text-4xl text-white" data-scroll>Pembelajaran kelas dunia untuk siapa saja, di mana saja</h2>
        <div class="mt-16 md:flex justify-center" data-scroll>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-5/6 w-full">
            <div data-scroll class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_studikasus.svg" alt="studi_kasus" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Studi Kasus</h4>
              <h6 class="font-hasroman text-base text-white">Kita akan membedah bersama semua ilmu pengetahuan secara langsung</h6>
            </div>
            <div data-scroll class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_access.svg" alt="access" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Lifetime Access</h4>
              <h6 class="font-hasroman text-base text-white">Mempelajari dan memahami materi kelas lebih santai tanpa batasan waktu</h6>
            </div>
            <div data-scroll class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_konsultasi.svg" alt="konsultasi" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Konsultasi</h4>
              <h6 class="font-hasroman text-base text-white">Gabung dengan private group untuk berkonsultasi dengan mentor kelas</h6>
            </div>
            <div data-scroll class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_bahasa.svg" alt="lokal" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">#ProdukLokal</h4>
              <h6 class="font-hasroman text-base text-white">Materi dibuat langsung oleh para kreator di negara Indonesia</h6>
            </div>
            <div data-scroll class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_flag.svg" alt="sertifikat" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Live Learning</h4>
              <h6 class="font-hasroman text-base text-white">Belajar semua hal yang kamu mau secara tatap muka langsung dengan para mentor</h6>
            </div>
            <div data-scroll class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_sertifikat.svg" alt="sertifikat" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Bersertifikat Resmi</h4>
              <h6 class="font-hasroman text-base text-white">Selesaikan kelas dan projek dan dapatkan sertifikat dari kami</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <KelasBelajar :view="false"></KelasBelajar>
    </section>
    <section class="h-auto py-32 flex justify-center items-center" data-scroll-section>
      <div class="text-center" data-scroll>
        <h2 class="font-hasbold md:text-5xl text-3xl">Mulai Belajar Sekarang</h2>
        <h6 class="font-hasmedium md:text-xl text-base mt-1 md:mt-2">Belajar apa saja tanpa batas. dimanapun dan kapanpun</h6>
        <div class="w-auto text-center md:mt-20 mt-14" data-scroll data-scroll-speed="-1">
          <button class="border py-2 px-6 rounded-xl text-center font-hasbold cursor-pointer hover:bg-indigo-500 hover:text-white shadow-sm hover:shadow-lg">Daftar Sekarang</button>
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
import TypeIt from "typeit";
import FooterWeb from '../components/FooterWeb.vue';
import KelasBelajar from '../components/KelasBelajar.vue';
export default {
  components: {FooterWeb, KelasBelajar},
  mixins: [LocomotiveScroll],
  name: 'Home',
  mounted() {
    this.typeit();
  },
  methods: {
    typeit(){
      new TypeIt("#type", {
        speed: 150,
        loop: true,
        startDelay: 900
      })
      .type("Coding", { delay: 1500 })
      .delete(-6, { speed: 200, delay: 1000 })
      .type('Matematika', { delay: 1500 })
      .delete(-10, { speed: 200, delay: 1000 })
      .type('Sastra', { delay: 1500 })
      .delete(-6, { speed: 200, delay: 1000 })
      .type('Design', { delay: 1500 })
      .delete(-6, { speed: 200, delay: 1000 })
      .type('Fisika', { delay: 1500 })
      .delete(-6, { speed: 200, delay: 1000 })
      .type('Biologi', { delay: 1500 })
      .delete(-7, { speed: 200, delay: 1000 })
      .go();
    },
  },
}
</script>