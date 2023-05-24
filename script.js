document.getElementById('puppyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activity = document.getElementById('activity').value;

    // Calculate food amount based on the inputs
    const foodAmount = calculateFoodAmount(age, weight, activity, profiles[currentIndex].kategori);
  
    // Display the result on the webpage
    document.getElementById('foodAmount').textContent = `${foodAmount} gram pr. dag`;
    document.getElementById('result').style.display = 'block';
});

// LABB Feeding Information
function calculateFoodAmount(age, weight, activity, kategori) {
  
    if (kategori === "VALP") {

      if (age >= 1 && age <= 6) {
      if (weight >= 1 && weight <= 3) {
        foodAmount = "70-125";
      } else if (weight > 3 && weight <= 5) {
        foodAmount = "135-195";
      } else if (weight > 5 && weight <= 8) {
        foodAmount = "195-280";
      } else if (weight > 8 && weight <= 11) {
        foodAmount = "280-350";
      } else if (weight > 11 && weight <= 15) {
        foodAmount = "350-440";
      } else if (weight > 15 && weight <= 20) {
        foodAmount = "440-550";
      } else if (weight > 20 && weight <= 25) {
        foodAmount = "550-650";
      }

    } else if (age >= 6 && age <= 8) {
      if (weight >= 5 && weight <= 8) {
        foodAmount = "160-230";
      } else if (weight > 8 && weight <= 11) {
        foodAmount = "230-290";
      } else if (weight > 11 && weight <= 15) {
        foodAmount = "290-340";
      } else if (weight > 15 && weight <= 20) {
        foodAmount = "340-430";
      } else if (weight > 20 && weight <= 25) {
        foodAmount = "430-510";
      } else if (weight > 25 && weight <= 30) {
        foodAmount = "510-595";
      } else if (weight > 35 && weight <= 40) {
        foodAmount = "595-670";
      } else if (weight > 40 && weight <= 45) {
        foodAmount = "670-730";
      }

    } else if (age >= 8 && age <= 12) {
      if (weight >= 11 && weight <= 15) {
        foodAmount = "235-340";
      } else if (weight > 15 && weight <= 20) {
        foodAmount = "340-405";
      } else if (weight > 20 && weight <= 25) {
        foodAmount = "405-470";
      } else if (weight > 25 && weight <= 30) {
        foodAmount = "470-530";
      } else if (weight > 35 && weight <= 40) {
        foodAmount = "530-590";
      } else if (weight > 40 && weight <= 45) {
        foodAmount = "590-650";
      } else if (weight > 45 && weight <= 50) {  
        foodAmount = "650-705";
      } else if (weight > 50 && weight <= 60) {
        foodAmount = "705-790";
      } else if (weight > 60 && weight <= 70) {
        foodAmount = "790-880";
      } else if (weight > 70 && weight <= 80) {
        foodAmount = "880-970";
      }
 
    } else if (age >= 12 && age <= 16) {
      if (weight >= 15 && weight <= 20) {
        foodAmount = "330-360";
      } else if (weight > 20 && weight <= 25) {
        foodAmount = "360-400";
      } else if (weight > 25 && weight <= 30) {
        foodAmount = "400-430";
      } else if (weight > 35 && weight <= 40) {
        foodAmount = "430-515";
      } else if (weight > 40 && weight <= 45) {
        foodAmount = "515-620";
      } else if (weight > 45 && weight <= 50) {
        foodAmount = "620-720";
      } else if (weight > 50 && weight <= 60) {
        foodAmount = "720-820";
      } else if (weight > 60 && weight <= 70) {
        foodAmount = "820-900";
      } else if (weight > 70 && weight <= 80) {
        foodAmount = "900-950";
      }
    }

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

    } else if (kategori === "VOKSEN") {
      
    }

  return "N/A";
}

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
    caption: "Labb Valp hundefôr mellom- og store raser 15 kg"
  },
  {
    kategori: "VOKSEN",
    bgColor: "#00538a",
    border: "3px solid #00538a",
    imgSrc: "voksen.png",
    imgHref: "voksen.webp",
    amountColor: "#00538a",
    fontSize: "3em",
    caption: "Labb Voksen hundefôr mellom- og stor rase 15 kg"
  },
  {
    kategori: "AKTIV",
    bgColor: "#b51826",
    border: "3px solid #b51826",
    imgSrc: "aktiv.png",
    imgHref: "aktiv.webp",
    amountColor: "#b51826",
    fontSize: "3em",
    caption: "Labb Aktiv hundefôr hunder alle størrelser 15 kg"
  },
  {
    kategori: "EKSTREM ENERGI",
    bgColor: "#02304f",
    border: "3px solid #02304f",
    imgSrc: "ekstrem.png",
    imgHref: "ekstrem.webp",
    amountColor: "#02304f",
    fontSize: "2em",
    caption: "Labb Ekstrem Energi hundefôr hardtarbeidende hunder 15 kg"
  },
  {
    kategori: "SENSITIV",
    bgColor: "#a0715c",
    border: "3px solid #a0715c",
    imgSrc: "sensitiv.png",
    imgHref: "sensitiv.webp",
    amountColor: "#a0715c",
    fontSize: "2.75em",
    caption: "Labb Sensitiv hundefôr mellom- og store hunder 15 kg"
  },
  {
    kategori: "SENIOR",
    bgColor: "#c84e2d",
    border: "3px solid #c84e2d",
    imgSrc: "senior.png",
    imgHref: "senior.webp",
    amountColor: "#c84e2d",
    fontSize: "3em",
    caption: "Labb Senior hundefôr mellom- og store hunder 15 kg"
  },
  {
    kategori: "VEKTKONTROLL",
    bgColor: "#b41c69",
    border: "3px solid #b41c69",
    imgSrc: "vektkontroll.png",
    imgHref: "vektkontroll.webp",
    amountColor: "#b41c69",
    fontSize: "1.5em",
    caption: "Labb Vektkontroll hundefôr mellom- og store hunder 15 kg"
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
  nav.style.fontSize = profile.fontSize;
  stort.dataset.caption = profile.caption;
  stort.href = profile.imgHref;
  lite.src = profile.imgSrc;

  // Reset other elements or values if needed
  foodAmount.textContent = "";
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