<template>
    <div class="text-center">
        <div class="card" >
            <div id="card-contain" class="card-container">
                <br>
                <h4 class="card-title">{{ singleCard.name }}</h4>
                <div class="card-body">
                    <img class="card-img-top" v-bind:src="singleCard.imageUrl">
                    <br><br>
                    <input  class="card-body_button view"  v-on:click="SelectedCard()" type="button" value="View More" />
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
export default {
    name:'CardContainer',
    props:['singleCard'],
    created(){
        console.log('Number of displayed cards')
    },
    methods:{
         SelectedCard:function(){
            this.$router.push({ name:'specific', params: { id: this.singleCard.id}});
        }
    }
}
</script>
