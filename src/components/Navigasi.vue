<template>
  <div class="navigasi">
      <div class="w-full fixed top-0 left-0 right-0 z-10 md:px-0 px-2 py-3">
          <div class="md:container mx-auto">
              <div class="flex justify-start">
                  <router-link to="/">
                    <h1 class="text-xl my-auto font-hasbold cursor-pointer">Mulai Belajar</h1>
                  </router-link>
                  <div class="inline-flex my-auto ml-auto">
                      <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Kelas</h5>
                      <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Biaya Belajar</h5>
                      <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Komunitas</h5>
                      <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Tips</h5>
                  </div>
                  <div class="ml-auto my-auto md:block hidden">
                    <v-icon name="moon" class="cursor-pointer" @click="changeTheme('dark-theme')"  v-if="theme == 0"/>
                    <v-icon name="sun" class="cursor-pointer text-yellow-300" @click="changeTheme('light-theme')"  v-if="theme == 1"/>
                  </div>
                  <div class="md:hidden block ml-auto my-auto">
                      <v-icon name="bars" class="cursor-pointer"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navigasi",
    props:{
        theme: Number
    },
    methods:{
        changeTheme(value){
            this.$emit('ubahtema', value);
        },
    }
}
</script>

<style>

</style>