<template>
    <label class="label">{{text}}</label>
</template>

<script>
export default {
    name: "Label",
    props:{
        text: String
    }
}
</script>

<style>
.label {
    @apply text-black font-sans text-sm font-bold m-1 p-4;
}

</style>
