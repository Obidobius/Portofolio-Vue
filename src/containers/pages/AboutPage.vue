<template>
    <div class="">
        <navigation></navigation>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 information" >
                    <br>
                     <div id="moreInfoTrigger" >
                        <h3 v-on:click="contentChange">DEFEAT YOUR OPPONENT <i class="fa fa-chevron-down float-right" aria-hidden="true" ></i></h3>
                    </div>
                    <div id="">
                         <div  class="hideContent" :class="{ 'hideContent':isLoading, 'showContent': !isLoading }">
                            <p>
                                Each player starts the game with 20 life. Knock your opponent down to 0 life, and you win. The most common way to do this is to summon creatures and attack with them.
                            </p> <br><br> 
                            <p>
                                Creature cards are the most important part of many Magic decks. They’re really easy to spot—just look at the lower right of a card. If you see a pair of numbers separated by a slash, you’ve got a creature card. Once it’s on the battlefield, a creature continues to attack and defend for you until your opponent can find a way to take it out.
                            </p>   
                            <br><br>
                            <p>
                                Most games become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. Check out the section on casting creature spells.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Navigation from '../../components/navigation/Navigation';

export default {
    name:"AboutPage",
    components:{
        Navigation
    },
    data(){
        return {
        isLoading: true,
        }
    },
    methods:{
        contentChange(){
            this.isLoading = !this.isLoading;
        }
    }
}
</script>
<style lang="scss" scoped>
$backgrounColor:#2c3e50;
.information{
    background-color: $backgrounColor;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}
.hideContent{
    display: none;
}
.showContent{
    display:block;
}
h3{
    color: #fafafa;
}
p{
    color: #fafafa;
}
</style>
