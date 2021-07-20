<template>
  <div class="index">
      <Navigasi :theme="theme" @ubahtema="ubahtema"></Navigasi>
      <router-view></router-view>
  </div>
</template>

<script>
import Navigasi from '../components/Navigasi.vue';
export default {
    components: { Navigasi },
    props:{
        theme: Number
    },
    name: 'Index',
    methods:{
        ubahtema(value){
            this.$emit('changetheme', value);
        },
    }
}
</script>

<style>

</style>