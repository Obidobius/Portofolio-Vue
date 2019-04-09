<template>
    <div class="">
        <navigation></navigation>
        <br>
        <h1 id="MagicTitle">Magic the Gathering</h1>
        <img id="Magiclogo" src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/5/59/Dfc-ignite.svg?version=5e0f34f51f33e890612c6cf48c4022ec" alt="Magic the Gathering Logo">
        <div class="container">
            <search-bar v-on:on-search-change="showChange"></search-bar>
            <card-list v-bind:card-list="filteredCards"></card-list>
            <div id="noCard" v-if="searchCard">
               <h4> No Cards found by that name</h4> 
            </div>
        </div>        
    </div>
</template>
 
 
<script>
import CardList from '../../components/cardList/CardList';
import Navigation from '../../components/navigation/Navigation';
import SearchBar from '../../components/searchBar/SearchBar';

export default {
    name:'HomePage',
    components:{
        CardList,
        Navigation,
        SearchBar
    },
    methods:{
        showChange: function(value) {
            console.log(value);
            this.searchQuery = value;
        }
    },
    created(){
            //cards
            var searchCard = ""

            const url ='https://api.magicthegathering.io/v1/cards';
            fetch(`${url}`).then(response => response.json())
            .then(data => {
                this.allCards = data.cards.filter(cards => cards.imageUrl);
                console.log(data.cards);
                console.log('fetched cards')
            })
        .catch(err =>{
            console.log(err);
        });
    },
    data(){
        return{
            allCards:[],
            searchQuery: '',
            searchCard: true
        }
    },
    //FILTER FUNCTION
     computed: {
        filteredCards(){
            return this.allCards.filter(cards => {
             return cards.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                    cards.rarity.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        }
    },
}
</script>