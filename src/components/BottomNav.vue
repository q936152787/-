<template>
    <div id="nav">
        <div>
            <router-link to="/money">Money</router-link>
        </div>

        <div>
            <router-link to="/label">Label</router-link>
        </div>

        <div>
            <router-link to="/statistics">statistics</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomNav"
    }
</script>

<style scoped>
    #nav div {
        border: #000011 1px solid;
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }

    #nav {
        display: flex;
        border: aqua 1px solid;
        /*justify-content: space-between;*/
    }

    #nav a {
        list-style: none;
        text-decoration: none;
        color: #001;
    }
</style>