<template>
  <div class="kelas">
      <div class="w-full h-auto md:py-20 py-10">
        <div class="md:px-0 px-3 md:container mx-auto">
            <p class="font-hasmedium md:text-base text-sm md:mb-2 mb-1">Mulai Belajar Sekarang</p>
            <h2 class="font-hasbold md:text-5xl text-3xl">Pilih kelas yang <br> ingin kamu pelajari</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-5 md:mt-20 mt-10 md:px-10">
            <div class="bg-boxs rounded-lg kelas-item text-left border shadow-lg py-14 px-8 cursor-pointer">
                <h2 class="font-hasbold text-4xl">Matematika</h2>
                <p class="mt-4 font-hasroman text-sm">
                    Asah keterampilan mu dalam menyelesaikan semua persoalan matematika baik di sekolah atau di kehidupan sehari-hari
                </p>
                <p class="mt-5 font-hasroman">Tersedia mulai dari jenjang 
                    <span class="font-hasmedium">Sekolah Dasar</span> sampai <span class="font-hasmedium">Sekolah Menengah Atas</span></p>
            </div>
            <div class="bg-boxs rounded-lg kelas-item text-left border shadow-lg py-14 px-8 cursor-pointer">
                <h2 class="font-hasbold text-4xl">Ngoding</h2>
                <p class="mt-4 font-hasroman text-sm">
                    Gak punya dasar ngoding ? jangan khawatir ! Belajar ngoding web sampai mobile apps, dari paling dasar sekarang jadi lebih mudah dengan belajar secara <span class="font-hasmedium uppercase">live</span> bersama instruktur handal dan berpengalaman
                </p>
                <p class="mt-5 font-hasroman">Tersedia mulai dari jenjang 
                    <span class="font-hasmedium">Very Beginner</span> sampai <span class="font-hasmedium">Advance</span></p>
            </div>
            <div class="bg-boxs rounded-lg kelas-item text-left border shadow-lg py-14 px-8 cursor-pointer">
                <h2 class="font-hasbold text-4xl">Design</h2>
                <p class="mt-4 font-hasroman text-sm">
                    Keluarkan semua bakat seni mu di kelas design, buat design 2D sampai 3D dari awal sampai jadi akan lebih mudah dengan belajar secara <span class="font-hasmedium uppercase">live</span> bersama instruktur handal dan berpengalaman
                </p>
                <p class="mt-5 font-hasroman">Tersedia mulai dari jenjang 
                    <span class="font-hasmedium">Very Beginner</span> sampai <span class="font-hasmedium">Advance</span></p>
            </div>
            <div class="bg-boxs rounded-lg kelas-item text-left border shadow-lg py-14 px-8 cursor-pointer">
                <h2 class="font-hasbold text-4xl">Bahasa Indonesia</h2>
                <p class="mt-4 font-hasroman text-sm">
                    Kata orang bijak, kalau kita menguasai bahasa kita bisa menguasai dunia. Sastra adalah cara kita berkomunikasi dengan siapa saja dimana saja 
                </p>
                <p class="mt-5 font-hasroman">Tersedia mulai dari jenjang 
                    <span class="font-hasmedium">Sekolah Dasar</span> sampai <span class="font-hasmedium">Sekolah Menengah Atas</span></p>
            </div>
            <div class="bg-boxs rounded-lg kelas-item text-left border shadow-lg py-14 px-8 cursor-pointer">
                <h2 class="font-hasbold text-4xl">Biologi</h2>
                <p class="mt-4 font-hasroman text-sm">
                    Kenalan dengan semua makhluk hidup yang ada di bumi dengan Biologi. Biologi membuat kita lebih dekat dengan semua makhluk hidup di bumi.  
                </p>
                <p class="mt-5 font-hasroman">Tersedia mulai dari jenjang 
                    <span class="font-hasmedium">Sekolah Dasar</span> sampai <span class="font-hasmedium">Sekolah Menengah Atas</span></p>
            </div>
            <div class="flex justify-center items-center md:py-0" v-if="view == false">
                <router-link to="/kelas">
                    <div class="inline-flex hover:text-blue-500 cursor-pointer">
                        <h2 class="font-hasbold text-base md:text-xl">Lihat Kelas Lain</h2>
                        <v-icon name="long-arrow-alt-right" class="ml-3 my-auto"/>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        view: Boolean
    }
}
</script>

<style>

</style>