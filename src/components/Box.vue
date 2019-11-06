<template lang="pug">
  div(v-if="contentFor === `main_currency`")
    BoxMainCurrency
  div(v-else-if="contentFor === `other_currency`")
    BoxOtherCurrency
</template>

<script>
import BoxMainCurrency from "./BoxMainCurrency";
import BoxOtherCurrency from "./BoxOtherCurrency";

export default {
  name: "box",
  props: {
    contentFor: {
      type: String,
      required: true
    }
  },
  components: {
    BoxMainCurrency,
    BoxOtherCurrency
  }
};
</script>
