<template>
  <div class="kelas min-h-screen">
    <section class="content-kelas relative pt-28 md:pb-28 pb-16 px-2 md:px-0 h-auto">
      <div class="w-full text-center">
          <h1 class="font-hasbold text-xl md:text-4xl">#MulaiAjaDulu</h1>
          <p class="font-hasroman text-base md:text-lg md:mt-3 mt-2">Akses semua kelas berkualitas tinggi <br> dengan harga terjangkau di Mulai Belajar.</p>
      </div>
      <div class="relative">
        <div class="bg-nav-mobile sticky top-0 z-10 left-0">
          <div class="md:container mx-auto md:pt-16 pt-20 pb-3">
            <div class="grid grid-cols-1 md:grid-cols-2 mt-4 gap-3 md:w-2/5 w-full">
              <div>
                <p class="font-hasmedium text-xs mb-1">Pilih Paket</p>
                <Select @on-select="selectedPaket" class="border-blue-400 shadow-xl hover:border-blue-100 focus:border-blue-300"
                  placeholder="cari kelas">
                    <Option v-for="item in selectPakets" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
              <div v-if="selectPaket == 0">
                <p class="font-hasmedium text-xs mb-1">Pilih Kelas</p>
                <Select v-model="kelasvalue" @on-select="selected" class="border-blue-400 shadow-xl hover:border-blue-100 focus:border-blue-300"
                  placeholder="cari kelas">
                    <Option v-for="item in kelas" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div v-if="$store.state.kelas.managekelas && selectPaket == 0" class="md:container mx-auto">
          <div class="md:mt-8 mt-6 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            <div v-for="(item,i) in $store.state.kelas.managekelas" v-bind:key="i">
              <div class="shadow-xl border rounded-lg p-5">
                <h6 class="font-hasmedium text-xs text-blue-500">
                  {{item.kelas ? item.kelas.kelas == 0 ? '' + item.kelas.jenjang : item.kelas.kelas + ' ' + item.kelas.jenjang : ''}}</h6>
                <h3 class="font-hasbold mt-1 text-base md:text-xl">{{item.pelajaran ? item.pelajaran.nama_pelajaran : ''}}</h3>
                <p class="font-hasroman text-sm mt-2">{{item.pelajaran ? item.pelajaran.deskripsi : ''}}</p>
                <div class="mt-4">
                  <p class="font-hasmedium">Dengan belajar bersama Mulai Belajar, berarti kamu sudah turut membantu pendidikan untuk anak-anak lain di tempat tertinggal</p>
                </div>
                <div class="mt-4">
                  <p class="font-hasbold text-base text-gray-500 line-through mb-1">{{item.harga_discount ? item.harga_discount : '' | currency('Rp. ')}}</p>
                  <div v-if="item.discount" class="px-4 mb-3 py-1 bg-red-500 text-white inline-flex rounded-lg">
                    <p class="font-hasbold text-xs">Discount {{item.discount ? item.discount : '' | currency('Rp. ')}}</p>
                  </div>
                  <p class="font-hasbold text-lg">{{item.harga_akhir ? item.harga_akhir : '' | currency('Rp. ')}}/ Bulan</p>
                </div>
                <div @click="checkoutParsial(item)" class="rounded-xl text-center md:mt-5 mt-4 py-2 w-full cursor-pointer hover:bg-yellow-500 bg-blue-500 text-white">
                    <p class="font-hasbold text-sm">Daftar Sekarang</p></div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="$store.state.kelas.paket && selectPaket == 1" class="md:container mx-auto">
          <div class="md:mt-8 mt-6 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            <div v-for="(item,i) in $store.state.kelas.paket" v-bind:key="i">
              <div class="shadow-xl border rounded-lg p-5">
                <h6 class="font-hasmedium text-xs text-blue-500">
                  {{item.kelas ? item.kelas.kelas == 0 ? '' + item.kelas.jenjang : item.kelas.kelas + ' ' + item.kelas.jenjang : ''}}</h6>
                <h3 class="font-hasbold mt-1 text-base md:text-xl">Kelas Intensif {{item.jurusan ? item.jurusan : ''}}</h3>
                <p class="font-hasroman text-sm mt-1">{{item.deskripsi ? item.deskripsi : ''}}</p>
                <p class="mt-4 font-hasmedium">Semua focus mata pelajaran :</p>
                <div v-if="item.detail_pelajaran" class="mt-4">
                  <div v-for="(item, ind) in item.detail_pelajaran" v-bind:key="ind">
                    <ol v-for="(items, inds) in item.pelajaran" v-bind:key="inds" class="list-inside">
                      <li class="inline-flex mt-1">
                        <p>{{ind + 1}}.</p>
                        <p class="font-hasmedium ml-2">{{items.pelajaran.nama_pelajaran}}</p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div class="mt-4">
                  <p class="font-hasbold text-base text-gray-500 line-through mb-1">
                    {{item.detail_pelajaran[0].pelajaran[0].harga_akhir + item.detail_pelajaran[1].pelajaran[0].harga_akhir 
                     + item.detail_pelajaran[2].pelajaran[0].harga_akhir | currency('Rp. ')}}</p>
                  <div class="px-4 mb-3 py-1 bg-red-500 text-white inline-flex rounded-lg">
                    <p class="font-hasbold text-xs">Discount {{ (item.detail_pelajaran[0].pelajaran[0].harga_akhir + item.detail_pelajaran[1].pelajaran[0].harga_akhir 
                     + item.detail_pelajaran[2].pelajaran[0].harga_akhir) - item.harga | currency('Rp. ')}}</p>
                  </div>
                  <p class="font-hasbold text-lg">{{item.harga ? item.harga : '' | currency('Rp. ')}}</p>
                </div>
                <div @click="checkoutIntensif(item)" class="rounded-xl text-center md:mt-5 mt-4 py-2 w-full cursor-pointer hover:bg-yellow-500 bg-blue-500 text-white">
                  <p class="font-hasbold text-sm">Daftar Sekarang</p></div>
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
import FooterWeb from '../components/FooterWeb.vue';
import Vue2Filters from 'vue2-filters';
export default {
  components: {FooterWeb},
    name: "Kelas",
    mixins: [Vue2Filters.mixin],
    props: {
      msg: Number
    },
    data() {
      return {
        hargapaket: 0,
        kelasvalue: null,
        discount: null,
        selectPaket: 0,
        selectPakets: [
          { value: 'Parsial', label: 'Paket Parsial' },
          { value: 'Intensif', label: 'Paket Intensif' },
        ],
        kelas: [
          { value: 0, label: 'Semua' },
          { value: 1, label: '5 SD' },
          { value: 2, label: '6 SD' },
          { value: 3, label: '1 SMP' },
          { value: 4, label: '2 SMP' },
          { value: 5, label: '3 SMP' },
          { value: 6, label: '1 SMA' },
          { value: 7, label: '2 SMA' },
          { value: 8, label: '3 SMA' },
          { value: 9, label: 'UMUM' },
        ]
      }
    },
    mounted() {
      this.checkFirst();
    },
    methods: {
      checkFirst(){
        if(!this.msg) {
          return this.$store.dispatch('kelas/ManageKelasAll')
        } else {
          this.selectPaket = this.msg;
          return this.$store.dispatch('kelas/PaketAll')
        }
      },
      selected(value){
        this.kelasvalue = value.value;
        if(this.kelasvalue)
          return this.$store.dispatch('kelas/ManageKelasAll', { kelas_id : this.kelasvalue })
        return this.$store.dispatch('kelas/ManageKelasAll');
      },
      selectedPaket(value){
        if(value.value === 'Intensif'){
          this.selectPaket = 1;
          return this.$store.dispatch('kelas/PaketAll')
        } else {
          this.selectPaket = 0;
          return this.$store.dispatch('kelas/ManageKelasAll')
        }
      },
      checkoutParsial(value){
        if(this.$cookies.get('_bsf') != null){
          this.$store.dispatch('bayar/Checkout', value);
          return this.$store.dispatch('users/me');
        }
        return this.$router.push({ path: "/register" }, () => {});
      },
      checkoutIntensif(value){
        console.log(value);
        if(this.$cookies.get('_bsf') != null){
          this.$store.dispatch('bayar/CheckoutInten', value);
          return this.$store.dispatch('users/me');
        }
        return this.$router.push({ path: "/register" }, () => {});
      }
    },
}
</script>

<style>

</style>