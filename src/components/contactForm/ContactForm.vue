<template>
    <div class="container contact">
        <br>
        <h2 id="cuh">Contact Us</h2>
        <form action="">
            <!--First Name-->
             <div class="form-group">
                    <input autofocus type="text" id="firstname" placeholder="First Name" v-model="firstname" class="form-control"
                           v-bind:class="{ 'error-border': inputFirstnameError }"/>
                    <div class="alert alert-danger" v-if="showFirstnameError" role="alert">Please enter first name
                    </div>
            </div>
            <!--Last Name-->
            <div class="form-group">
                    <input type="text" id="lastname" placeholder="Last Name" v-model="lastname" class="form-control"
                           v-bind:class="{ 'error-border': inputLastnameError }"/>
                    <div class="alert alert-danger" v-if="showLastnameError" role="alert">Please enter last name
                    </div>
            </div>
            <!--Email Adress-->
            <div class="form-group">
                <input type="text" id="email" placeholder="Email Adress" v-model="email" class="form-control"
                        v-bind:class="{ 'error-border': inputEmailError }"/>
                <div class="alert alert-danger" v-if="showEmailError" role="alert">Please enter email adress</div>
            </div>
            <!--Number-->
            <div class="form-group">
                <input type="text" id="number" placeholder="Mobile Number" v-model="number" class="form-control"
                        v-bind:class="{ 'error-border': inputNumberError }" />
                <div class="alert alert-danger" v-if="inputNumberError" role="alert">Please enter mobile Number</div>
            </div>
                <button class="login-form_button contact-button btn-lg" 
                    v-on:click="onSubmitClicked" type="submit">Submit</button>

        </form>
    </div>
</template>

<script>
export default {
    name:'ContactForm',
    props: {
        message: String,
            showFirstnameError: Boolean,
            showLastnameError: Boolean,
            showEmailError: Boolean,
            showNumberError: Boolean,
            inputFirstnameError: Boolean,
            inputLastnameError: Boolean,
            inputEmailError: Boolean,
            inputNumberError: Boolean
        
    },
    data(){
        return {
            firstname:'',
            lastname:'',
            email:'',
            number:''
        }
    },
    methods: {
        onSubmitClicked(){
            this.$emit('on-submit',this.firstname, this.lastname, this.email, this.number)
        }
    }
}
</script>

<style lang="scss" scoped>

.form-group {
    padding-top: 10px;
}
.error-border {
    border: 2px solid red;
}

</style>
