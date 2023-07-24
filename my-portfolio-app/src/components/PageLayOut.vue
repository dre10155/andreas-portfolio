<template>
    <div class="page-wrapper mx-auto flex justify-between text-slate-900 bg-slate-400">
        <div class="img-icon"> 
               Logo 
        </div>
        <nav class="nav flex gap-8">
            <router-link class="hover:text-white" to="/">Home</router-link> 
            <router-link  class="hover:text-white" to="/login">Login</router-link>
            <router-link class="hover:text-white" to="/profile">Profile</router-link>
        </nav>
    </div>
     <slot/>
</template>

<script setup>
// create a a content project that is type object
// create a content project that is type object
// q: how to define a prop in setup script?
// a: https://v3.vuejs.org/guide/component-props.html#setup-script
//import { RouterLink, RouterView } from 'vue-router'
// import { defineProps } from 'vue'

const props = defineProps({
    content: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.page-wrapper {
    
    padding: 20px;
}
</style>