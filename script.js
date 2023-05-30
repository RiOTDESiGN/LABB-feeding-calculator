// Check if the website has been loaded before
if (!localStorage.getItem('firstLoad')) {
  // Code to run only the first time the webpage is loaded
  document.getElementById('historikk-container').style.visibility = 'visible';

  // Set a flag in localStorage to indicate that the website has been loaded
  localStorage.setItem('firstLoad', 'true');
}


//  Feeding profiles
const profiles = [
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
    høyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    dog: "voksendog.png",
    min: "15",
    max: "80",
    navColor: "#00538a"
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
    høyt: "Hardt arbeid (3 – 6 timer)",
    font: "18px",
    fontpadding: "14px 0",
    dog: "aktivdog.png",
    min: "8",
    max: "90",
    navColor: "#b51826"
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
    høyt: "Svært hardt arbeid, jakt, trening og løp (over 6 timer)",
    font: "12px",
    fontpadding: "17px 0",
    dog: "ekstremdog.png",
    min: "8",
    max: "60",
    navColor: "#02304f"
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
    høyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    dog: "valpdog.png",
    min: "15",
    max: "80",
    navColor: "#a0715c"
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
    høyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    dog: "seniordog.png",
    min: "15",
    max: "90",
    navColor: "#c84e2d"
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
    høyt: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    dog: "vektkontrolldog.png",
    min: "15",
    max: "90",
    navColor: "#b41c69"
  },
];

let currentIndex = 0;


//  Profile Updater
function updateProfile() {
  const profile = profiles[currentIndex];
  const navIconSpanElements = document.querySelectorAll('.nav-icon span');

navIconSpanElements.forEach(element => {
  element.style.backgroundColor = profile.navColor;
});

  document.querySelectorAll('.nav-icon span').backgroundColor = profile.navColor;
  navi.style.fontSize = profile.kategoriSize;
  kategori.textContent = profile.kategori;
  puppyForm.style.backgroundColor = profile.bgColor;
  puppyForm.style.border = profile.border;
  cut.style.backgroundColor = profile.bgColor;
  foodAmount.style.color = profile.amountColor;
  stort.dataset.caption = profile.caption;
  stort.href = profile.imgHref;
  lite.src = profile.imgSrc;
  middels.style.display = profile.middels;
  lavt.textContent = profile.lavt;
  høyt.textContent = profile.høyt;
  activity.style.fontSize = profile.font;
  activity.style.padding = profile.fontpadding;
  weight.min = profile.min;
  weight.max = profile.max;
  // dog.src = profile.dog;

  result.style.display = "none";
  weight.value = "";
  activity.value = "";
}

left.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
  updateProfile();
});

right.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % profiles.length;
  updateProfile();
});


//  LABB Feeding Information
function calculateFoodAmount(weight, activity, kategori) {
  let foodAmount = "";

  if ( kategori === "VOKSEN" || kategori === "SENIOR" || kategori === "SENSITIV" || kategori === "VEKTKONTROLL") {

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
          { caWeight: 80, amount: "770" },
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
          { caWeight: 90, amount: "810" },
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
          { caWeight: 80, amount: "760" },
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
          { caWeight: 90, amount: "810" },
        ]
      },
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
      foodAmount = foodAmountNumeric - (foodAmountNumeric * 0.2);
    } else if (activity === "høyt") {
      foodAmount = foodAmountNumeric + (foodAmountNumeric * 0.2);
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
          { weight: 90, amountL: "870", amountH: "1100" },
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
          { weight: 60, amountL: "600", amountH: "1155" },
        ]
      },
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
    
    const categoryObj = foodAmountsENERGY.find(item => item.kategori === kategori);
    
    if (categoryObj) {
      const { weightRanges } = categoryObj;
      const closestWeight = roundToClosestWeight(weight, weightRanges);
      const selectedWeightRange = weightRanges.find(item => item.weight === closestWeight);
    
      if (selectedWeightRange) {
        foodAmount = activity === "høyt" ? selectedWeightRange.amountH : selectedWeightRange.amountL;
      }
    }
    
    return foodAmount;
  }
}


