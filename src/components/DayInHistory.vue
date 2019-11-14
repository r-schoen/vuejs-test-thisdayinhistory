<template>
    <div id='day-in-history'>
        <ul id='things-n-stuff'>
            <li v-for="(item,index) in this.$store.state.dateEventData.selected" v-bind:key="index">
                <b>{{ item.year }} </b> - {{ item.text }}
                <span class="sources">
                (Sources:
                    <span v-for="(page, index) in item.pages" 
                        v-bind:key="index" >
                        <span v-if="index != 0">, </span>
                        <a :href="page.content_urls.desktop.page">{{ page.displaytitle }}</a>
                    </span>)
                </span>
            </li>
        </ul>
    </div>
</template>
