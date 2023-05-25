function calculateFoodAmount(weight, activity, kategori) {
    let foodAmount = "";
  
    const foodAmounts = [
        {
            kategori: "VOKSEN",
            weightRanges: [
                  { weight: 15, amount: "220" },
                  { weight: 20, amount: "280" },
                  { weight: 25, amount: "320" },
                  { weight: 30, amount: "360" },
                  { weight: 35, amount: "400" },
                  { weight: 40, amount: "440" },
                  { weight: 45, amount: "480" },
                  { weight: 50, amount: "520" },
                  { weight: 55, amount: "560" },
                  { weight: 60, amount: "600" },
                  { weight: 70, amount: "680" },
                  { weight: 80, amount: "770" },
                ]
          },
          {
            kategori: "SENIOR",
            weightRanges: [
                  { weight: 15, amount: "200" },
                  { weight: 20, amount: "240" },
                  { weight: 25, amount: "280" },
                  { weight: 30, amount: "320" },
                  { weight: 35, amount: "365" },
                  { weight: 40, amount: "400" },
                  { weight: 45, amount: "440" },
                  { weight: 50, amount: "480" },
                  { weight: 55, amount: "510" },
                  { weight: 60, amount: "545" },
                  { weight: 70, amount: "640" },
                  { weight: 80, amount: "720" },
                  { weight: 90, amount: "810" },
                ]
          },
          {
            kategori: "VEKTKONTROLL",
            weightRanges: [
                  { weight: 15, amount: "210" },
                  { weight: 20, amount: "240" },
                  { weight: 25, amount: "280" },
                  { weight: 30, amount: "320" },
                  { weight: 35, amount: "365" },
                  { weight: 40, amount: "400" },
                  { weight: 45, amount: "440" },
                  { weight: 50, amount: "480" },
                  { weight: 55, amount: "510" },
                  { weight: 60, amount: "545" },
                  { weight: 70, amount: "640" },
                  { weight: 80, amount: "720" },
                  { weight: 90, amount: "810" },
                ]
          },
          {
            kategori: "SENSITIV",
            weightRanges: [
                  { weight: 15, amount: "210" },
                  { weight: 20, amount: "270" },
                  { weight: 25, amount: "300" },
                  { weight: 30, amount: "350" },
                  { weight: 35, amount: "390" },
                  { weight: 40, amount: "430" },
                  { weight: 45, amount: "470" },
                  { weight: 50, amount: "510" },
                  { weight: 55, amount: "550" },
                  { weight: 60, amount: "590" },
                  { weight: 70, amount: "670" },
                  { weight: 80, amount: "760" },
                ]
          }
    ];
  
    const categoryObj = foodAmounts.find((item) => item.kategori === kategori);
  
    if (categoryObj) {
      const { weightRanges } = categoryObj;
  
      for (const weightRangeObj of weightRanges) {
        const { weight, amount } = weightRangeObj;
  
        if (weight === weight) {
          foodAmount = amount;
          break;
        }
      }
    }
  
    if (foodAmount !== null) {
        if (activity === "low") {
          foodAmount -= foodAmount * 0.2;
        } else if (activity === "high") {
          foodAmount += foodAmount * 0.2;
        }
        return foodAmount;
      }
  
    return "N/A";
  }
  






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



















  // LABB VALP Feeding Information
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




  replaceInputField();



        // Check if the active profile requires replacing the input field
        const activeProfile = profiles[currentIndex].kategori;
        if (activeProfile === 'VOKSEN' || activeProfile === 'SENIOR' || activeProfile === 'SENSITIV' || activeProfile === 'VEKTKONTROLL') {
        replaceInputField();
        }





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