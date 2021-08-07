<template>
  <div class="kelas-coding relative bg-white">
    <section class="container mx-auto pt-5 md:px-32 px-3">
      <h2 class="font-popsembold text-lg md:text-3xl">Belajar Ngoding!</h2>
      <div class="md:max-h-24 mt-5 w-full flex justify-end hover:border-blue-500 hover:bg-gray-400 border-2">
        <input type="text" v-model="searching" class="md:py-3 py-1.5 rounded-sm font-popmed placeholder-gray-300 focus:outline-none focus:ring-0 px-3 w-full" placeholder="Cari Topik..">
        <div @click="search" class="px-5 cursor-pointer items-center font-popsembold bg-blue-500 border-blue-500 border-2 text-white flex">
          <Icon type="md-search" size="23" class="my-auto mr-2"/>
          <span>Cari</span>
        </div>
      </div>
    </section>
    <section class="mb-20 mt-12 min-h-screen w-full container mx-auto md:px-32 px-3">
      <div class="flex justify-start mb-6">
        <Icon type="md-book" size="21" class=" rounded-full p-3 bg-blue-50 text-blue-500"/>
        <span class="ml-3 my-auto font-popsembold text-base">Ngoding sampai Posting</span>
      </div>
      <div v-if="listPelajaran" class="grid mt-6 grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(item,i) in listPelajaran" v-bind:key="i">
          <div class="hover:shadow-lg p-4 border border-gray-600 rounded-md transisi transform hover:-translate-y-1">
            <div class="mb-3 h-32 w-full" v-if="item.img">
              <img class="w-full h-full" :src="'https://mulaibelajar.online/mulaibelajar_backend/public/file/' + item.img" alt="">
            </div>
            <p class="font-popbold px-2 py-1 rounded-md inline-flex bg-red-500 text-white text-xs">Live Class</p>
            <p class="mt-4 font-popbold text-xl">{{item.titl}}</p>
            <span class="mt-4 line-clamp-3 text-xs font-popmed">{{item.desc}}</span>
            <p class="mt-4 font-popbold text-base mr-auto">{{item.harga ? item.harga.prc : 0 | currency('Rp. ')}}</p>
            <div class="mt-6 flex justify-end">
              <div class="my-auto mr-auto">
                <div class="flex">
                  <span class="p-1 bg-indigo-500 h-full rounded-full"></span>
                  <span class=" w-1 h-0.5 my-auto" :class="item.lvl == 'Intermediet' || item.lvl == 'Advance' ? 'bg-indigo-500' : 'bg-gray-300'"></span>
                  <span class="p-1 h-full rounded-full" :class="item.lvl == 'Intermediet' || item.lvl == 'Advance' ? 'bg-indigo-500' : 'bg-gray-300'"></span>
                  <span class=" w-1 h-0.5 my-auto" :class="item.lvl == 'Advance' ? 'bg-indigo-500' : 'bg-gray-300'"></span>
                  <span class="p-1 h-full rounded-full" :class="item.lvl == 'Advance' ? 'bg-indigo-500' : 'bg-gray-300'"></span>
                </div>
                <span class="font-popmed text-xs">{{item.lvl}}</span>
              </div>
              <div @click="gotonew(item)" class="p-2 border border-gray-300 text-gray-700 text-sm cursor-pointer font-popsembold hover:border-gray-800 flex justify-center hover:bg-gray-50">
                <span>Belajar</span>
                <Icon type="md-arrow-round-forward" size="15" class=" my-auto ml-3" />
              </div>
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
export default {
  components: {FooterWeb},
  name: 'KelasCoding',
  data() {
    return {
      searching: '',
      listPelajaran: this.$store.state.pelajaran.pelajaran
    }
  },
  watch:{
    searching(val){
      if(val.length == 0) return this.listPelajaran = this.$store.state.pelajaran.pelajaran
    }
  },
  methods: {
    search(){
      let val = this.searching.toLowerCase().trim();
      this.listPelajaran = this.$store.state.pelajaran.pelajaran.filter(el => {
        return el.titl.toLowerCase().indexOf(val) > -1
      });
      return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    gotonew(item){
      this.$Loading.start();
      if(!this.$cookies.get('_bsf') && !this.$store.state.users.users) {
        this.$Loading.finish();
        return this.$router.push({ path: "/register" }, () => {});
      }
      this.$store.dispatch('pesanan/Parsial', item.id).finally(() => {
        this.$Loading.finish();
        return this.$router.push({ path: "/pembayaran/Parsial" }, () => {});
      });
    }
  },
}
</script>

<style lang="scss">
.kelas-coding{
  .tops{ background: #e6ecf5; }
  .tops svg{
    color: #e6ecf5;
    background: white;
  }
}
</style>