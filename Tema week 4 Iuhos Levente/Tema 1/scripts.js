function calculate() {
    var name=document.getElementById("name").value; 
    var gender=document.getElementById("gender").value;
    var height=parseFloat(document.getElementById("height").value);
    var weight=parseFloat(document.getElementById("weight").value);
    var bmi=0;
    bmi=weight/(height*height);
    // alert(name+'/'+gender+'/'+bmi);
    if (bmi < 18.5) {
        alert(name+'/'+gender+'/'+'BMI:'+bmi+'/'+'Underweight');
    } else if (bmi > 18.5 && bmi < 25) {
        alert(name+'/'+gender+'/'+'BMI:'+bmi+'/'+'Normal');
    } else if (bmi >= 25 && bmi < 30) {
        alert(name+'/'+gender+'/'+'BMI:'+bmi+'/'+'Overweight');
    } else if (bmi >= 30) {
        alert(name+'/'+gender+'/'+'BMI:'+bmi+'/'+'Obese');
    }
}

