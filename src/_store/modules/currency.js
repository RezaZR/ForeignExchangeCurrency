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
    otherCurrencies: [],
    newCurrencies: [],

    isLoading: false,

    isCurrencyFilled: false,
    isOtherCurrencyFilled: false,
    isNewCurrencyFilled: false
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
          dispatch("getNewCurrencies");
          commit("setIsCurrencyFilled");
        },
        error => dispatch("alert/error", error, { root: true })
      );
    },
    removeEligibleCurrencies({ state, commit, dispatch }, value) {
      if (state.eligibleCurrencies.length > 1) {
        commit("removeEligibleCurrencies", value);

        dispatch("alert/success", "Currency removed!");
      } else {
        dispatch("alert/error", "Error! You have to have at least 1 exchange rate!");
      }
      setTimeout(() => {
        dispatch("alert/isActive", null, { root: true });
      }, 2000);
    },
    getOtherCurrencies({ state, commit, dispatch }, { base, isInitialData, isOnDelete }) {
      commit("setIsLoading");
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
            if (!isInitialData && !isOnDelete) {
              dispatch("alert/success", "New currency added!", { root: true });
              setTimeout(() => {
                dispatch("alert/isActive", null, { root: true });
              }, 2000);
            }
            commit("setIsLoading");
            commit("setIsOtherCurrencyFilled");
          },
          error => dispatch("alert/error", error, { root: true })
        );
    },
    getNewCurrencies({ state, commit }) {
      let tempCurrency = "";
      for (const [key, value] of Object.entries(state.currencies)) {
        console.log(key);
        tempCurrency = state.eligibleCurrencies.filter(
          eligibleCurrency => eligibleCurrency === value.code
        );
        if (tempCurrency.length === 0 && value.code != "USD") {
          commit("setNewCurrencies", value);
        }
      }
      commit("setIsNewCurrencyFilled");
    }
  },
  mutations: {
    setAmount(state, amount) {
      state.amount = amount;
    },
    setCurrencies(state, response) {
      if (state.isCurrencyFilled) {
        state.currencies = [];
        state.isCurrencyFilled = false;
      }
      state.currencies.push(response);
    },
    setEligibleCurrencies(state, value) {
      state.eligibleCurrencies.push(value);
    },
    removeEligibleCurrencies(state, value) {
      const index = state.eligibleCurrencies.indexOf(value);
      if (index > -1) {
        state.eligibleCurrencies.splice(index, 1);
      }
    },
    setOtherCurrencies(state, response) {
      if (state.isOtherCurrencyFilled) {
        state.otherCurrencies = [];
        state.isOtherCurrencyFilled = false;
      }
      state.otherCurrencies.push(response);
    },
    setNewCurrencies(state, value) {
      if (state.isNewCurrencyFilled) {
        state.newCurrencies = [];
        state.isNewCurrencyFilled = false;
      }
      state.newCurrencies.push(value);
    },
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setIsCurrencyFilled(state) {
      state.isCurrencyFilled = !state.isCurrencyFilled;
    },
    setIsOtherCurrencyFilled(state) {
      state.isOtherCurrencyFilled = !state.isOtherCurrencyFilled;
    },
    setIsNewCurrencyFilled(state) {
      state.isNewCurrencyFilled = !state.isNewCurrencyFilled;
    }
  }
};
