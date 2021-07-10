<template>
  <div class="clear-pembayaran">
      <div class="min-h-screen py-20 grid grid-cols-1 justify-center items-center">
        <div class="text-center">
          <img src="../assets/image/receive.svg" alt="receive" class="md:w-4/12 mx-auto md:h-4/12">
          <p class="font-popbold text-3xl">Berhasil Checkout</p>
          <p class="font-poplight mt-3 text-base">WhatsApp akan terbuka secara otomatis untuk <br class="md:block hidden"> melanjutkan proses konfirmasi pembayaran</p>
          <router-link to="/kelas" class="inline-flex">
            <div class="mt-8 rounded-lg px-10 py-2 bg-blue-500 text-white font-popbold text-base"><p>Selesai</p></div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Confirmasi',
}
</script>

<style>

</style>