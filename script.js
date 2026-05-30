const compareButton = document.getElementById("compareBtn");
const inputField = document.getElementById("age");

function compareAge() {
    let artistAge = Number(document.getElementById("age").value);

    if (artistAge) {

        if (artistAge < 0) {
            alert("Age cannot be negative. Please try again.");
            inputField.value = "";

        } else if (artistAge < 25) {
            alert("They're " + artistAge + " years old and they're younger than Google.");

        } else if (artistAge == 25) {
            alert("They're " + artistAge + " and they're as old as Google.");

        } else if (artistAge > 25) {
            alert("They're " + artistAge + " and they're older than Google.");

        } 

    } else {
        alert("Input field is empty. Please try again");
    }
}

compareButton.addEventListener("click", function() {
    compareAge();
});