<template>
  <div class="about" data-scroll-container>
    <section class="pt-32 px-2 md:px-0 mb-20" data-scroll-section>
      <div data-scroll>
        <h1 data-scroll class="font-hasbold text-center md:text-4xl text-3xl">Tumbuh Hebat Bersama</h1>
        <h6 data-scroll class="font-hasroman md:text-lg text-center mt-1 md:mt-2">Mulai Belajar adalah platform yang akan
          membantu kamu <br> untuk belajar apa saja dengan biaya yang lebih terjangkau</h6>
        <img data-scroll src="../assets/image/study_at_home.svg" alt="content_about" class="w-full md:mt-28 mt-16 md:max-h-screen md:h-screen">
      </div>
      <div class="flex justify-start md:container mx-auto md:mt-28 mt-16" data-scroll>
        <div data-scroll>
          <h1 data-scroll class="font-hasbold md:text-4xl text-3xl">Mulai Belajar Untuk Pendidikan Indonesia</h1>
          <p data-scroll class="font-hasroman md:text-base text-xs md:mt-10 mt-5">Mulai Belajar memiliki misi untuk menyediakan 
            dan memperluas akses terhadap pendidikan berkualitas melalui teknologi untuk semua siswa, 
            kapan saja dan di mana saja belajar apa saja tanpa batas.
            <br><br>Kami percaya bahwa pendidikan adalah hak setiap manusia. Kami juga meyakini bahwa pendidikan adalah tiket 
            untuk masa depan yang lebih baik. Maka dari itu, kami bertujuan untuk menyediakan layanan pendidikan dan materi 
            pembelajaran dari guru-guru terbaik Indonesia, yang bisa diakses oleh seluruh siswa di mana saja mereka berada 
            dengan biaya yang terjangkau.
            <br><br>Kami juga bertujuan untuk meningkatkan kualitas guru dengan menciptakan lapangan pekerjaan dan tambahan 
            penghasilan bagi guru di Indonesia. Mulai Belajar percaya, dengan meningkatnya kualitas guru, maka mutu pendidikan di 
            Indonesia juga akan menjadi lebih baik.
            <br><br>Mulai Belajar juga percaya bahwa teknologi memudahkan siswa untuk mengakses materi pembelajaran yang 
            berkualitas. Di mana pun mereka berada, Mulai Belajar dapat membantu proses belajar siswa tanpa batasan ruang 
            dan waktu. Kami juga meyakini bahwa teknologi dapat membantu siswa, guru, dan orang tua untuk menjalankan 
            aktivitasnya menjadi lebih efektif dan efisien.
            <br><br>Kami bertekad untuk terus mengembangkan layanan kami serta berkolaborasi dengan berbagai pihak 
            guna mencapai tujuan-tujuan kami.
          </p>
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
}
</script>