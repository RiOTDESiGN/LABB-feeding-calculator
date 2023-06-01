//  Fancybox eventlistener
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {});
});

// Check if the website has been loaded before
if (localStorage.getItem("historyList")) {
  // Code to run only the first time the webpage is loaded
  document.getElementById("historikk-container").style.visibility = "visible";
}

//  Feeding profiles
const profiles = [
  {
    kategori: "VALP",
    kategoriSize: "clamp(1em, 12vw, 2.85em)",
    bgColor: "#006f43",
    border: "3px solid #006f43",
    imgSrc: "valp.png",
    imgHref: "valp.webp",
    amountColor: "#006f43",
    caption: "Labb Valp hundefôr mellom- og store raser 15 kg",
    middels: "block",
    lavt: "Lavt",
    hoyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    min: "1",
    max: "80",
    showAge: "block"
  },
  {
    kategori: "VOKSEN",
    kategoriSize: "clamp(1em, 12vw, 2.85em)",
    bgColor: "#00538a",
    border: "3px solid #00538a",
    imgSrc: "voksen.png",
    imgHref: "voksen.webp",
    amountColor: "#00538a",
    caption: "Labb Voksen hundefôr mellom- og stor rase 15 kg",
    middels: "block",
    lavt: "Lavt",
    hoyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    min: "15",
    max: "80",
    showAge: "none"
  },
  {
    kategori: "AKTIV",
    kategoriSize: "clamp(1em, 12vw, 2.85em)",
    bgColor: "#b51826",
    border: "3px solid #b51826",
    imgSrc: "aktiv.png",
    imgHref: "aktiv.webp",
    amountColor: "#b51826",
    caption: "Labb Aktiv hundefôr hunder alle størrelser 15 kg",
    middels: "none",
    lavt: "Moderat aktivitet (1 – 3 timer)",
    hoyt: "Hardt arbeid (3 – 6 timer)",
    font: "18px",
    fontpadding: "14px 0",
    min: "8",
    max: "90",
    showAge: "none"
  },
  {
    kategori: "EKSTREM ENERGI",
    kategoriSize: "clamp(0.5em, 10vw, 2.3em)",
    bgColor: "#02304f",
    border: "3px solid #02304f",
    imgSrc: "ekstrem.png",
    imgHref: "ekstrem.webp",
    amountColor: "#02304f",
    caption: "Labb Ekstrem Energi hundefôr hardtarbeidende hunder 15 kg",
    middels: "none",
    lavt: "Hardt arbeid, jakt, trening og løp (3 – 6 timer)",
    hoyt: "Svært hardt arbeid, jakt, trening og løp (over 6 timer)",
    font: "12px",
    fontpadding: "17px 0",
    min: "8",
    max: "60",
    showAge: "none"
  },
  {
    kategori: "SENSITIV",
    kategoriSize: "clamp(0.5em, 10vw, 2.5em)",
    bgColor: "#a0715c",
    border: "3px solid #a0715c",
    imgSrc: "sensitiv.png",
    imgHref: "sensitiv.webp",
    amountColor: "#a0715c",
    caption: "Labb Sensitiv hundefôr mellom- og store hunder 15 kg",
    middels: "block",
    lavt: "Lavt",
    hoyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    min: "15",
    max: "80",
    showAge: "none"
  },
  {
    kategori: "SENIOR",
    kategoriSize: "clamp(1em, 12vw, 2.85em)",
    bgColor: "#c84e2d",
    border: "3px solid #c84e2d",
    imgSrc: "senior.png",
    imgHref: "senior.webp",
    amountColor: "#c84e2d",
    caption: "Labb Senior hundefôr mellom- og store hunder 15 kg",
    middels: "block",
    lavt: "Lavt",
    hoyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    min: "15",
    max: "90",
    showAge: "none"
  },
  {
    kategori: "VEKTKONTROLL",
    kategoriSize: "clamp(0.8em, 6vw, 1.45em)",
    bgColor: "#b41c69",
    border: "3px solid #b41c69",
    imgSrc: "vektkontroll.png",
    imgHref: "vektkontroll.webp",
    amountColor: "#b41c69",
    caption: "Labb Vektkontroll hundefôr mellom- og store hunder 15 kg",
    middels: "block",
    lavt: "Lavt",
    hoyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    min: "15",
    max: "90",
    showAge: "none"
  }
];

let currentIndex = 0;

