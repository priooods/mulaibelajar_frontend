<template>
  <div class="register-login">
      <div class="flex justify-center min-h-screen">
          <div class="md:w-5/6 w-full min-h-screen shadow-2xl block-regis rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen md:gap-2">
                <div class="md:px-8 px-4 py-16 registers" v-if="switchform == 0">
                    <h2 class="font-hasbold text-lg md:text-2xl">Daftar account baru</h2>
                    <Form ref="formRegist" :model="register" :rules="validatorregister" class="w-full text-xs mt-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <FormItem label="username" prop="username">
                                <Input v-model="register.username" class="font-hasroman text-xs" placeholder="username kamu"></Input>
                            </FormItem>
                            <FormItem label="nama lengkap" prop="nama_lengkap">
                                <Input v-model="register.nama_lengkap" class="font-hasroman text-xs" placeholder="nama lengkap kamu"></Input>
                            </FormItem>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <FormItem label="password" prop="password">
                                <Input type="password" v-model="register.password" class="font-hasroman text-xs" password placeholder="password kamu"></Input>
                            </FormItem>
                            <FormItem label="email" prop="email">
                                <Input v-model="register.email" class="font-hasroman text-xs" placeholder="email kamu"></Input>
                            </FormItem>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <FormItem label="pendidikan" prop="level">
                                <Select v-model="register.level" class="font-hasroman text-xs" placeholder="pendidikan kamu">
                                    <Option value="SD Sederajat">SD Sederajat</Option>
                                    <Option value="SMP/MTS Sederajat">SMP/MTS Sederajat</Option>
                                    <Option value="SMA/SMK/MA Sederajat">SMA/SMK/MA Sederajat</Option>
                                    <Option value="UMUM">Lainnya</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="no handphone" prop="no_hp">
                                <Input v-model="register.no_hp" type="number" class="font-hasroman text-xs" placeholder="no handphone kamu"></Input>
                            </FormItem>
                        </div>
                    </Form>
                    <div class="flex mt-5 md:mt-10">
                        <Button type="primary" @click="daftar">Daftar</Button>
                        <p class="my-auto md:ml-5 ml-2 md:text-left text-center font-hasmedium text-sm">Sudah punya account ? <span class="text-blue-500 cursor-pointer" @click="switchform = 1">Masuk</span></p>
                    </div>
                </div>
                <div class="login md:px-8 px-4 py-16" v-if="switchform == 1">
                    <h2 class="font-hasbold text-lg md:text-2xl">Masuk dengan account kamu</h2>
                    <Form ref="formlogin" :model="login" :rules="validatorregister" class="w-full md:w-5/6 text-xs mt-10">
                        <FormItem label="username" prop="username">
                            <Input v-model="login.username" class="font-hasroman text-xs" placeholder="username kamu"></Input>
                        </FormItem>
                        <FormItem label="password" prop="password">
                            <Input type="password" v-model="login.password" class="font-hasroman text-xs" password placeholder="password kamu"></Input>
                        </FormItem>
                    </Form>
                    <div class="flex mt-5 md:mt-10">
                        <Button type="primary" @click="loginForm">Masuk</Button>
                        <p class="my-auto md:ml-5 ml-2 md:text-left text-center font-hasmedium text-sm">Belum punya account ? <span class="text-blue-500 cursor-pointer" @click="switchform = 0">Daftar</span></p>
                    </div>
                </div>
                <div class="my-auto px-4 md:block hidden">
                    <img src="../assets/image/librs.svg" alt="libr" class="w-auto h-auto">
                    <h5 class="mt-8 font-hasbold text-3xl">Berlajar apa aja sekarang jadi lebih mudah untuk kamu</h5>
                    <p class="font-hasmedium text-base mt-2">Jadikan proses belajar kamu jadi lebih terarah dan asik bareng Mulai Belajar</p>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import modelform from '../form/modelform';
import validator from '../form/validator';
export default {
    mixins: [modelform,validator],
    name: 'Auth',
    data() {
        return {
            switchform: 0
        }
    },
    methods: {
        daftar(){
            this.$refs['formRegist'].validate(valid => {
                this.register.password_verified = this.register.password;
                if(valid) return this.$store.dispatch('users/Register', this.register);
                else return false;
            });
        },
        loginForm(){
            this.$refs['formlogin'].validate(valid => {
                if(valid) return this.$store.dispatch('users/Login', this.login);
                else return false;
            });
        }
    },
}
</script>

<style>

</style>