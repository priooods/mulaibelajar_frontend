<template>
  <div class="kelas-akademik">
    <section>
      <div class="w-full tops h-screen relative overflow-hidden">
        <svg data-name="akademik" class="fill-current absolute bottom-0 right-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-2 items-center md:px-0 px-3 h-full w-full container mx-auto">
          <div class="text-gray-600">
            <h2 class="font-popbold md:text-4xl text-2xl"><span class="text-blue-500">Mulai Belajar</span> banyak hal baru, Mulai dari sini aja!</h2>
            <h5 class="font-popmed mt-4 md:text-base">Ayo kita belajar semua hal yang dibutuhkan untuk ulangan sekolah, <br class="md:block hidden"> AKM, UTBK, dan ujian apa aja 😁</h5>
            <div class="flex w-full justify-start mt-2">
              <h5 class="font-popbold mt-auto text-lg md:text-xl">#Mulai Belajar</h5>
            </div>
            <div class="md:hidden block mt-32 text-center">
              <Icon type="ios-arrow-round-down" class="icons_arrow" :size="40" />
            </div>
          </div>
          <div class="md:block hidden">
            <img src="../../assets/image/teachers.svg" class="h-5/6 w-5/6 ml-auto" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="bg-section relative md:mb-16 mb-12 container mx-auto mt-20">
      <carousel :margin="10" class="md:px-0 px-3" :stagePadding="0" :nav="false" 
        :dots="false" :responsive="{0:{items:2, autoplay: true,autoplayHoverPause:true,},600:{items:9}}">
        <div class="py-3" v-for="(item,i) in listkelas" v-bind:key="i">
          <div @click="changetab(item.active)" :class="active == item.active ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'" class="px-3 cursor-pointer border shadow-md py-2 rounded-lg hover:bg-blue-500 hover:text-white font-popbold text-center"><p>{{item.name}}</p></div>
        </div>
      </carousel>
      <div>
        <div class="container mx-auto">
          <div v-for="(dts,index) in pelajaranall" v-bind:key="index">
            <h3 class="mt-10 md:px-0 px-3 font-popbold md:text-base">{{dts.title}}</h3>
            <carousel v-if="dts.listPelajaran ? dts.listPelajaran.length > 0 : null" :margin="20" :stagePadding="0" :nav="false" 
              :dots="true" :responsive="{0:{items:1, loop: true, autoplay: true, dots: false, autoplayHoverPause:true, stagePadding: 40},600:{items:5, dots:true}}">
              <div class="pb-7 pt-4" v-for="(item,i) in dts.listPelajaran" v-bind:key="i">
                <div class="rounded-xl border shadow-lg px-5 bg-white pb-7">
                  <div :class="item.pplr == 'Popular' ? 'populer' : ''" class="rounded-b-lg inline-block text-white py-1 px-2">
                    <p class="mr-auto text-xs font-popmed">Popular</p>
                  </div>
                  <h3 class="font-popbold mt-3 text-xl text-blue-500">{{item.nick}}</h3>
                  <p class="my-1 px-3 py-1 rounded-lg text-start font-popmed text-white text-xs inline-flex bg-yellow-400">{{item.kelas ? item.kelas.kls + ' '+ item.kelas.tgkt : ''}}</p>
                  <h4 class="font-popbold md:mt-3 mt-2 text-lg">{{item.titl}}</h4>
                  <p class="md:mt-3 mt-2 line-clamp-3 font-popmed text-xs">{{item.desc}}</p>
                  <div class="my-4" v-if="item.harga">
                    <p class="text-sm text-gray-600 font-popbold line-through">{{item.harga.prcd | currency('Rp. ') }}</p>
                    <p class="text-xs font-popbold bg-red-500 text-white rounded-lg px-3 py-1 my-2 inline-flex">Subsidi {{item.harga.dsc | currency('Rp. ') }}</p>
                    <p class="text-base font-popbold">{{item.harga.prc | currency('Rp. ') }} /Bulan</p>
                  </div>
                  <div class="mt-8">
                    <div @click="gotonew(item)" class="rounded-2xl cursor-pointer hover:shadow-lg bg-blue-500 text-white text-sm font-popbold text-center py-1.5">
                      <p>Mulai Belajar</p>
                    </div>
                  </div>
                </div>
              </div>
            </carousel>
            <div v-else class="my-4">
              <p class=" font-popmed">Belum ada kelas yang di buka 🥺</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterWeb></FooterWeb>
  </div>
</template>

<script>
import FooterWeb from '../FooterWeb.vue';
import Vue2Filters from 'vue2-filters';
import carousel from 'vue-owl-carousel';
import global from '../../global/pelajaran';
export default {
  name: 'KelasAkademik',
  mixins: [Vue2Filters.mixin, global],
  components: { FooterWeb,carousel },
  mounted() {
    this.$store.dispatch('pelajaran/FindType','akademik');
  },
  computed: {
  },
  methods: {
    gotonew(item){
      if(!this.$cookies.get('_bsf') && !this.$store.state.users.users) 
       return this.$router.push({ path: "/register" }, () => {});
      this.$store.dispatch('pesanan/Parsial', item.id);
      return this.$router.push({ path: "/pembayaran" }, () => {});
    }
  },
}
</script>

<style lang="scss">
.kelas-akademik{
  .populer{
    background-color: #F86231;
  }
  .tops{ background: white; }
  .tops svg{
    color: #F4F7FC;
    background: white;
  }
  .icons_arrow{
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
}
</style>