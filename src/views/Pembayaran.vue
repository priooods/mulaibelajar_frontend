<template>
    <div class="pembayaran">
        <div class="w-full md:pb-16 pb-14 min-h-screen">
            <div class="text-center md:pt-40 pt-32">
                <h5 class=" font-popbold md:text-3xl text-lg">Checkout</h5>
                <p class="mt-2 font-popmed md:text-base text-sm">Belajar sekarang juga bareng di Kelas Premium <br> dan tingkatkan pengetahuan kamu</p>
            </div>
            <div class="md:flex md:mt-24 mt-20 md:px-0 px-3 justify-center">
                <div class="md:w-3/12 h-full pel shadow-md rounded-lg p-6">
                    <h3 class="font-popbold md:text-md text-sm text-red-400" v-if="$route.params.type == 'Parsial'">{{ $store.state.pesanan.pesanan.nick}}</h3>
                    <h4 class="font-popbold mt-2 text-white text-base md:text-xl">{{$route.params.type == 'Parsial' ? $store.state.pesanan.pesanan.titl :  $store.state.pesanan.paket.nme}}</h4>
                    <p v-if="$store.state.pesanan.pesanan.type == 'ngoding'" class="mt-4">
                        <span class="px-3 py-0.5 rounded-lg text-start font-popbold text-blue-500 text-xs inline-flex bg-blue-50">{{ $store.state.pesanan.pesanan.lvl }}</span>
                    </p>
                    <p v-else class="mt-4">
                        <span class="px-3 py-0.5 rounded-lg text-start font-popbold text-blue-500 text-xs inline-flex bg-blue-50">{{ $route.params.type == 'Paket' ? $store.state.pesanan.paket.jrs : $store.state.pesanan.pesanan.kelas ? $store.state.pesanan.pesanan.kelas.kls + ' '+ $store.state.pesanan.pesanan.kelas.tgkt : ''}}</span>
                        <span v-if="$route.params.type == 'Paket'" class="px-3 py-0.5 rounded-lg text-start font-popbold text-blue-500 text-xs inline-flex bg-blue-50 ml-3">{{$store.state.pesanan.paket.kelas.tgkt}}</span>
                    </p>
                    <p class="md:mt-4 mt-3 text-white font-popmed text-xs">{{$route.params.type == 'Paket' ? $store.state.pesanan.paket.dsc : $store.state.pesanan.pesanan.desc}}</p>
                    <div class="mt-5 text-gray-100" v-if="$route.params.type == 'Paket'">
                        <p class="text-xs font-popmed mb-3">Semua mata pelajaran :</p>
                        <ol v-for="(item,i) in $store.state.pesanan.paket.pelajaran" v-bind:key="i" class="font-popmed text-sm list-inside list-disc">
                            <li>{{item.titl}}</li>
                        </ol>
                    </div>
                    <div class="mt-5 text-white" v-if="$route.params.type == 'Parsial' && $store.state.pesanan.pesanan.silabus.length > 0">
                        <p class="text-xs font-popmed mb-3">Lihat semua silabus belajar <span v-if="!selengkapnya" @click="selengkapnya = !selengkapnya" class="text-xs text-blue-500 cursor-pointer"> Selengkapnya...</span></p>
                        <div v-if="selengkapnya">
                            <ol v-for="(item,i) in $store.state.pesanan.pesanan.silabus" v-bind:key="i" class="list-inside">
                                <li class="font-popbold text-xs mt-3">Pertemuan {{item.ptmn}}</li>
                                <ul class="mt-2 flex list-disc list-inside text-xs font-popmed" v-for="(data,index) in item.point" v-bind:key="index">
                                    <li></li>
                                    <div class="h-full">
                                        <p class="mb-1">{{data.ttl}}</p>
                                        <span class="font-poplight">{{data.desc}}</span>
                                    </div>
                                </ul>
                            </ol>
                        </div>
                        <div class="text-center mt-3" v-if="selengkapnya">
                            <p class="text-blue-500 font-popmed text-xs cursor-pointer inline-flex" @click="selengkapnya = !selengkapnya">perkecil kembali</p>
                        </div>
                    </div>
                </div>
                <div class="md:ml-8 md:mt-0 mt-7 md:w-4/12 shadow-md h-full">
                    <div class="bg-white rounded-lg p-6">
                        <h4 class="font-popbold text-sm md:text-base mb-3">Main Details</h4>
                        <div v-if="$route.params.type == 'Paket' || $route.params.type == 'Parsial'">
                            <ul class="list-none">
                                <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                    <p class="mr-auto font-popsembold">Akses Pelajaran</p>
                                    <p class="my-auto font-popmed">{{$route.params.type == 'Paket' ? '3 Pelajaran' : '1 Pelajaran'}}</p>
                                </li>
                                <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                    <p class="mr-auto font-popsembold">Pertemuan</p>
                                    <p class="my-auto font-popmed">8x Pertemuan</p>
                                </li>
                                <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                    <p class="mr-auto font-popsembold">Kelas</p>
                                    <p class="my-auto font-popmed">Live Meet</p>
                                </li>
                            </ul>
                        </div>
                        <h4 class="font-popbold text-sm md:text-base mb-3 mt-10">Payment Details</h4>
                        <ul class="list-none">
                            <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                <p class="mr-auto font-popsembold">{{$route.params.type == 'Paket' ? 'Harga Total Pelajaran' : 'Harga Kelas'}}</p>
                                <p class="my-auto font-popmed">{{$route.params.type == 'Paket' 
                                    ? $store.state.pesanan.paket.pelajaran[0].harga ? $store.state.pesanan.paket.pelajaran[0].harga.prc + 
                                    $store.state.pesanan.paket.pelajaran[1].harga.prc + $store.state.pesanan.paket.pelajaran[2].harga.prc : 0
                                    : $store.state.pesanan.pesanan.harga.prcd | currency('Rp. ')}}</p>
                            </li>
                            <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                <p class="mr-auto font-popsembold">Subsidi</p>
                                <p class="my-auto font-popmed text-red-500">- {{$route.params.type == 'Paket' ? 
                                    $store.state.pesanan.paket.pelajaran[0].harga ? ($store.state.pesanan.paket.pelajaran[0].harga.prc + 
                                    $store.state.pesanan.paket.pelajaran[1].harga.prc + $store.state.pesanan.paket.pelajaran[2].harga.prc) - $store.state.pesanan.paket.prc : 0
                                    :$store.state.pesanan.pesanan.harga.dsc | currency('Rp. ')}}</p>
                            </li>
                            <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                <p class="mr-auto font-popsembold">Total Transfer</p>
                                <p class="my-auto text-base font-popbold">{{ $route.params.type == 'Paket' ? $store.state.pesanan.paket.prc : $store.state.pesanan.pesanan.harga.prc | currency('Rp. ')}}</p>
                            </li>
                        </ul>
                        <h4 class="font-popbold text-sm md:text-base mb-3 mt-10">Transfer Pembayaran</h4>
                        <div class="mt-4">
                            <img src="../assets/image/bri_logo.svg" alt="logo_bank" class="h-6 w-auto">
                            <h6 class="font-popmed text-sm mt-4">Nurul Hikmah Fazri</h6>
                            <p class=" font-popbold text-lg mt-1">006 201 018 789 535</p>
                        </div>
                        <div @click="showpop = !showpop" class="mt-8 rounded-xl bg-blue-500 py-2 cursor-pointer text-white text-center font-popbold">Konfirmasi Pembayaran</div>
                        <div class="text-center mt-4">
                            <a class="inline-flex mx-auto"  target="_blank" href="https://www.notion.so/Jam-Operasional-2648295ec0a74401a753c31a591bc592"><p class="text-gray-400 font-popbold">Jam Operasional</p></a>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg p-6 mt-7">
                        <h4 class="font-popbold text-sm md:text-base mb-3">Informasi Penting</h4>
                        <p class="font-popmed text-xs md:text-sm w-full">Proses konfirmasi pembayaran kelas akan membutuhkan waktu sekitar 20 menit (dari pesan WhatsApp dikirim). Mohon menunggu dengan sabar dan terima kasih.</p>
                        <h4 class="font-popbold text-sm md:text-base mb-3 mt-10">Butuh Bantuan ? hubungi kami</h4>
                        <ul class="list-none">
                            <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                <p class="mr-auto font-popmed">Admin</p>
                                <p class="my-auto font-popmed">Nurul</p>
                            </li>
                            <li class="flex justify-start mt-3 md:text-sm text-xs">
                                <p class="mr-auto font-popmed">WhatsApp / Telegram</p>
                                <p class="my-auto font-popbold ">+62 859 2532 5096</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-model="showpop" :width="360">
            <p slot="header" class="text-center">
                <span class=" font-popsembold"> Konfimasi Pembayaran</span>
            </p>
            <div style="text-align:center">
                <p>Apakah anda sudah melakukan pembayaran dan ingin melakukan konfirmasi ke admin ?</p>
            </div>
            <div slot="footer" class="text-center">
                <Button type="error" @click="showpop =!showpop">Cancel</Button>
                <a class="w-full ml-4" :href="$route.params.type == 'Paket' ? 
                $router.resolve({path: '/confirmasi/' + $store.state.pesanan.paket.nme }).href
                : $router.resolve({path: '/confirmasi/' + $store.state.pesanan.pesanan.titl }).href">
                    <Button type="success" v-if="$route.params.type == 'Paket'"
                        @click="konfirmasiPaket($store.state.pesanan.paket)"
                        >Konfirmasi
                    </Button>
                    <Button type="success"  v-if="$route.params.type == 'Parsial'"
                        @click="konfirmasiParsial($store.state.pesanan.pesanan)"
                        >Konfirmasi
                    </Button>
                </a>
            </div>
        </Modal>
        <FooterWeb></FooterWeb>
    </div>
