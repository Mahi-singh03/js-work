const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
};

const API_KEY = "985df8f85e27517f5f4d4705";
const API_URL = "https://v6.exchangerate-api.com/v6/";

const options = document.querySelectorAll(".to select, .from select");
const btn = document.querySelector("button");
const FC = document.querySelector(".from select");
const TC = document.querySelector(".to select");
const Input = document.querySelector("input[name='amount']");

for (let select of options) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.innerText = currCode;
    option.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      option.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      option.selected = "selected";
    }
    select.append(option);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

function updateFlag(element) {
  const currencyCode = element.value;
  const countryCode = countryList[currencyCode];
  const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;
  const flagImg = element.parentElement.querySelector("img");
  flagImg.src = flagUrl;
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const amountInput = document.querySelector("input[name='amount']");
  let amount = amountInput.value;
  if (amount === "" || amount < 1) {
    amount = 1;
    amountInput.value = "1";
  }

  const fromCurrency = FC.value;
  const toCurrency = TC.value;

  // Construct the API URL with user selections and API key
  const url = `${API_URL}${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

  try {
    const response = await fetch(url);  // Fetch conversion rates from API
    const data = await response.json();  // Parse response as JSON

    if (data.result === "success") {
      const conversionRate = data.conversion_rate;  // Get rate for selected "to" currency
      const convertedAmount = amount * conversionRate;  // Calculate converted amount
      console.log(convertedAmount)

      // Update the result section with converted amount and formatted currency codes
      document.querySelector(".result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
      console.error("Error fetching conversion rates:", data.error);
      // Handle API errors (optional: display an error message to the user)
      document.querySelector(".result").innerText = "Error fetching conversion rates.";
    }
  } catch (error) {
    console.error("Error fetching conversion rates:", error);
    // Handle network errors (optional: display an error message to the user)
    document.querySelector(".result").innerText = "Network error. Please try again later.";
  }
});

