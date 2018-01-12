<template>
    <div>
        <h1>test3</h1>
        <group>
          <cell title="test3" value="value"></cell>
          <cell title="xxx" value="yyy"></cell>
        </group>
        <br/><divider>ButtonTab的使用</divider><br/>
        <button-tab>
            <button-tab-item>所有</button-tab-item>
            <button-tab-item>部分</button-tab-item>
        </button-tab>
        <br/><divider>使用v-model设置默认选中，Badge大红点</divider><br/>
        <button-tab v-model="current" @click="change(1)">
            <button-tab-item>今天</button-tab-item>
            <button-tab-item>本周<span class="vux-reddot-s"></span></button-tab-item>
            <button-tab-item>本月<badge text="3"></badge></button-tab-item>
        </button-tab>
    </div>
</template>

<script>
    document.title = 'test3';
    import { Group, Cell, ButtonTab, ButtonTabItem, Badge, Divider } from 'vux'
    export default{
        components: {
            Group,
            Cell,
            ButtonTab,
            ButtonTabItem,
            Badge,
            Divider
        },
        data(){
            return {
                password: '123465',
                current: 1
                //visible: false
            }
        },
        methods : {
             change (val) {
                  console.log(val)
                }
        },
        mounted(){

        }
    }
</script>