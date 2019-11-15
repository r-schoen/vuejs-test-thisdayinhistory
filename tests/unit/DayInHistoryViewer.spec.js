import {shallowMount} from "@vue/test-utils"
import DayInHistoryViewer from "../../src/components/DayInHistoryViewer.vue"
import chai from 'chai'

const assert = chai.assert
const wrapper = shallowMount(DayInHistoryViewer)

describe('DayInHistory.vue test', () => {
    it("should give the current day", () => {
        assert(wrapper.vm.name === "russell")
    })
})