<template>
    <div class="background">
        <div class="window">

            <div id="signup_icon">
                <img src="https://via.placeholder.com/150" alt="" srcset="">
            </div>

            <div id="title">Bebas</div>

        <form style="justify-content: center;">

             <div>
                <input class="fields" type="email" name="email" id="text" placeholder="Your E-mail" v-model="email">
            </div>

                <div>
                    <input class="fields" type="password" name="password" id="text" placeholder="Password" v-model="password">
                </div>

        </form>

            <button class="buttons" id="text" @click="Login()">Sign In</button>
        
            <div id="text" style="white-space: nowrap;">
                <p>Forgot your Password? Click <RouterLink to="/forgot_password">here</RouterLink></p>
            </div>

            
            <div id="text" style="white-space: nowrap;">
                <p>Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink></p>
            </div>
                
        </div>

    </div>
    
</template>

<script setup>

</script>