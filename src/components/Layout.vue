<template>
    <div class="wrapper">
        <div class="content">
            <slot></slot>
        </div>

        <BottomNav>
        </BottomNav>
    </div>
</template>

<script>
    export default {
        name: "Layout",
    }
</script>

<style scoped>
    .wrapper {
        border: #000011 solid 1px;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .content {
        flex-grow: 1;
        overflow: auto;
    }
</style>