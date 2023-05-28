//  Feeding profiles
const profiles = [
  {
    kategori: "VOKSEN",
    bgColor: "#00538a",
    border: "3px solid #00538a",
    imgSrc: "voksen.png",
    imgHref: "voksen.webp",
    amountColor: "#00538a",
    fontSize: "3em",
    caption: "Labb Voksen hundefôr mellom- og stor rase 15 kg",
    medium: "block",
    low: "Lavt",
    high: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    dog: "voksendog.png",
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
    medium: "none",
    low: "Moderat aktivitet (1 – 3 timer)",
    high: "Hardt arbeid (3 – 6 timer)",
    font: "18px",
    fontpadding: "14px 0",
    dog: "aktivdog.png",
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
    medium: "none",
    low: "Hardt arbeid, jakt, trening og løp (3 – 6 timer)",
    high: "Svært hardt arbeid, jakt, trening og løp (over 6 timer)",
    font: "12px",
    fontpadding: "17px 0",
    dog: "ekstremdog.png",
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
    medium: "block",
    low: "Lavt",
    high: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    dog: "valpdog.png",
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
    medium: "block",
    low: "Lavt",
    high: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    dog: "seniordog.png",
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
    medium: "block",
    low: "Lavt",
    high: "Høyt",
    font: "18px",
    fontpadding: "14px 0",
    dog: "vektkontrolldog.png",
  },
];

let currentIndex = 0;


//  Profile Updater
function updateProfile() {
  const profile = profiles[currentIndex];

  kategori.textContent = profile.kategori;
  puppyForm.style.backgroundColor = profile.bgColor;
  puppyForm.style.border = profile.border;
  cut.style.backgroundColor = profile.bgColor;
  foodAmount.style.color = profile.amountColor;
  nav.style.fontSize = profile.fontSize;
  stort.dataset.caption = profile.caption;
  stort.href = profile.imgHref;
  lite.src = profile.imgSrc;
  medium.style.display = profile.medium;
  low.textContent = profile.low;
  high.textContent = profile.high;
  activity.style.fontSize = profile.font;
  activity.style.padding = profile.fontpadding;
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
  
    const categoryObj = foodAmountsENERGY.find(item => item.kategori === kategori);

    if (categoryObj) {
      const { weightRanges } = categoryObj;
      const selectedWeightRange = weightRanges.find(item => item.weight === weight);
  
      if (selectedWeightRange) {
        foodAmount = activity === "high" ? selectedWeightRange.amountH : selectedWeightRange.amountL;
      }
    }
  
    return foodAmount;
  }

  return "N/A";
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
});

updateProfile();