<template>
  <div id="app" class="container">
    <header id="header">
      <h1>On This Day</h1>
      <h3>Provided by Wikipedia</h3>
    </header> 
    <div id='day-in-history'>
        <datepicker 
          id='datepicker'
          v-model="model.date"
          :inline='true' 
          :value="model.date" 
          :highlighted="model.highlighted"
          popover-align="center"
          @selected="updateDate($event)"
          @opened="updateDate($event)">
        </datepicker>
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
  </div>
</template>

<script>
import { FULL_URL } from '../util/constants.js'
import Datepicker from 'vuejs-datepicker'

export default {
  data() {
    return {
      name: "russell",
      model: {
        date: new Date(),
        highlighted: {
          dates: [
            new Date()
          ]
        }
      }
    }
  },
  components: {
    Datepicker
  },
  methods: {
    updateDate: function(date) {
      this.model.date = date
      this.$store.dispatch('updateDateEventData', this.url, date)
    }
  },
  mounted() {
    this.$store.dispatch('updateDateEventData', this.url, this.date)
  },
  computed: {
    url: function() {
      return `${FULL_URL}${this.model.date.getMonth()+1}/${this.model.date.getDate()}`
    }
  }
}
</script>