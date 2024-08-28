<template>
    <nuxt-link :to="link" :class="['custom-btn', colorClass]">
        <slot />
    </nuxt-link>
</template>
<script setup>
import { defineProps, computed} from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'default',
    },
    link: {
        type: String,
        required: true,
    }
});

const colorClass = computed(() => {
    return `custom-btn-${props.color}`;
})

</script>
<style scoped lang="scss">
    .custom-btn {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        max-width: fit-content;
        transition: 0.3s;

        &:hover {
           background-color: rgba(255, 255, 255, 0.5); 
           color: #ffffff;
        }
    }
    .custom-btn-default {
        background-color: #ffffff; /* Default color */
        color: #000000;
        text-transform: uppercase;
    }
    .custom-btn-red {
        background-color: #ff0000;
        color: #ffffff;
    }

    .custom-btn-green {
    background-color: #00ff00;
    color: #ffffff;
    }

    .custom-btn-blue {
    background-color: #0000ff;
    color: #ffffff;
    }

</style>