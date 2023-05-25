// ********************************************************* Switch feeding profile
const profiles = [
  {
    kategori: "VALP",
    bgColor: "#006f43",
    border: "3px solid #006f43",
    imgSrc: "valp.png",
    imgHref: "valp.webp",
    amountColor: "#006f43",
    fontSize: "3em",
    caption: "Labb Valp hundefôr mellom- og store raser 15 kg",
    amount: "foodAmount",
    valph2: "block",
    display: "block",
    adulth2: "none",
    displayA: "none"
  },
  {
    kategori: "VOKSEN",
    bgColor: "#00538a",
    border: "3px solid #00538a",
    imgSrc: "voksen.png",
    imgHref: "voksen.webp",
    amountColor: "#00538a",
    fontSize: "3em",
    caption: "Labb Voksen hundefôr mellom- og stor rase 15 kg",
    amount: "foodAmountADULT",
    valph2: "none",
    display: "none",
    adulth2: "block",
    displayA: "block"
  },
  {
    kategori: "AKTIV",
    bgColor: "#b51826",
    border: "3px solid #b51826",
    imgSrc: "aktiv.png",
    imgHref: "aktiv.webp",
    amountColor: "#b51826",
    fontSize: "3em",
    caption: "Labb Aktiv hundefôr hunder alle størrelser 15 kg",
    amount: "foodAmountADULT",
    valph2: "none",
    display: "none",
    adulth2: "block",
    displayA: "block"
  },
  {
    kategori: "EKSTREM ENERGI",
    bgColor: "#02304f",
    border: "3px solid #02304f",
    imgSrc: "ekstrem.png",
    imgHref: "ekstrem.webp",
    amountColor: "#02304f",
    fontSize: "2em",
    caption: "Labb Ekstrem Energi hundefôr hardtarbeidende hunder 15 kg",
    amount: "foodAmountADULT",
    valph2: "none",
    display: "none",
    adulth2: "block",
    displayA: "block"
  },
  {
    kategori: "SENSITIV",
    bgColor: "#a0715c",
    border: "3px solid #a0715c",
    imgSrc: "sensitiv.png",
    imgHref: "sensitiv.webp",
    amountColor: "#a0715c",
    fontSize: "2.75em",
    caption: "Labb Sensitiv hundefôr mellom- og store hunder 15 kg",
    amount: "foodAmountADULT",
    valph2: "none",
    display: "none",
    adulth2: "block",
    displayA: "block"
  },
  {
    kategori: "SENIOR",
    bgColor: "#c84e2d",
    border: "3px solid #c84e2d",
    imgSrc: "senior.png",
    imgHref: "senior.webp",
    amountColor: "#c84e2d",
    fontSize: "3em",
    caption: "Labb Senior hundefôr mellom- og store hunder 15 kg",
    amount: "foodAmountADULT",
    valph2: "none",
    display: "none",
    adulth2: "block",
    displayA: "block"
  },
  {
    kategori: "VEKTKONTROLL",
    bgColor: "#b41c69",
    border: "3px solid #b41c69",
    imgSrc: "vektkontroll.png",
    imgHref: "vektkontroll.webp",
    amountColor: "#b41c69",
    fontSize: "1.5em",
    caption: "Labb Vektkontroll hundefôr mellom- og store hunder 15 kg",
    amount: "foodAmountADULT",
    valph2: "none",
    display: "none",
    adulth2: "block",
    displayA: "block"
  },
];

let currentIndex = 0;