//  Profile Updater
function updateProfile() {
  const profile = profiles[currentIndex];

  document.querySelectorAll(".nav-icon span").backgroundColor = profile.navColor;
  document.getElementById("navi").style.fontSize = profile.kategoriSize;
  document.getElementById("kategori").textContent = profile.kategori;
  document.getElementById("puppyForm").style.backgroundColor = profile.bgColor;
  document.getElementById("puppyForm").style.border = profile.border;
  document.getElementById("cut").style.backgroundColor = profile.bgColor;
  document.getElementById("cut2").style.backgroundColor = profile.bgColor;
  document.getElementById("foodAmount").style.color = profile.amountColor;
  document.getElementById("stort").dataset.caption = profile.caption;
  document.getElementById("stort").href = profile.imgHref;
  document.getElementById("lite").src = profile.imgSrc;
  document.getElementById("middels").style.display = profile.middels;
  document.getElementById("lavt").textContent = profile.lavt;
  document.getElementById("hoyt").textContent = profile.hoyt;
  document.getElementById("activity").style.fontSize = profile.font;
  document.getElementById("activity").style.padding = profile.fontpadding;
  document.getElementById("weight").min = profile.min;
  document.getElementById("weight").max = profile.max;
  document.getElementById("hide").style.display = profile.showAge;

  document.getElementById("result").style.display = "none";
  document.getElementById("age").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("activity").value = "";

  if (profile.kategori !== "VALP") {
    document.getElementById("age").removeAttribute("required");
  } else {
    document.getElementById("age").setAttribute("required", "");
  }
}

document.getElementById("left").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
  updateProfile();
});

document.getElementById("right").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % profiles.length;
  updateProfile();
});

