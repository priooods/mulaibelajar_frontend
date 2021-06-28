<template>
  <div class="navigasi">
      <div class="w-full fixed top-0 z-30">
          <div class="container mx-auto">
              <div class="flex justify-start md:px-0 px-3 md:py-0 py-2">
                  <router-link to="/" class="h-16 w-20 md:w-20 md:h-16">
                    <img src="../assets/image/logos.png" alt="logo">
                  </router-link>
                  <div class="md:flex my-auto mx-auto hidden">
                      <div class="text-sm font-hasbold md:ml-10">
                          <router-link to="/kelas" class="poin-navigasi cursor-pointer">Kelas</router-link>
                      </div>
                      <div class="text-sm font-hasbold md:ml-10">
                          <router-link to="/biaya" class="poin-navigasi cursor-pointer">Biaya Belajar</router-link>
                      </div>
                      <div class="text-sm font-hasbold md:ml-10">
                          <router-link to="/konsultasi" class="poin-navigasi cursor-pointer">Konsultasi</router-link>
                      </div>
                      <!-- <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Komunitas</h5>
                      <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Diskusi Bareng</h5>
                      <h5 class="text-base font-hasbold cursor-pointer md:ml-10 hover:text-indigo-600">Tips</h5> -->
                  </div>
                  <router-link v-if="$store.state.users.logincheck == 0" to="/register" class="ml-auto my-auto">
                    <div class="px-5 py-1 bg-blue-500 hover:bg-yellow-500 text-white rounded-xl"><p class="font-hasbold text-sm">Masuk</p></div>
                  </router-link>
                    <Poptip v-if="$store.state.users.logincheck == 1" trigger="hover" class="my-auto ml-auto" title="Informasi Account">
                        <div v-if="$store.state.users.logincheck == 1"
                        class="cursor-pointer px-5 py-1 bg-blue-500 hover:bg-yellow-500 text-white rounded-xl">
                            <p class="font-hasbold text-sm">Account</p></div>
                        <div slot="content" class="text-gray-700">
                            <div class="mb-2">
                                <p class="font-hasmedium text-sm">{{$store.state.users.users ? $store.state.users.users.nama_lengkap : ''}}</p>
                                <p class="font-hasmedium text-sm mt-1">{{$store.state.users.users ? $store.state.users.users.email : ''}}</p>
                            </div>
                            <p @click="logouts" class="cursor-pointer">Logout</p>
                        </div>
                    </Poptip>
                  <div class="ml-8 my-auto md:block hidden">
                    <v-icon name="moon" class="cursor-pointer" @click="changeTheme('dark-theme')"  v-if="theme == 0"/>
                    <v-icon name="sun" class="cursor-pointer text-yellow-300" @click="changeTheme('light-theme')"  v-if="theme == 1"/>
                  </div>
                  <div class="md:hidden block my-auto ml-8 mb-auto">
                      <v-icon name="bars" class="cursor-pointer icons"/>
                  </div>
              </div>
          </div>
      </div>
      <div class="min-h-screen bg-nav-mobile md:hidden fixed top-0 z-50 xs:-left-96 -left-full w-full layer-menu bg-nav bg-menu">
            <div class="text-xs mt-3 ml-3 menu-mobile">
                <div class="flex justify-end mr-5 mb-5">
                    <div class="mt-auto mr-5">
                        <v-icon name="moon" class="cursor-pointer" @click="changeTheme('dark-theme')"  v-if="theme == 0"/>
                        <v-icon name="sun" class="cursor-pointer text-yellow-300" @click="changeTheme('light-theme')"  v-if="theme == 1"/>
                    </div>
                    <v-icon name="times" class="cursor-pointer icons"/>
                </div>
                <router-link to="/" class="closed poin-navigasi flex" exact>
                    <p class="font-hasbold text-3xl my-auto">Home</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/kelas" class="closed poin-navigasi flex mt-3">
                    <p class="font-hasbold text-3xl my-auto">Kelas</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/biaya" class="closed poin-navigasi flex mt-3">
                    <p class="font-hasbold text-3xl my-auto">Biaya Belajar</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/konsultasi" class="closed poin-navigasi flex mt-3">
                    <p class="font-hasbold text-3xl my-auto">Konsultasi</p>
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
            tl.staggerFrom(".layer-menu .menu-mobile .closed",1,{ opacity: 0, x: -700, ease: Expo.easeOut }, 0.3);
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
        logouts(){
            return this.$store.dispatch('users/Logout', null);
        }
    }
}
</script>

<style>

</style>