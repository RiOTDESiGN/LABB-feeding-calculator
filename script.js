// Register the PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      console.log('ServiceWorker registered with scope:', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed:', err);
    });
  });
}

//  Fancybox eventlistener
Fancybox.bind("[data-fancybox]", {})


// Check if the website has been loaded before
if (localStorage.getItem("historyList")) {
  // Code to run only the first time the webpage is loaded
  document.getElementById("historikk-container").style.display = "block";
  document.getElementById("reset").style.display = "block";
} else {
  // Hide the "slett"-button if there is no previous history
  document.getElementById("reset").style.display = "none";
}


// Functions to fetch JSON data
async function fetchProfilesData() {
  try {
    const response = await fetch("JSON/profiles.JSON");
    const jsonData = await response.json();
    return jsonData.profiles;
  } catch (error) {
    console.log("Error fetching profiles JSON data:", error);
    return [];
  }
}

async function fetchFoodTypesData() {
  try {
    const response = await fetch("JSON/foodTypes.JSON");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log("Error fetching foodtypes JSON data:", error);
    return [];
  }
}


// Current active profile
let currentIndex = 0;


// Profiles Updater
async function updateProfile() {
  const profiles = await fetchProfilesData();
  const profile = profiles[currentIndex];

  // Profile CSS styles
  document.getElementById   ("expand")      .style.filter           = profile.contract;
  document.getElementById   ("navi")        .style.fontSize         = profile.categorySize;
  document.getElementById   ("activity")    .style.fontSize         = profile.font;
  document.getElementById   ("cutWeight")   .style.backgroundColor  = profile.bgColor;
  document.getElementById   ("cutAge")      .style.backgroundColor  = profile.bgColor;
  document.getElementById   ("puppyForm")   .style.backgroundColor  = profile.bgColor;
  document.getElementById   ("middels")     .style.display          = profile.middels;
  document.getElementById   ("hide")        .style.display          = profile.showAge;
  document.getElementById   ("puppyForm")   .style.border           = profile.border;
  document.getElementById   ("foodAmount")  .style.color            = profile.amountColor;
  document.getElementById   ("activity")    .style.padding          = profile.fontpadding;

  // Change caption on large Fancybox images
  document.getElementById   ("stort")       .dataset.caption        = profile.caption;

  // Change category and select options text
  document.getElementById   ("category")    .textContent            = profile.category;
  document.getElementById   ("lavt")        .textContent            = profile.lavt;
  document.getElementById   ("hoyt")        .textContent            = profile.hoyt;

  // Change links and image sources
  document.getElementById   ("FK")          .href                   = profile.FK;
  document.getElementById   ("stort")       .href                   = profile.imgHref;
  document.getElementById   ("lite")        .src                    = profile.imgSrc;

  // Change min and max required values in input fields
  document.getElementById   ("weight")      .min                    = profile.min;
  document.getElementById   ("weight")      .max                    = profile.max;

  // Empty input and result fields
  document.getElementById   ("result")      .style.display = "none";
  document.getElementById   ("age")         .value = "";
  document.getElementById   ("weight")      .value = "";
  document.getElementById   ("activity")    .value = "";

  // Make "age required" optional depending on active profile
  if (profile.category !== "VALP") {
    document.getElementById("age").removeAttribute("required");
  } else {
    document.getElementById("age").setAttribute("required", "");
  }
}


// Apply the active profile on pageload
updateProfile();


// Navigation arrows that change the active profile
document.getElementById("left").addEventListener("click", async () => {
  const profiles = await fetchProfilesData();
  currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
  updateProfile();
});

document.getElementById("right").addEventListener("click", async () => {
  const profiles = await fetchProfilesData();
  currentIndex = (currentIndex + 1) % profiles.length;
  updateProfile();
});


