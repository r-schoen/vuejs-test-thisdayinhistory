<template>
    <div id='day-in-history'>
        {{ this.$store.state.dateEventData }}
    </div>
</template>

<script>

export default {
    data() {
        return {
            dateEventData: null
        }
    },
    mounted() {
        this.dateEventData = this.$store.state.dateEventData
    }
}
</script> 