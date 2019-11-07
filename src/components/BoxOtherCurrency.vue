<template lang="pug">
  .box.box--secondary
    .container
      .row
        .col-sm-10
          .box__wrapper.box__wrapper--content
            .d-flex.align-items-center
              .col-sm-6.no-padding
                .d-flex.justify-content-start
                  .box__title {{ data.code }}
              .col-sm-6.no-padding
                .d-flex.justify-content-end
                  .box__title.text-truncate(:title="(data.rate * amount).toFixed(4)") {{ (data.rate * amount).toFixed(4) }}
            .box__details.box__details--bold.text-truncate(v-bind:title="data.code + ` - ` + data.value") {{ data.code }} - {{ data.value }}
            .box__details.box__details--light.text-truncate(:title="`1 USD = ` + data.code + ` ` + data.rate.toFixed(4)") 1 USD = {{ data.code }} {{ data.rate.toFixed(4) }}
        .col-sm-2
          button.box__delete(title="Click to delete") X
</template>

<script>
export default {
  name: "box_other_currency",
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  computed: {
    amount() {
      return this.$store.state.currency.amount;
    }
  }
};
</script>
