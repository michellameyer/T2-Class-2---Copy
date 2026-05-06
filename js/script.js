let screen = document.getElementById('result').value;

function display(newValue){
    document.getElementById('result').value += newValue;
}

function clearScreen(){
    document.getElementById('result').value = "";
}

function calculate(){
    let sum = document.getElementById('result').value;
    let answer = eval(sum);
    document.getElementById('result').value = answer;
}

let form = document.forms['my-form'];
form.addEventListener("submit", getValues);

function getValues(event){
    event.preventDefault();

    let formData = {
        "name": this.name.value,
        "bio": this.bio.value,
        "fav-colour": this['fav-colour'].value,
        "gender": this.gender.value,
        "fav-foods": []
    };

    let favFoods = document.querySelectorAll(".fav-foods");

    for (let food of favFoods){
        if (food.checked == true){
            formData['fav-foods'].push(food.value);
        }
    }

    let output = `
        <p>Name: <span>${formData.name}</span></p>
        <p>Bio: <span>${formData.bio}</span></p>
        <p>Fav Colour: <span>${formData['fav-colour']}</span></p>
        <p>Gender: <span>${formData.gender}</span></p>
        <p>Fav Food: <span>${formData['fav-foods']}</span></p>
    `

    document.querySelector(".code").innerHTML = output;
}