function bmiCalc(){
    //console.log("Hello World")

    var bmiCalcCount

    const weight = parseInt(document.getElementById('inputWeight').value)
    //console.log('WEIGHT: ', weight)

    const height = parseInt(document.getElementById('inputHeight').value)
    //console.log('HEIGHT: ', height)

    bmiCalcCount = (weight / Math.pow((height/100),2)).toFixed(2) //Rumus : berat/tinggi kuadrat
    //console.log(bmiCalcCount)


    document.getElementById('resultNumber').innerHTML = bmiCalcCount


    //INDICATOR CATEGORY
    if (bmiCalcCount < 0) {
        indicator = "Result not valid"
    } else if(bmiCalcCount >= 0 && bmiCalcCount <= 18.5){
        indicator = "Underweight"
    } else if(bmiCalcCount >= 18.5 && bmiCalcCount <= 25.9){
        indicator = "Healthyweight"
    } else if(bmiCalcCount >= 25.9 && bmiCalcCount <= 29.9){
        indicator = "Overweight"
    } else if(bmiCalcCount >= 29.9 && bmiCalcCount <= 40) {
        indicator = "Obesity"
    } else{
        indicator = "Severe Obesity" 
    }

    //console.log(indicator)
    document.getElementById('resultCategory').innerHTML = indicator

}