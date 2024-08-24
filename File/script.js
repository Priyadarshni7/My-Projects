const calculateBMI = () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultText = document.getElementById('result');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) /100; // convert cm to meters
    
  

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <=0) {
        return resultText.textContent = 'Kindly Enter valid Height and Weight to caluclate BMI';
    } else{
        return resultText.textContent= `Your BMI: ${bmi} (${category})` ;

    }

    // resultText.textContent= 'Your BMI: ${bmi} (${category}  )' ;
}