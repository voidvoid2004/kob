<template>
    <div class="playground">
        <GameMap />
    </div>
</template>

<script>
import GameMap from './GameMap';

export default{
    components: {
        GameMap,
    }
}

</script>

<style scoped>
.playground {
    width: 60vw;
    height: 70vh;
    margin: 40px auto;
}

</style>