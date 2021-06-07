<template>
  <div class="home">
    <div class="h-screen max-h-screen w-full flex justify-center items-center">
      <div class="text-center">
        <h2 class="font-hasbold md:text-5xl text-3xl">Mulai Belajar Bersama.</h2>
        <h2 class="font-hasbold md:text-5xl text-3xl md:mt-3">Perluas Wawasan Anda.</h2>
        <div class="md:flex w-auto md:mt-0 mt-8">
          <h5 class="font-hasmedium mt-auto text-lg md:text-xl">Platform belajar online tanpa batas.</h5>
          <h5 class="font-hasmedium mt-auto text-lg md:text-xl md:ml-2">Mulai Belajar</h5>
          <h5 class="font-hasmedium mb-auto text-type text-lg md:text-xl md:ml-1" id="type"></h5>
        </div>
      </div>
    </div>
    <div class="bg-indigo-600 py-16 w-full">
      <div class="w-full text-center">
        <h2 class="font-hasmedium text-4xl text-white">Pembelajaran kelas dunia untuk siapa saja, di mana saja</h2>
        <div class="mt-16 md:flex justify-center">
          <div class="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-1 md:w-5/6 w-full">
            <div class="text-left p-5 rounded-lg bg-indigo-500">
              <h4 class="font-hasmedium text-xl text-gray-100 mb-4">Studi Kasus</h4>
            </div>
            <div class="text-left p-5 rounded-lg bg-indigo-500">
              <h4 class="font-hasmedium text-xl text-gray-100 mb-4">Lifetime Access</h4>
              <h6 class="font-hasroman text-base text-white">Mempelajari dan memahami materi kelas lebih santai tanpa batasan waktu</h6>
            </div>
            <div class="text-left p-5 rounded-lg bg-indigo-500">
              <h4 class="font-hasmedium text-xl text-gray-100 mb-4">Konsultasi</h4>
              <h6 class="font-hasroman text-base text-white">Gabung dengan private group untuk berkonsultasi dengan mentor kelas</h6>
            </div>
            <div class="text-left p-5 rounded-lg bg-indigo-500">
              <h4 class="font-hasmedium text-xl text-gray-100 mb-4">#ProdukLokal</h4>
              <h6 class="font-hasroman text-base text-white">Materi dibuat langsung oleh para kreator di negara Indonesia</h6>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from "typeit";
export default {
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
      .type('Sejarah', { delay: 1500 })
      .delete(-7, { speed: 200, delay: 1000 })
      .go();
    }
  },
}
</script>
