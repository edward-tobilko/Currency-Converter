// Data
// const countries = [
//   { name: "Afghanistan", code: "AF" },
//   { name: "Åland Islands", code: "AX" },
//   { name: "Albania", code: "AL" },
//   { name: "Algeria", code: "DZ" },
//   { name: "American Samoa", code: "AS" },
//   { name: "AndorrA", code: "AD" },
//   { name: "Angola", code: "AO" },
//   { name: "Anguilla", code: "AI" },
//   { name: "Antarctica", code: "AQ" },
//   { name: "Antigua and Barbuda", code: "AG" },
//   { name: "Argentina", code: "AR" },
//   { name: "Armenia", code: "AM" },
//   { name: "Aruba", code: "AW" },
//   { name: "Australia", code: "AU" },
//   { name: "Austria", code: "AT" },
//   { name: "Azerbaijan", code: "AZ" },
//   { name: "Bahamas", code: "BS" },
//   { name: "Bahrain", code: "BH" },
//   { name: "Bangladesh", code: "BD" },
//   { name: "Barbados", code: "BB" },
//   { name: "Belarus", code: "BY" },
//   { name: "Belgium", code: "BE" },
//   { name: "Belize", code: "BZ" },
//   { name: "Benin", code: "BJ" },
//   { name: "Bermuda", code: "BM" },
//   { name: "Bhutan", code: "BT" },
//   { name: "Bolivia", code: "BO" },
//   { name: "Bosnia and Herzegovina", code: "BA" },
//   { name: "Botswana", code: "BW" },
//   { name: "Bouvet Island", code: "BV" },
//   { name: "Brazil", code: "BR" },
//   { name: "British Indian Ocean Territory", code: "IO" },
//   { name: "Brunei Darussalam", code: "BN" },
//   { name: "Bulgaria", code: "BG" },
//   { name: "Burkina Faso", code: "BF" },
//   { name: "Burundi", code: "BI" },
//   { name: "Cambodia", code: "KH" },
//   { name: "Cameroon", code: "CM" },
//   { name: "Canada", code: "CA" },
//   { name: "Cape Verde", code: "CV" },
//   { name: "Cayman Islands", code: "KY" },
//   { name: "Central African Republic", code: "CF" },
//   { name: "Chad", code: "TD" },
//   { name: "Chile", code: "CL" },
//   { name: "China", code: "CN" },
//   { name: "Christmas Island", code: "CX" },
//   { name: "Cocos (Keeling) Islands", code: "CC" },
//   { name: "Colombia", code: "CO" },
//   { name: "Comoros", code: "KM" },
//   { name: "Congo", code: "CG" },
//   { name: "Congo, The Democratic Republic of the", code: "CD" },
//   { name: "Cook Islands", code: "CK" },
//   { name: "Costa Rica", code: "CR" },
//   { name: "Cote D'Ivoire", code: "CI" },
//   { name: "Croatia", code: "HR" },
//   { name: "Cuba", code: "CU" },
//   { name: "Cyprus", code: "CY" },
//   { name: "Czech Republic", code: "CZ" },
//   { name: "Denmark", code: "DK" },
//   { name: "Djibouti", code: "DJ" },
//   { name: "Dominica", code: "DM" },
//   { name: "Dominican Republic", code: "DO" },
//   { name: "Ecuador", code: "EC" },
//   { name: "Egypt", code: "EG" },
//   { name: "El Salvador", code: "SV" },
//   { name: "Equatorial Guinea", code: "GQ" },
//   { name: "Eritrea", code: "ER" },
//   { name: "Estonia", code: "EE" },
//   { name: "Ethiopia", code: "ET" },
//   { name: "Falkland Islands (Malvinas)", code: "FK" },
//   { name: "Faroe Islands", code: "FO" },
//   { name: "Fiji", code: "FJ" },
//   { name: "Finland", code: "FI" },
//   { name: "France", code: "FR" },
//   { name: "French Guiana", code: "GF" },
//   { name: "French Polynesia", code: "PF" },
//   { name: "French Southern Territories", code: "TF" },
//   { name: "Gabon", code: "GA" },
//   { name: "Gambia", code: "GM" },
//   { name: "Georgia", code: "GE" },
//   { name: "Germany", code: "DE" },
//   { name: "Ghana", code: "GH" },
//   { name: "Gibraltar", code: "GI" },
//   { name: "Greece", code: "GR" },
//   { name: "Greenland", code: "GL" },
//   { name: "Grenada", code: "GD" },
//   { name: "Guadeloupe", code: "GP" },
//   { name: "Guam", code: "GU" },
//   { name: "Guatemala", code: "GT" },
//   { name: "Guernsey", code: "GG" },
//   { name: "Guinea", code: "GN" },
//   { name: "Guinea-Bissau", code: "GW" },
//   { name: "Guyana", code: "GY" },
//   { name: "Haiti", code: "HT" },
//   { name: "Heard Island and Mcdonald Islands", code: "HM" },
//   { name: "Holy See (Vatican City State)", code: "VA" },
//   { name: "Honduras", code: "HN" },
//   { name: "Hong Kong", code: "HK" },
//   { name: "Hungary", code: "HU" },
//   { name: "Iceland", code: "IS" },
//   { name: "India", code: "IN" },
//   { name: "Indonesia", code: "ID" },
//   { name: "Iran, Islamic Republic Of", code: "IR" },
//   { name: "Iraq", code: "IQ" },
//   { name: "Ireland", code: "IE" },
//   { name: "Isle of Man", code: "IM" },
//   { name: "Israel", code: "IL" },
//   { name: "Italy", code: "IT" },
//   { name: "Jamaica", code: "JM" },
//   { name: "Japan", code: "JP" },
//   { name: "Jersey", code: "JE" },
//   { name: "Jordan", code: "JO" },
//   { name: "Kazakhstan", code: "KZ" },
//   { name: "Kenya", code: "KE" },
//   { name: "Kiribati", code: "KI" },
//   { name: "Korea, Democratic People'S Republic of", code: "KP" },
//   { name: "Korea, Republic of", code: "KR" },
//   { name: "Kuwait", code: "KW" },
//   { name: "Kyrgyzstan", code: "KG" },
//   { name: "Lao People'S Democratic Republic", code: "LA" },
//   { name: "Latvia", code: "LV" },
//   { name: "Lebanon", code: "LB" },
//   { name: "Lesotho", code: "LS" },
//   { name: "Liberia", code: "LR" },
//   { name: "Libyan Arab Jamahiriya", code: "LY" },
//   { name: "Liechtenstein", code: "LI" },
//   { name: "Lithuania", code: "LT" },
//   { name: "Luxembourg", code: "LU" },
//   { name: "Macao", code: "MO" },
//   { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
//   { name: "Madagascar", code: "MG" },
//   { name: "Malawi", code: "MW" },
//   { name: "Malaysia", code: "MY" },
//   { name: "Maldives", code: "MV" },
//   { name: "Mali", code: "ML" },
//   { name: "Malta", code: "MT" },
//   { name: "Marshall Islands", code: "MH" },
//   { name: "Martinique", code: "MQ" },
//   { name: "Mauritania", code: "MR" },
//   { name: "Mauritius", code: "MU" },
//   { name: "Mayotte", code: "YT" },
//   { name: "Mexico", code: "MX" },
//   { name: "Micronesia, Federated States of", code: "FM" },
//   { name: "Moldova, Republic of", code: "MD" },
//   { name: "Monaco", code: "MC" },
//   { name: "Mongolia", code: "MN" },
//   { name: "Montserrat", code: "MS" },
//   { name: "Morocco", code: "MA" },
//   { name: "Mozambique", code: "MZ" },
//   { name: "Myanmar", code: "MM" },
//   { name: "Namibia", code: "NA" },
//   { name: "Nauru", code: "NR" },
//   { name: "Nepal", code: "NP" },
//   { name: "Netherlands", code: "NL" },
//   { name: "Netherlands Antilles", code: "AN" },
//   { name: "New Caledonia", code: "NC" },
//   { name: "New Zealand", code: "NZ" },
//   { name: "Nicaragua", code: "NI" },
//   { name: "Niger", code: "NE" },
//   { name: "Nigeria", code: "NG" },
//   { name: "Niue", code: "NU" },
//   { name: "Norfolk Island", code: "NF" },
//   { name: "Northern Mariana Islands", code: "MP" },
//   { name: "Norway", code: "NO" },
//   { name: "Oman", code: "OM" },
//   { name: "Pakistan", code: "PK" },
//   { name: "Palau", code: "PW" },
//   { name: "Palestinian Territory, Occupied", code: "PS" },
//   { name: "Panama", code: "PA" },
//   { name: "Papua New Guinea", code: "PG" },
//   { name: "Paraguay", code: "PY" },
//   { name: "Peru", code: "PE" },
//   { name: "Philippines", code: "PH" },
//   { name: "Pitcairn", code: "PN" },
//   { name: "Poland", code: "PL" },
//   { name: "Portugal", code: "PT" },
//   { name: "Puerto Rico", code: "PR" },
//   { name: "Qatar", code: "QA" },
//   { name: "Reunion", code: "RE" },
//   { name: "Romania", code: "RO" },
//   { name: "Russian Federation", code: "RU" },
//   { name: "RWANDA", code: "RW" },
//   { name: "Saint Helena", code: "SH" },
//   { name: "Saint Kitts and Nevis", code: "KN" },
//   { name: "Saint Lucia", code: "LC" },
//   { name: "Saint Pierre and Miquelon", code: "PM" },
//   { name: "Saint Vincent and the Grenadines", code: "VC" },
//   { name: "Samoa", code: "WS" },
//   { name: "San Marino", code: "SM" },
//   { name: "Sao Tome and Principe", code: "ST" },
//   { name: "Saudi Arabia", code: "SA" },
//   { name: "Senegal", code: "SN" },
//   { name: "Serbia and Montenegro", code: "CS" },
//   { name: "Seychelles", code: "SC" },
//   { name: "Sierra Leone", code: "SL" },
//   { name: "Singapore", code: "SG" },
//   { name: "Slovakia", code: "SK" },
//   { name: "Slovenia", code: "SI" },
//   { name: "Solomon Islands", code: "SB" },
//   { name: "Somalia", code: "SO" },
//   { name: "South Africa", code: "ZA" },
//   { name: "South Georgia and the South Sandwich Islands", code: "GS" },
//   { name: "Spain", code: "ES" },
//   { name: "Sri Lanka", code: "LK" },
//   { name: "Sudan", code: "SD" },
//   { name: "Suriname", code: "SR" },
//   { name: "Svalbard and Jan Mayen", code: "SJ" },
//   { name: "Swaziland", code: "SZ" },
//   { name: "Sweden", code: "SE" },
//   { name: "Switzerland", code: "CH" },
//   { name: "Syrian Arab Republic", code: "SY" },
//   { name: "Taiwan, Province of China", code: "TW" },
//   { name: "Tajikistan", code: "TJ" },
//   { name: "Tanzania, United Republic of", code: "TZ" },
//   { name: "Thailand", code: "TH" },
//   { name: "Timor-Leste", code: "TL" },
//   { name: "Togo", code: "TG" },
//   { name: "Tokelau", code: "TK" },
//   { name: "Tonga", code: "TO" },
//   { name: "Trinidad and Tobago", code: "TT" },
//   { name: "Tunisia", code: "TN" },
//   { name: "Turkey", code: "TR" },
//   { name: "Turkmenistan", code: "TM" },
//   { name: "Turks and Caicos Islands", code: "TC" },
//   { name: "Tuvalu", code: "TV" },
//   { name: "Uganda", code: "UG" },
//   { name: "Ukraine", code: "UA" },
//   { name: "United Arab Emirates", code: "AE" },
//   { name: "United Kingdom", code: "GB" },
//   { name: "United States", code: "US" },
//   { name: "United States Minor Outlying Islands", code: "UM" },
//   { name: "Uruguay", code: "UY" },
//   { name: "Uzbekistan", code: "UZ" },
//   { name: "Vanuatu", code: "VU" },
//   { name: "Venezuela", code: "VE" },
//   { name: "Viet Nam", code: "VN" },
//   { name: "Virgin Islands, British", code: "VG" },
//   { name: "Virgin Islands, U.S.", code: "VI" },
//   { name: "Wallis and Futuna", code: "WF" },
//   { name: "Western Sahara", code: "EH" },
//   { name: "Yemen", code: "YE" },
//   { name: "Zambia", code: "ZM" },
//   { name: "Zimbabwe", code: "ZW" },
// ];
const countries = {
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

// Main
const API_KEY = "ea56698f4c3227f852d53cef";
const URL = "https://v6.exchangerate-api.com/v6/";

const dropList = document.querySelectorAll(".converter__form-content select");
const btn = document.querySelector("form .converter__form-footer__btn");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const changeOfSides = document.querySelector(
  ".converter__form-content .converter__form-exchange",
);

for (let index = 0; index < dropList.length; index++) {
  for (currencyCode in countries) {
    // Select current option
    let selected;
    if (index === 0) {
      selected = currencyCode === "USD" ? "selected" : "";
    } else if (index == 1) {
      selected = currencyCode === "UAH" ? "selected" : "";
    }

    // Create new tag for the 'option' element
    let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
    dropList[index].insertAdjacentHTML("beforeEnd", optionTag);
  }

  // Showing flag of a selected country
  dropList[index].addEventListener("change", (event) => {
    loadFlag(event.target);
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

window.addEventListener("load", () => {
  getExchangeRate();
});

// Change of sides flags and countries code
changeOfSides.addEventListener("click", () => {
  let changeFromCurrency = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = changeFromCurrency;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);

  getExchangeRate();
});

// Create function for flags of a selected country
function loadFlag(item) {
  for (key in countries) {
    if (key === item.value) {
      let imgTag = item.parentElement.querySelector(
        ".converter__form-content__flag",
      );
      imgTag.src = `https://countryflagsapi.com/png/${countries[key]}`;
    }
  }
}

function getExchangeRate() {
  const amount = document.querySelector(
    ".converter__form-header .converter__form-header__input",
  );
  const exchangeRatetext = document.querySelector(
    ".converter__form-footer__results",
  );

  let amountValue = amount.value;
  if (amountValue === "" || amountValue === "0") {
    amount.value = "1";
    amountValue = 1;
  }

  fetch(URL + `${API_KEY}/latest/${fromCurrency.value}`)
    .then((response) => response.json())
    .then((result) => {
      // Change current rate "from to"
      let exchangeRate = result.conversion_rates[toCurrency.value];

      // Total exchange rate "from to"
      let totalExchangeRate = (amountValue * exchangeRate).toFixed(2);

      // Get exchange rate text
      exchangeRatetext.innerText = `${amountValue} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    })
    .catch(() => "Error");

  exchangeRatetext.innerHTML = `
      <div class="isLoading"><img src='./img/loader.gif' /></div>
      `;
}
