<template>
  <tr>
    <td @click="showInfo = !showInfo">{{ it.name }}</td>
    <td>{{ it.kolvo }}</td>
    <td>
      <a href="#" @click="deleteItem(it.name)">del</a>
    </td>
  </tr>
  <tr v-if="showInfo">
    <td colspan="2">
      <div style="font-size: 10px">
        {{ it }}
      </div>
    </td>
  </tr>
</template>

<script>
// import { onMounted } from "vue";

export default {
  data() {
    return {
      showInfo: false,
    };
  },

  props: {
    it: { type: Object },
    deleteItem: { type: Function }
  },

  setup(props) {
    return {};
  },

};
</script>

<style lang="scss">
.grid_item {
  display: grid;
  width: 100%;
  gap: 20px;
}
</style>
