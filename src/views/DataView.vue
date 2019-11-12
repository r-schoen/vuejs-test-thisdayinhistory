<template>
  <div class="data-view">
    <DataComponent data='some data'/>
  </div>
</template>


<script>
import DataComponent from '@/components/DataComponent.vue'

export default {
  name: 'data-view',
  components: {
    DataComponent
  }
}


</script>
