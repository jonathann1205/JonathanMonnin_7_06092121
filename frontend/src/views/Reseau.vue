<template>
    <div>
        <Header/>
        <Mur/>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Mur from '@/components/Mur.vue'

export default {
    name: 'Reseau',
    components: {
        Header,
        Mur
        
    }
}
</script>