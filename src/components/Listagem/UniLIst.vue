<template>

 <div>
  <Inst/>
  <Lisvol/>
 </div>

</template>
<script >
import Inst from './instituicoes.vue'
import Lisvol from './ListVolu.vue'

export default {
    name: 'UniList',
     components:{
       Inst,
       Lisvol
    }
}




</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

</style>