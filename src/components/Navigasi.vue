<template>
  <div class="navigasi">
        <div class="w-full absolute z-10">
            <div class="flex justify-start md:px-0 px-3 md:py-0 py-2 container mx-auto">
                <router-link to="/" class="h-16 w-20 md:w-20 md:h-16">
                    <img src="../assets/image/logos.png" alt="logo">
                </router-link>
                <div class="md:flex ml-auto my-auto hidden">
                    <router-link to="/kelas" class="text-base hover:text-yellow-400 font-popbold md:ml-10 text-white cursor-pointer">Kelas</router-link>
                    <router-link to="/biaya" class="text-base hover:text-yellow-400 font-popbold md:ml-10 text-white cursor-pointer">Biaya Belajar</router-link>
                    <router-link to="/konsultasi" class="text-base hover:text-yellow-400 font-popbold md:ml-10 text-white cursor-pointer">Konsultasi</router-link>
                </div>
                <div class="ml-8 px-4 py-1 my-auto h-full font-bold rounded-lg cursor-pointer bg-yellow-500 text-white">Masuk</div>
                <div class="md:hidden block my-auto ml-8 mb-auto">
                    <v-icon name="bars" class="cursor-pointer icons"/>
                </div>
            </div>
        </div>
        <div class="min-h-screen bg-nav-mobile md:hidden fixed top-0 z-50 xs:-left-96 -left-full w-full layer-menu bg-nav bg-menu">
            <div class="text-xs mt-3 ml-3 menu-mobile">
                <div class="flex justify-end mr-5 mb-5">
                    <!-- <div class="mt-auto mr-5">
                        <v-icon name="moon" class="cursor-pointer" @click="changeTheme('dark-theme')"  v-if="theme == 0"/>
                        <v-icon name="sun" class="cursor-pointer text-yellow-300" @click="changeTheme('light-theme')"  v-if="theme == 1"/>
                    </div> -->
                    <v-icon name="times" class="cursor-pointer icons"/>
                </div>
                <router-link to="/" class="closed poin-navigasi flex" exact>
                    <p class="font-popbold text-3xl my-auto">Home</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/kelas" class="closed poin-navigasi flex mt-3">
                    <p class="font-popbold text-3xl my-auto">Kelas</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/biaya" class="closed poin-navigasi flex mt-3">
                    <p class="font-popbold text-3xl my-auto">Biaya Belajar</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/konsultasi" class="closed poin-navigasi flex mt-3">
                    <p class="font-popbold text-3xl my-auto">Konsultasi</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
            </div>
        </div>
  </div>
</template>

<script>
import { Expo, TimelineMax, gsap } from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin';
import $ from 'jquery';

export default {
    name: "Navigasi",
    props:{
        theme: Number
    },
    created(){
        gsap.registerPlugin(CSSPlugin);
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