<template>
  <div class="kelas-coding bg-white">
    <section>
      <div class="w-full tops h-screen relative overflow-hidden">
        <svg data-name="svg-tops" class="fill-current absolute bottom-0 right-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-2 items-center h-full w-full container mx-auto">
          <div class="text-gray-600">
            <h2 class="font-popbold md:text-4xl text-2xl">Wujudkan apps impian kamu sekarang juga bareng <span class="text-blue-500">Mulai Belajar</span></h2>
            <h5 class="font-popmed mt-4 md:text-base">Mulai dari sekarang kita akan bikin applikasi apa saja yang kamu mau. Mengekplore semua hal tentang dunia 
              programming jadi lebih mudah dan seru bareng para tutor berpengalaman.</h5>
            <div class="flex w-full justify-start mt-2">
              <h5 class="font-popbold mt-auto text-lg md:text-xl">#Mulai Ngoding</h5>
            </div>
          </div>
          <div class="md:block hidden">
            <img src="../../assets/image/coding_img.svg" class="h-5/6 w-5/6 ml-auto" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="h-screen w-full py-20">
      <h2 class="w-full mb-14 text-gray-600 text-center font-popbold md:text-2xl text-lg">Ada banyak banget bahasa pemrograman yang bisa kamu pelajari</h2>
      <carousel :autoplayHoverPause="true" :loop="true" :margin="18" :autoplay="true" :stagePadding="40" :nav="false" 
        :dots="false" :responsive="{0:{items:2},600:{items:6}}">
        <div v-for="(item,i) in bahasa" v-bind:key="i">
          <div><img class="h-16 w-16" :src="require('../../assets/image/' + item.src)" alt="logo"></div>
        </div>
      </carousel>
    </section>
    <FooterWeb></FooterWeb>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import FooterWeb from '../FooterWeb.vue';
export default {
  components: {FooterWeb,carousel},
  name: 'KelasCoding',
  data() {
    return {
      bahasa: [
        { src: 'logo_java.svg' },{ src: 'logo_cplus.svg' },
        { src: 'logo_js.svg' },{ src: 'logo_php.svg' },
        { src: 'logo_html.svg' },{ src: 'logo_css.svg' },
        { src: 'logo_ts.svg' }
      ]
    }
  },
}
</script>

<style lang="scss">
.kelas-coding{
  .tops{ background: #e6ecf5; }
  .tops svg{
    color: #e6ecf5;
    background: white;
  }
}
</style>