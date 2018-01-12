<template>
    <div>
        <h1>test2</h1>
        <group>
          <cell title="hello" value="---"></cell>
          <cell title="everyone" value="==="></cell>
        </group>
    </div>
</template>
<script>
    document.title = 'test2';
    import { Group, Cell } from 'vux'
    export default{
        components: {
            Group,
            Cell
        },
        data(){
            return {
                password: '123465'
            }
        },
        methods : {

        },
        mounted(){

        }
    }
</script>