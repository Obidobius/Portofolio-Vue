<template>
    <div class="">
        <navigation></navigation>
        <div class="container col-md-12">
            <div class="row  allInfo d-flex justify-content-center">
                <div class=" extraInfo">
                    <h4>Names: {{singleCard.name}}</h4>
                    <hr id="hrCs">
                    <div class="extraInfo-text">
                        <h5>Rarity:</h5>
                            <p>{{singleCard.rarity}}</p>
                        <h5>Type:</h5>
                            <p> {{singleCard.type}}</p>
                        <h5>About:</h5>
                            <p> {{singleCard.text}}</p>
                            <h5>Toughness:</h5>
                            <p>{{singleCard.toughness}}</p>    
                    </div>
                </div>
                        <div class="card" >
                            <div id="card-contain" class="card-container">
                                <br>
                                <h4 class="card-title">{{ singleCard.name }}</h4>
                                <div class="card-body">
                                    <img class="card-img-top" v-bind:src="singleCard.imageUrl">
                            </div>
                            </div>
                        </div>
                        <br>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../../components/navigation/Navigation';
import CardContainer from '../../components/cardContainer/CardContainer';

export default {
    name:"CardSpecificPage",
    components:{
        Navigation,
        CardContainer
    }, 
    created(){
        this.TargetCard()
    },
    data(){
        return {
            singleCard: {
            }
        }
    },
    methods:{
            TargetCard:function(){
                    const url ='https://api.magicthegathering.io/v1/cards/' + this.$route.params.id;
                    fetch(`${url}`).then(response => response.json())
                    .then(data => {
                    this.singleCard = data.card
                        console.log(data.cards);
                        console.log('fetched cards')
                    })
                .catch(err =>{
                    console.log(err);
                });
                }
            },
}
</script>
<style lang="scss" scoped>
.allInfo{
    text-align: center;
    padding-top: 30px;
    margin: 0 auto;
}
.extraInfo{
    padding-top: 30px;
    padding-left: 13px;
    padding-right: 13px;
    background-color:#2c3e50;
    max-width: 360px;
    max-height: 485px;
    color: #fafafa;
    &-text{
        text-align: left;
    }
}
hr {
    height: 1px;
    color: white;
    background-color: white;
    border: none;
}
@media only screen and (max-width: 750px) {
    .extraInfo{
        width: 100%;
    }
    .card{
        width: 100%;
    }
}
</style>
