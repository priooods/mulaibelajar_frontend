<template>
  <div class="pembayaran">
      <div class="flex justify-center">
          <div v-if="$store.state.bayar.checkinten == 0" class="md:w-2/6 border w-full relative h-screen min-h-screen py-4 px-3 shadow-xl">
            <h2 class="font-hasmedium text-sm pb-2 sticky top-0 left-0 bg-nav-mobile border-b ">Form Pembayaran Paket Parsial
                <p>{{datenow}}</p>
            </h2>
            <div class="mt-5 w-full">
                <p class="inline-flex w-full font-hasmedium text-lg">{{this.$store.state.users.users.nama_lengkap}}</p>
                <p class="inline-flex w-full font-hasmedium text-xs">{{this.$store.state.users.users.email}}</p>
                <div class="grid grid-cols-2 gap-1 mt-3 md:grid-cols-2">
                    <!-- <p class="font-hasmedium text-xs">Paket Kelas</p>
                    <p class="font-hasmedium text-xs">{{$store.state.bayar.checkout.pelajaran ? $store.state.bayar.checkout.pelajaran.nama_pelajaran : ''}}</p> -->
                    <p class="font-hasmedium text-xs">Kelas</p>
                    <p class="font-hasmedium text-xs text-right">{{$store.state.bayar.bayar.pelajaran ? $store.state.bayar.bayar.pelajaran.nama_pelajaran : ''}}</p>
                    <p class="font-hasmedium text-xs">Kode Kelas</p>
                    <p class="font-hasmedium text-xs text-right">{{$store.state.bayar.bayar.kelas ? $store.state.bayar.bayar.kelas.kode_kelas : ''}}</p>
                    <p class="font-hasmedium text-xs">Detail Kelas</p>
                    <p class="font-hasmedium text-xs text-right">{{$store.state.bayar.bayar.kelas ? $store.state.bayar.bayar.kelas.kelas == 0 ? $store.state.bayar.bayar.kelas.jenjang :
                     $store.state.bayar.bayar.kelas.kelas + ' ' + $store.state.bayar.bayar.kelas.jenjang : '' }}</p>
                    <p class="font-hasmedium text-xs">Harga</p>
                    <p class="font-hasmedium text-xs text-right">{{$store.state.bayar.bayar.harga_akhir ? $store.state.bayar.bayar.harga_akhir : 0| currency('Rp. ')}}</p>
                </div>
                <div class="mt-8">
                    <p class="font-hasmedium text-xs mb-3"><span class="text-red-500 text-sm">* </span>Cara pembayaran & Proses belajar</p>
                    <div class="flex justify-start">
                        <p class="font-hasmedium text-xs mr-4">1</p>
                        <p class="font-hasroman text-xs">Lakukan pembayaran dengan jumlah nominal di atas melalui m-Transfer Mandiri ke rekening 123456789 a/n PRIO DWI SEMBODO. </p>
                    </div>
                    <div class="flex justify-start">
                        <p class="font-hasmedium text-xs mr-3">2</p>
                        <p class="font-hasroman text-xs">Konfirmasikan bahwa anda telah melakukan pembayaran disertai bukti transfer (bisa di-screenshot) dan screenshot layar ini ke email pembayaran@mulaibelajar.co.id</p>
                    </div>
                    <div class="flex justify-start">
                        <p class="font-hasmedium text-xs mr-3">3</p>
                        <p class="font-hasroman text-xs">Kami akan verifikasi pembayaran dalam waktu 1 x 24 jam untuk mengaktifkan account anda agar bisa mulai belajar di mulaibelajar</p>
                    </div>
                    <div class="flex justify-start">
                        <p class="font-hasmedium text-xs mr-3">3</p>
                        <p class="font-hasroman text-xs">Kami akan menghubungi anda dalam waktu 1 x 24 jam setelah pembayaran terverifikasi untuk mengundang anda dalam room belajar berkelanjutan dengan tutor kelas anda</p>
                    </div>
                </div>
            </div>
          </div>
          <div v-if="$store.state.bayar.checkinten == 1" class="md:w-2/6 border w-full relative h-screen min-h-screen py-4 px-3 shadow-xl">
            <h2 class="font-hasmedium text-sm pb-2 sticky top-0 left-0 bg-nav-mobile border-b ">Form Pembayaran Paket Intensif
                <p>{{datenow}}</p>
            </h2>
            <div class="mt-5 w-full">
                <p class="inline-flex w-full font-hasmedium text-lg">{{this.$store.state.users.users.nama_lengkap}}</p>
                <p class="inline-flex w-full font-hasmedium text-xs">{{this.$store.state.users.users.email}}</p>
                <div class="grid grid-cols-2 gap-1 mt-3 md:grid-cols-2">
                    <p class="font-hasmedium text-xs">Paket Intensif</p>
                    <p class="font-hasmedium text-xs text-right">{{$store.state.bayar.bayarinten ? $store.state.bayar.bayarinten.jurusan : ''}}</p>
                    <p class="font-hasmedium text-xs">Pilihan Pelajaran</p>
                    <ul class="text-right">
                        <li>{{$store.state.bayar.bayarinten.detail_pelajaran[0].pelajaran[0].pelajaran.nama_pelajaran}}</li>
                        <li>{{$store.state.bayar.bayarinten.detail_pelajaran[1].pelajaran[0].pelajaran.nama_pelajaran}}</li>
                        <li>{{$store.state.bayar.bayarinten.detail_pelajaran[2].pelajaran[0].pelajaran.nama_pelajaran}}</li>
                    </ul>
                    <p class="font-hasmedium text-xs">Kelas</p>
                    <p class="font-hasmedium text-xs text-right">{{$store.state.bayar.bayarinten.kelas ? $store.state.bayar.bayarinten.kelas.kelas + ' ' + $store.state.bayar.bayarinten.kelas.jenjang : ''}}</p>
                    <p class="font-hasmedium text-xs">Harga</p>
                    <p class="font-hasmedium text-xs text-right">{{$store.state.bayar.bayarinten.harga ? $store.state.bayar.bayarinten.harga : 0| currency('Rp. ')}}</p>
                </div>
                <div class="mt-8">
                    <p class="font-hasmedium text-xs mb-3"><span class="text-red-500 text-sm">* </span>Cara pembayaran & Proses belajar</p>
                    <div class="flex justify-start">
                        <p class="font-hasmedium text-xs mr-4">1</p>
                        <p class="font-hasroman text-xs">Lakukan pembayaran dengan jumlah nominal di atas melalui m-Transfer Mandiri ke rekening 123456789 a/n PRIO DWI SEMBODO. </p>
                    </div>
                    <div class="flex justify-start">
                        <p class="font-hasmedium text-xs mr-3">2</p>
                        <p class="font-hasroman text-xs">Konfirmasikan bahwa anda telah melakukan pembayaran disertai screenshot bukti transfer dan screenshot layar ini ke email pembayaran@mulaibelajar.co.id</p>
                    </div>
                    <div class="flex justify-start">
                        <p class="font-hasmedium text-xs mr-3">3</p>
                        <p class="font-hasroman text-xs">Kami akan verifikasi pembayaran dalam waktu 1 x 24 jam untuk mengaktifkan account anda agar bisa mulai belajar di mulaibelajar</p>
                    </div>
                    <div class="flex justify-start">
                        <p class="font-hasmedium text-xs mr-3">3</p>
                        <p class="font-hasroman text-xs">Kami akan menghubungi anda dalam waktu 1 x 24 jam setelah pembayaran terverifikasi untuk mengundang anda dalam room belajar berkelanjutan dengan tutor kelas anda</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'Pembayaran',
    mounted() {
        this.datenow = moment().format('yyyy/MM/DD,  hh:mm');
        console.log(this.$store.state.bayar.bayarinten);
    },
    data() {
        return {
            datenow: null,
        }
    },
}
</script>

<style>

</style>