//  Fancybox eventlistener
Fancybox.bind("[data-fancybox]", {

});


//  Max 2 digits on inputs
function maxInput() {
var weightInput = document.getElementById("weight");

if (weightInput.value.length > weightInput.maxLength)
  weightInput.value = weightInput.value.slice(0, weightInput.maxLength);
}


//  Submit and get results
document.getElementById('puppyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const weight = parseInt(document.getElementById('weight').value);
  const activity = document.getElementById('activity').value;

  // Calculate food amount based on the inputs
  const foodAmount = calculateFoodAmount(weight, activity, profiles[currentIndex].kategori);

  // Display the result on the webpage
  document.getElementById('result').style.display = 'block';

  // Display the appropriate food amount
  document.getElementById('foodAmount').textContent = `${foodAmount} gram pr. dag`;

  // Add result to history
  storeResult();

  // Show history
  document.getElementById('historikk-container').style.visibility = 'visible';
});

updateProfile();


// History Local Storage
var historyList = [];

// Load history from localStorage if available
if (localStorage.getItem("historyList")) {
  historyList = JSON.parse(localStorage.getItem("historyList"));
  updateHistory();
}

function storeResult() {
  var profile = profiles[currentIndex].kategori;
  var weight = document.getElementById('weight').value;
  var activity = document.getElementById('activity').value;
  var result = document.getElementById('foodAmount').textContent;
  var timestamp = new Date().toLocaleString();
  var entry = {
    profile: profile,
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
  var historyDiv = document.getElementById("history");
  historyDiv.textContent = "";

  if (historyList.length === 0) {
    var defaultText = document.createElement("p");
    var defaultText2 = document.createElement("p");
    defaultText.textContent = "Ingen historikk tilgjengelig.";
    defaultText2.textContent = "Bruk appen for å se dine siste 10 resultater her.";
    historyDiv.appendChild(defaultText);
    historyDiv.appendChild(defaultText2);
  } else {
    for (var i = 0; i < historyList.length; i++) {
      var entry = historyList[i];
      var entryDiv = document.createElement("div");
      var resultP = document.createElement("p");
      var resultPtimeStamp = document.createElement("p");

      var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
      var timestamp = new Date(entry.timestamp).toLocaleString('no-NO', options);

      // Create separate text nodes for each part of the text
      var categoryText = document.createTextNode("Kategori: " + entry.profile + ". ");
      var weightText = document.createTextNode("Hundens vekt: " + entry.weight + " kg. ");
      var activityText = document.createTextNode("Aktivitetsnivå: " + entry.activity + ". ");
      var resultText = document.createTextNode("Anbefalt mengde: " + entry.result + ". ");
      var dateText = document.createTextNode("Dato: " + timestamp);

      // Append the text nodes with line breaks in between
      resultPtimeStamp.className = "timestamp";
      resultPtimeStamp.appendChild(dateText);
      resultPtimeStamp.appendChild(document.createElement("br"));
      resultP.appendChild(document.createElement("br"));
      resultP.appendChild(categoryText);
      resultP.appendChild(document.createElement("br"));
      resultP.appendChild(weightText);
      resultP.appendChild(document.createElement("br"));
      resultP.appendChild(activityText);
      resultP.appendChild(document.createElement("br"));
      resultP.appendChild(resultText);
      resultP.appendChild(document.createElement("br"));
      resultP.appendChild(document.createElement("br"));
      resultP.appendChild(document.createElement("hr"));

      entryDiv.classList.add(entry.profile.toLowerCase().replace(/ /g, '-'));

      entryDiv.appendChild(resultPtimeStamp);
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
reset.addEventListener("mousedown", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  result.style.display = "none";
  weight.value = "";
  activity.value = "";
  clearHistory(); // Clear the history list
});