//  Calculate the recommended amount of dogfood on the active profile
async function calculateFoodAmount(category, age, weight, activity) {
  let foodAmount = "";
  // Calculation for puppies
  if (category === "VALP") {
    const foodTypesData = await fetchFoodTypesData();

    const categoryObj = foodTypesData.foodAmounts.find((item) => item.category === category);

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
        const range = foodAmount.split("-");
        const lowerValue = parseInt(range[0], 10);
        return lowerValue;
      } else if (activity === "hoyt") {
        const range = foodAmount.split("-");
        const upperValue = parseInt(range[1], 10);
        return upperValue;
      } else if (activity === "middels") {
        const range = foodAmount.split("-");
        const lowerValue = parseInt(range[0], 10);
        const upperValue = parseInt(range[1], 10);
        const average = (lowerValue + upperValue) / 2;
        return average;
      }
    }
  // Calculations for adult dogs
  } else if (category === "VOKSEN" || category === "SENIOR" || category === "SENSITIV" || category === "VEKTKONTROLL") {
    const foodTypesData = await fetchFoodTypesData();

    const categoryObj = foodTypesData.foodAmountsADULT.find((item) => item.category === category);

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
  // Calculations for working dogs
  } else {
    const foodTypesData = await fetchFoodTypesData();

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

    const categoryObj = foodTypesData.foodAmountsENERGY.find((item) => item.category === category);

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

//  Max 2 digits on age and weight inputs
function maxInput() {
  const ageInput = document.getElementById("age");
  const weightInput = document.getElementById("weight");

  if (ageInput.value.length > ageInput.maxLength) ageInput.value = ageInput.value.slice(0, ageInput.maxLength);

  if (weightInput.value.length > weightInput.maxLength) weightInput.value = weightInput.value.slice(0, weightInput.maxLength);
}

document.getElementById("age").addEventListener("input", maxInput);
document.getElementById("weight").addEventListener("input", maxInput);


//  Submit input values and get the calculated results
document.getElementById("puppyForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  // Define inputs
  const profiles = await fetchProfilesData();
  const category = profiles[currentIndex].category;
  const age = parseInt(document.getElementById("age").value, 10);
  const weight = parseInt(document.getElementById("weight").value, 10);
  const activity = document.getElementById("activity").value;

  const card = $(this).closest(".flex-card");
  const content = card.find(".entries");

  // Calculate food amount based on the inputs
  const foodAmount = await calculateFoodAmount(category, age, weight, activity);

  // Display the result on the webpage
  document.getElementById("foodAmount").textContent = `${foodAmount} gram pr. dag`;
  document.getElementById("historyTab").style.display = "block";
  document.getElementById("result").style.display = "block";
  if (content.is(":visible")) {
    document.getElementById("reset").style.display = "none";
  } else {
    document.getElementById("reset").style.display = "block";
  }

  // document.getElementById("reset").style.display = "block";
  document.getElementById("history").style.alignItems = "normal";

  // Add results to history
  storeResult();

  // Show history
  document.getElementById("historikk-container").style.display = "block";
});


// History localstorage array
let historyList = [];


// Load history from localStorage if available
if (localStorage.getItem("historyList")) {
  historyList = JSON.parse(localStorage.getItem("historyList"));
  updateHistory();
}


// Extract the activity text to be used in the history entry
const selectElement = document.getElementById("activity");
let selectedText; // Declare selectedText outside the event listener function

selectElement.addEventListener("change", function() {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  selectedText = selectedOption.text; // Update the value of selectedText
});


// Store the calculated results, input values and profile data to the history array
async function storeResult() {

  // Define the entry values
  const profiles = await fetchProfilesData();
  const profile = profiles[currentIndex].category;
  const age = parseInt(document.getElementById("age").value, 10);
  const weight = parseInt(document.getElementById("weight").value, 10);
  const activity = selectedText;
  const result = document.getElementById("foodAmount").textContent;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const timestamp = new Date().toLocaleDateString(["nb-NO", "en-US", "default"], options);

// const date = new Date();
// const year = date.getFullYear();
// const month = date.toLocaleString(["nb-NO", "en-US", "default"], { month: "long" });
// const day = date.getDate();
// const timestamp = `${day}. ${month}, ${year}`;


  // Define the entry object that stores the values
  const entry = {
    profile: profile,
    age: age,
    weight: weight,
    activity: activity,
    result: result,
    timestamp: timestamp
  };

  // Add the new entry object to the beginning of the array, and keep only the 10 last entries
  historyList.unshift(entry);
  historyList = historyList.slice(0, 10);

  // Save updated history to localStorage
  localStorage.setItem("historyList", JSON.stringify(historyList));

  updateHistory();
}


