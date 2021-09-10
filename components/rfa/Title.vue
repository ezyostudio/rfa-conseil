<template>
  <div>
    <h3 class="text-light fw-bold" v-bind="$props">
      <slot>{{text}}</slot>
    </h3>

  </div>
</template>


<style scoped>
  div {
    background-color: #00AEEF;
    width: fit-content;
    box-sizing: border-box;
    padding: .15em 1em;
  }

  h3 {
    margin: 0;
    font-size: 20px;
  }

</style>

<script>
  export default {
    props: ['text']
  }

</script>
