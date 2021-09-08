<template>
<div id="boxNav">
    <ul>
        <ol><a href=""> Connexion</a></ol>
        <ol><a href=""> Inscription</a></ol>
        <!-- <ol><a href=""> Deconnexion</a></ol> -->
    </ul>
</div>
   
</template>

<script>
export default {
    name: 'navlink',
   
}
</script>

<style lang="scss" scoped>
#boxNav {
    display: flex;
    margin-right: 3%;
    
    & ul {
        display: flex;
        align-items: center;
        flex-direction: row;
        
    }
    


    & ol {
        font-size: 1.5rem;
        list-style: none;
        font-family: roboto;
        font-weight: 500;
        & a{
            
            text-decoration: none;
            color: white;
            
        }
        
    }
}
    

</style>