//  LABB Feeding Information
function calculateFoodAmount() {
  let foodAmount = "";
  const kategori = profiles[currentIndex].kategori;
  const age = parseInt(document.getElementById("age").value, 10);
  const weight = parseInt(document.getElementById("weight").value, 10);
  const activity = document.getElementById("activity").value;

  if (kategori === "VALP") {
    const foodAmounts = [
      {
        kategori: "VALP",
        ageRanges: [
          {
            ageRange: [1, 5],
            weightRanges: [
              { min: 1, max: 3, amount: "70-125" },
              { min: 3, max: 5, amount: "135-195" },
              { min: 5, max: 8, amount: "195-280" },
              { min: 8, max: 11, amount: "280-350" },
              { min: 11, max: 15, amount: "350-440" },
              { min: 15, max: 20, amount: "440-550" },
              { min: 20, max: 25, amount: "550-650" }
            ]
          },
          {
            ageRange: [6, 8],
            weightRanges: [
              { min: 5, max: 8, amount: "160-230" },
              { min: 8, max: 11, amount: "230-290" },
              { min: 11, max: 15, amount: "290-340" },
              { min: 15, max: 20, amount: "340-430" },
              { min: 20, max: 25, amount: "430-510" },
              { min: 25, max: 30, amount: "510-595" },
              { min: 35, max: 40, amount: "595-670" },
              { min: 40, max: 45, amount: "670-730" }
            ]
          },
          {
            ageRange: [9, 12],
            weightRanges: [
              { min: 11, max: 15, amount: "235-340" },
              { min: 15, max: 20, amount: "340-405" },
              { min: 20, max: 25, amount: "405-470" },
              { min: 25, max: 30, amount: "470-530" },
              { min: 35, max: 40, amount: "530-590" },
              { min: 40, max: 45, amount: "590-650" },
              { min: 45, max: 50, amount: "650-705" },
              { min: 50, max: 60, amount: "705-790" },
              { min: 60, max: 70, amount: "790-880" },
              { min: 70, max: 80, amount: "880-970" }
            ]
          },
          {
            ageRange: [13, 16],
            weightRanges: [
              { min: 15, max: 20, amount: "330-360" },
              { min: 20, max: 25, amount: "360-400" },
              { min: 25, max: 30, amount: "400-430" },
              { min: 35, max: 40, amount: "430-515" },
              { min: 40, max: 45, amount: "515-620" },
              { min: 45, max: 50, amount: "620-720" },
              { min: 50, max: 60, amount: "720-820" },
              { min: 60, max: 70, amount: "820-900" },
              { min: 70, max: 80, amount: "900-950" }
            ]
          }
        ]
      }
    ];

    const categoryObj = foodAmounts.find((item) => item.kategori === kategori);

    if (categoryObj) {
      const { ageRanges } = categoryObj;

      for (const ageRangeObj of ageRanges) {
        const { ageRange, weightRanges } = ageRangeObj;
        const [minAge, maxAge] = ageRange;

        if (age >= minAge && age <= maxAge) {
          for (const weightRangeObj of weightRanges) {
            const { min, max, amount } = weightRangeObj;

            if (weight >= min && weight <= max) {
              foodAmount = amount;
              break;
            }
          }
          break;
        }
      }
    }

    if (foodAmount !== "") {
      if (activity === "lavt") {
        return foodAmount.toString().slice(0, 3);
      } else if (activity === "hoyt") {
        return foodAmount.toString().slice(-3);
      } else if (activity === "middels") {
        const range = foodAmount.split("-");
        const lowerValue = parseInt(range[0], 10);
        const upperValue = parseInt(range[1], 10);
        const average = (lowerValue + upperValue) / 2;
        return average;
      }
    }
  } else if (kategori === "VOKSEN" || kategori === "SENIOR" || kategori === "SENSITIV" || kategori === "VEKTKONTROLL") {
    const foodAmountsADULT = [
      {
        kategori: "VOKSEN",
        weightRanges: [
          { caWeight: 15, amount: "220" },
          { caWeight: 20, amount: "280" },
          { caWeight: 25, amount: "320" },
          { caWeight: 30, amount: "360" },
          { caWeight: 35, amount: "400" },
          { caWeight: 40, amount: "440" },
          { caWeight: 45, amount: "480" },
          { caWeight: 50, amount: "520" },
          { caWeight: 55, amount: "560" },
          { caWeight: 60, amount: "600" },
          { caWeight: 70, amount: "680" },
          { caWeight: 80, amount: "770" }
        ]
      },
      {
        kategori: "SENIOR",
        weightRanges: [
          { caWeight: 15, amount: "200" },
          { caWeight: 20, amount: "240" },
          { caWeight: 25, amount: "280" },
          { caWeight: 30, amount: "320" },
          { caWeight: 35, amount: "365" },
          { caWeight: 40, amount: "400" },
          { caWeight: 45, amount: "440" },
          { caWeight: 50, amount: "480" },
          { caWeight: 55, amount: "510" },
          { caWeight: 60, amount: "545" },
          { caWeight: 70, amount: "640" },
          { caWeight: 80, amount: "720" },
          { caWeight: 90, amount: "810" }
        ]
      },
      {
        kategori: "SENSITIV",
        weightRanges: [
          { caWeight: 15, amount: "210" },
          { caWeight: 20, amount: "270" },
          { caWeight: 25, amount: "300" },
          { caWeight: 30, amount: "350" },
          { caWeight: 35, amount: "390" },
          { caWeight: 40, amount: "430" },
          { caWeight: 45, amount: "470" },
          { caWeight: 50, amount: "510" },
          { caWeight: 55, amount: "550" },
          { caWeight: 60, amount: "590" },
          { caWeight: 70, amount: "670" },
          { caWeight: 80, amount: "760" }
        ]
      },
      {
        kategori: "VEKTKONTROLL",
        weightRanges: [
          { caWeight: 15, amount: "210" },
          { caWeight: 20, amount: "240" },
          { caWeight: 25, amount: "280" },
          { caWeight: 30, amount: "320" },
          { caWeight: 35, amount: "365" },
          { caWeight: 40, amount: "400" },
          { caWeight: 45, amount: "440" },
          { caWeight: 50, amount: "480" },
          { caWeight: 55, amount: "510" },
          { caWeight: 60, amount: "545" },
          { caWeight: 70, amount: "640" },
          { caWeight: 80, amount: "720" },
          { caWeight: 90, amount: "810" }
        ]
      }
    ];

    const categoryObj = foodAmountsADULT.find((item) => item.kategori === kategori);

    if (categoryObj) {
      const { weightRanges } = categoryObj;

      weightRanges.sort((a, b) => a.caWeight - b.caWeight);

      for (let i = 0; i < weightRanges.length; i++) {
        const weightRangeObj = weightRanges[i];
        const { caWeight, amount } = weightRangeObj;

        if (caWeight >= weight) {
          if (i === 0) {
            foodAmount = weightRanges[0].amount;
          } else {
            const prevWeightRange = weightRanges[i - 1];
            const prevWeight = prevWeightRange.caWeight;
            const diffCurrent = Math.abs(caWeight - weight);
            const diffPrev = Math.abs(prevWeight - weight);
            if (diffCurrent < diffPrev) {
              foodAmount = amount;
            } else {
              foodAmount = prevWeightRange.amount;
            }
          }
          break;
        }
      }
    }

    const foodAmountNumeric = parseFloat(foodAmount);

    if (activity === "lavt") {
      foodAmount = foodAmountNumeric - foodAmountNumeric * 0.2;
    } else if (activity === "hoyt") {
      foodAmount = foodAmountNumeric + foodAmountNumeric * 0.2;
    }

    return foodAmount;
  } else {
    const foodAmountsENERGY = [
      {
        kategori: "AKTIV",
        weightRanges: [
          { weight: 8, amountL: "120", amountH: "140" },
          { weight: 10, amountL: "160", amountH: "190" },
          { weight: 12, amountL: "190", amountH: "230" },
          { weight: 15, amountL: "210", amountH: "260" },
          { weight: 20, amountL: "270", amountH: "330" },
          { weight: 25, amountL: "330", amountH: "390" },
          { weight: 30, amountL: "330", amountH: "450" },
          { weight: 35, amountL: "410", amountH: "500" },
          { weight: 40, amountL: "450", amountH: "540" },
          { weight: 45, amountL: "490", amountH: "580" },
          { weight: 50, amountL: "520", amountH: "620" },
          { weight: 55, amountL: "550", amountH: "670" },
          { weight: 60, amountL: "600", amountH: "710" },
          { weight: 70, amountL: "690", amountH: "890" },
          { weight: 80, amountL: "780", amountH: "1000" },
          { weight: 90, amountL: "870", amountH: "1100" }
        ]
      },
      {
        kategori: "EKSTREM ENERGI",
        weightRanges: [
          { weight: 10, amountL: "180", amountH: "300" },
          { weight: 15, amountL: "220", amountH: "405" },
          { weight: 20, amountL: "280", amountH: "510" },
          { weight: 25, amountL: "330", amountH: "600" },
          { weight: 30, amountL: "380", amountH: "675" },
          { weight: 35, amountL: "420", amountH: "765" },
          { weight: 40, amountL: "460", amountH: "855" },
          { weight: 45, amountL: "490", amountH: "930" },
          { weight: 50, amountL: "520", amountH: "1005" },
          { weight: 55, amountL: "550", amountH: "1080" },
          { weight: 60, amountL: "600", amountH: "1155" }
        ]
      }
    ];

    function roundToClosestWeight(weight, weightRanges) {
      let closestWeight = weightRanges[0].weight;
      let minDifference = Math.abs(weight - closestWeight);

      for (let i = 1; i < weightRanges.length; i++) {
        const currentWeight = weightRanges[i].weight;
        const difference = Math.abs(weight - currentWeight);

        if (difference < minDifference) {
          closestWeight = currentWeight;
          minDifference = difference;
        }
      }

      return closestWeight;
    }

    const categoryObj = foodAmountsENERGY.find((item) => item.kategori === kategori);

    if (categoryObj) {
      const { weightRanges } = categoryObj;
      const closestWeight = roundToClosestWeight(weight, weightRanges);
      const selectedWeightRange = weightRanges.find((item) => item.weight === closestWeight);

      if (selectedWeightRange) {
        foodAmount = activity === "hoyt" ? selectedWeightRange.amountH : selectedWeightRange.amountL;
      }
    }

    return foodAmount;
  }
}

