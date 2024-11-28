const profileimage = document.querySelector("#profileImage");
const firstnameSpan = document.querySelector("#firstname")
const ageSpan = document.querySelector("#Age")
const statusSpan = document.querySelector("#Status")
const isWizard = confirm("Are you a wizard?");
const btnupdateprofile = document.querySelector("#updatebtn")


if(isWizard === true ){
    console.log("Welcome to Hogwarts!");
} 
else {
    profileimage.src = "images/image2.jpg";
    firstnameSpan.innerHTML = "Dudley Dursley";
    ageSpan.innerHTML = 12;
    statusSpan.innerHTML = "Muggle";
}

btnupdateprofile.addEventListener("click", () => {
    profileimage.src = "images/image3.jpg";
    firstnameSpan.innerHTML = "Lara Croft";
    ageSpan.innerHTML = 25;
    statusSpan.innerHTML = "Tomb Raider";
})