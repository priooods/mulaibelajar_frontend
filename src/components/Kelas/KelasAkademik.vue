<template>
  <div class="kelas-akademik relative bg-white w-full">
    <section class="container mx-auto pt-5 md:px-32 px-3">
      <h2 class="font-popsembold text-lg md:text-3xl">Belajar Hal Baru!</h2>
      <div class="md:max-h-24 mt-5 w-full flex justify-end hover:border-blue-500 hover:bg-gray-400 border-2">
        <input type="text" v-model="searching" class="md:py-3 py-1.5 rounded-sm font-popmed placeholder-gray-300 focus:outline-none focus:ring-0 px-3 w-full" placeholder="Cari Pelajaran..">
        <div @click="search" class="px-5 cursor-pointer items-center font-popsembold bg-blue-500 border-blue-500 border-2 text-white flex">
          <Icon type="md-search" size="23" class="my-auto mr-2"/>
          <span>Cari</span>
        </div>
      </div>
    </section>
    <section class="z-10 top-0 sticky bg-white shadow-md">
      <div class="container mx-auto md:px-32 mt-3">
        <div class="mt-2 grid grid-cols-4 gap-0 font-popsembold md:text-base md:grid-cols-7">
          <div @click="selectTab('')" class="justify-center text-sm flex cursor-pointer px-4 py-2 hover:bg-gray-200" :class="activeTab == '' ? 'border-b-4 border-blue-500' : 'border-b-0'">
            <Icon type="ios-globe-outline" size="27" />
            <span class="my-auto ml-3">All</span>
          </div>
          <div @click="selectTab('SD')" class="justify-center text-sm flex cursor-pointer px-4 py-2 hover:bg-gray-200" :class="activeTab == 'SD' ? 'border-b-4 border-blue-500' : 'border-b-0'">
            <Icon type="md-star-outline" size="27" />
            <span class="my-auto ml-3">SD</span>
          </div>
          <div @click="selectTab('SMP')" class="justify-center text-sm flex cursor-pointer px-4 py-2 hover:bg-gray-200" :class="activeTab == 'SMP' ? 'border-b-4 border-blue-500' : 'border-b-0'">
            <Icon type="md-bulb" size="27" />
            <span class="my-auto ml-3">SMP</span>
          </div>
          <div @click="selectTab('SMA')" class="justify-center text-sm flex cursor-pointer px-4 py-2 hover:bg-gray-200" :class="activeTab == 'SMA' ? 'border-b-4 border-blue-500' : 'border-b-0'">
            <Icon type="ios-flag-outline" size="27" />
            <span class="my-auto ml-3">SMA</span>
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-screen pt-6 bg-white">
      <div class="container mx-auto md:px-32 px-3">
        <div class="paket mt-10" v-if="activeTab == ''">
          <div class="flex justify-start mb-6">
            <div class="inline-flex mr-auto">
              <Icon type="md-trending-up" size="21" class=" rounded-full p-3 bg-blue-50 text-blue-500"/>
              <span class="ml-3 my-auto font-popsembold text-base">Paket Belajar</span>
            </div>
            <!-- <div class="inline-flex py-1 px-2 hover:bg-gray-100 cursor-pointer">
              <span class="mr-2 my-auto font-popsembold text-xs">Lihat Semua</span>
              <Icon type="md-arrow-round-forward" size="17" class=" my-auto text-indigo-500"/>
            </div> -->
          </div>
          <div class="grid mt-6 grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(item,i) in listPaket" v-bind:key="i">
              <div class="hover:shadow-lg p-4 bg-paket text-white border rounded-md transisi transform hover:-translate-y-1">
                <div class="mb-3 h-32 w-full" v-if="item.img">
                  <img class="w-full h-full" :src="'https://mulaibelajar.online/mulaibelajar_backend/public/file/' + item.img" alt="">
                </div>
                <p class="font-popmed text-sm"><span class=" rounded-md py-0.5 text-xs font-poplight mr-4 px-2 bg-red-500">{{item.pplr}}</span> {{item.nme}}</p>
                <p class="mt-4 font-popmed text-xl">{{item.kelas.tgkt}} {{item.jrs}}</p>
                <span class="mt-4 mb-10 line-clamp-3 text-xs font-popmed">{{item.dsc}}</span>
                <span class=" font-poplight text-xs">Semua pelajaran :</span>
                <div class="my-auto mt-1 mr-auto" v-for="(its,ind) in item.pelajaran" :key="ind">
                  <p class="font-popmed inline-flex w-full"><span class="p-1 bg-indigo-500 h-full my-auto rounded-full mr-2"></span> {{its.titl}}</p>
                </div>
                <p class="mt-8 font-popbold text-base mr-auto">{{item.prc ? item.prc : 0 | currency('Rp. ')}} / Bulan</p>
                  
                <div class="mt-6 flex justify-end">
                  <div @click="gotopaket(item)" class="p-2 text-sm cursor-pointer font-popsembold flex justify-center beli-paket">
                    <span>Belajar</span>
                    <Icon type="md-arrow-round-forward" size="15" class=" my-auto ml-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="plejaran mt-14">
          <div v-if="activeTab == ''" class="flex justify-start mb-6">
            <Icon type="md-book" size="21" class=" rounded-full p-3 bg-blue-50 text-blue-500"/>
            <span class="ml-3 my-auto font-popsembold text-base">Semua Pelajaran</span>
          </div>
          <div v-if="listPelajaran" class="grid mt-6 grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(item,i) in listPelajaran" v-bind:key="i">
              <div class="hover:shadow-lg p-4 border border-gray-600 rounded-md transisi transform hover:-translate-y-1">
                <div class="mb-3 h-32 w-full" v-if="item.img">
                  <img class="w-full h-full" :src="'https://mulaibelajar.online/mulaibelajar_backend/public/file/' + item.img" alt="">
                </div>
                <p class="font-popmed text-sm">{{item.nick}}</p>
                <p class="mt-4 font-popmed text-xl">{{item.titl}}</p>
                <span class="mt-4 line-clamp-3 text-xs font-popmed">{{item.desc}}</span>
                <p class="mt-4 font-popbold text-base mr-auto">{{item.harga ? item.harga.prc : 0 | currency('Rp. ')}} / Bulan</p>
                <div class="mt-6 flex justify-end">
                  <div class="my-auto mr-auto">
                    <div class="flex">
                      <span class="p-1 bg-indigo-500 h-full rounded-full"></span>
                      <span class=" w-1 h-0.5 my-auto" :class="item.kelas.tgkt == 'SMP' || item.kelas.tgkt == 'SMA' ? 'bg-indigo-500' : 'bg-gray-300'"></span>
                      <span class="p-1 h-full rounded-full" :class="item.kelas.tgkt == 'SMP'|| item.kelas.tgkt == 'SMA' ? 'bg-indigo-500' : 'bg-gray-300'"></span>
                      <span class=" w-1 h-0.5 my-auto" :class="item.kelas.tgkt == 'SMA' ? 'bg-indigo-500' : 'bg-gray-300'"></span>
                      <span class="p-1 h-full rounded-full" :class="item.kelas.tgkt == 'SMA' ? 'bg-indigo-500' : 'bg-gray-300'"></span>
                    </div>
                    <span class="font-popmed text-xs">{{item.kelas.kls}}  {{item.kelas.tgkt}}</span>
                  </div>
                  <div @click="gotonew(item)" class="p-2 border border-gray-300 text-gray-700 text-sm cursor-pointer font-popsembold hover:border-gray-800 flex justify-center hover:bg-gray-50">
                    <span>Belajar</span>
                    <Icon type="md-arrow-round-forward" size="15" class=" my-auto ml-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="listPelajaran.length == 0" class="flex justify-center items-center">
            <div class="h-full w-full text-center">
              <img src="../../assets/image/astronot.svg" alt="astonot" class="w-5/12 h-5/12 mx-auto">
              <h6 class=" mt-8 font-popbold text-xl">Pelajaran {{this.searching}} tidak ditemukan <br> untuk tingkat {{this.activeTab}}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterWeb class="mt-32"></FooterWeb>
  </div>