//  Max 2 digits on inputs
function maxInput() {
  const ageInput = document.getElementById("age");
  const weightInput = document.getElementById("weight");

  if (ageInput.value.length > ageInput.maxLength) ageInput.value = ageInput.value.slice(0, ageInput.maxLength);

  if (weightInput.value.length > weightInput.maxLength) weightInput.value = weightInput.value.slice(0, weightInput.maxLength);
}

document.getElementById("age").addEventListener("input", maxInput);
document.getElementById("weight").addEventListener("input", maxInput);

//  Submit and get results
document.getElementById("puppyForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const kategori = profiles[currentIndex].kategori;
  const age = parseInt(document.getElementById("age").value, 10);
  const weight = parseInt(document.getElementById("weight").value, 10);
  const activity = document.getElementById("activity").value;
  let foodAmount = calculateFoodAmount();

  // Calculate food amount based on the inputs
  if (kategori === "VALP") {
    foodAmount = calculateFoodAmount(age, weight, activity, profiles[currentIndex].kategori);
    document.getElementById("foodAmount").textContent = `${foodAmount} gram pr. dag`;
  } else {
    foodAmount = calculateFoodAmount(weight, activity, profiles[currentIndex].kategori);
    document.getElementById("foodAmount").textContent = `${foodAmount} gram pr. dag`;
  }

  // Display the result on the webpage
  document.getElementById("result").style.display = "block";

  // Add result to history
  storeResult();

  // Show history
  document.getElementById("historikk-container").style.visibility = "visible";
});

updateProfile();

// History Local Storage
let historyList = [];

