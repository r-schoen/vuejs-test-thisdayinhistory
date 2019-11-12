<template>
  <div class="container">
    <h3>TODO: Create view of data here</h3>
    <!--<p v-for="item in itemList" :key="item">{{ item }}</p> -->
    <div class='row'>
      <div class='col-8'>
        <b-table
          id="item-table"
          :items="itemList"
        />
      </div>
    </div>
    <item />
  </div>
</template>

<script>
import Item from "@/components/Item.vue"
import { ALL_ITEMS } from "@/util/itemConstants"

export default {
  name:"ItemList",
  data() {
    return {
        itemList: []
    }
  },
  components: {
    Item,
  },
  mounted() {
    this.$http.get(ALL_ITEMS)
    .then((result) => {
        this.itemList = result.data
    })
  }
}
</script>