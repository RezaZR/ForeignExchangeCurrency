<template lang="pug">
  div(v-if="contentFor === `main_currency`")
    BoxMainCurrency
  div(v-else-if="contentFor === `other_currency`")
    BoxOtherCurrency(:data="data")
</template>

<script>
import BoxMainCurrency from "./BoxMainCurrency";
import BoxOtherCurrency from "./BoxOtherCurrency";

export default {
  name: "box",
  props: {
    contentFor: {
      required: true,
      type: String
    },
    data: {
      type: Object
    }
  },
  components: {
    BoxMainCurrency,
    BoxOtherCurrency
  }
};
</script>
