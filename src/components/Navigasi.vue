<template>
  <div class="navigasi">
        <div 
            :class="$route.path == '/kelas/soft-skill/ngoding' || $route.path == '/kelas/akademik' ? 'border-b bg-white' 
            : $route.name == 'Home' ? 'bg-blue-500 border-none' : $route.path == '/kelas' || $route.path == '/konsultasi' ? ' absolute z-20 top-0 left-0' : 'border-none'" 
            class="w-full">
            <div class="flex justify-start md:px-0 px-3 md:py-0 py-2">
                <router-link to="/" exact class="mr-auto md:ml-10">
                    <img src="../assets/image/logos.png" alt="logo" class="md:block hidden h-16 w-20 md:w-20 md:h-16">
                    <h2 :class="$route.name == 'Home' ? 'text-white' : 'text-blue-500'" class="md:hidden block font-popbold text-xl py-1.5">Mulai Belajar</h2>
                </router-link>
                <div class="md:flex my-auto hidden" :class="$route.path == '/pembayaran/Paket' || $route.path == '/pembayaran/Parsial' ? 'mr-20' : ''">
                    <router-link :class="$route.name == 'Home' ? 'text-white hover:text-yellow-400' : 'text-gray-600 hover:text-blue-500'" to="/kelas" class="text-base font-popbold md:ml-10 cursor-pointer">Kelas</router-link>
                    <router-link :class="$route.name == 'Home' ? 'text-white hover:text-yellow-400' : 'text-gray-600 hover:text-blue-500'" to="/biaya" class="text-base font-popbold md:ml-10 cursor-pointer">Biaya Belajar</router-link>
                    <router-link :class="$route.name == 'Home' ? 'text-white hover:text-yellow-400' : 'text-gray-600 hover:text-blue-500'" to="/konsultasi" class="text-base font-popbold md:ml-10 cursor-pointer">Konsultasi</router-link>
                </div>
                <router-link class="md:flex hidden md:ml-8 px-4 items-center rounded-bl-sm font-bold cursor-pointer" :class="$route.name == 'Home' ? 'bg-gray-50' : 'bg-blue-500'" to="/register" v-if="!$cookies.get('_bsf') && $route.name != 'Pembayaran' && $route.name != 'Confirmasi'">
                    <p class="inline-flex text-md font-popbold" :class="$route.name == 'Home' ? 'text-blue-500' : 'text-white'"><span class="my-auto mr-0.5">Daftar account </span> <Icon type="ios-arrow-round-forward" size="30" class="my-auto"/></p>
                </router-link>
                <Poptip v-if="$cookies.get('_bsf') && $route.name != 'Pembayaran' && $route.name != 'Confirmasi'" placement="bottom-end" class="my-auto md:ml-8 md:mr-10 ml-auto md:block hidden">
                    <img src="../assets/image/account.svg" alt="profile" class="cursor-pointer w-7 h-7">
                    <ul slot="content" class="text-gray-700 py-1">
                        <li class="text-xs font-popsembold"><p>Halo, {{$store.state.users.users ? $store.state.users.users.username : ''}}</p></li>
                        <li class="text-xs font-popsembold mt-2 inline-flex"><p class="cursor-pointer hover:text-blue-500" @click="Logout">Keluar</p></li>
                    </ul>
                </Poptip>
                <div :class="$route.name == 'Home' ? 'text-white' : 'text-gray-700'" class="md:hidden block my-auto ml-5 mb-auto">
                    <v-icon name="bars" class="cursor-pointer icons"/>
                </div>
            </div>
        </div>
        <div class="min-h-screen bg-white md:hidden fixed top-0 z-50 -left-full w-full layer-menu bg-nav bg-menu">
            <div class="text-xs mt-3 ml-3 menu-mobile">
                <div class="flex justify-end mr-5 mb-5">
                    <div v-if="!$cookies.get('_bsf') && $route.name != 'Pembayaran' && $route.name != 'Confirmasi'" class="block md:hidden md:ml-8 px-4 py-1 my-auto h-full font-bold rounded-lg cursor-pointer bg-yellow-500"><router-link to="/register"><p class="text-white">Masuk</p></router-link></div>
                    <Poptip v-if="$cookies.get('_bsf') && $route.name != 'Pembayaran' && $route.name != 'Confirmasi'" placement="bottom-end" class="block md:hidden my-auto md:ml-8 ml-auto">
                        <img src="../assets/image/account.svg" alt="profile" class="cursor-pointer w-7 h-7">
                        <ul slot="content" class="text-gray-700 py-1">
                            <li class="text-xs font-popsembold"><p>Halo, {{$store.state.users.users ? $store.state.users.users.username : ''}}</p></li>
                            <li class="text-xs font-popsembold mt-2 inline-flex"><p class="cursor-pointer hover:text-blue-500" @click="Logout">Keluar</p></li>
                        </ul>
                    </Poptip>
                    <v-icon name="times" class="cursor-pointer icons my-auto ml-4"/>
                </div>
                <router-link to="/" class="closed text-gray-700 flex" exact>
                    <p class="font-popbold text-3xl my-auto">Home</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/kelas" class="closed text-gray-700 flex mt-3">
                    <p class="font-popbold text-3xl my-auto">Kelas</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/biaya" class="closed text-gray-700 flex mt-3">
                    <p class="font-popbold text-3xl my-auto">Biaya Belajar</p>
                    <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                </router-link>
                <router-link to="/konsultasi" class="closed text-gray-700 flex mt-3">
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
    data() {
        return {
            showDropdown: 0
        }
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
        Logout(){
            return this.$store.dispatch('users/Logout');
        }
    }
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>