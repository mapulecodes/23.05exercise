//9706257165083
function checkSouthAfricanID() {
    var idNumber = document.getElementById("idNumber").value;

    if (idNumber.length !== 13) {
        alert("Invalid ID number length");
    }else{
        let gender = parseInt(idNumber.charAt(6)) >= 5 ? "Male" : "Female";
        let getYear = +idNumber.slice(0, 2)
        let day = +idNumber.slice(4, 6)
        let month = +idNumber.slice(2, 4)

        let year = parseInt(getYear >= 22 ? "19" + getYear : "20" + year);
    
        var result = "Date of Birth: " + day + "/" + month + "/" + year + "\n" +
                     "Gender: " + gender;
        
        alert(result);
    }

  
}
