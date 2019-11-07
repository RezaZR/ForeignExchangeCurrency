<template lang="pug">
  .home
    .container-sm
      .row
        .col-md-12
          .home__wrapper
            Box(contentFor="main_currency")
            .home__wrapper__content
              Box(contentFor="other_currency" :data="currency" :key="currency.id" v-for="currency in otherCurrencies")
              .home__wrapper__content__select(v-show="showSelect")
                select
                  option JPY
                button(@click="handleSubmit") Submit
              button.button(@click="handleClick" v-show="!showSelect") Add More Currencies
</template>

<script>
import Box from "@/components/Box";

// import { currencyHelper } from "@/_helpers";

export default {
  name: "home",
  components: {
    Box
  },
  data() {
    return {
      showSelect: false
    };
  },
  mounted() {
    this.explodeData();
  },
  computed: {
    currencies() {
      return this.$store.state.currency.currencies;
    },
    otherCurrencies() {
      return this.$store.state.currency.otherCurrencies;
    }
  },
  methods: {
    explodeData() {
      this.$store.dispatch("getCurrencies", { base: "USD" });
      this.$store.dispatch("getOtherCurrencies", { base: "USD" });
    },
    handleClick() {
      this.showSelect = !this.showSelect;
    },
    handleSubmit() {
      this.handleClick();
    }
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
      overflow: auto;
      &__select {
        width: 100%;
        height: 38px;
        margin-bottom: 1em;
        & select,
        button {
          padding: 0.75em;
        }
        & select {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border: 1px solid $black;
          width: 80%;
          height: 38px;
        }
        & button {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          border: 1px solid $white-smokey;
          width: 20%;
          height: 38px;
          cursor: pointer;
          background-color: $white-smokey;
          color: $black;
          &:hover {
            border-color: $white-smokey-hover;
            background-color: $white-smokey-hover;
          }
        }
      }
      & .button {
        text-align: center;
        width: 100%;
        padding: 0.75em;
        border-radius: 5px;
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
