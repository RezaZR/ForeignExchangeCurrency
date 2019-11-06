<template lang="pug">
  .box.box--secondary
    .container
      .row
        .col-sm-10
          .box__wrapper.box__wrapper--content
            .d-flex.align-items-center
              .col-sm-6.no-padding
                .d-flex.justify-content-start
                  .box__title USD
              .col-sm-6.no-padding
                .d-flex.justify-content-end
                  .box__title.text-truncate(title="10.0000") 10.0000
            .box__details.box__details--bold.text-truncate(title="USD - United State Dollars") USD - United State Dollars
            .box__details.box__details--light.text-truncate(title="1 USD = IDR 14,410.45") 1 USD = IDR 14,410.45
        .col-sm-2
          button.box__delete(title="Click to delete") X
</template>

<script>
export default {
  name: "box_other_currency"
};
</script>
