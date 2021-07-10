<template>
  <div class="home">
    <section class="w-full tops bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 h-screen relative overflow-hidden">
      <svg data-name="wave" class="fill-current absolute bottom-0 right-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path class="shape-fill" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
      </svg>
      <div class="grid md:grid-cols-2 md:px-0 px-3 grid-cols-1 items-center h-full w-full container mx-auto">
        <div class="text-white">
          <h2 class="font-popbold md:text-4xl text-2xl">Belajar jadi lebih mudah dimana saja dan kapan saja</h2>
          <h5 class="font-popmed mt-4 md:text-base">Platform belajar online tanpa batas dengan pelajaran yang di sederhanakan untuk membantu kamu memahami setiap materi belajar</h5>
          <div class="flex w-full justify-start md:mt-0 mt-1">
            <h5 class="font-popbold mt-auto text-lg md:text-xl">#Mulai Belajar</h5>
            <h5 class="font-popbold mb-auto text-type text-lg md:text-xl ml-1 text-yellow-400" id="type"></h5>
          </div>
          <router-link to="/kelas"><div class="mt-6 font-popbold text-white px-4 py-2 rounded-lg cursor-pointer bg-yellow-500 inline-flex"><p>Belajar Sekarang</p></div></router-link>
        </div>
        <div class="mt-auto md:block hidden">
          <img src="../assets/image/studys.svg" class="h-5/6 w-5/6 ml-auto -mb-1.5" alt="">
        </div>
      </div>
    </section>
    <section class="py-20 w-full container relative mx-auto md:px-0 px-3">
      <img src="../assets/image/math.svg" alt="math" class="absolute md:block hidden top-44 float h-14 w-16 left-5">
      <img src="../assets/image/code.svg" alt="code" class="absolute md:block hidden top-1/4 float h-14 w-16 right-5">
      <img src="../assets/image/atom.svg" alt="atom" class="absolute md:block hidden bottom-1/4 float h-14 w-16 left-20">
      <img src="../assets/image/biology.svg" alt="biology" class="absolute md:block hidden bottom-48 float h-14 w-16 right-5">
      <img src="../assets/image/chemical.svg" alt="chemical" class="absolute md:block hidden bottom-2/4 my-auto float h-14 w-16 right-44">
      <h2 class="font-popbold md:text-3xl text-gray-700 text-center text-xl">Gimana Mulai Belajar bantu maksimalin belajar kamu</h2>
      <div class="md:flex md:mt-20 mt-5 justify-start md:w-3/6 w-full mx-auto">
        <div class="md:block hidden w-1 border-r border-gray-800 border-dashed"></div>
        <div class="md:-ml-6">
          <div class="flex justify-start">
            <div class="md:flex items-center justify-center my-auto hidden"><img src="../assets/image/player.svg" alt="player" class="h-full w-full"></div>
            <div class="md:ml-20">
              <img src="../assets/image/webs.svg" alt="live" class="md:h-5/6 md:w-5/6 w-full h-full">
              <h5 class="font-popbold md:text-2xl text-xl md:mt-0 -mt-8">Live Streaming!</h5>
              <p class="md:mt-2 font-popmed text-sm">Belajar secara live bareng tutor Mulai Belajar yang udah seperti Kakak atau sahabatmu sendiri bakalan bikin kamu jadi lebih cepet paham semua materi pelajaran</p>
            </div>
          </div>
          <div class="md:mt-10 mt-16">
            <div class="flex justify-start">
              <div class="md:flex items-center justify-center my-auto hidden"><img src="../assets/image/mind.svg" alt="mind" class="h-full w-full"></div>
              <div class="md:ml-20">
                <img src="../assets/image/learn.svg" alt="learn" class="md:h-5/6 md:w-5/6 w-full h-full">
                <h5 class="font-popbold md:text-2xl text-xl md:mt-0 -mt-8">Bikin Cerdas Beneran!</h5>
                <p class="md:mt-2 font-popmed text-sm">Mulai Belajar akan ajak kamu menelusuri sesuatu sampai ke akarnya. seperti kenapa Bumi bisa bulat sampai kenapa kambing bunyinya mbee. Gak ada lagi tuh jawaban "Katanya sih dari sananya begitu".</p>
              </div>
            </div>
          </div>
          <div class="md:mt-10 mt-14">
            <div class="flex justify-start">
              <div class="md:flex items-center justify-center my-auto hidden"><img src="../assets/image/voucher.svg" alt="voucher" class="h-full w-full"></div>
              <div class="md:ml-20">
                <img src="../assets/image/grades.svg" alt="grades" class="md:h-4/6 md:w-4/6 w-full h-full">
                <h5 class="font-popbold md:text-2xl text-xl md:mt-0 -mt-12">Bikin Nagih!</h5>
                <p class="md:mt-2 font-popmed text-sm">Emang bisa yah nagih belajar ? Di Mulai Belajar, 
                  belajar itu berarti berpetualang mencari hal baru, 
                  sambil memecahkan teka-teki ilmu setiap harinya. ini yang akan bikin kamu selalu penasaran sampai lupa kalau kamu ternyata sudah banyak belajar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full md:my-0 my-10 h-auto mid-svg bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500">
      <svg data-name="mids" class="fill-current w-full border-none top-svg text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
      </svg>
      <div class="-my-1.5 md:py-24 py-16 bg-blue-500 md:px-0 px-3">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="text-white">
            <h2 class="font-popbold md:text-4xl text-xl ">Tingkatkan Keahlian Softskill <br class="md:block hidden"> Kamu Sekarang Juga !</h2>
            <p class="mt-5 font-popmed md:text-base text-sm">sudah waktunya nih buat kamu ningkatin keahlian softskill kamu 
              <br class="md:block hidden"> sekarang juga. Bareng Tutor Mulai Belajar kamu bakalan di asah <br class="md:block hidden"> kemampuan softskill jauh lebih dalam.</p>
          </div>
          <div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div v-for="(item,i) in listsofskill" v-bind:key="i">
                <div class="rounded-lg shadow-2xl md:px-6 px-4 md:py-5 py-6 bg-white">
                  <div class="rounded-3xl populer inline-flex text-white py-1 px-2">
                    <img src="../assets/image/fire.svg" alt="fire" class="h-4 w-4"><p class="ml-2 text-xs font-popmed">Popular</p>
                  </div>
                  <h5 class="mt-3 text-2xl text-blue-500 font-popbold">{{item.title}}</h5>
                  <h6 class="font-popbold text-xl mt-5">{{item.name}}</h6>
                  <p class="font-popmed mt-2 line-clamp-4">{{item.desc}}</p>
                  <div class="mt-8">
                    <router-link :to="'/kelas/'+ item.code">
                      <div class="rounded-2xl cursor-pointer hover:shadow-lg bg-blue-500 text-white text-base font-popbold text-center py-1.5">
                        <p>Mulai Belajar</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg data-name="mids" class="fill-current bot-svg " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
      </svg>
    </section>
    <section class="mt-11">
      <h2 class="font-popbold md:text-4xl text-center text-xl">Mau Belajar Apa Hari ini ?</h2>
      <div class="md:mt-20 mt-12">
        <carousel :autoplayHoverPause="true" :loop="true" :margin="18" 
        :autoplay="true" :stagePadding="40" :nav="false" :dots="false" 
        :responsive="{0:{items:1},600:{items:4}}">
          <div v-for="(item,i) in listpelajaran" v-bind:key="i">
            <div class="rounded-xl my-8 shadow-lg px-5 pb-7">
              <div class="populer rounded-b-lg inline-block text-white py-1 px-2">
                <p class="mr-auto text-xs font-popmed">Popular</p>
              </div>
              <h3 class="font-popbold mt-3 text-xl text-blue-500">{{item.title}}</h3>
              <h4 class="font-popbold md:mt-3 mt-2 text-lg">{{item.name}}</h4>
              <p class="md:mt-3 mt-2 font-popmed text-xs">{{item.desc}}</p>
              <div class="mt-8">
                <div class="rounded-2xl cursor-pointer hover:shadow-lg bg-blue-500 text-white text-base font-popbold text-center py-1.5">
                  <p>Mulai Belajar</p>
                </div>
              </div>
            </div>
          </div>
        </carousel>
        <div class="mt-6 text-center">
          <router-link to="/kelas/akademik"><p class="font-popsembold text-gray-700 hover:text-blue-500 inline-flex text-sm cursor-pointer">Lihat Lainnya</p></router-link>
        </div>
      </div>
    </section>
    <section class="py-14 bg-blue-100 my-20 h-auto">
      <h4 class="font-popbold text-2xl text-blue-500 text-center">Kata Mereka yang Pernah Belajar Bareng di <span class="text-yellow-500">Mulai Belajar</span></h4>
      <div class="md:mt-20 mt-12">
        <carousel :autoplayHoverPause="true" :loop="true" 
        :margin="18" :autoplay="true" :stagePadding="40" :nav="false" 
        :dots="false" :responsive="{0:{items:1},600:{items:3}}">
          <div v-for="(item,i) in listReview" v-bind:key="i">
            <div class="rounded-xl my-8 shadow-lg px-5 py-3">
              <div class="inline-flex justify-end">
                <div class="md:w-8 md:h-8 w-7 h-7"><img src="../assets/image/account.svg" alt="profile"></div>
                <div class="ml-5 h-full">
                  <h6 class="font-popbold text-sm">{{item.name}}</h6>
                  <p class="font-popmed text-xs">{{item.subs}}</p>
                </div>
              </div>
              <div class="mt-4">
                <span class="font-popmed text-xs md:text-sm">"{{item.desc}}"</span>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </section>
    <section class="h-auto md:py-32 py-10 md:px-0 px-2 flex justify-center items-center">
      <div class="text-center">
        <h2 class="font-popbold md:text-5xl text-2xl">Mulai Belajar Sekarang</h2>
        <h6 class="font-popsembold md:text-xl text-sm mt-1 md:mt-2">Belajar apa saja jadi lebih mudah. dimanapun dan kapanpun</h6>
        <router-link to="/kelas">
          <div class="w-auto inline-flex text-center md:mt-20 mt-14">
            <p class="border py-2 px-6 rounded-xl text-center font-popbold cursor-pointer bg-blue-500 hover:bg-yellow-500 text-white shadow-2xl">Belajar Sekarang</p>
          </div>
        </router-link>
      </div>
    </section>
    <FooterWeb></FooterWeb>
    <a href="https://wa.me/6285925325096/?text=Hallo+kak,+Aku+mau+daftar+kelas+di+Mulai+Belajar+nih,+Tolong+bantu+aku+untuk+daftar+dong" class="fixed z-10 bottom-10 right-12 p-3 hidden rounded-tl-xl rounded-tr-xl rounded-bl-xl whatsapp md:inline-flex cursor-pointer">
      <img src="../assets/image/whatsapp.svg" alt="wa" class="h-5 w-5"><p class="ml-3 font-popmed text-sm text-gray-100">Support Center</p>
    </a>
  </div>
