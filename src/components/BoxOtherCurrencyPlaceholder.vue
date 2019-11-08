<template lang="pug">
  .box.box--secondary.box--secondary--placeholder
    .container
      .row
        .col-sm-10
          .box__wrapper.box__wrapper--content
            .d-flex.align-items-center
              .col-sm-6.no-padding
                .d-flex.justify-content-start
                  .box__title.box__title--placeholder
              .col-sm-6.no-padding
                .d-flex.justify-content-end
                  .box__title.box__title--placeholder.text-truncate
            .box__details.box__details--bold.box__details--placeholder.text-truncate
            .box__details.box__details--light.box__details--placeholder.text-truncate
        .col-sm-2
          button.box__delete X
</template>

<script>
export default {
  name: "box_other_currency_placeholder"
};
</script>
