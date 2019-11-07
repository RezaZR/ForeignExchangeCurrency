import axios from "axios";

const urlLatest = "/latest?base=";

export const currencyService = {
  getCurrencies({ base }) {
    return axios.get(urlLatest + base).then(this.handleResponse);
  },
  getOtherCurrencies({ base, eligibleCurrencies }) {
    return axios
      .get(urlLatest + base + "&symbols=" + eligibleCurrencies.toString())
      .then(this.handleResponse);
  },
  handleResponse(response) {
    const request = response.request;
    if (request.status === 401) {
      const error = request.onerror && JSON.parse(request.onerror);
      return Promise.reject(error);
    }

    return response.data;
  }
};