</template>

<script>
import TypeIt from "typeit";
import AOS from 'aos';
import carousel from 'vue-owl-carousel';
import FooterWeb from '../components/FooterWeb.vue';
export default {
  components: {FooterWeb,carousel},
  name: 'Home',
  mounted() {
    this.typeit();
    AOS.init();
  },
  data(){
    return {
      listsofskill: [
        { 
          title: 'Mulai Ngoding',
          name: 'Pemrograman',
          code: 'soft-skill/ngoding',
          desc: 'Mulai dari sekarang kita akan bikin applikasi apa saja yang kamu mau. Mengekplore semua hal tentang dunia'
              + " programming jadi lebih mudah dan seru bareng para tutor berpengalaman"
        },
        { 
          title: 'Mulai Nulis',
          name: 'Penalaran',
          code: 'soft-skill/nulis',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th'
        }
      ],
      listReview: [
        {
          name: 'Harbi Martin',
          subs: 'Mahasiswa',
          desc: 'Gokil banget sih akhirnya ketemu juga tempat belajar ngoding yang jelas dan seru, '
                + ' Ternyata ngoding bisa segampang ini yah. Makasih banget Mulai Belajar gua mau belajar ngoding lebih banyak lagi'
        },
        {
          name: 'Mahez Arya',
          subs: 'Pelajar',
          desc: 'Makasih banyak tutor Mulai Belajar, asik banget belajarnya.. dulu Matematika jadi pelajaran paling serem banget, '
                + ' Cuman ternyata setelah dipelajarin asik juga yah Matematika'
        },
        {
          name: 'Ajeng',
          subs: 'Mahasiswa',
          desc: 'Makasih banyak tutor Mulai Belajar, lagi masa pandemi gini jadi lebih bermanfaat bisa belajar bareng nambah pengetahuan, '
                + ' Dijamin seru banget sih asli belajar disin apalagi tutor nya lucu banget, konsep belajarnya juga sederhana tapi jelas. Recommended banget'
        }
      ],
      listpelajaran: [
        { 
          title: 'Mulai Berhitung',
          name: 'Matematika',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th'
        },
        { 
          title: 'Mulai Menjelajah',
          name: 'Biologi',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th'
        },
        { 
          title: 'Mulai Explorasi',
          name: 'Kimia',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th'
        },
        { 
          title: 'Mulai Meneliti',
          name: 'Fisika',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th'
        },
        { 
          title: 'Mulai Bersastra',
          name: 'B. Indonesia',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th'
        },
      ]
    }
  },
  methods: {
    typeit(){
      new TypeIt("#type", {
        speed: 150,
        loop: true,
        startDelay: 900
      })
      .type("Coding", { delay: 1500 })
      .delete(-6, { speed: 200, delay: 1000 })
      .type('Matematika', { delay: 1500 })
      .delete(-10, { speed: 200, delay: 1000 })
      .type('Sastra', { delay: 1500 })
      .delete(-6, { speed: 200, delay: 1000 })
      .type('Kimia', { delay: 1500 })
      .delete(-5, { speed: 200, delay: 1000 })
      .type('Fisika', { delay: 1500 })
      .delete(-6, { speed: 200, delay: 1000 })
      .type('Biologi', { delay: 1500 })
      .delete(-7, { speed: 200, delay: 1000 })
      .go();
    },
    testing(){
      console.log('click');
    },
    getLinkWhastapp(number) {
      var url = 'https://api.whatsapp.com/send?phone=' 
        + number
      return url
    }
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
.home{
  .populer{
    background-color: #F86231;
  }
  .tops svg{
    color: #F4F7FC;
  }
  .mid-svg .top-svg{
    background: #F4F7FC;
  }
  .whatsapp{ background: #62D843; }
  .mid-svg .bot-svg{ color: #F4F7FC; }
  .float{
    animation: float 6s ease-in-out infinite;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
}
</style>