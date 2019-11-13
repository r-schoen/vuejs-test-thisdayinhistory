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
      @selected="updateDate($event)"
      @opened="updateDate($event)">
    </datepicker>
    <router-view />
  </div>
</template>
<style lang="scss">
h1,h2,h3 {
  text-align:center;
}
</style>
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