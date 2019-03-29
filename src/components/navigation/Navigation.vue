<template>
    <div class="navigation row ">
        <div class="navigation--contain">
            <button class="navigation--contain__button shadow-none" type="submit" v-on:click="changeHome()">Home</button>
        </div>
        <div class="navigation--contain">
            <button class="navigation--contain__button" type="submit" v-on:click="changeAbout()">About</button>
        </div>
       <div class="navigation--contain">
            <button class="navigation--contain__button navigation--contain__button" type="submit" v-on:click="changeContact()">Contact</button>
       </div> 
    </div>
</template>

<script>
export default {
    name:"Navigation",
 
    methods:{
        changeHome:function(){
            this.$router.push("home");
        },
        changeAbout:function(){
            this.$router.push("about-us");
        },
        changeContact:function(){
            this.$router.push("contact");
        }
    }
}
</script>

