<template>
    <div class="pembayaran">
        <div class="w-full md:pb-16 pb-14 min-h-screen">
            <div class="text-center md:pt-40 pt-32">
                <h5 class=" font-popbold md:text-3xl text-lg">Checkout</h5>
                <p class="mt-2 font-popmed md:text-base text-sm">Belajar sekarang juga bareng di Kelas Premium <br> dan tingkatkan pengetahuan kamu</p>
            </div>
            <div class="md:flex md:mt-24 mt-20 md:px-0 px-3 justify-center">
                <div class="md:w-3/12 h-full bg-white rounded-lg p-6">
                    <h3 class="font-popbold md:text-xl text-base text-blue-500">{{$store.state.pesanan.pesanan.nick}}</h3>
                    <h4 class="font-popbold text-sm md:text-base">{{$store.state.pesanan.pesanan.titl}}</h4>
                    <p class="my-1 px-3 py-0.5 rounded-lg text-start font-poplight text-white text-xs inline-flex bg-yellow-400">{{$store.state.pesanan.pesanan.kelas ? $store.state.pesanan.pesanan.kelas.kls + ' '+ $store.state.pesanan.pesanan.kelas.tgkt : ''}}</p>
                    <p class="md:mt-3 mt-2 font-popmed text-xs">{{$store.state.pesanan.pesanan.desc}}</p>
                    <div class="mt-5" v-if="$store.state.pesanan.pesanan.silabus">
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
                <div class="md:ml-8 md:mt-0 mt-7 md:w-4/12 h-full">
                    <div class="bg-white rounded-lg p-6">
                        <h4 class="font-popbold text-sm md:text-base mb-3">Main Details</h4>
                        <div v-if="$store.state.pesanan.pesanan.type == 'akademik'">
                            <ul class="list-none">
                                <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                    <p class="mr-auto font-popsembold">Akses Pelajaran</p>
                                    <p class="my-auto font-popmed">1 Pelajaran</p>
                                </li>
                                <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                    <p class="mr-auto font-popsembold">Pertemuan</p>
                                    <p class="my-auto font-popmed">{{$store.state.pesanan.pesanan.silabus.length}}x Pertemuan</p>
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
                                <p class="mr-auto font-popsembold">Harga Kelas</p>
                                <p class="my-auto font-popmed">{{$store.state.pesanan.pesanan.harga.prcd | currency('Rp. ')}}</p>
                            </li>
                            <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                <p class="mr-auto font-popsembold">Subsidi</p>
                                <p class="my-auto font-popmed text-red-500">- {{$store.state.pesanan.pesanan.harga.dsc | currency('Rp. ')}}</p>
                            </li>
                            <li class="flex justify-start mt-1.5 md:text-sm text-xs">
                                <p class="mr-auto font-popsembold">Total Transfer</p>
                                <p class="my-auto text-base font-popbold">{{$store.state.pesanan.pesanan.harga.prc | currency('Rp. ')}}</p>
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
                <a class="w-full ml-4" :href="$router.resolve({path: '/confirmasi/' + $store.state.pesanan.pesanan.titl }).href">
                    <Button type="success" 
                        @click="konfirmasi($store.state.pesanan.pesanan)"
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
    methods: {
        konfirmasi(values){
            return window.open("https://api.whatsapp.com/send?phone=6285925325096/&text=" 
                + 'Halo, Saya ' + this.$store.state.users.users.flnm + '. Saya ingin melakukan konfirmasi pembayaran kelas '
                + values.titl + ' dengan code pelajaran ' + values.cde
                + '. Akses kelas untuk ' + this.$store.state.users.users.eml
                + '. Berikut saya lampirkan foto bukti pembayaran :' , '_blank');
        }
    },
}
</script>

<style>

</style>