<template>
    <div class="">
        <navigation></navigation>
        <div class="container">
            <search-bar v-on:on-search-change="showChange"></search-bar>
            <card-list v-bind:card-list="filteredCards"></card-list> 
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
            searchQuery: ''
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
