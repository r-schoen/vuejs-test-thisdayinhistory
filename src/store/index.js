import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

import { FULL_URL } from "@/util/constants"


export default new Vuex.Store({
  state: {
    selectedDate: null,
    dateEventData: null
  },
  mutations: {
    updateSelectedDate (state, selectedDate) {
      console.log(`Changing to date: ${selectedDate}`)
      state.selectedDate = selectedDate
    },
    updateDateEventData (state, dateEventData) {
      console.log('Changing to data:')
      console.log(dateEventData)
      state.dateEventData = dateEventData
    }
  },
  actions: {
    updateDateEventData ({ commit }, date) {
      var formattedDate = `${date.getMonth()+1}/${date.getDate()}`
      Axios.get(FULL_URL + formattedDate)
        .then(response => {
          commit('updateSelectedDate', formattedDate)
          commit('updateDateEventData', response.data)
        })
    }
  }
})
