<template>
    <div id="nav">
        <div>
            <router-link to="/money" active-class="selected">
                <Icon name="money"/>
                记账
            </router-link>
        </div>

        <div>
            <router-link to="/label" active-class="selected">
                <Icon name="class"/>
                类别
            </router-link>
        </div>

        <div>
            <router-link to="/statistics" active-class="selected">
                <Icon name="statistic"/>
                统计
            </router-link>
        </div>
    </div>
</template>

<script lang='ts'>
    // const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    // try {
    //     importAll(require.context('../assets/icons', true, /\.svg$/));
    // } catch (error) {
    //     console.log(error);
    // }
    import Icon from '@/components/Icon.vue'
    export default {
        name: 'BottomNav',
        components: {Icon}
    };
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
        font-size: 20px;
        list-style: none;
        text-decoration: none;
        color: #001;
    }

   #nav .selected{
       color: blue;

    }
</style>