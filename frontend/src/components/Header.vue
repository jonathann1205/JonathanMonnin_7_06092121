<template>
<div>
    <div id="box">
       <img alt="Vue logo" src="../assets/icon-left-font-monochrome-white.svg">
        <navlink/>
        <div id="line"></div>
    </div>
</div>    
</template>

<script>
import navlink from '@/components/navLink.vue'

export default {
    name: 'Header',
   components: {
        navlink
       
    }
}


</script>

<style lang="scss" scoped>

div{
display: flex;
justify-content: center;
position: relative;

    & img{
       margin-left: 2%;
       width: 300px;

    }

    & #box {
        
        background-color:#132442 ;
        color: white;
        display: flex;
        justify-content: space-between;
        width: 1440px;
        height: 150px;
        flex-flow: row wrap;
            @media (max-width: 710px) {
                justify-content: center;
            }

        & #line{
        position:absolute;
        top: 70%;
        left: 2%;
        width: 95%;
        height: 6px;
        background-color:#CF5158;
        border-radius: 5px;
            @media (max-width: 710px) {
                top:42%;
            }
        }
    }

   

}



</style>
