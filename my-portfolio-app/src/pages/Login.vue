<template>
    <div class="flex flex-col items-center p-20">
        <div class="input-container">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="email">
        </div>
        <div class="input-container">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="password">
        </div>
        <div class="button-container">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  >See User</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.input-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width:60%;
}
input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-top: 5px;
}
.button-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
}
</style>