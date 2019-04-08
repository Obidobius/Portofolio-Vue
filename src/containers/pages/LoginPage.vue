<template>
    <div align="center" id="login-page" class="container">
        <div class="fadeOut row col-12 text-center">
           <img id="Two" src="http://media.wizards.com/2017/images/daily/c4rd4rt_rRHYhcZZVU.jpg" class="loginCover" alt="login image">
            <img id="Three" src="https://geekandsundry.com/wp-content/uploads/2016/09/Cube-Featured.jpg" class="loginCover" alt="login image">
        </div>
        <div class="blackness"></div>
        <login-form
            v-bind:message='message'
            v-on:on-login="loginHandler"
            v-bind:show-username-error="showUsernameError"
            v-bind:show-password-error="showPasswordError"
            v-bind:input-username-error="inputUsernameError"
            v-bind:input-password-error="inputPasswordError"
        ></login-form>
    </div>
</template>

<script>

import LoginForm from '../../components/loginForm/LoginForm';

    export default {
        name:"LoginPage",
        components:{
            LoginForm
        },
         data(){
            return{
                message:'Please login to start',
                showUsernameError: false,
                showPasswordError: false,
                inputUsernameError: false,
                inputPasswordError: false
            }
        },
        methods:{
            loginHandler(username, password){
                console.log('logging in..');
                console.log(username, password);
                this.message = 'Logging in';
                const cachedUser = localStorage.getItem('username');
                const cachedPassword = localStorage.getItem('password');
                console.log(cachedUser);
                console.log(cachedPassword);

                if (username != cachedUser || password != cachedPassword) {
                    if (username !== cachedUser) {
                        this.showUsernameError = true;
                        this.inputUsernameError = true;
                        this.message = 'Please enter the correct login details';
                    } else {
                        this.showUsernameError = false;
                        this.inputUsernameError = false;
                    } 
                    if (password !== cachedPassword) {
                        this.showPasswordError = true;
                        this.inputPasswordError = true;
                        this.message = 'Please enter the correct login details';
                    } else {
                        this.showPasswordError = false;
                        this.inputPasswordError = false;
                    }
                } else {
                    this.message = `Welcome back ${username}`;
                    this.showPasswordError = false;
                    this.showUsernameError = false;
                    this.inputPasswordError = false;
                    this.inputUsernameError = false;
                    sessionStorage.setItem('sessionId', (Math.floor(100000000 + Math.random() * 900000000)).toString()
                    );
                    this.$router.push("home");
                }
            }
        }
    };

</script>

<style lang="scss">    
.loginCover{
    border-radius: 100%;
    display: block;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

#Three {    
    border-radius: 100%;
    padding: 20px;
    width: 100%;
    height: 100%;
    max-height: 550px;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    }

#Two {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    animation-name: fade;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	animation-duration: 3s;
	animation-direction: alternate;
    border-radius: 100%;
    padding: 20px;
    width: 100%;
    height: 100%;
    max-width: 550px;
    max-height: 550px;
}

@keyframes fade {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 1;
	}
	75% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}

.fadeOut{
    text-align: center !important;
    position: relative;
    align-content: center;
}
</style>
