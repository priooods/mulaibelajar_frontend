<template>
  <div class="home layout" data-scroll-container>
    <section class="h-screen relative md:block flex justify-center items-center md:container mx-auto max-h-screen w-full" data-scroll-section>
      <img src="../assets/image/learn2.svg" alt="home_learn2" data-scroll class="md:h-auto md:block hidden w-full md:w-auto">
      <div class="md:absolute left-0 bottom-52 right-0 text-center" data-scroll>
        <img src="../assets/image/learn.svg" alt="home_learn" data-scroll class="md:h-auto md:hidden block w-full md:w-auto">
        <h2 class="font-hasbold md:text-6xl text-3xl">Mulai Belajar</h2>
        <h2 class="md:text-3xl text-2xl md:mt-3 tageline">Belajar Mudah Dimana Aja</h2>
        <div class="md:flex w-full justify-center md:mt-0 mt-8 text-center">
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
    <section >
      <KelasBelajar :view="false"></KelasBelajar>
    </section>
    <section data-scroll-section class="mt-11">
      <div class="md:h-screen md:min-h-screen md:grid grid-cols-1 md:grid-cols-2 md:container md:mx-auto md:py-16 md:px-0 px-2 items-center">
        <div data-scroll>
          <img src="../assets/image/live_teacher.svg" alt="live_teacher" class="h-9/12 w-9/12">
        </div>
        <div class="md:w-5/6 w-full md:mt-0 mt-14" data-scroll>
          <h3 class="font-hasbold text-2xl md:text-5xl">Belajar secara live dengan para mentor kelas</h3>
          <p class="font-hasroman text-lg md:text-lg mt-3">Kami memberdayakan para guru dan pengajar berkualitas untuk memberikan pembelajaran dan dukungan yang dipersonalisasi untuk semua siswa mereka.</p>
        </div>
      </div>
    </section>
    <section data-scroll-section class="mt-11">
      <div class="md:h-screen md:min-h-screen md:grid grid-cols-1 md:grid-cols-2 md:container md:mx-auto md:py-16 md:px-0 px-2 items-center">
        <div data-scroll class="md:hidden block">
          <img src="../assets/image/parents.svg" alt="live_teacher" class="h-9/12 w-9/12">
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
    <section data-scroll-section class="md:mt-11 mt-24">
      <div class="h-screen min-h-screen md:grid grid-cols-1 md:gap-12 gap-6 md:grid-cols-3 md:container md:mx-auto md:py-16 md:px-0 px-2 items-center">
        <div data-scroll>
          <img src="../assets/image/personal.svg" alt="personal" class="md:h-5/12 md:w-5/12 h-2/6 w-2/6">
          <div class="md:mt-5 mt-3">
            <h6 class="font-hasmedium text-xl md:text-2xl">Belajar dengan cepat dan tepat</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Anda dapat mengejar atau maju dengan mudah dalam belajar, karena anda akan belajar lebih dalam dengan tepat.</p>
          </div>
        </div>
        <div data-scroll class="md:mt-0 mt-4">
          <img src="../assets/image/curicullum.svg" alt="personal" class="md:h-5/12 md:w-5/12 h-2/6 w-2/6">
          <div class="md:mt-5 mt-3">
            <h6 class="font-hasmedium text-xl md:text-2xl">Kurikulum yang disesuaikan</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Kursus studi kami disesuaikan dengan kurikulum masing-masing wilayah sehingga mereka mempelajari apa yang mereka butuhkan.</p>
          </div>
        </div>
        <div data-scroll class="md:mt-0 mt-4">
          <img src="../assets/image/made_learn.svg" alt="personal" class="md:h-4/12 md:w-4/12 h-2/6 w-2/6">
          <div class="md:mt-5 mt-3">
            <h6 class="font-hasmedium text-xl md:text-2xl">Dibuat untuk Belajar</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Kami tidak hanya memberikan jawaban, kami membimbing siswa dari semua tingkatan ke pemahaman dasar.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- <section >
      <KelasBelajar :view="false"></KelasBelajar>
    </section> -->
    <section class="h-auto py-32 flex justify-center items-center" data-scroll-section>
      <div class="text-center" data-scroll>
        <h2 class="font-hasbold md:text-5xl text-3xl">Mulai Belajar Sekarang</h2>
        <h6 class="font-hasmedium md:text-xl text-base mt-1 md:mt-2">Belajar apa saja tanpa batas. dimanapun dan kapanpun</h6>
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
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');

.tageline{
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
}
</style>