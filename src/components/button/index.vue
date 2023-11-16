<template>
    <button :class="{
        'ml-button': true,
        'ml-button_primary': type === 'primary',
        'ml-button_success': type === 'success',
        'ml-button_error': type === 'error',
        'ml-button_warning': type === 'warning',
        'ml-button_disabled': disabled,
        'ml-button_block': block,
        'ml-button_round': round,
    }">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "mlButton",
    props: {
        // 按钮 类型
        type: {
            type: String,
            default: ''
        },
        // 按钮是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 块级
        block: {
            type: Boolean,
            default: false
        },
        // 圆角边框
        round:{
            type: Boolean,
            default: true
        }
    },
}

</script>

<style lang="scss">
.ml-button {
    border: 1px solid #ccc;
    border-radius: 4px;
    // outline: none;
    background: none;
    cursor: pointer;
    padding: 12px 24px;
}


.ml-button_disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.ml-button_primary {
    color: #fff;
    background-color: #1890ff;
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

.ml-button_block {
    display: block ;
    width: 100%;
}
.ml-button_round{
    border-radius: 20px;
}
</style>
