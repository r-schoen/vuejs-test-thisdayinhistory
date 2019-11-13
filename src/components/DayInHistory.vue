<template>
    <div id='day-in-history'>
        <ul id='things-n-stuff'>
            <li v-for="(item,index) in this.$store.state.dateEventData.selected" v-bind:key="index">
                <b>{{ item.year }} </b> -    {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    
}
</script> 