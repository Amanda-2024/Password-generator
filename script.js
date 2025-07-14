let light_mode = document.getElementById("light");
let dark_mode = document.getElementById("dark");
let body = document.querySelector("body");

let pw_length = document.getElementById("length");
let p_value = document.getElementById("pw_value");

let numbers = document.getElementById("numbers");
let capital = document.getElementById("capital");       
let small = document.getElementById("small");
let special = document.getElementById("special");

let generated_password = document.getElementById("generated_password");


//Changing background color based on the selected mode
//Light mode

light_mode.addEventListener("click", (e) => {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        dark_mode.checked = false;
    }
);

//Dark mode

dark_mode.addEventListener("click", (e) => {
        body.style.backgroundColor = "rgb(46,46,46)";
        body.style.color = "white";
        light_mode.checked = false
    }
);


//Password generation

let pw_size=0;

//Event listener for the range input to get the password length desired by the user
pw_length.addEventListener("input",(e) =>{
    pw_size = pw_length.value;
    p_value.innerText = "  "+pw_size; //Update the displayed password length
    //console.log(pw_size);
    //call the password generation function
    gen_PW();

})

//Character sets for password generation
//Numbers, capital letters, small letters and special characters
const digits = "0123456789";
const capital_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small_letters = "abcdefghijklmnopqrstuvwxyz";
const special_characters = "!@#$%^&*()_+[]{}|;:,.<>?";

function gen_PW (){
    
    let password = "";
    let char_set = "";

    //Check preference of user and update the character set accordingly
    if(numbers.checked){
        char_set += digits;
    }
    if(capital.checked){
        char_set += capital_letters;
    }
    if(small.checked){
        char_set += small_letters;
    }
    if(special.checked){
        char_set += special_characters;
    }
    
    console.log(char_set);
    for(let i=0;i<pw_size;i++){
        if(char_set.length === 0){ //No character selected
            password += "";
            generated_password.value = "Can't generate password !! Please select atleast one preference";
            generated_password.style.fontSize = "15px";
            generated_password.style.color = "red";
            generated_password.style.width = "450px";
            continue;
        }
        let index = Math.floor(Math.random()* char_set.length);
        console.log(index);
        password += char_set[index];
        console.log(password);
        generated_password.value = password;
        generated_password.style.fontSize = "20px";
        generated_password.style.color = "blue";
        generated_password.style.width = "300px";
        
    }

}





