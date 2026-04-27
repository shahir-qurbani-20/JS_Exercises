// *3.6 (Health application: BMI) Revise Listing 3.4, ComputeAndInterpretBMI.java, to 
// let the user enter weight, feet, and inches. For example, if a person is 5 feet and 10 
// inches, you will enter 5 for feet and 10 for inches. Here is a sample run:
// Enter weight in pounds: 140
// Enter feet: 5
// Enter inches: 10
// BMI is 20.087702275404553
// Normal



let weight_in_pounds = Number(prompt('enter weight in pounds: '))
let feet = Number(prompt('enter feet: '))
let inches = Number(prompt('enter inches: '))
let weight_in_kgr = weight_in_pounds * 0.45359237
let height_in_meter = ((feet*12)+inches) * 0.0254
let bmi = weight_in_kgr/(height_in_meter**2)

if(bmi<18.5){
    alert('BMI is '+ bmi +'\nunderweight')
}else if(bmi<25){
    alert('BMI is '+ bmi +'\nnormal')
}else if(bmi<30){
    alert('BMI is '+ bmi +'\noverweight')
}else(
    alert('BMI is '+ bmi +'\nobese')
)