// Load history from localStorage if available
if (localStorage.getItem("historyList")) {
  historyList = JSON.parse(localStorage.getItem("historyList"));
  updateHistory();
}

function storeResult() {
  const profile = profiles[currentIndex].kategori;
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const activity = document.getElementById("activity").value;
  const result = document.getElementById("foodAmount").textContent;
  const timestamp = new Date().toLocaleDateString();

  const entry = {
    profile: profile,
    age: age,
    weight: weight,
    activity: activity,
    result: result,
    timestamp: timestamp
  };

  historyList.unshift(entry); // Add the new entry to the beginning of the array
  historyList = historyList.slice(0, 10); // Keep only the latest 10 entries

  // Save updated history to localStorage
  localStorage.setItem("historyList", JSON.stringify(historyList));

  updateHistory();
}

function updateHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.textContent = "";

  if (historyList.length === 0) {
    const defaultText = document.createElement("p");
    const defaultText2 = document.createElement("p");
    defaultText.textContent = "Ingen historikk tilgjengelig.";
    defaultText2.textContent = "Bruk appen for å se dine siste 10 resultater her.";
    historyDiv.appendChild(defaultText);
    historyDiv.appendChild(defaultText2);
  } else {
    for (let i = 0; i < historyList.length; i++) {
      const entry = historyList[i];
      const entryDiv = document.createElement("div");
      const resultPage = document.createElement("p");
      const resultPweight = document.createElement("p");
      const resultPactivity = document.createElement("p");
      const resultPresult = document.createElement("p");
      const resultPspacer = document.createElement("p");
      const resultP = document.createElement("div");
      const resultPtimeStamp = document.createElement("div");
      const categorySpan = document.createElement("span");
      const timestampSpan = document.createElement("span");

      const options = { year: "numeric", month: "long", day: "numeric" };
      const timestamp = new Date(entry.timestamp).toLocaleDateString("no-NO", options);

      // Create separate text nodes for each part of the text
      const categoryText = document.createTextNode(entry.profile);
      let ageText;
      if (entry.age === "1") {
        ageText = document.createTextNode(entry.age + " måned");
      } else if (entry.age === "16") {
        ageText = document.createTextNode(entry.age + " måneder.");
      } else {
        ageText = document.createTextNode(entry.age + " måneder");
      }
      const changeText = document.createTextNode("Dette er den siste måneden på valpefôr. LABB har flere gode alternativer til din hund, vi anbefaler LABB VOKSEN.");
      const weightText = document.createTextNode("Hundens vekt: " + entry.weight + " kg");
      const activityText = document.createTextNode("Aktivitetsnivå: " + entry.activity);
      const resultText = document.createTextNode("Mengde: " + entry.result);
      const dateText = document.createTextNode(timestamp);

      // Append text nodes
      resultPtimeStamp.className = "timestamp";
      categorySpan.appendChild(categoryText);
      timestampSpan.appendChild(dateText);
      resultPage.appendChild(document.createElement("br"));
      resultPage.appendChild(ageText);
      resultPage.appendChild(document.createElement("br"));
      if (entry.age === "16") {
        resultPage.appendChild(document.createElement("br"));
        resultPage.appendChild(changeText);
      }
      resultPweight.appendChild(document.createElement("br"));
      resultPweight.appendChild(weightText);
      resultPactivity.appendChild(activityText);
      resultPresult.appendChild(resultText);
      resultPspacer.appendChild(document.createElement("br"));
      resultPspacer.appendChild(document.createElement("hr"));

      entryDiv.classList.add(entry.profile.toLowerCase().replace(/ /g, "-"));
      entryDiv.classList.add("entry");

      resultPtimeStamp.appendChild(categorySpan);
      resultPtimeStamp.appendChild(timestampSpan);
      entryDiv.appendChild(resultPtimeStamp);
      if (entry.profile === "VALP") {
        resultP.appendChild(resultPage);
      }
      resultP.appendChild(resultPweight);
      resultP.appendChild(resultPactivity);
      resultP.appendChild(resultPresult);
      resultP.appendChild(resultPspacer);
      entryDiv.appendChild(resultP);
      historyDiv.appendChild(entryDiv);
    }
  }
}

function clearHistory() {
  historyList = []; // Empty the history list
  localStorage.removeItem("historyList"); // Remove the history list from local storage
  updateHistory(); // Update the displayed history
}

const reset = document.getElementById("reset");
reset.addEventListener("mousedown", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById("result").style.display = "none";
  document.getElementById("age").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("activity").value = "";
  clearHistory(); // Clear the history list
});