function updateProfile() {
  const profile = profiles[currentIndex];

  // Update the UI elements based on the current profile
  kategori.textContent = profile.kategori;
  puppyForm.style.backgroundColor = profile.bgColor;
  puppyForm.style.border = profile.border;
  cut.style.backgroundColor = profile.bgColor;
  cut2.style.backgroundColor = profile.bgColor;
  foodAmount.style.color = profile.amountColor;
  foodAmountADULT.style.color = profile.amountColor;
  nav.style.fontSize = profile.fontSize;
  stort.dataset.caption = profile.caption;
  stort.href = profile.imgHref;
  lite.src = profile.imgSrc;
  foodAmount.ID = profile.amount;
  foodAmountADULT.ID = profile.amount;
  valph2.style.display = profile.valph2;
  foodAmount.style.display = profile.display;
  adulth2.style.display = profile.adulth2;
  foodAmountADULT.style.display = profile.displayA;

  // Reset other elements or values if needed
  foodAmount.textContent = "";
  foodAmountADULT.textContent = "";
  result.style.display = "none";
  age.value = "";
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


// ********************************************************* LABB VALP Feeding Information
function calculateFoodAmount(age, weight, activity, kategori) {
  let foodAmount = "";

  const foodAmounts = [
    {
      kategori: "VALP",
      ageRanges: [
        {
          ageRange: [1, 6],
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
          ageRange: [8, 12],
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
          ageRange: [12, 16],
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
    },

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
        if (activity === "low") {
          return foodAmount.toString().slice(0, 3);
        } else if (activity === "high") {
          return foodAmount.toString().slice(-3);
        } else if (activity === "medium") {
          const range = foodAmount.split("-");
          const lowerValue = parseInt(range[0]);
          const upperValue = parseInt(range[1]);
          const average = (lowerValue + upperValue) / 2;
          return average;
        }
      }
    
      return "N/A";
}

// ********************************************************* LABB VOKSEN Feeding Information
function calculateFoodAmountADULT(weight, activity, kategori) {
  let foodAmountADULT = null;

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
          foodAmountADULT = weightRanges[0].amount;
        } else {
          const prevWeightRange = weightRanges[i - 1];
          const prevWeight = prevWeightRange.caWeight;
          const diffCurrent = Math.abs(caWeight - weight);
          const diffPrev = Math.abs(prevWeight - weight);
          if (diffCurrent < diffPrev) {
            foodAmountADULT = amount;
          } else {
            foodAmountADULT = prevWeightRange.amount;
          }
        }
        break;
      }
    }
  }

  if (foodAmountADULT !== null) {
    const foodAmountNumeric = parseFloat(foodAmountADULT);

    if (activity === "low") {
      foodAmountADULT = foodAmountNumeric - (foodAmountNumeric * 0.2);
    } else if (activity === "high") {
      foodAmountADULT = foodAmountNumeric + (foodAmountNumeric * 0.2);
    }

    return foodAmountADULT;
  }

  return "N/A";
}


// ********************************************************* Fancybox eventlistener

Fancybox.bind("[data-fancybox]", {
  // custom options
});


// ********************************************************* Max 2 digits on inputs

function maxInput() {
var ageInput = document.getElementById("age");
var weightInput = document.getElementById("weight");

if (ageInput.value.length > ageInput.maxLength)
  ageInput.value = ageInput.value.slice(0, ageInput.maxLength);

if (weightInput.value.length > weightInput.maxLength)
  weightInput.value = weightInput.value.slice(0, weightInput.maxLength);
}


// ********************************************************* Submit and get results

document.getElementById('puppyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const age = parseInt(document.getElementById('age').value);
  const weight = parseInt(document.getElementById('weight').value);
  const activity = document.getElementById('activity').value;

  // Calculate food amount based on the inputs
  const foodAmount = calculateFoodAmount(age, weight, activity, profiles[currentIndex].kategori);
  const foodAmountADULT = calculateFoodAmountADULT(weight, activity, profiles[currentIndex].kategori);

  // Display the result on the webpage
  document.getElementById('result').style.display = 'block';
  document.getElementById('foodAmount').textContent = `${foodAmount} gram pr. dag`;
  document.getElementById('foodAmountADULT').textContent = `${foodAmountADULT} gram pr. dag`;
});