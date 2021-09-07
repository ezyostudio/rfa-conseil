<template>
    <div>
        <p class="text-light">{{text}}</p>
    </div>
</template>


<style scoped>
    div {
        background-color: #00AEEF;
        width: auto;
        box-sizing: border-box;
    }

    p {
        margin: 0;
        font-size: 20px;
    }
</style>

<script>
export default {
    props: ['text']
}
</script>