// MOVIE RECOMENDATION PROJECT

let movie = prompt("Enter Movie Genre: \n1. Action \n2. Comedy \n3. Horror \n4. Drama");
let age = +prompt("Enter Your Age:");

// Check for Action genre
if (movie == "Action") {
    if (age <= 13) {
        alert("Recommended Movies For Children Are: \nThe Incredibles.");
    } else {
        alert("Recommended Movies For Elders Are: \nMad Max.");
    }
}
// Check for Comedy genre
else if (movie == "Comedy") {
    if (age <= 13) {
        alert("Recommended Movies For Children Are: \nToy Story.");
    } else {
        alert("Recommended Movies For Elders Are: \nSuper Bad.");
    }
}
// Check for Horror genre
else if (movie === "Horror") {
    if (age <= 13) {
        alert("Recommended Movies For Children Are: \nCoraline.");
    } else {
        alert("Recommended Movies For Elders Are: \nThe Conjuring.");
    }
}
// Check for Drama genre
else if (movie == "Drama") {
    if (age <= 13) {
        alert("Recommended Movies For Children Are: \nThe Lion King.");
    } else {
        alert("Recommended Movies For Elders Are: \nThe Shawshank Redemption.");
    }
}
// Handle invalid input
else {
    alert("Invalid Input!");
}