<template>
    <div class="">
        <navigation></navigation>
        <div class="container main col-md-12 d-flex justify-content-center">
            <div class=" row aboutContainer  ">
                    <div class="col-sm-12 information" >
                        <br>
                        <div id="moreInfoTrigger" >
                            <h3 v-on:click="contentChange">DEFEAT YOUR OPPONENT <i class="fa fa-chevron-down float-right" aria-hidden="true" ></i></h3>
                            <p v-on:click="contentChange">Press for more info</p>
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
                    <div id="aboutSide">
                    <img id="tet" src="https://geekandsundry.com/wp-content/uploads/2016/09/Cube-Featured.jpg" class="" alt="login image">
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

#aboutSide{
    max-width: 600px;
    overflow: hidden;
    min-height: 100%;
    background-color: $backgrounColor;
}
#tet{
    max-width: 100%;
    height: auto;
}
.main{
    margin: 0;
}
#aboutContainer{
    text-align: center;
    padding-top: 30px;
    margin: 0 auto;
    max-width: 600px;
}

.information{
    background-color: $backgrounColor;
    max-width: 400px;
    margin-left: 0;
    margin-right:0;
}
.hideContent{
    display: none;
    transition: all 0.3s ease-in-out;
}
.showContent{
    display:block;
    transition: all 0.3s ease-in-out;
}
h3{
    color: #fafafa;
}
p{
    color: #fafafa;
}

</style>
