function convertIt(){

  const valueToConvert = parseFloat(document.getElementById("enteredValue").value);
  
  const conversionType = document.getElementById("conversionType").value;
  
  
  const resultElement = document.getElementById("resultValue");
  
  let result; 

  if (isNaN(valueToConvert)) {
    resultElement.innerHTML = "Please enter a valid number.";
    return; 
  }

  if (conversionType === "milesToKM") {
    result = valueToConvert * 1.60934;
    resultElement.innerHTML = valueToConvert + " miles is " + result.toFixed(2) + " kilometers.";
  
  } else if (conversionType === "KMToMiles") {
    result = valueToConvert / 1.60934;
    resultElement.innerHTML = valueToConvert + " km is " + result.toFixed(2) + " miles.";
  
  } else {
    resultElement.innerHTML = "Please select a conversion type.";
  }
}