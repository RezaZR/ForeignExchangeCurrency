<template lang="pug">
  .box.box--main
    .box__wrapper
      .box__details.text-truncate(title="USD - United State Dollars") USD - United State Dollars
      .d-flex.align-items-center
        .col-sm-6.no-padding
          .d-flex.justify-content-start
            .box__title.box__title--bold USD
        .col-sm-6.no-padding
          .d-flex.justify-content-end
            input.box__title.box__title--bold(v-model="amount" placeholder="Please input amount here")
</template>

<script>
export default {
  name: "box_main_currency",
  data() {
    return {
      amount: 10
    };
  }
};
</script>
