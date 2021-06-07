<template>
  <div class="index">
      <div class="w-full fixed top-0 left-0 right-0 z-10 md:px-0 px-2 py-3">
          <div class="md:container mx-auto">
              <div class="flex justify-start">
                  <h1 class="text-xl font-hasbold">Mulai Belajar</h1>
                  <div class="ml-auto my-auto">
                    <v-icon name="moon" class="cursor-pointer" @click="changeTheme('dark-theme')"  v-if="theme == 0"/>
                    <v-icon name="sun" class="cursor-pointer text-yellow-300" @click="changeTheme('light-theme')"  v-if="theme == 1"/>
                  </div>
                  <div class="md:hidden block">
                      <v-icon name="bars" class="my-auto cursor-pointer"/>
                  </div>
              </div>
          </div>
      </div>
      <div class="h-auto w-full">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        theme: Number
    },
    name: 'Index',
    methods: {
        changeTheme(value){
            this.$emit('changetheme', value);
        },
    },
}
</script>

<style>

</style>