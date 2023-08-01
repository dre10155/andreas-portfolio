<template>
    <div class="flex flex-col items-center p-20">
        <div class="input-container">
            <label for="email">Email:</label>
            <input 
                type="email"
                id="email" 
                name="email" 
                placeholder="email" 
                @input="validateEmail"
                :class="{ 'border-red-500': emailError }"
                v-model="email">
             <div v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</div>
        </div>
         <div class="input-container">
            <label for="name"> First Name:</label>
            <input 
                type="name"
                id="name" 
                name="name" 
                placeholder="name" 
                @input="validateName"
                :class="{ 'border-red-500': emailError }"
                v-model="name">
             <div v-if="nameError" class="text-red-500 text-xs mt-1">{{ nameError }}</div>
        </div>
        <div class="input-container">
            <label for="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="password" 
                @input="validatePassword"
                :class="{ 'border-red-500': passwordError }"
                v-model="password">
            <div v-if="passwordError" class="text-red-500 text-xs mt-1">{{ passwordError }}</div>
            {{passwordError}}
        </div>
        <div class="button-container">
            <button @click="createUser" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
            <button @click="loginUser" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <button @click="seeUser" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  >See User</button>
            <button @click="logoutUser" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
            <div v-if="errorMessage" class="text-red-500 text-xs mt-1">{{ errorMessage}}</div>
        </div>
       {{isSessionValid}}

      
    </div>
</template>

<script setup lang="ts">
import { ref , computed } from 'vue'
import { supabase } from '../helpers/supabase'
import { useRouter } from 'vue-router'
import { useNavigation } from '../composables'
   



let email = ref('')
let password = ref('')
let emailError = ref('')
let passwordError = ref('')
let name = ref('')
let nameError = ref('')
let errorMessage = ref('')
let  { isSessionValid} = useNavigation()


//Create hasError  check is the string is greater >0
let hasBackendError = computed(() =>{
    return !errorMessage.value.length > 0 
})

let hasError = computed(() =>{
    return emailError.value.length > 0  || passwordError.value.length > 0
})

let isPasswordEmpty = computed(() =>{
    return !password.value
})

let isEmailEmpty = computed(()=>{
    return !email.value
})


let router = useRouter()

let createUser = async () => {
            const { data, error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value,
                options: {
                    data: { name: name.value }
                }
            })
            if (error) {
                errorMessage.value = error
                console.log(error)
            } else {
                console.log(data)
            }
       
}
let loginUser = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    } catch (error) {
        console.log('error message:  ',error)
      

    }  
   
}

let seeUser = async () => {

    let localuser = await supabase.auth.getSession()
    console.log('user', localuser)
}   

let logoutUser =  async () => {
    let { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
    }else{
        console.log('user logged out')
    }
}

let validateEmail = () => {
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (isEmailEmpty.value) {
        emailError.value = 'Error - Email is required'
      } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Error - Invalid email format'
      } else {
        emailError.value = ''
      }
    }

let validatePassword = () =>{
   if (password.value.length < 8 ) {
        passwordError = 'Password must be at least 8 characters long'
    } else {
        passwordError = '' 
    }
}

let validateName = () => {
    // Name should not have numbers or special characters in regex expression   
    let nameRegex = /^[a-zA-Z]+$/
    if (!name.value) {
        nameError = 'Error - Name is required'
    } else if (!nameRegex.test(name.value)) {
        nameError = 'Error - Invalid name format'
    }
}
</script>

<style scoped>

.input-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width:90%;
}
input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-top: 5px;
}
.button-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
}
</style>