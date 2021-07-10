<template>
  <div class="register-login">
      <div class="flex justify-center min-h-screen">
          <div class="md:w-5/6 w-full min-h-screen shadow-2xl bg-white block-regis rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen md:gap-2">
                <div class="md:px-8 px-4 py-16 registers" v-if="switchform == 0">
                    <h2 class="font-popbold text-lg md:text-2xl">Daftar account baru</h2>
                    <Form ref="formRegist" :model="register" :rules="validatorregister" class="w-full text-xs mt-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <FormItem class="font-popsembold" label="username" prop="username">
                                <Input v-model="register.username" class="font-popmed text-xs" placeholder="username kamu"></Input>
                            </FormItem>
                            <FormItem class="font-popsembold" label="nama lengkap" prop="flnm">
                                <Input v-model="register.flnm" class="font-popmed text-xs" placeholder="nama lengkap kamu"></Input>
                            </FormItem>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <FormItem class="font-popsembold" label="password" prop="password">
                                <Input type="password" v-model="register.password" class="font-popmed text-xs" password placeholder="password kamu"></Input>
                            </FormItem>
                            <FormItem class="font-popsembold" label="email" prop="eml">
                                <Input v-model="register.eml" class="font-popmed text-xs" placeholder="email kamu"></Input>
                            </FormItem>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <FormItem class="font-popsembold" label="pendidikan" prop="lvl">
                                <Select v-model="register.lvl" class="font-popmed text-xs" placeholder="pendidikan kamu">
                                    <Option value="SD">SD Sederajat</Option>
                                    <Option value="SMP">SMP/MTS Sederajat</Option>
                                    <Option value="SMA">SMA/SMK/MA Sederajat</Option>
                                    <Option value="UMUM">Lainnya</Option>
                                </Select>
                            </FormItem>
                            <FormItem class="font-popsembold" label="no handphone" prop="nhp">
                                <Input v-model="register.nhp" type="number" class="font-popmed text-xs" placeholder="no handphone kamu"></Input>
                            </FormItem>
                        </div>
                    </Form>
                    <div class="flex mt-5 md:mt-10">
                        <Button type="primary" @click="daftar">Daftar</Button>
                        <p class="my-auto md:ml-5 ml-2 md:text-left text-center font-popmed text-sm">Sudah punya account ? <span class="text-blue-500 cursor-pointer" @click="switchform = 1">Masuk</span></p>
                    </div>
                </div>
                <div class="login md:px-8 px-4 py-16" v-if="switchform == 1">
                    <h2 class="font-popbold text-lg md:text-2xl">Masuk dengan account kamu</h2>
                    <Form ref="formlogin" :model="login" :rules="validatorregister" class="w-full md:w-5/6 text-xs mt-10">
                        <FormItem class="font-popsembold" label="username" prop="username">
                            <Input v-model="login.username" class="font-popmed" placeholder="username kamu"></Input>
                        </FormItem>
                        <FormItem class="font-popsembold" label="password" prop="password">
                            <Input type="password" v-model="login.password" class="font-popmed" password placeholder="password kamu"></Input>
                        </FormItem>
                    </Form>
                    <div class="flex mt-5 md:mt-10">
                        <Button type="primary" @click="loginForm">Masuk</Button>
                        <p class="my-auto md:ml-5 ml-2 md:text-left text-center font-popmed text-sm">Belum punya account ? <span class="text-blue-500 cursor-pointer" @click="switchform = 0">Daftar</span></p>
                    </div>
                </div>
                <div class="my-auto px-4 md:block hidden">
                    <img src="../assets/image/superhero.svg" alt="libr" class="w-auto h-auto">
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
                if(valid) {
                    this.$store.dispatch('users/Register', this.register);
                    return this.$refs['formRegist'].resetFields();
                }
                else return false;
            });
        },
        loginForm(){
            this.$refs['formlogin'].validate(valid => {
                if(valid) {
                    this.$store.dispatch('users/Login', this.login);
                    return this.$refs['formlogin'].resetFields();
                }
                else return false;
            });
        }
    },
}
</script>

<style>

</style>