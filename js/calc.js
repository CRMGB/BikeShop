//==================================================
//====JAVASCRIPT CODE TO CONTROL THE WORKSHOP(PRICES, CHECKBOXES, ETC..)
//===================================================

function addemup() {
    
var result1 = document.getElementById('result');
var total = 0;
var count =0;
    for (var i=0; i<document.myform.chk1.length; i++) {
        if (document.myform.chk1[i].checked) {
        total = total + document.myform.chk1[i].value*1;  // another way to convert string to number
        count++;
    }
}
    var userinput0 = document.getElementById("repairs_Bar").value;
     
    var result1 = document.getElementById('result');
    
  if(result1.style.display == "none") { // if is menuBox displayed, hide it
    result1.style.display = "block";
  }
else { // if is menuBox hidden, display it
 result1.style.display = "block";
    }
    if (count == 0) {
        document.getElementById("result").innerHTML = "There is not a box ticked" ;
    }
    if (count == 1) {
        
        document.getElementById("result").innerHTML = "The value of the repair you clicked is £" + total ;
                    }
        else if (count>1) {
        document.getElementById("result").innerHTML = "The total ammount of the " + count + " repairs you have checked is £" +total;
        }
}


////==============**************FUNCTION SUBMIT BUTTON COS THE PHP MODE DOES'NT WORK!, IT HAS GOT CONFLICT WITH THE POP UP WINDOW!!!************=========================================================

function Submit(){
    //============================VATRIABLES==================
    var userinput1 = document.getElementById("form_name").value;
    var userinput2 = document.getElementById("form_contact").value;
    var userinput3 = document.getElementById("form_email").value;
    var userinput4 = document.getElementById("datepicker").value;
    var userinput0 = document.getElementById("repairs_Bar").value;
    var userinput5 = document.getElementById("result").innerText;
    var contactnumber = parseInt(userinput2);
//    var repairs = document.getElementById("repairs_Bar").value;//============================VATRIABLES================== 
    // if(userinput0=="" && userinput5 == ""){
    //     alert("Gilipollas mal")
    //     document.getElementById("error0").innerHTML ="Please check a repair or TYPE another repair in the bar";
    //     //===============TO CLEAN UP THE OTHER ANSWERS======
    //     document.getElementById("allresult").innerHTML = "";
    //     document.getElementById("error1").innerHTML = "";
    //     document.getElementById("error3").innerHTML = "";
    //     document.getElementById("error4").innerHTML = "";
    //     //===============TO CLEAN UP THE OTHER ANSWERS======
    // }
     if(userinput1==""){
        alert("Gilipollas mal")
        document.getElementById("error1").innerHTML ="Please fill up this field"; 
        document.getElementById("allresult").innerHTML = "";
        //===============TO CLEAN UP THE OTHER ANSWERS======
        document.getElementById("error2").innerHTML = "";
        document.getElementById("error3").innerHTML = "";
        document.getElementById("error4").innerHTML = "";
        document.getElementById("error0").innerHTML ="";
    }
    //================VALIDATE CONTACT NUMBER========================
    else if(userinput2==""||isNaN(contactnumber)||userinput2.length!== 11){
        alert("Gilipollas mal")
        document.getElementById("error2").innerHTML ="Please enter a correct contact number, must be 11 digits";
        //===============TO CLEAN UP THE OTHER ANSWERS======
        document.getElementById("allresult").innerHTML = "";
        document.getElementById("error1").innerHTML = "";
        document.getElementById("error3").innerHTML = "";
        document.getElementById("error4").innerHTML = "";
        document.getElementById("error0").innerHTML ="";
    }
    //================END VALIDATE CONTACT NUMBER========================
    else if(userinput3==""){
        alert("Gilipollas mal")
        document.getElementById("error3").innerHTML ="Please fill up this field";
        //===============TO CLEAN UP THE OTHER ANSWERS======
        document.getElementById("allresult").innerHTML = "";
        document.getElementById("error1").innerHTML = "";
        document.getElementById("error2").innerHTML = "";
        document.getElementById("error4").innerHTML = "";
        document.getElementById("error0").innerHTML ="";
    }
    else if(userinput4==""){
        document.getElementById("error4").innerHTML ="Please fill up this field";
        document.getElementById("allresult").innerHTML = ""; 
        //===============TO CLEAN UP THE OTHER ANSWERS======
        document.getElementById("error1").innerHTML = "";
        document.getElementById("error2").innerHTML = "";
        document.getElementById("error3").innerHTML = "";
        document.getElementById("error0").innerHTML ="";
        //===============TO CLEAN UP THE OTHER ANSWERS======
    }
//============*********WHEN ALL THE FIELDS ARE FILLED UP CORRECTLY******=====================   
    
    else if(userinput1!==""||userinput2!==""||userinput2.length== 11
    ||userinput3!==""||userinput4!==""|| userinput5!== ""){  
    alert("Gilipollas bien");
    document.getElementById("allresult").innerHTML = "These are your details, please double check before you submit: "+
    "<br>"+"Name: "+ userinput1+"<br>"+"Contact Number: "+userinput2+"<br>"+"Email: "
    +userinput3+"<br>"+"Date to drop the bike: "+userinput4+"<br>"+"Other repairs: "+userinput0+
    "<br>"+userinput5;   
        //===============TO CLEAN UP THE OTHER ANSWERS======
        document.getElementById("error1").innerHTML = "";
        document.getElementById("error2").innerHTML = "";
        document.getElementById("error3").innerHTML = "";
        document.getElementById("error4").innerHTML = "";
        document.getElementById("error0").innerHTML ="";
        //===============TO CLEAN UP THE OTHER ANSWERS======
        var result1 = document.getElementById("submit2");
        
        if(result1.style.display == "none") { // if is hide, display it
        result1.style.display = "block";
                        }
    }
}

function Submit2(){
    alert("Gilipollas bien2")
    var userinput1 = document.getElementById("form_name").value;
    var userinput4 = document.getElementById("datepicker").value;
    
    document.getElementById("allresult").innerHTML =userinput1+",    "+"thank you for your request, we have got all your details"+"<br>"+"The date:"+"    "+userinput4+" "+" "+"we are waiting for your bike! Thank you vey much.";
}