</template>

<script>
import FooterWeb from '../components/FooterWeb.vue';
import Vue2Filters from 'vue2-filters';
export default {
    name: 'Pembayaran',
    mixins: [Vue2Filters.mixin, global],
    components: { FooterWeb },
    data() {
        return {
            selengkapnya: false,
            showpop: false,
        }
    },
    mounted() {
        console.log(this.$store.state.pesanan.pesanan)
    },
    methods: {
        konfirmasiPaket(values){
            return window.open("https://api.whatsapp.com/send?phone=6285925325096/&text=" 
                + 'Halo, Saya ' + this.$store.state.users.users.flnm + '. Saya ingin melakukan konfirmasi pembayaran Paket '
                +  values.nme + ' dengan code paket ' + values.cde
                + '. Akses paket untuk ' + this.$store.state.users.users.eml
                + '. Berikut saya lampirkan foto bukti pembayaran :' , '_blank');
        },
        konfirmasiParsial(values){
            return window.open("https://api.whatsapp.com/send?phone=6285925325096/&text=" 
                + 'Halo, Saya ' + this.$store.state.users.users.flnm + '. Saya ingin melakukan konfirmasi pembayaran kelas '
                +  values.titl + ' dengan code pelajaran ' + values.cde
                + '. Akses kelas untuk ' + this.$store.state.users.users.eml
                + '. Berikut saya lampirkan foto bukti pembayaran :' , '_blank');
        }
    },
}
</script>

<style>
.pel{
    background: #202033;
}
</style>