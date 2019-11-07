<template lang="pug">
  .box.box--main
    .box__wrapper
      .box__details.text-truncate(title="USD - United State Dollar") USD - United State Dollar
      .d-flex.align-items-center
        .col-sm-6.no-padding
          .d-flex.justify-content-start
            .box__title.box__title--bold USD
        .col-sm-6.no-padding
          .d-flex.justify-content-end
            input.box__title.box__title--bold(v-model="amount" type="number" placeholder="Please input amount here")
</template>

<script>
export default {
  name: "box_main_currency",
  computed: {
    amount: {
      get() {
        return this.$store.state.currency.amount;
      },
      set(newAmount) {
        return this.$store.commit("setAmount", newAmount);
      }
    }
  }
};
</script>
