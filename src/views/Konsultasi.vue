<template>
  <div class="Konsultasi">
    <div class="min-h-screen w-full md:flex justify-start items-center container mx-auto">
      <img src="../assets/image/learn.svg" alt="header" class="md:hidden pt-14 px-3 block img-dec">
      <div class="md:p-16 md:w-3/6 mr-auto w-full pb-12 md:px-0 px-3">
        <h2 class="font-popbold text-xl md:text-3xl">Bantuan Konsultasi untuk membantu semua masalah dalam proses belajar kamu</h2>
        <p class="font-poplight mt-3 text-lg">Kami akan segera hadir kembali, pastikan kamu ambil bagian untuk konsultasi langsung</p>
        <div class="my-6 rounded-xl bg-red-500 inline-flex text-white px-4 py-1">
          <p class="font-popmed text-sm">Akan dibuka dalam</p>
        </div>
        <div>
          <vac :end-time="nextWeek">
            <div slot="process" slot-scope="{ timeObj }" class="inline-flex">
              <div class="text-center">
                <h1 class="font-popbold text-xl md:text-3xl">{{timeObj.d}}</h1>
                <p class="font-popmed text-base md:text-lg">Hari</p>
              </div>
              <div class="text-center ml-5">
                <h1 class="font-popbold text-xl md:text-3xl">{{timeObj.h}}</h1>
                <p class="font-popmed text-base md:text-lg">Jam</p>
              </div>
              <div class="text-center ml-5">
                <h1 class="font-popbold text-xl md:text-3xl">{{timeObj.m}}</h1>
                <p class="font-popmed text-base md:text-lg">Menit</p>
              </div>
              <div class="text-center ml-5">
                <h1 class="font-popbold text-xl md:text-3xl">{{timeObj.s}}</h1>
                <p class="font-popmed text-base md:text-lg">Detik</p>
              </div>
            </div>
          </vac>
        </div>
      </div>
      <img src="../assets/image/learn.svg" alt="header" class="md:block hidden img-dec">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Konsultasi',
  methods: {
    nextweek(){
      var today = new Date();
      return this.nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    }
  },
  data() {
    return {
      nextWeek : null
    }
  },
  mounted() {
    this.nextweek();
  },
}
</script>

<style lang="scss">
.Konsultasi{
  img{
    width: 40%;
    height: 90%;
  }
}
@media only screen and (max-width: 800px) {
  .Konsultasi{
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>