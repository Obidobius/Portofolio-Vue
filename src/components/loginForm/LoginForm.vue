<template>
    <div class="login-form">
        <h1>{{ message }}</h1>
        <form class="form-contain" @submit.prevent="onLoginClicked">
                <div class="form-group">
                    <input type="text" id="username" placeholder="Username" v-model="username" class="form-control"
                           v-bind:class="{ 'error-border': inputUsernameError }"/>
                    <div class="alert alert-danger" v-if="showUsernameError" role="alert">Please enter the correct username
                    </div>
                </div>

                <div class="form-group">
                    <input type="password" id="password" placeholder="Password" v-model="password" class="form-control"
                           v-bind:class="{ 'error-border': inputPasswordError }"/>
                    <div class="alert alert-danger" v-if="showPasswordError" role="alert">Please enter the correct password
                    </div>
                </div>
                <button class="login-form_button btn-lg" 
                    v-on:click="onLoginClicked" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'LoginForm',
        props: {
            message: String,
                showUsernameError: Boolean,
                showPasswordError: Boolean,
                inputUsernameError: Boolean,
                inputPasswordError: Boolean,
        },
        data(){
            return{
                username:'',
                password: '',
                
            }
        },
        methods:{
            onLoginClicked(){
                this.$emit('on-login', this.username, this.password);
            }
        }
    };
</script>

<style>
    h1{
        color: #fafafa;
    }
</style>
