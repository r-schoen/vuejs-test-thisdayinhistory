<template>
    <div id='day-in-history'>
        {{ this.dateEventData }}
    </div>
</template>

<script>

export default {
    data() {
        return {
            dateEventData: this.$store.state.dateEventData
        }
    }
    /*mounted() {
        this.dateEventData = this.$store.state.dateEventData
    }*/
}
</script> 