// Create a function to add the entry to the history-section of the webpage
function updateHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.textContent = "";
  // Show a placeholder text after history content has been deleted by the user
  if (historyList.length === 0) {
    const defaultText = document.createElement("p");
    const defaultText2 = document.createElement("p");
    defaultText.textContent = "Ingen historikk tilgjengelig.";
    defaultText2.textContent = "Dine siste 10 søk vil vises her.";
    historyDiv.appendChild(defaultText);
    historyDiv.appendChild(defaultText2);
  // Create the history list entry and its content
  } else {
    for (let i = 0; i < historyList.length; i++) {
      const entry            = historyList[i];
      const entryDiv         = document.createElement("div");
      const resultPage       = document.createElement("p");
      const resultPweight    = document.createElement("p");
      const resultPactivity  = document.createElement("p");
      const resultPresult    = document.createElement("p");
      const resultPspacer    = document.createElement("p");
      const resultP          = document.createElement("div");
      const resultPtimeStamp = document.createElement("div");
      const categorySpan     = document.createElement("span");
      const timestampSpan    = document.createElement("span");
      const lastMonthSpan    = document.createElement("span");
      const lastMonthLink    = document.createElement("span");
      
      // Define the history entry content
      const categoryText   = document.createTextNode(entry.profile);
      const changeText     = document.createTextNode("Siste måned på valpefôr");
      const lastMonth      = document.createTextNode("LABB har flere gode alternativer til din hund, og vi anbefaler å starte på LABB VOKSEN. Se vårt sortiment på ");
      const link           = document.createElement("a");
            link             .href = "https://www.labb.no"; // Replace with the actual URL
            link             .textContent = "LABB.no";
            link             .target = "_blank"
      const weightText     = document.createTextNode(`Hundens vekt: ${entry.weight} kg`);
      let activityValue;
      if (["AKTIV", "EKSTREM ENERGI"].includes(entry.profile)) {
        activityValue = document.createTextNode(entry.activity);
      } else {
        activityValue = document.createTextNode(`${entry.activity} aktivitetsnivå`);
      }      
      const resultText     = document.createTextNode(`Anbefalt mengde: ${entry.result}`);
      const dateText       = document.createTextNode(entry.timestamp);
      let ageText;
      if (entry.age === 1) {
        ageText = document.createTextNode(`${entry.age} måned`);
      } else {
        ageText = document.createTextNode(`${entry.age} måneder`);
      }

      // Append the history content to the various entry elements
      resultPtimeStamp.className = "timestamp";
      resultP         .className = "entry-spacing";
      categorySpan    .appendChild(categoryText);
      timestampSpan   .appendChild(dateText);
      resultPage      .appendChild(document.createElement("br"));
      resultPage      .appendChild(ageText);
      resultPweight   .appendChild(document.createElement("br"));
      resultPweight   .appendChild(weightText);
      resultPactivity .appendChild(activityValue);
      resultPresult   .appendChild(resultText);
      resultPspacer   .appendChild(document.createElement("br"));
      resultPspacer   .appendChild(document.createElement("hr"));
      if (entry.age === 16) {
        lastMonthSpan .classList.add("last-month");
        resultPspacer .appendChild(document.createElement("br"));
        lastMonthSpan .appendChild(changeText);
        resultPspacer .appendChild(lastMonthSpan);
        resultPspacer .appendChild(document.createElement("br"));
        resultPspacer .appendChild(lastMonthLink);
        lastMonthLink .appendChild(lastMonth);
        lastMonthLink .appendChild(link);
      }

      // Add a style-class to each history entry based on the active profile
      entryDiv.classList.add(entry.profile.toLowerCase().replace(/ /g, "-"));
      entryDiv.classList.add("entry");

      // Combine the entry elements to construct the entry and append it to the webpage
      resultPtimeStamp  .appendChild(categorySpan);
      resultPtimeStamp  .appendChild(timestampSpan);
      entryDiv          .appendChild(resultPtimeStamp);
      if (entry.profile === "VALP") {resultP.appendChild(resultPage);}
        resultP         .appendChild(resultPweight);
        resultP         .appendChild(resultPactivity);
        resultP         .appendChild(resultPresult);
        resultP         .appendChild(resultPspacer);
        entryDiv        .appendChild(resultP);
        historyDiv      .appendChild(entryDiv);
    }
  }
}


// Expandable flex-cards for more convenient history sorting
$(document).ready(function() {
  $(".flex-card-header").click(function() {
    const card = $(this).closest(".flex-card");
    const content = card.find(".entries");

    if (content.is(":visible")) {
      document.getElementById("expand").classList.remove("contract");
      document.getElementById("expand").classList.add("expand");
      document.getElementById("reset").style.display = "none";
      content.slideUp();
    } else {
      document.getElementById("expand").classList.remove("expand");
      document.getElementById("expand").classList.add("contract");
      document.getElementById("reset").style.display = "block";
      $(".entries").slideUp();
      content.slideDown();
    }
  });
});


// Create a function to clear the history list and remove the history from local storage
function clearHistory() {
  historyList = [];
  localStorage.removeItem("historyList");
  updateHistory();
}


// Define the "slett"-button to clear all input values and the history list content
const reset = document.getElementById("reset");
reset.addEventListener("mouseup", function (event) {
  event.preventDefault();
  document.getElementById("age").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("activity").value = "";
  document.getElementById("reset").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("historyTab").style.display = "none";
  document.getElementById("history").style.alignItems = "center";
  clearHistory();
});