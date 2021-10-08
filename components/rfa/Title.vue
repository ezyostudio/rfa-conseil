<template>
  <div>
    <div v-if="type=='title'" class="box title">
      <h3 class="text-light fw-bold" v-bind="$props">
        <slot>{{text}}</slot>
      </h3>
    </div>

    <div v-if="type=='subtitle'" :style="{ backgroundColor:color}" class="box subtitle card-title">
      <h5 class="text-light" v-bind="$props">
        <slot>{{text}}</slot>
      </h5>
    </div>
  </div>

</template>


<style lang="scss" scoped >

  .box {
    width: fit-content;
    box-sizing: border-box;
    padding: .15em 1em;
    padding-left: .4em;
  }

  .title {
    background-color: #00AEEF; 
    
    h3 {
      margin: 0;
      font-size: 20px;
    }
  }

  

  .subtitle {
    background-color: #FFF;
    padding: .10em .8em;

    h5 {
      margin-bottom: 0;
    }
  }

  

</style>

<script>
  export default {
    props: ['text', 'type', 'color'],
  }
</script>
