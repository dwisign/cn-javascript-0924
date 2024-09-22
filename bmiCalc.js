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

    const indicatorColor = document.getElementById('resultBox')

    if (bmiCalcCount < 0) {
        indicator = "Result not valid"
        indicatorColor.classList.toggle('notValidColor', bmiCalcCount)
    } else if(bmiCalcCount >= 0 && bmiCalcCount <= 18.5){
        indicator = "Underweight"
        indicatorColor.classList.toggle('underWeightColor', bmiCalcCount)
    } else if(bmiCalcCount >= 18.5 && bmiCalcCount <= 25.9){
        indicator = "Healthyweight"
        indicatorColor.classList.toggle('healthyWeightColor', bmiCalcCount)
    } else if(bmiCalcCount >= 25.9 && bmiCalcCount <= 29.9){
        indicator = "Overweight"
        indicatorColor.classList.toggle('overWeightColor', bmiCalcCount)
    } else if(bmiCalcCount >= 29.9 && bmiCalcCount <= 40) {
        indicator = "Obesity"
        indicatorColor.classList.toggle('obesityColor',bmiCalcCount)
    } else{
        indicator = "Severe Obesity" 
        indicatorColor.classList.toggle('serveObesityColor', bmiCalcCount)
    }

    //console.log(indicator)
    document.getElementById('resultCategory').innerHTML = indicator

}