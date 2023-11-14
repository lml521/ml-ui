<template>
    <button 
        :class="{
            'ml-button': true,
            'ml-button_success': type === 'success',
            'ml-button_error': type === 'error',
            'ml-button_warning': type === 'warning',
        }"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "mlButton",
    props: {
        type: {
            type: String,
            default: ''
        }
    },
}

</script>

<style lang="scss"  >
.ml-button {
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    background: none;
    cursor: pointer;
    padding: 12px 24px;
}

.ml-button_success {
    color: #fff;
    background-color: #4caf50;
}

.ml-button_error {
    color: #fff;
    background-color: #f44336;
}


.ml-button_warning {
    color: #fff;
    background-color: #ff9800;
}


</style>
