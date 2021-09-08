<template>
    <div id="contener-form">
        <div id="boxForm">
            <form action="" method="get" class="form-con">
                <div class="form-email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required>
                </div>
                <div class="form-password">
                    <label for="password">Mot de passe </label>
                    <input type="text" name="password" id="password" required>
                </div>
                <div class="form-connexion">
                    <input id="inputCo" type="submit" value="Connexion">
                </div>
                
            </form>
        </div>
    </div>    
</template>

<script>


export default {
  name: 'Form',
 
}
</script>

<style lang="scss" scoped>
#contener-form {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

        #boxForm {
        width: 1440px;
        height:635px ;
        
        background-image: url("../assets/Capture d’écran 2021-09-06 112710.jpg") ;
        
        display: flex;
        justify-content: center;
        align-items: center;
    
            & .form-email{
                margin-top: 1rem;
                
            }
            & .form-password{
                margin-top: 1rem;
            }

            & .form-con {
                margin:2rem;
                
            }
            & input{
                margin-top: 0.3rem;
                font-size: 2rem;
                border-radius: 5px;
                box-shadow: 3px 3px 5px #132442;
                opacity: 1;
                
            }

            & label {
                display: block;
                text-align: start;
                font-size: 1.5rem;
                color: black;
                font-family: roboto;
                font-weight: 400;
            }

            & #inputCo {
                width: 200px;
                height:50px ;
                font-size: 1.5rem;
                margin-top: 2rem;
                font-family: roboto;
                font-weight: 400;
            }
    }
}



</style>
