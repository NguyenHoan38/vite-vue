<template>
    <div p-8>
        <h1 class="text-[30px]">home</h1>
        {{name}}
    </div>
</template>
<script setup>
import { computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
const name = computed( () =>{
    return store.state.user.name
})
</script>
