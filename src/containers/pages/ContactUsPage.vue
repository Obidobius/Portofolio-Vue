<template>
    <div class="">
        <navigation></navigation>
        <contact-form
                v-bind:message='message'
                v-on:on-submit="submitHandler"
                v-bind:show-firstname-error="showFirstnameError"
                v-bind:show-lastname-error="showLastnameError"
                v-bind:show-email-error="showEmailError"
                v-bind:show-number-error="showNumberError" 
                v-bind:input-firstname-error="inputFirstnameError"
                v-bind:input-lastname-error="inputLastnameError"
                v-bind:input-email-error="inputEmailError"
                v-bind:input-number-error="inputNumberError">
        </contact-form>
    </div>
</template>

<script>
import ContactForm from '../../components/contactForm/ContactForm';
import Navigation from '../../components/navigation/Navigation';

export default {
    name:"ContactUsPage",
    components:{
        ContactForm,
        Navigation
    },
    data(){
        return{
            message:'Enter Contact Details',
                showFirstnameError: false,
                showLastnameError: false,
                showEmailError: false,
                showNumberError: false,
                inputFirstnameError: false,
                inputLastnameError: false,
                inputEmailError: false,
                inputNumberError: false
            }
        },
        methods:{
            submitHandler(firstname, lastname, email,number){
                console.log('logging in..');
                console.log(firstname, lastname, email,number);
                this.message = 'Logging in';
                
                    if (firstname == "") {
                        this.showFirstnameError = true;
                        this.inputFirstnameError = true;
                        this.message = 'Please enter first name';
                    } else {
                        this.showFirstnameError = false;
                        this.inputFirstnameError = false;
                    } 
                     if (lastname == "") {
                        this.showLastnameError = true;
                        this.inputLastnameError = true;
                        this.message = 'Please enter last name';
                    } else {
                        this.showLastnameError = false;
                        this.inputLastnameError = false;
                    } 
                     if (!this.validEmail(email)) {
                        this.showEmailError = true;
                        this.inputEmailError = true;
                        this.message = 'Please enter email address';
                    } else {
                        this.showEmailError = false;
                        this.inputEmailError = false;
                    } 
                    if (!this.validPhone(number)) {
                        this.showNumberError = true;
                        this.inputNumberError = true;
                        this.message = 'Please enter mobile number';
                    } else {
                        this.showNumberError = false;
                        this.inputNumberError = false;
                    } 
            },
            validEmail: function (email) {
                 var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                 return re.test(email);
        },
            validPhone:function(number){
                var er = /^([0-9]{3})+([ \.-]{1})([0-9]{3})+([ \.-]{1})([0-9]{4})+$/;
                return er.test(number);
            }
    }
}
</script>
