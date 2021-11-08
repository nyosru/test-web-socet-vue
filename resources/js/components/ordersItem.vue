<template>
  <tr>
    <td>{{ it.name }}</td>
    <td>{{ it.kolvo }}</td>
    <td>    </td>
  </tr>
</template>

<script>

export default {
  props: {
    it: { type: Object },
  },

  setup(props) {
    return {};
  },
};
</script>
