<template>
  <div class="navigasi">
      <div class="w-full fixed top-0 left-0 right-0 z-10 md:px-0 px-3">
          <div class="md:container mx-auto">
              <div class="flex justify-start">
                  <router-link to="/">
                    <img src="../assets/image/logos.png" alt="logo" class="h-16 w-20 md:w-auto md:h-auto">
                  </router-link>
                  <div class="md:inline-flex mb-auto mt-4 ml-auto hidden">
                      <router-link to="/kelas">
                          <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Kelas</h5>
                      </router-link>
                      <router-link to="/biaya">
                          <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Biaya Belajar</h5>
                      </router-link>
                      <!-- <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Komunitas</h5>
                      <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Diskusi Bareng</h5>
                      <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Tips</h5> -->
                  </div>
                  <div class="ml-auto mb-auto md:block md:mt-4 hidden">
                    <v-icon name="moon" class="cursor-pointer" @click="changeTheme('dark-theme')"  v-if="theme == 0"/>
                    <v-icon name="sun" class="cursor-pointer text-yellow-300" @click="changeTheme('light-theme')"  v-if="theme == 1"/>
                  </div>
                  <div class="md:hidden block mt-4 ml-auto mb-auto">
                      <v-icon name="bars" class="cursor-pointer icons"/>
                  </div>
              </div>
          </div>
      </div>
      <div class="min-h-screen bg-boxs md:hidden fixed z-20 xs:-left-96 -left-full w-full layer-menu bg-nav bg-menu">
            <div class="text-xs mt-3 ml-3 menu-mobile">
                <div class="flex justify-end mr-5 mb-5">
                    <div class="mt-auto mr-5">
                        <v-icon name="moon" class="cursor-pointer" @click="changeTheme('dark-theme')"  v-if="theme == 0"/>
                        <v-icon name="sun" class="cursor-pointer text-yellow-300" @click="changeTheme('light-theme')"  v-if="theme == 1"/>
                    </div>
                    <v-icon name="times" class="cursor-pointer icons"/>
                </div>
                <router-link to="/" class="closed flex" exact>
                    <p class="font-hasbold text-3xl my-auto">Home</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/kelas" class="closed flex mt-3">
                    <p class="font-hasbold text-3xl my-auto">Kelas</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/biaya" class="closed flex mt-3">
                    <p class="font-hasbold text-3xl my-auto">Biaya Belajar</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/" class="closed flex mt-3">
                    <p class="font-hasbold text-3xl my-auto">Komunitas</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/" class="closed flex mt-3">
                    <p class="font-hasbold text-3xl my-auto">Tips</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
            </div>
        </div>
  </div>
</template>

<script>
import { Expo, TimelineMax } from "gsap";
import $ from 'jquery';
export default {
    name: "Navigasi",
    props:{
        theme: Number
    },
    mounted() {
        this.menumobileanim();
    },
    methods:{
        changeTheme(value){
            this.$emit('ubahtema', value);
        },
        menumobileanim(){
            const tl = new TimelineMax({paused: true});
            tl.to('.layer-menu', 1, { left: '0%', ease: Expo.easeInOut});
            tl.staggerFrom(".layer-menu .menu-mobile .closed",1,{ opacity: 0, x: -250, ease: Expo.easeOut }, 0.3);
            tl.reverse();
            $(document).on('click',".navigasi .icons", function(){
                tl.reversed(!tl.reversed());
            });
            $(document).on('click',".navigasi .title", function(){
                tl.reversed(!tl.reversed());
            });
            $(document).on('click',".menu-mobile .closed", function(){
                tl.reversed(!tl.reversed());
            });
        },
    }
}
</script>

<style>

</style>