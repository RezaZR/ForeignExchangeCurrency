<template lang="pug">
  .home
    .container-sm
      .row
        .col-md-12
          .home__wrapper
            Box(contentFor="main_currency")
            .home__wrapper__content
              Box(contentFor="other_currency")
              .home__wrapper__content__select
                select
                  option JPY
                button Submit
              button.button Add More Currencies
</template>

<script>
import Box from "@/components/Box";

export default {
  name: "home",
  components: {
    Box
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 3em 0;
  &__wrapper {
    border-radius: 5px;
    width: 100%;
    &__content {
      padding: 1em;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      background-color: $white;
      color: $black;
      height: 500px;
      max-height: 500px;
      &__select {
        width: 100%;
        margin-top: 1em;
        & select,
        button {
          padding: 0.75em;
        }
        & select {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          width: 80%;
        }
        & button {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          width: 20%;
          cursor: pointer;
          background-color: $white-smokey;
          color: $black;
          &:hover {
            background-color: $white-smokey-hover;
          }
        }
      }
      & .button {
        text-align: center;
        width: 100%;
        padding: 0.75em;
        border-radius: 5px;
        margin-top: 1em;
        background-color: $primary-color;
        cursor: pointer;
        color: $white;
        &:hover {
          background-color: $primary-color-hover;
        }
      }
    }
  }
}
</style>
