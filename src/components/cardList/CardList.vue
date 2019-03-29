<template>
    <div id="card-list" class="row" v-if="cardList.length > 0">
        <card-container class="col-md-4 col-sm-12"  v-for="card in cardList" v-bind:key="card.id" v-bind:single-card="card"> </card-container>
    </div>

</template>


<script>
import CardContainer from '../cardContainer/CardContainer';

export default {
    name:"CardList",
    components:{
        CardContainer
    },
    props:[
        "cardList"
    ],
    created(){
        console.log(this.cardList)
    }
}
</script>
