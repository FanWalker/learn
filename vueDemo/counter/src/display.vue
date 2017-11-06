<template>
    <div>
        <h3>Count is {{ count }}</h3>
        <p>组件自己的内部计算属性 {{ localComputed }}</p>
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    export default{
        computed: mapState({
            count: 'count'
        })
    }
</script>
<style scoped>
    h3{
        font-size: 30px;
    }
</style>