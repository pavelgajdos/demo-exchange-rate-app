<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <p>
            A simple demo application using a REST API to display exchange rates
        </p>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
    padding-left: 0;
}

.greetings h1 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1 {
        text-align: left;
    }
}
</style>
