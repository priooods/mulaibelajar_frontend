<template>
  <div class="checkout md:py-0 py-20">
    <div class="container mx-auto md:flex justify-center items-center h-screen md:max-h-screen">
        <div class="items-top shadow-lg w-full grid grid-cols-1 md:grid-cols-2 gap-0">
            <div class="md:p-16 p-3 md:rounded-l-lg border" v-if="$store.state.bayar.check == 0 && $store.state.bayar.checkout && $store.state.users.users">
                <h6 class="font-hasmedium text-sm">Pilihan kelas kamu</h6>
                <h1 class="font-hasbold text-2xl">Kelas {{$store.state.bayar.checkout.pelajaran ? $store.state.bayar.checkout.pelajaran.nama_pelajaran : ''}}</h1>
                <h3 class="font-hasmedium inline-flex rounded-lg text-xs mt-3 py-1 px-3 bg-blue-500 text-white">
                    {{$store.state.bayar.checkout.kelas ? $store.state.bayar.checkout.kelas.kelas == 0 ? $store.state.bayar.checkout.kelas.jenjang :
                     $store.state.bayar.checkout.kelas.kelas + ' ' + $store.state.bayar.checkout.kelas.jenjang : '' }}
                </h3>
                <h3 class="font-hasmedium inline-flex rounded-lg text-xs mt-3 py-1 px-3 bg-red-500 ml-3 text-white">
                    Paket Parsial
                </h3>
                <div class="mt-5">
                    <p class="font-hasmedium text-sm">Informasi anda</p>
                    <div class="mt-2 grid grid-cols-2 gap-2">
                        <p class="font-hasmedium text-xs">Nama Lengkap</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.nama_lengkap}}</p>
                        <p class="font-hasmedium text-xs">Username</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.username}}</p>
                        <p class="font-hasmedium text-xs">E-mail</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.email}}</p>
                        <p class="font-hasmedium text-xs">No Handphone</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.no_hp}}</p>
                        <p class="font-hasmedium text-xs">Pendidikan</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.level}}</p>
                    </div>
                </div>
            </div>
            <!-- Paket Intensif -->
            <div class="md:p-16 p-3 md:rounded-l-lg border" v-if="$store.state.bayar.check == 1 && $store.state.bayar.checkoutinten && $store.state.users.users">
                <h6 class="font-hasmedium text-sm">Pilihan kelas Intensif kamu</h6>
                <h1 class="font-hasbold text-2xl">Kelas Intensif {{$store.state.bayar.checkoutinten.jurusan ? $store.state.bayar.checkoutinten.jurusan : ''}}</h1>
                <h3 class="font-hasmedium inline-flex rounded-lg text-xs mt-3 py-1 px-3 bg-blue-500 text-white">
                    {{$store.state.bayar.checkoutinten.kelas ? $store.state.bayar.checkoutinten.kelas.kelas == 0 ? $store.state.bayar.checkoutinten.kelas.jenjang :
                     $store.state.bayar.checkoutinten.kelas.kelas + ' ' + $store.state.bayar.checkoutinten.kelas.jenjang : '' }}
                </h3>
                <h3 class="font-hasmedium inline-flex rounded-lg text-xs mt-3 py-1 px-3 bg-red-500 ml-3 text-white">
                    Paket Intensif
                </h3>
                <div class="mt-5">
                    <p class="font-hasmedium text-sm">Informasi anda</p>
                    <div class="mt-2 grid grid-cols-2 gap-2">
                        <p class="font-hasmedium text-xs">Nama Lengkap</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.nama_lengkap}}</p>
                        <p class="font-hasmedium text-xs">Username</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.username}}</p>
                        <p class="font-hasmedium text-xs">E-mail</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.email}}</p>
                        <p class="font-hasmedium text-xs">No Handphone</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.no_hp}}</p>
                        <p class="font-hasmedium text-xs">Pendidikan</p>
                        <p class="font-hasroman text-xs">{{$store.state.users.users.level}}</p>
                    </div>
                </div>
            </div>
            <div v-if="$store.state.bayar.check == 0 && $store.state.bayar.checkout && $store.state.users.users" class="bg-white pb-10 rounded-r-lg border text-gray-800">
                <div class="py-3 md:px-4 px-3 border-b mb-5 font-hasbold text-sm">
                    Informasi tagihan anda
                    <p class="font-hasmedium text-xs">{{datenow}}</p>
                </div>
                <div class="md:px-4 px-3 grid grid-cols-1 gap-2">
                    <div class="grid grid-cols-2 gap-2 border-b pb-3">
                        <p class="font-hasroman text-xs md:text-sm">{{$store.state.bayar.checkout.pelajaran ? $store.state.bayar.checkout.pelajaran.nama_pelajaran : ''}}</p>
                        <p class="font-hasroman text-xs md:text-sm text-right">{{$store.state.bayar.checkout.harga_discount ? $store.state.bayar.checkout.harga_discount : $store.state.bayar.checkout.harga_akhir | currency('Rp. ')}}</p>
                        <p class="font-hasroman text-xs md:text-sm">Discount</p>
                        <p class="font-hasroman text-xs md:text-sm text-right">{{$store.state.bayar.checkout.discount ? $store.state.bayar.checkout.discount : 0 | currency('Rp. ')}}</p>
                        <p class="font-hasroman text-xs md:text-sm">Total Pelajaran</p>
                        <p class="font-hasroman text-xs md:text-sm text-right">1</p>
                        <p class="font-hasroman text-xs md:text-sm">Kode Kelas</p>
                        <p class="font-hasroman text-xs md:text-sm text-right">{{$store.state.bayar.checkout.kelas ? $store.state.bayar.checkout.kelas.kode_kelas : ''}}</p>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pb-4">
                        <p class="font-hasbold text-xs md:text-sm">Total Bayar</p>
                        <p class="font-hasbold text-xs md:text-sm text-right">{{$store.state.bayar.checkout.harga_akhir ? $store.state.bayar.checkout.harga_akhir : 0| currency('Rp. ')}}</p>
                    </div>
                    <div class="mt-2">
                        <Checkbox class="font-hasroman w-full text-xs" v-model="verif">Saya menyetujui semua syarat & ketentuan yang telah ditentukan</Checkbox>
                        <h3 @click="pesananParsial" :class="verif == false ? 'bg-blue-200 text-white' : 'bg-blue-500 text-white'" class="cursor-pointer font-hasmedium inline-flex rounded-lg text-xs mt-3 py-2 px-4">
                            Bayar Sekarang
                        </h3>
                    </div>
                </div>
            </div>
            <div v-if="$store.state.bayar.check == 1 && $store.state.bayar.checkoutinten && $store.state.users.users" class="bg-white pb-10 rounded-r-lg border text-gray-800">
                <div class="py-3 md:px-4 px-3 border-b mb-5 font-hasbold text-sm">
                    Informasi tagihan anda
                    <p class="font-hasmedium text-xs">{{datenow}}</p>
                </div>
                <div class="md:px-4 px-3 grid grid-cols-1 gap-2">
                    <div class="grid grid-cols-2 gap-2 border-b pb-3">
                        <p class="font-hasroman text-xs md:text-sm">Harga Paket</p>
                        <p class="font-hasroman text-xs md:text-sm text-right">{{$store.state.bayar.checkoutinten.detail_pelajaran[0].pelajaran[0].harga_akhir + $store.state.bayar.checkoutinten.detail_pelajaran[1].pelajaran[0].harga_akhir 
                     + $store.state.bayar.checkoutinten.detail_pelajaran[2].pelajaran[0].harga_akhir | currency('Rp. ')}}</p>
                        <p class="font-hasroman text-xs md:text-sm">Discount</p>
                        <p class="font-hasroman text-xs md:text-sm text-right">{{$store.state.bayar.checkoutinten.detail_pelajaran[0] ? ($store.state.bayar.checkoutinten.detail_pelajaran[0].pelajaran[0].harga_akhir + $store.state.bayar.checkoutinten.detail_pelajaran[1].pelajaran[0].harga_akhir 
                     + $store.state.bayar.checkoutinten.detail_pelajaran[2].pelajaran[0].harga_akhir) - $store.state.bayar.checkoutinten.harga : 0| currency('Rp. ')}}</p>
                        <p class="font-hasroman text-xs md:text-sm">Total Pelajaran</p>
                        <p class="font-hasroman text-xs md:text-sm text-right">{{$store.state.bayar.checkoutinten.detail_pelajaran.length}}</p>
                        <p class="font-hasroman text-xs md:text-sm">Daftar Pelajaran</p>
                        <ul class="text-right">
                            <li>{{$store.state.bayar.checkoutinten.detail_pelajaran[0].pelajaran[0].pelajaran.nama_pelajaran}}</li>
                            <li>{{$store.state.bayar.checkoutinten.detail_pelajaran[1].pelajaran[0].pelajaran.nama_pelajaran}}</li>
                            <li>{{$store.state.bayar.checkoutinten.detail_pelajaran[2].pelajaran[0].pelajaran.nama_pelajaran}}</li>
                        </ul>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pb-4">
                        <p class="font-hasbold text-xs md:text-sm">Total Bayar</p>
                        <p class="font-hasbold text-xs md:text-sm text-right">{{$store.state.bayar.checkoutinten.harga ? $store.state.bayar.checkoutinten.harga : 0| currency('Rp. ')}}</p>
                    </div>
                    <div class="mt-2">
                        <Checkbox class="font-hasroman w-full text-xs" v-model="verif">Saya menyetujui semua syarat & ketentuan yang telah ditentukan</Checkbox>
                        <h3 @click="pesananIntensif" :class="verif == false ? 'bg-blue-200 text-white' : 'bg-blue-500 text-white'" class=" cursor-pointer font-hasmedium inline-flex rounded-lg text-xs mt-3 py-2 px-4">
                            Bayar Sekarang
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Vue2Filters from 'vue2-filters';
export default {
    name: 'Checkout',
    mixins: [Vue2Filters.mixin],
    props: {
        users: Object,
        checkout: Number
    },
    data() {
        return {
            datenow: null,
            verif: false,
            pesanansparsial: {
                token: this.$cookies.get('_bsf'),
                user_id: this.$store.state.users.users.id,
                paket: 'parsial',
                // harga: this.checkout.harga_akhir,
                type: 'pilih',
                pembayaran_id: this.$store.state.users.users.id,
            }
        }
    },
    mounted() {
        if(this.$cookies.get('_bsf') == null) return this.$router.push({path: '/register'});
        this.datenow = moment().format('yyyy/MM/DD');
    },
    methods: {
        pesananParsial(){
            if(this.verif)
                return this.$store.dispatch('bayar/add', this.$store.state.bayar.checkout);
            return false;
        },
        pesananIntensif(){
            if(this.verif)
                return this.$store.dispatch('bayar/addinten', this.$store.state.bayar.checkoutinten);
            return false;
        }
    },
}
</script>

<style>

</style>