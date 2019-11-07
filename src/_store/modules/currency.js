import { currencyService } from "@/_services";
import { currencyHelper } from "@/_helpers";

export const currency = {
  state: {
    amount: 10,
    currencies: [],
    eligibleCurrencies: [
      "CAD",
      "IDR",
      "GBP",
      "CHF",
      "SGD",
      "INR",
      "MYR",
      "JPY",
      "KRW"
    ],
    otherCurrencies: []
  },
  getters: {},
  actions: {
    getCurrencies({ commit, dispatch }, { base }) {
      currencyService.getCurrencies({ base }).then(
        async response => {
          let currencyObject = new Object();
          for (const [key, value] of Object.entries(response.rates)) {
            currencyObject = await currencyHelper.setCurrencyName(key, value);
            commit("setCurrencies", currencyObject);
            currencyObject = new Object();
          }
        },
        error => dispatch("alert/error", error, { root: true })
      );
    },
    getOtherCurrencies({ state, commit, dispatch }, { base }) {
      currencyService
        .getOtherCurrencies({
          base,
          eligibleCurrencies: state.eligibleCurrencies
        })
        .then(
          async response => {
            let currencyObject = new Object();
            for (const [key, value] of Object.entries(response.rates)) {
              currencyObject = await currencyHelper.setCurrencyName(key, value);
              commit("setOtherCurrencies", currencyObject);
              currencyObject = new Object();
            }
          },
          error => dispatch("alert/error", error, { root: true })
        );
    }
  },
  mutations: {
    setAmount(state, amount) {
      state.amount = amount;
    },
    setCurrencies(state, response) {
      state.currencies.push(response);
    },
    setOtherCurrencies(state, response) {
      state.otherCurrencies.push(response);
    }
  }
};
