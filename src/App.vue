<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  (function () {
        localStorage.setItem('username', 'admin');
        localStorage.setItem('password', 'password');
  })()

export default {
  name: 'app',
  components: {
   
  }
}
</script>

<style lang="scss">

                    //---------------------Variables--------------------//
$backgrounColor:#2c3e50;
$backgrounColorHover:#3f566b;
$neutralBlack:rgb(18, 16, 22);
$neutralWhite:#fafafa;
$neutralGray: gray;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $backgrounColor;
  background-color: #99803c;
}

.blackness{
    background-color:$neutralBlack;
    height: 50px;
}

.btn{
  background-color:$backgrounColor !important;
  color: $neutralWhite !important;
}
                        //---------------------Home Page--------------------//
#MagicTitle{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
#noCard{
  color: $neutralWhite;
}
                        //---------------------Log in--------------------//
.login-form{
  background-color: $backgrounColor;
  padding: 35px;
          &_button{
            background-color:$neutralBlack;
            color: $neutralWhite;
            border: 3px solid $neutralBlack;
        }
        &_button:hover{
          color:$neutralGray;
          background-color: black;
          border: 3px solid $neutralBlack;
          transition: 0.7s;
        }
}
.form-contain{
  max-height: 300px;
}
.alert{
  border-top-left-radius: 0% !important;
  border-top-right-radius: 0% !important;
}
.error-border {
  border-bottom-left-radius: 0% !important;
  border-bottom-right-radius: 0% !important;
}
                        //---------------------About Page--------------------//
.extraInfo{
    padding-top: 30px;
    background-color:$backgrounColor;
}
#moreInfoTrigger:hover{
    cursor: pointer;
}
html{
   background-color: #99803c;
 }

                        //---------------------Contact Page--------------------//
.contact{
  background-image: url("http://media.wizards.com/2017/images/daily/c4rd4rt_rRHYhcZZVU.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  &-button{
    margin-bottom: 15px;
  }
}
#cuh{
  color: $neutralWhite;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.form-control{
    color: white !important;
    background-color: rgba(0, 0, 0, 0.5) !important;
}

                        //---------------------Specific Card--------------------//

.card{
  border: none !important;
  border-top-right-radius: 2% !important;
  border-top-left-radius: 2% !important;
  border-bottom-right-radius: 2% !important;
  border-bottom-left-radius: 2% !important;
  background-color: rgb(226, 224, 224) !important;
  &-img-top{
    border-radius: 4% !important;
  }
  &-body{
    border: none !important;
    &_button{
      min-height: 50px;
      background-color: $backgrounColor;
      color:$neutralWhite;
    }
    &_button:hover{
      color: white;
      background-color: $backgrounColorHover;
      border: 1px solid $neutralWhite !important;
      -moz-box-shadow: inset 0 0 10px #000000;
      -webkit-box-shadow: inset 0 0 10px #000000;
      box-shadow: inset 0 0 10px #000000;
    }
  }
}
    .card:hover{
      box-shadow: 5px 10px 18px $neutralBlack;
      transition: all 0.3s ease-in-out;
    }
    .card-container{
        border: none !important;
        border-top: 10px solid black;
        border-top-left-radius: 2%;
        border-top-right-radius: 2%;   
    }
    .view{
        align-content:center;
        width:100%;
        height:auto;
        font-size:20px !important;
        border-radius:0% !important;
        border: none !important;
    }
                        //---------------------Navigation--------------------//
  .navigation{
        width: 100%;
        margin: auto !important;
        padding-top: 50px;
        padding-bottom: 40px;
        background-color:rgb(18, 16, 22);
        &--contain{
            &__button{
              margin-left: 10px;
              position: relative;
              color: gray;
              border: none;
              padding-left: 30px;
              padding-right: 30px;
              background-color: rgb(18, 16, 22);
            }
            &__button:before{
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              color: white;
              bottom: 0;
              left: 0;
              visibility: hidden;
              transform: scaleX(0);
              transition: all 0.4s ease-in-out;
            }
            &__button:hover:before{
              transition: 0.7s;
              color: white;
              border-bottom: solid white 1px; 
              visibility: visible;
              transform: scaleX(1);
          }
          &__button:hover{
              color:#fafafa;
              transition: 0.7s;
          }
          &__button:active{
              border-width: 0px;
              color:white;
              font-size: 90%;
          }
        }
  }
// Reference for navigation https://paulund.co.uk/css-animation-link-underline

//Removes blue border around buttons when clicking/clicked
.navigation--contain__button:active, .navigation--contain__button:focus,
.navigation--contain__button:active:focus {
  outline:none !important;
}

.login-form_button:active, .login-form_button:focus,
.login-form_button:active:focus {
    outline:none !important;
}
                        //---------------------Search Bar--------------------//
     #searchMe{
        border: solid grey 1px;
        border-radius: 5px;
        width: 100%;
        height: 40px;
        text-align: center;
    }
</style>
