<template>
  <div class="home" data-scroll-container>
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
            <div class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_studikasus.svg" alt="studi_kasus" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Studi Kasus</h4>
              <h6 class="font-hasroman text-base text-white">Kita akan membedah bersama semua ilmu pengetahuan secara langsung</h6>
            </div>
            <div class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_access.svg" alt="access" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Lifetime Access</h4>
              <h6 class="font-hasroman text-base text-white">Mempelajari dan memahami materi kelas lebih santai tanpa batasan waktu</h6>
            </div>
            <div class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_konsultasi.svg" alt="konsultasi" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Konsultasi</h4>
              <h6 class="font-hasroman text-base text-white">Gabung dengan private group untuk berkonsultasi dengan mentor kelas</h6>
            </div>
            <div class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_bahasa.svg" alt="lokal" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">#ProdukLokal</h4>
              <h6 class="font-hasroman text-base text-white">Materi dibuat langsung oleh para kreator di negara Indonesia</h6>
            </div>
            <div class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_flag.svg" alt="sertifikat" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Live Learning</h4>
              <h6 class="font-hasroman text-base text-white">Belajar semua hal yang kamu mau secara tatap muka langsung dengan para mentor</h6>
            </div>
            <div class="text-left p-7 rounded-lg bg-indigo-500 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_sertifikat.svg" alt="sertifikat" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Bersertifikat Resmi</h4>
              <h6 class="font-hasroman text-base text-white">Selesaikan kelas dan projek dan dapatkan sertifikat dari kami</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="sectionPin" data-scroll-section>
      <div class="pin-wrap grid grid-cols-1 md:grid-cols-2 gap-2 justify-start items-center w-auto min-w-full h-screen min-h-screen py-20" data-scroll>
        <div class="md:ml-10">
          <div class="font-hasbold md:text-6xl text-base">
            <h2>Mulai belajar</h2>
            <h2>Sekarang Juga</h2>
          </div>
          <p class="mt-6 font-hasroman text-base">Lihat semua kelas yang tersedia</p>
        </div>
      </div>
    </section>
    <FooterWeb></FooterWeb>
  </div>
</template>

<script>
import LocomotiveScroll from '@/plugin/locomotive.js';
import TypeIt from "typeit";
import FooterWeb from '../components/FooterWeb.vue';
export default {
  components: {FooterWeb},
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
