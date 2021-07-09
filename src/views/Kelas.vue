<template>
  <div class="kelas">
    <div v-if="$route.params.type == null &&$route.params.code == null" class="h-screen max-h-screen flex justify-center items-center">
      <div class="w-full">
        <h4 class="text-center mb-7 font-popbold text-xl">Pilih Kelas Yang Ingin Kamu Pelajari</h4>
        <div class="flex justify-center">
          <div class="md:mx-3 h-full md:w-3/12 transform hover:scale-105 bg-anim rounded-xl hover:shadow-xl shadow-lg cursor-pointer p-4">
            <router-link to="/kelas/soft-skill/nulis">
              <div class="flex justify-start items-center">
                <img class="text-center h-16 w-16" src="../assets/image/nalar_anim.gif" alt="nalar">
                <h6 class="md:ml-5 font-popbold text-gray-600 text-base md:text-2xl">Kelas Penalaran</h6>
              </div>
            </router-link>
          </div>
          <div class="md:mx-3 h-full md:w-3/12 transform hover:scale-105 bg-anim rounded-xl hover:shadow-xl shadow-lg cursor-pointer p-4">
            <router-link to="/kelas/soft-skill/ngoding">
              <div class="flex justify-start items-center">
                <img class="text-center h-16 w-16" src="../assets/image/code_anim.gif" alt="code">
                <h6 class="md:ml-5 font-popbold text-gray-600 text-base md:text-2xl">Kelas Ngoding</h6>
              </div>
            </router-link>
          </div>
          <div class="md:mx-3 h-full md:w-3/12 transform hover:scale-105 bg-white rounded-xl hover:shadow-xl shadow-lg cursor-pointer p-4">
            <router-link to="/kelas/akademik">
              <div class="flex justify-start items-center">
                <img class="text-center h-16 w-16" src="../assets/image/book_anim.gif" alt="book">
                <h6 class="md:ml-5 font-popbold text-gray-600 text-base md:text-2xl">Kelas Akademik</h6>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$route.params.type == 'akademik' &&$route.params.code == null">
      <KelasAll></KelasAll>
    </div>
    <div v-if="$route.params.type == 'soft-skill' && $route.params.code == 'ngoding'">
      <KelasCoding></KelasCoding>
    </div>
  </div>
</template>

<script>
import KelasAll from '../components/Kelas/KelasAll.vue';
import KelasCoding from '../components/Kelas/KelasCoding.vue';
export default {
  components: {KelasAll,KelasCoding},
  name: 'Kelas'
}
</script>

<style lang="scss">
.kelas{
  .bg-anim{
    background-color: #FEFDFD;
  }
}
</style>