<template>
  <div class="home">
    <section class="flex justify-start items-center container mx-auto min-h-screen w-full">
      <div class="md:px-0 px-3">
        <img src="../assets/image/learn.svg" alt="home_learn" class="h-80 w-80 md:hidden block">
        <h2 class="font-hasbold md:text-5xl text-3xl">Belajar jadi lebih mudah dimana saja kapan saja</h2>
        <h5 class="font-hasroman mt-6 md:text-lg">Platform belajar online tanpa batas dengan pelajaran yang di sederhanakan untuk membantu anda dalam memahami setiap materi belajar</h5>
        <div class="flex w-full justify-start md:mt-0 mt-2">
          <h5 class="font-hasmedium mt-auto text-lg md:text-xl">#Mulai Belajar</h5>
          <h5 class="font-hasmedium mb-auto text-type text-lg md:text-xl ml-1" id="type"></h5>
        </div>
      </div>
      <img src="../assets/image/learn.svg" alt="header" class="md:block hidden h-auto w-auto pt-10 pl-14 ml-auto">
    </section>
    <section class="md:py-40 py-32 w-full">
      <div class="w-full text-center md:px-0 px-3">
        <h2 v-scroll-reveal.reset class="font-hasbold md:text-5xl text-3xl">Cari Tau Keunggulan Mulai Belajar</h2>
        <div class="mt-16 md:flex justify-center">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-5/6 w-full">
            <div v-scroll-reveal.reset class="text-left anim-reveal p-7 rounded-lg bg-blue-500 shadow-inner">
              <img src="../assets/image/ic_studikasus.svg" alt="studi_kasus" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Studi Kasus</h4>
              <h6 class="font-hasroman text-base text-white">Kita akan membedah bersama semua ilmu pengetahuan secara langsung</h6>
            </div>
            <div v-scroll-reveal.reset class="text-left anim-reveal p-7 rounded-lg bg-blue-500 shadow-inner">
              <img src="../assets/image/ic_access.svg" alt="access" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Lifetime Access</h4>
              <h6 class="font-hasroman text-base text-white">Mempelajari dan memahami materi kelas lebih santai tanpa batasan waktu</h6>
            </div>
            <div v-scroll-reveal.reset class="text-left anim-reveal p-7 rounded-lg bg-blue-500 shadow-inner">
              <img src="../assets/image/ic_konsultasi.svg" alt="konsultasi" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Konsultasi</h4>
              <h6 class="font-hasroman text-base text-white">Gabung dengan private group untuk berkonsultasi dengan mentor kelas</h6>
            </div>
            <div v-scroll-reveal.reset class="text-left anim-reveal p-7 rounded-lg bg-blue-500 shadow-inner">
              <img src="../assets/image/ic_bahasa.svg" alt="lokal" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">#ProdukLokal</h4>
              <h6 class="font-hasroman text-base text-white">Materi dibuat langsung oleh para kreator di negara Indonesia</h6>
            </div>
            <div v-scroll-reveal.reset class="text-left anim-reveal p-7 rounded-lg bg-blue-500 shadow-inner">
              <img src="../assets/image/ic_flag.svg" alt="sertifikat" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Live Learning</h4>
              <h6 class="font-hasroman text-base text-white">Belajar semua hal yang kamu mau secara tatap muka langsung dengan para mentor</h6>
            </div>
            <div v-scroll-reveal.reset class="text-left anim-reveal p-7 rounded-lg bg-blue-500 shadow-inner">
              <img src="../assets/image/ic_sertifikat.svg" alt="sertifikat" class="md:h-20 md:w-20 h-16 w-16 mb-8">
              <h4 class="font-hasmedium md:text-2xl text-xl text-gray-100 mb-4">Bersertifikat Resmi</h4>
              <h6 class="font-hasroman text-base text-white">Selesaikan kelas dan projek dan dapatkan sertifikat dari kami</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full h-auto">
      <div class="md:px-0 px-3 md:container mx-auto">
        <p class="font-hasmedium md:text-base text-sm md:mb-2 mb-1" v-scroll-reveal.reset>Mulai Belajar Sekarang</p>
        <h2 class="font-hasbold md:text-5xl text-3xl" v-scroll-reveal.reset>Pilih kelas yang <br> ingin kamu pelajari</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-5 md:mt-20 mt-10 md:px-10">
        <div v-for="(item, index) in listpelajaran" v-bind:key="index">
          <div v-scroll-reveal.reset class="bg-boxs rounded-lg kelas-item text-left border shadow-lg py-14 px-8 cursor-pointer">
              <h2 class="font-hasbold text-4xl">{{item.nama_pelajaran}}</h2>
              <p class="mt-4 font-hasroman text-sm">{{item.deskripsi}}</p>
              <p class="mt-5 font-hasroman text-sm">{{item.subtitle}}</p>
          </div>
        </div>
      </div>
      <div class="my-20 flex justify-center" v-scroll-reveal.reset>
        <router-link to="/kelas" class="w-auto text-center">
          <p class="border py-2 px-6 rounded-xl text-center font-hasbold cursor-pointer bg-blue-500 text-white shadow-2xl">Lihat Lainnya</p>
        </router-link>
      </div>
    </section>
    <section class="mt-11">
      <div class="md:grid grid-cols-1 md:grid-cols-2 md:container md:mx-auto md:py-16 md:px-0 px-2 items-center">
        <div class="w-full md:text-left text-center" data-aos="fade-up" data-aos-duration="1000">
          <img src="../assets/image/live_teacher.svg" alt="live_teacher" class="h-9/12 w-9/12 md:mx-0 mx-auto">
        </div>
        <div class="md:w-5/6 gs_reveal w-full md:mt-0 mt-14" data-aos="fade-up" data-aos-duration="1000">
          <h3 class="font-hasbold text-2xl md:text-5xl">Belajar secara live dengan para mentor kelas</h3>
          <p class="font-hasroman text-lg md:text-lg mt-3">Kami memberdayakan para guru dan pengajar berkualitas untuk memberikan pembelajaran dan dukungan yang dipersonalisasi untuk semua siswa mereka.</p>
        </div>
      </div>
    </section>
    <section class="md:mt-11 mt-28">
      <div class=" md:grid grid-cols-1 md:grid-cols-2 md:container md:mx-auto md:py-16 md:px-0 px-2 items-center">
        <div class="md:hidden block" data-aos="fade-up" data-aos-duration="1000">
          <img src="../assets/image/parents.svg" alt="live_teacher" class="h-9/12 w-9/12 md:mx-0 mx-auto">
        </div>
        <div class="md:w-5/6 md:mt-0 mt-14" data-aos="fade-up" data-aos-duration="1000"> 
          <h3 class="font-hasbold text-2xl md:text-5xl">Membuat belajar jadi lebih sederhana untuk anda</h3>
          <p class="font-hasroman text-lg md:text-lg mt-3">Kami akan memandu anda menuju kesuksesan akademis melalui pelajaran langkah demi langkah dengan kecepatan optimal anda.</p>
        </div>
        <div class="md:block hidden w-full text-right" data-aos="fade-up" data-aos-duration="1000">
          <img src="../assets/image/parents.svg" alt="live_teacher" class="h-9/12 w-9/12">
        </div>
      </div>
    </section>
    <section class="mt-24">
      <div class="md:grid grid-cols-1 md:gap-12 md:grid-cols-3 md:container md:mx-auto md:py-16 md:px-0 px-3">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img src="../assets/image/personal.svg" alt="personal" class="md:h-36 md:w-44 md:mx-0 mx-auto h-2/6 w-2/6">
          <div class="md:mt-16 mt-3 md:text-left text-center">
            <h6 class="font-hasmedium text-xl md:text-2xl">Belajar dengan cepat dan tepat</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Anda dapat mengejar atau maju dengan mudah dalam belajar, karena anda akan belajar lebih dalam dengan tepat.</p>
          </div>
        </div>
        <div class="md:mt-0 mt-10" data-aos="fade-up" data-aos-duration="1100">
          <img src="../assets/image/curicullum.svg" alt="personal" class="md:h-36 md:w-44 md:mx-0 mx-auto h-2/6 w-2/6">
          <div class="md:mt-16 mt-3 md:text-left text-center">
            <h6 class="font-hasmedium text-xl md:text-2xl">Kurikulum yang disesuaikan</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Kursus studi kami disesuaikan dengan kurikulum masing-masing wilayah sehingga mereka mempelajari apa yang mereka butuhkan.</p>
          </div>
        </div>
        <div class="md:mt-0 mt-10" data-aos="fade-up" data-aos-duration="1200">
          <img src="../assets/image/made_learn.svg" alt="personal" class="md:h-36 md:w-36 md:mx-0 mx-auto h-2/6 w-2/6">
          <div class="md:mt-16 mt-3 md:text-left text-center">
            <h6 class="font-hasmedium text-xl md:text-2xl">Dibuat untuk Belajar</h6>
            <p class="font-hasroman md:mt-3 mt-1 text-sm md:text-base">Kami tidak hanya memberikan jawaban, kami membimbing siswa dari semua tingkatan ke pemahaman dasar.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="h-auto py-32 flex justify-center items-center">
      <div class="text-center">
        <h2 class="font-hasbold md:text-5xl text-3xl">Mulai Belajar Sekarang</h2>
        <h6 class="font-hasmedium md:text-xl text-base mt-1 md:mt-2">Belajar apa saja jadi lebih mudah. dimanapun dan kapanpun</h6>
        <router-link to="/kelas">
          <div class="w-auto inline-flex text-center md:mt-20 mt-14">
            <p class="border py-2 px-6 rounded-xl text-center font-hasbold cursor-pointer bg-blue-500 hover:bg-yellow-500 text-white shadow-2xl">Belajar Sekarang</p>
          </div>
        </router-link>
      </div>
    </section>
    <FooterWeb></FooterWeb>
  </div>
</template>

<script>
import TypeIt from "typeit";
import AOS from 'aos';
import FooterWeb from '../components/FooterWeb.vue';
export default {
  components: {FooterWeb},
  name: 'Home',
  mounted() {
    this.$store.dispatch('pelajaran/PelajaranAll');
    this.typeit();
    AOS.init();
    this.listpel();
    if(this.$cookies.get('_bsf') != null){
      this.$store.dispatch('users/findme');
    }
  },
  data(){
    return {
      listpelajaran: []
    }
  },
  methods: {
    listpel(){
      if(this.$store.state.pelajaran.pelajaran.length > 6){
        this.$store.state.pelajaran.pelajaran.length = 6
      }
      return this.listpelajaran = this.$store.state.pelajaran.pelajaran;
    },
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