var maleName = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw"]
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getDay() {


    var year = document.getElementById("year").value;
      
    var mm = parseInt(document.getElementById("month").value);
 
    var day = parseInt(document.getElementById("day").value);
 
    var gender = document.getElementById("gender").value;

   alert(gender)
    var yy = parseInt(year.substr(2, 4));


    var century = parseInt(year.substr(0, 2));

    var date = parseInt(((century / 4) - 2 * century - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + day) % 7
 alert(date)
    if (mm <= 0 || mm > 12) {
        alert("enter valid month")
    } else
    if (day < 1 || day > 31) {
        alert("enter valid date")
    } else
    if (gender === "male") {
        alert("your Akan male name is" + ""+ "" + maleName[date])
    } else
    if (gender === "female") {
        alert("your Akan female name is" + "" + ""+ femaleName[date])
    }
}
