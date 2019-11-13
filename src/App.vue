<template>
  <div id="app" class="container">
    <h1>Wikipedia, this day in history</h1>
    <datepicker 
      v-model="model.date"
      :inline='true' 
      :value="model.date" 
      :highlighted="model.highlighted"
      @selected="updateDate($event)"
      @opened="updateDate($event)">
    </datepicker>
    <router-view />
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'


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
    Datepicker
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