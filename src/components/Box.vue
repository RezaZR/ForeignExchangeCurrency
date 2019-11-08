<template lang="pug">
  div(v-if="contentFor === `main_currency`")
    BoxMainCurrency
  div(v-else-if="contentFor === `other_currency`")
    BoxOtherCurrency(:data="data")
  div(v-else-if="contentFor === `other_currency_placeholder`")
    BoxOtherCurrencyPlaceholder
</template>

<script>
import BoxMainCurrency from "./BoxMainCurrency";
import BoxOtherCurrency from "./BoxOtherCurrency";
import BoxOtherCurrencyPlaceholder from "./BoxOtherCurrencyPlaceholder";

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
    BoxOtherCurrency,
    BoxOtherCurrencyPlaceholder
  }
};
</script>
