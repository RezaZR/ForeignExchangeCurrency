<template lang="pug">
  .home
    .container-sm
      .row
        .col-sm-12
          .home__wrapper
            Box(contentFor="main_currency")
            .home__wrapper__content
              Box(contentFor="other_currency" :data="otherCurrency" :key="otherCurrency.id" v-for="otherCurrency in otherCurrencies" v-if="!isLoading")
              Box(contentFor="other_currency_placeholder" v-if="isLoading" v-for="currency in eligibleCurrencies.length")
              .home__wrapper__content__select(v-show="showSelect")
                select(v-model="selected")
                  option(:value="newCurrency.code" :key="newCurrency.id" v-for="newCurrency in newCurrencies") {{ newCurrency.value }}
                button(@click="handleSubmit") Submit
              button.button(@click="handleClick" v-show="!showSelect") Add More Currencies
          Alert(:type="type" :message="message" v-show="isActive")
</template>

<script>
import Box from "@/components/Box";
import Alert from "@/components/Alert";

export default {
  name: "home",
  components: {
    Box,
    Alert
  },
  data() {
    return {
      showSelect: false,
      selected: null
    };
  },
  mounted() {
    this.explodeData();
  },
  computed: {
    currencies() {
      return this.$store.state.currency.currencies;
    },
    eligibleCurrencies() {
      return this.$store.state.currency.eligibleCurrencies;
    },
    otherCurrencies() {
      return this.$store.state.currency.otherCurrencies;
    },
    newCurrencies() {
      return this.$store.state.currency.newCurrencies;
    },
    isLoading() {
      return this.$store.state.currency.isLoading;
    },
    type() {
      return this.$store.state.alert.type;
    },
    message() {
      return this.$store.state.alert.message;
    },
    isActive() {
      return this.$store.state.alert.isActive;
    }
  },
  methods: {
    explodeData() {
      this.$store.dispatch("getCurrencies", { base: "USD" });
      this.$store.dispatch("getOtherCurrencies", {
        base: "USD",
        isInitialData: true,
        isOnDelete: false
      });
    },
    handleClick() {
      this.showSelect = !this.showSelect;
    },
    handleSubmit() {
      this.handleClick();

      this.$store.commit("setEligibleCurrencies", this.selected);
      this.$store.dispatch("getOtherCurrencies", {
        base: "USD",
        isInitialData: false,
        isOnDelete: false
      });
      this.$store.dispatch("getNewCurrencies");
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
