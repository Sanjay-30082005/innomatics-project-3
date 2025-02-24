let balance;
let amount;
let pin;
let enterpin;
document.getElementById('btn').onclick = function atmWithdrawal() {

balance = document.getElementById('bAmt').value;
amount = document.getElementById('amt').value;
pin = document.getElementById('pin').value;
enterpin = document.getElementById('enPin').value;


    balance = Number(balance);
    amount = Number(amount);
    pin = Number(pin);
    enterpin = Number(enterpin);

    if(balance > amount) {
        if(amount%100 == 0){
        if(pin == enterpin) {
            balance = balance - amount;
            document.getElementById('res').textContent = 'Take Your Amount ${amount}';
        }
        else {
            document.getElementById('res').textContent = 'Incorrect PIN...';
        }
    }
    else{
        document.getElementById('res').textContent = 'Enter amount in multiples of 100';
    }
}
    else {
        document.getElementById('res').textContent = 'InSufficient Amount';
    }

}

// 2. Online Shopping Discount & Free Shipping

let onlineamount;
let percentage = 0;
document.getElementById('onbtn').onclick = function calculateFinalAmount(){
    onlineamount = document.getElementById('onamt').value;
    onlineamount = Number(onlineamount);
    percentage = Number(percentage);
    if(onlineamount > 1000) {
        percentage = (onlineamount*20)/100;
    }
    if(onlineamount>=500 && onlineamount<=1000){
        percentage = (onlineamount*10)/100;
    }
    if(onlineamount<500){
        percentage = onlineamount;
    }
    if(onlineamount<50){
        percentage = onlineamount+10;
    }

    console.log(percentage);
    
    document.getElementById('onres').textContent = 'Final Amount :  ${percentage}';
}


// 3. Student Grading System with Extra Credit

let mark;
let attendance;
let grade;
document.getElementById('gbtn').onclick = function calculateGrade(){
    mark = document.getElementById('mark').value;
    attendance = document.getElementById('attendance').value;
    mark = Number(mark);
     attendance = Number(attendance);
    if(attendance>90){
        mark = mark+5;
    }
    if(mark>=90){
        grade = 'A';
    }
    else if(mark>=80 && mark<=89){
        grade = 'B';
    }
    else if(mark>=70 && mark<=79){
        grade = 'C';
    }
    else if(mark>=60 && mark<=69){
        grade = 'D';
    }
    else if(mark<60){
        grade = 'F';
    }
    document.getElementById('gres').textContent = 'Grade : ${grade}';
}

//4. Smart Traffic Light System

let signal;
document.getElementById('tbtn').onclick = function trafficLightControl(){
    density = document.getElementById('density').value;
    if("Heavy Traffic" == density){
        signal = " Green for 60 seconds";
    }
    else if("Moderate Traffic" == density){
        signal = " Green for 40 seconds";
    }
    else if("Light Traffic" == density){
        signal = " Green for 20 seconds";
    }
    else{
        signal = "enter the value traffic density ";
    }
    document.getElementById('tres').textContent = 'signal';
}


// 5. Movie Ticket Pricing with Time and Age Discount

let age;
let time;
let price;
document.getElementById('mbtn').onclick = function  calculateTicketPrice(){
    age = document.getElementById('age').value;
    age = Number(age);
    time = document.getElementById('stime').value;
    time = Number(time);
    price = Number(price);
    if(time < 5){
        price = ( 12*20 ) / 100;
    }
    else if(age>60){
        price = (12*30) /100;
    }
    else if(age<12){
        price = (12*40) /100;
    }
    else{
        price = 12;
    }
    document.getElementById('mres').textContent = 'Ticket Price $${price}';
}

// 6. Job Application Filter

let jage;
let exp;
let qual;
let el;
document.getElementById('jbtn').onclick = function isEligibleForJob(){
    jage = document.getElementById('jage').value;
    jage = Number(jage);
    exp = document.getElementById('exp').value;
    exp = Number(exp);
    if(jage >= 21 && jage <=55){
        if(exp >= 2 ){
            el = "Eligible for job";
        }
        else{
            el = "Not eligible for job";
        }

    }
    else{
        el = "Not eligible for job";
    }
    document.getElementById('jres').textContent = el;
}

// 7.E-commerce Coupon Redemption

let oamt;
let cc;
let fa;
document.getElementById('ebtn').onclick = function  applyCoupon(){
    oamt = document.getElementById('oamt').value;
    oamt = Number(oamt);
    cc = document.getElementById('ccode').value;
    if(cc == "DISCOUNT10"){
        if(oamt>500)
            fa = (oamt*10) / 100;
    }
    else if(cc == "FREESHIP"){
        fa = oamt;
    }
    else
        fa = oamt;
    document.getElementById('eres').textContent = 'Final Amount $${fa}';
}


// 8. Fitness Membership Plan 

let fres= document.getElementById('fres');

document.getElementById('fbtn').onclick = function choosePlan() {
    let trainerselected = document.querySelector('input[name="Trainer"]:checked').value;
    let dietPlanselected = document.querySelector('input[name="DietPlan"]:checked').value;
    
    if((trainerselected == "Yes" && dietPlanselected == "Yes") || (trainerselected != "Yes" && dietPlanselected == "Yes")) {
        fres.textContent = `Suggested : VIP ($80/month) `;
    }
    else if(trainerselected =="Yes" && dietPlanselected != "Yes") {
        fres.textContent = `Suggested : Premium ($50/month) `;
    }
    else if(trainerselected != "Yes" && dietPlanselected != "Yes") {
        fres.textContent = `Suggested : Basic ($20/month) `;
    }

}


// 9. Electricity Bill Calculation with Peak Hours

let unit;
let billp;
document.getElementById('elbtn').onclick = function calculateElectricityBill(){
    unit = document.getElementById('unit').value;
    unit = Number(unit);
    if(unit<100){
        billp = unit*5;
    }
    else if(unit>=100 && unit<=300){
        billp = unit*4;
    }
    else if(unit>300){
        billp = unit*3;
    }
    document.getElementById('elres').textContent='Expected Bill is : $${billp}';
}


// 10. Flight Ticket Booking System

let baseFare = 300;
document.getElementById('flbtn').onclick = function calculateFlightFare() {
    let buisnessCls = document.querySelector('input[name="BuisnessClass"]:checked').value;
    let firstCls = document.querySelector('input[name="FirstClass"]:checked').value;

    let luggageWeight = document.getElementById('luggageWeight').value;

    let student = document.querySelector('input[name="Student"]:checked').value;
    let seniorCitizen = document.querySelector('input[name="SeniorCitizen"]:checked').value;
    
    if(buisnessCls === "Yes") {
        baseFare += 200;
    }
    if(firstCls === "Yes") {
        baseFare += 500
    }
    if(luggageWeight > 20) {
        let lw = luggageWeight - 20;
        baseFare += 50 *(lw / 10);
    }
    if(student === "Yes") {
        baseFare = baseFare - (baseFare * 15) / 100;
    }
    if(seniorCitizen === "Yes") {
        baseFare = baseFare - (baseFare * 10) / 100;
    }    
    document.getElementById('flres').textContent = 'Your Flight Fare is : $${baseFare}';
}