</template>

<script>
import FooterWeb from '../FooterWeb.vue';
import Vue2Filters from 'vue2-filters';
import global from '../../global/pelajaran';
export default {
  name: 'KelasAkademik',
  components: { FooterWeb },
  mixins: [Vue2Filters.mixin, global],
  data() {
    return {
      activeTab: '',
      searching: '',
      listPaket: this.$store.state.pelajaran.paket,
      listPelajaran: this.$store.state.pelajaran.pelajaran
    }
  },
  methods: {
    search(){
      let val = this.searching.toLowerCase().trim();
      this.listPelajaran = this.$store.state.pelajaran.pelajaran.filter(el => {
        return el.kelas.tgkt.toLowerCase().indexOf(this.activeTab.toLowerCase().trim()) > -1 
        && el.titl.toLowerCase().indexOf(val) > -1
      });
      return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    selectTab(find){
      switch (find) {
        case '':
          this.$store.dispatch('pelajaran/FindType','akademik').then(() => {})
            .catch(() => { this.$Message.error("Server Erorr !"); })
            .finally(() => { 
              this.listPelajaran = this.$store.state.pelajaran.pelajaran;
          });
          break;
        case 'SD':
        case 'SMP':
        case 'SMA':
          this.listPelajaran = this.$store.state.pelajaran.pelajaran.filter(el => {
            return el.kelas.tgkt == find
          });
          break;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.searching = '';
      return this.activeTab = find;
    },
    gotopaket(item){
      this.$Loading.start();
      if(!this.$cookies.get('_bsf') && !this.$store.state.users.users) {
        this.$Loading.finish();
        return this.$router.push({ path: "/register" }, () => {});
      }
      this.$store.dispatch('pesanan/Paket', item.id).finally(() => {
        this.$Loading.finish();
        return this.$router.push({ path: "/pembayaran/Paket" }, () => {});
      });
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
.kelas-akademik{
  .menus{
    background: #F4F7FC;
  }
  .transisi{
    transition-duration: 0.7s;
  }
  .bg-paket{
    background: #202033;
    :hover{
      .beli-paket{ background: #36365283; }
    }
  }
}
</style>