export const currencyHelper = {
  setCurrencyName(code, rate) {
    let currencyObject = new Object();
    switch (code) {
      case "USD":
        currencyObject.value = "United States Dollar";
        break;
      case "CAD":
        currencyObject.value = "Canadian Dollar";
        break;
      case "HKD":
        currencyObject.value = "Hong Kong Dollar";
        break;
      case "ISK":
        currencyObject.value = "Icelandic Króna";
        break;
      case "PHP":
        currencyObject.value = "Philippine Peso";
        break;
      case "DKK":
        currencyObject.value = "Danish Krone";
        break;
      case "HUF":
        currencyObject.value = "Hungarian Forint";
        break;
      case "CZK":
        currencyObject.value = "Czech Koruna";
        break;
      case "GBP":
        currencyObject.value = "Pound Sterling";
        break;
      case "RON":
        currencyObject.value = "Romanian Leu";
        break;
      case "SEK":
        currencyObject.value = "Swedish Krona";
        break;
      case "IDR":
        currencyObject.value = "Indonesian Rupiah";
        break;
      case "INR":
        currencyObject.value = "Indian Rupee";
        break;
      case "BRL":
        currencyObject.value = "Brazilian Real";
        break;
      case "RUB":
        currencyObject.value = "Russian Ruble";
        break;
      case "HRK":
        currencyObject.value = "Croatian Kuna";
        break;
      case "JPY":
        currencyObject.value = "Japanese Yen";
        break;
      case "THB":
        currencyObject.value = "Thailand Baht";
        break;
      case "CHF":
        currencyObject.value = "Swiss Franc";
        break;
      case "EUR":
        currencyObject.value = "Euro";
        break;
      case "MYR":
        currencyObject.value = "Malaysian Ringgit";
        break;
      case "BGN":
        currencyObject.value = "Bulgarian Lev";
        break;
      case "TRY":
        currencyObject.value = "Turkish lira";
        break;
      case "CNY":
        currencyObject.value = "Chinese Yuan";
        break;
      case "NOK":
        currencyObject.value = "Norwegian Krone";
        break;
      case "NZD":
        currencyObject.value = "New Zealand Dollar";
        break;
      case "ZAR":
        currencyObject.value = "South African Rand";
        break;
      case "MXN":
        currencyObject.value = "Mexican Peso";
        break;
      case "SGD":
        currencyObject.value = "Singapore Dollar";
        break;
      case "AUD":
        currencyObject.value = "Australian Dollar";
        break;
      case "ILS":
        currencyObject.value = "Israeli New Shekel";
        break;
      case "KRW":
        currencyObject.value = "South Korean Won";
        break;
      case "PLN":
        currencyObject.value = "Poland Złoty";
        break;
      default:
        break;
    }
    currencyObject.code = code;
    currencyObject.rate = rate;
    return currencyObject;
  }
};
