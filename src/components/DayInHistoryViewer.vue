<template>
  <div id="app" class="container">
    <h1>On This Day</h1>
    <h3>Provided by Wikipedia</h3>
    <datepicker 
      id='datepicker'
      v-model="model.date"
      :inline='false' 
      :value="model.date" 
      :highlighted="model.highlighted"
      popover-align="center"
      @selected="updateDate($event)"
      @opened="updateDate($event)">
    </datepicker>
    <day-in-history />
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import DayInHistory from './DayInHistory.vue'

export default {
  data() {
    return {
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
    Datepicker,
    DayInHistory
  },
  methods: {
    updateDate: function(date) {
      this.$store.dispatch('updateDateEventData', date)
    }
  },
  mounted() {
    this.$store.dispatch('updateDateEventData', new Date())
  }
}
</script>