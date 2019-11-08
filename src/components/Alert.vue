<template lang="pug">
  transition(name="slide")
    .alert(v-if="type == 'success'" v-bind:style="successStyle") {{ message }}
    .alert(v-else-if="type == 'error'" v-bind:style="errorStyle") {{ message }}
</template>

<script>
export default {
  name: "alert",
  props: {
    type: {
      required: true,
      type: String
    },
    message: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      successStyle: {
        backgroundColor: "rgba(76, 175, 80, 1)"
      },
      errorStyle: {
        backgroundColor: "rgba(244, 67, 54, 1)"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.alert {
  padding: 0.75em;
  font-size: $font-md;
  color: $white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
