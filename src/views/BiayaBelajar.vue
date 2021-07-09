<template>
    <div class="biaya-belajar" data-scroll-container>
        <section class="content pt-32 md:mb-28 mb-16 px-2 md:px-0 min-h-screen" data-scroll-section>
          <div class="w-full text-center">
              <h1 class="font-popbold text-xl md:text-4xl">#MulaiBelajar</h1>
              <p class="font-popmed text-base md:text-lg md:mt-3 mt-2">Belajar jauh lebih banyak dan lebih dalam <br> dengan harga terjangkau di Mulai Belajar.</p>
          </div>
            <div class="md:mt-36 mt-32 md:flex justify-center container mx-auto w-full">
                <div class="rounded-lg shadow-xl border p-6 md:w-2/6 w-full h-full">
                    <img src="../assets/image/parsial.svg" alt="parsial" class="w-20 h-20 md:mb-5">
                    <h6 class="font-popbold text-left text-xl md:text-3xl md:mt-0 mt-5">Parsial</h6>
                    <p class="font-popmed text-left text-sm md:text-lg mt-3">paket belajar lebih terperinci untuk belajar lebih detail</p>
                    <p class="border my-9"></p>
                    <div v-for="item in listparsial" v-bind:key="item.index">
                        <div class="inline-flex w-full md:mt-3 mt-2">
                            <img src="../assets/image/ic_check.svg" alt="check">
                            <p class="md:ml-5 ml-3 font-popmed text-sm md:text-base">{{item.name}}</p>
                        </div>
                    </div>
                    <router-link to="/kelas">
                        <div class="mt-10 py-2 text-center bg-gray-200 rounded-2xl cursor-pointer hover:text-white hover:bg-blue-500 text-gray-700 font-popsembold text-base md:text-lg">
                            <p>Katalog Paket Parsial</p>
                        </div>
                    </router-link>
                </div>
                <div class="rounded-lg shadow-xl border p-6 md:w-2/6 w-full h-full md:mx-8 md:my-0 my-11">
                    <img src="../assets/image/intensif.svg" alt="intensif" class="w-20 h-20 md:mb-5">
                    <h6 class="font-popbold text-left text-xl md:text-3xl md:mt-0 mt-5">Intensif</h6>
                    <p class="font-popmed text-left text-sm md:text-lg mt-3">Paket belajar lebih lengkap untuk kamu yang ingin belajar lebih focus</p>
                    <p class="border my-9"></p>
                    <div v-for="item in listintensif" v-bind:key="item.index">
                        <div class="inline-flex w-full md:mt-3 mt-2">
                            <img src="../assets/image/ic_check.svg" alt="check">
                            <p class="md:ml-5 ml-3 font-popmed text-sm md:text-base">{{item.name}}</p>
                        </div>
                    </div>
                    <router-link to="/kelas/akademik">
                        <div class="mt-10 py-2 text-center rounded-2xl cursor-pointer text-white bg-blue-500 font-popsembold text-base md:text-lg">
                            <p>Katalog Paket Intensif</p>
                        </div>
                    </router-link>
                </div>
                <div class="rounded-lg shadow-xl border p-6 md:w-2/6 w-full h-full">
                    <img src="../assets/image/curicullum.svg" alt="konsul" class="w-24 h-20 md:mb-5">
                    <h6 class="font-popbold text-left text-xl md:text-3xl md:mt-0 mt-5">Konsultasi</h6>
                    <p class="font-popmed text-left text-sm md:text-lg mt-3">Diskusi secara live dengan para tutor untuk semua masalah belajar kamu</p>
                    <p class="border my-9"></p>
                    <div v-for="item in listkonsultasi" v-bind:key="item.index">
                        <div class="inline-flex w-full md:mt-3 mt-2">
                            <img src="../assets/image/ic_check.svg" alt="check">
                            <p class="md:ml-5 ml-3 font-popmed text-sm md:text-base">{{item.name}}</p>
                        </div>
                    </div>
                    <div class="mt-10 py-2 text-center bg-gray-200 rounded-2xl cursor-pointer hover:text-white hover:bg-blue-500 text-gray-700 font-popsembold text-base md:text-lg">
                        <p>Segera Hadir</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <FooterWeb></FooterWeb>
        </section>
    </div>
</template>

<script>
import FooterWeb from '../components/FooterWeb.vue';
export default {
    components: {FooterWeb},
    name: "BiayaBelajar",
    data() {
        return {
            listparsial: [
                { index: 0, name: 'Harga mulai dari Rp. 100,000' },
                { index: 1, name: 'Akses untuk 1 Mata Pelajaran' },
                { index: 2, name: '90 menit untuk sekali pertemuan' },
                { index: 3, name: '6x pertemuan untuk satu bulan' },
                { index: 4, name: 'Software Coding untuk kelas Pemrograman' },
                { index: 5, name: 'Materi belajar terbaru' },
                { index: 6, name: 'Belajar langsung online' }
            ],
            listintensif: [
                { index: 0, name: 'Harga mulai dari Rp. 300,000' },
                { index: 1, name: 'Akses untuk 3 Mata Pelajaran' },
                { index: 2, name: '90 menit untuk sekali pertemuan' },
                { index: 3, name: '8x pertemuan untuk satu bulan' },
                { index: 4, name: 'Software Coding & source code untuk kelas Pemrograman' },
                { index: 5, name: 'Materi belajar terbaru' },
                { index: 6, name: 'Kurikulum belajar terbaru' },
                { index: 7, name: 'Paket Soal & Pembahasan' },
                { index: 8, name: 'Belajar langsung online/offline' },
                { index: 9, name: 'Group private belajar' },
                { index: 10, name: 'Gratis bantuan pengerjaan PR' },
                { index: 11, name: 'Sertifikat Kelas untuk kelas Pemrograman' },
            ],
            listkonsultasi: [
                { index: 0, name: 'Harga mulai dari Rp. 10,000' },
                { index: 1, name: 'Minimal konsultasi mulai dari 30 menit' },
                { index: 2, name: 'Konsultasi bisa secara langsung dan via chat' },
                { index: 3, name: 'Bantuan masalah belajar sampai selesai' },
                { index: 4, name: 'Privasi kamu terjamin' },
                { index: 5, name: 'Bebas memilih tutor' },
            ]
        }
    },  
}
</script>

<style>

</style>