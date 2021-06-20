<template>
  <div class="home layout" data-scroll-container>
    <section class="flex relative justify-center items-center md:container mx-auto min-h-screen w-full" data-scroll-section>
      <div class="text-center" data-scroll>
        <img src="../assets/image/headrs.png" alt="header" class="absolute bottom-0 left-0 md:block hidden">
        <img src="../assets/image/learn.svg" alt="home_learn" data-scroll class="md:h-auto md:hidden block w-full md:w-auto">
        <h2 class="font-hasbold md:text-6xl md:mt-0 mt-4 text-3xl">Mulai Belajar</h2>
        <h2 class="md:text-3xl text-2xl mt-3 tageline">Belajar Jadi Lebih Mudah Dimana Aja</h2>
        <div class="md:flex w-full justify-center mt-10 text-center">
          <h5 class="font-hasmedium mt-auto text-lg md:text-xl">Platform belajar online tanpa batas.</h5>
          <h5 class="font-hasmedium mt-auto text-lg md:text-xl md:ml-2">Mulai Belajar</h5>
          <h5 class="font-hasmedium mb-auto text-type text-lg md:text-xl md:ml-1" id="type"></h5>
        </div>
      </div>
    </section>
    <section class="bg-indigo-600 py-32 w-full" data-scroll-section>
      <div class="w-full text-center md:px-0 px-3">
        <h2 class="font-hasbold md:text-5xl text-3xl text-white" data-scroll>Cari Tau Keunggulan Mulai Belajar</h2>
        <div class="mt-16 md:flex justify-center" data-scroll>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-5/6 w-full">
            <div data-scroll class="text-left anim-reveal p-7 rounded-lg bg-indigo-400 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_studikasus.svg" alt="studi_kasus" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Studi Kasus</h4>
              <h6 class="font-hasroman text-base text-white">Kita akan membedah bersama semua ilmu pengetahuan secara langsung</h6>
            </div>
            <div data-scroll class="text-left anim-reveal p-7 rounded-lg bg-indigo-400 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_access.svg" alt="access" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Lifetime Access</h4>
              <h6 class="font-hasroman text-base text-white">Mempelajari dan memahami materi kelas lebih santai tanpa batasan waktu</h6>
            </div>
            <div data-scroll class="text-left anim-reveal p-7 rounded-lg bg-indigo-400 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_konsultasi.svg" alt="konsultasi" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Konsultasi</h4>
              <h6 class="font-hasroman text-base text-white">Gabung dengan private group untuk berkonsultasi dengan mentor kelas</h6>
            </div>
            <div data-scroll class="text-left anim-reveal p-7 rounded-lg bg-indigo-400 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_bahasa.svg" alt="lokal" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">#ProdukLokal</h4>
              <h6 class="font-hasroman text-base text-white">Materi dibuat langsung oleh para kreator di negara Indonesia</h6>
            </div>
            <div data-scroll class="text-left anim-reveal p-7 rounded-lg bg-indigo-400 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_flag.svg" alt="sertifikat" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Live Learning</h4>
              <h6 class="font-hasroman text-base text-white">Belajar semua hal yang kamu mau secara tatap muka langsung dengan para mentor</h6>
            </div>
            <div data-scroll class="text-left anim-reveal p-7 rounded-lg bg-indigo-400 hover:shadow-2xl shadow-md">
              <img src="../assets/image/ic_sertifikat.svg" alt="sertifikat" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Bersertifikat Resmi</h4>
              <h6 class="font-hasroman text-base text-white">Selesaikan kelas dan projek dan dapatkan sertifikat dari kami</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section >
      <KelasBelajar :view="false"></KelasBelajar>
    </section>
    <section data-scroll-section class="mt-11">
      <div class="md:grid grid-cols-1 md:grid-cols-2 md:container md:mx-auto md:py-16 md:px-0 px-2 items-center">
        <div data-scroll class="w-full md:text-left text-center">
          <img src="../assets/image/live_teacher.svg" alt="live_teacher" class="h-9/12 w-9/12 md:mx-0 mx-auto">
        </div>
        <div class="md:w-5/6 gs_reveal w-full md:mt-0 mt-14" data-scroll>
          <h3 class="font-hasbold text-2xl md:text-5xl">Belajar secara live dengan para mentor kelas</h3>
          <p class="font-hasroman text-lg md:text-lg mt-3">Kami memberdayakan para guru dan pengajar berkualitas untuk memberikan pembelajaran dan dukungan yang dipersonalisasi untuk semua siswa mereka.</p>
        </div>
      </div>
    </section>
    <section data-scroll-section class="md:mt-11 mt-28">
      <div class=" md:grid grid-cols-1 md:grid-cols-2 md:container md:mx-auto md:py-16 md:px-0 px-2 items-center">
        <div data-scroll class="md:hidden block">
          <img src="../assets/image/parents.svg" alt="live_teacher" class="h-9/12 w-9/12 md:mx-0 mx-auto">
        </div>
        <div class="md:w-5/6 md:mt-0 mt-14" data-scroll >
          <h3 class="font-hasbold text-2xl md:text-5xl">Membuat belajar jadi lebih sederhana untuk anda</h3>
          <p class="font-hasroman text-lg md:text-lg mt-3">Kami akan memandu anda menuju kesuksesan akademis melalui pelajaran langkah demi langkah dengan kecepatan optimal anda.</p>
        </div>
        <div data-scroll class="md:block hidden">
          <img src="../assets/image/parents.svg" alt="live_teacher" class="h-9/12 w-9/12">
        </div>
      </div>
    </section>
    <section data-scroll-section class="mt-24">
      <div class="md:grid grid-cols-1 md:gap-12 md:grid-cols-3 md:container md:mx-auto md:py-16 md:px-0 px-3">
        <div data-scroll>
          <img src="../assets/image/personal.svg" alt="personal" class="md:h-36 md:w-44 md:mx-0 mx-auto h-2/6 w-2/6">
          <div class="md:mt-16 mt-3 md:text-left text-center">
            <h6 class="font-hasmedium text-xl md:text-2xl">Belajar dengan cepat dan tepat</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Anda dapat mengejar atau maju dengan mudah dalam belajar, karena anda akan belajar lebih dalam dengan tepat.</p>
          </div>
        </div>
        <div data-scroll class="md:mt-0 mt-10">
          <img src="../assets/image/curicullum.svg" alt="personal" class="md:h-36 md:w-44 md:mx-0 mx-auto h-2/6 w-2/6">
          <div class="md:mt-16 mt-3 md:text-left text-center">
            <h6 class="font-hasmedium text-xl md:text-2xl">Kurikulum yang disesuaikan</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Kursus studi kami disesuaikan dengan kurikulum masing-masing wilayah sehingga mereka mempelajari apa yang mereka butuhkan.</p>
          </div>
        </div>
        <div data-scroll class="md:mt-0 mt-10">
          <img src="../assets/image/made_learn.svg" alt="personal" class="md:h-36 md:w-36 md:mx-0 mx-auto h-2/6 w-2/6">
          <div class="md:mt-16 mt-3 md:text-left text-center">
            <h6 class="font-hasmedium text-xl md:text-2xl">Dibuat untuk Belajar</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Kami tidak hanya memberikan jawaban, kami membimbing siswa dari semua tingkatan ke pemahaman dasar.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="h-auto py-32 flex justify-center items-center" data-scroll-section>
      <div class="text-center" data-scroll>
        <h2 data-scroll class="font-hasbold md:text-5xl text-3xl">Mulai Belajar Sekarang</h2>
        <h6 data-scroll class="font-hasmedium md:text-xl text-base mt-1 md:mt-2">Belajar apa saja jadi lebih mudah. dimanapun dan kapanpun</h6>
        <div class="w-auto text-center md:mt-20 mt-14" data-scroll data-scroll-speed="-1">
          <button class="border py-2 px-6 rounded-xl text-center font-hasbold cursor-pointer hover:bg-indigo-500 hover:text-white shadow-sm hover:shadow-lg">Launching</button>
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

.tageline{
  font-family: 'Caveat', cursive;
}
</style>