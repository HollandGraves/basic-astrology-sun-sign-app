//In HTML: Make an h1 and give it a unique Id. Using Javascript, insert some text into that element.

var htmlMainHead = document.getElementById("mainHead");
htmlMainHead.innerText = "Please enter the name of your Zodiac Sun Sign below";


//In JS: Create a variable and store an array inside it of four strings. Using a for loop, log each string in the array to the console, one at a time.
var zodiacElements = ["Fire", "Earth", "Air", "Water"];
for(var i = 0; i < zodiacElements.length; i++) {
    console.log("Within Western Astrology, there is an element of " + zodiacElements[i])
}


//In JS: Create an object with at least three separate properties and values. Log each property value to the console, one at a time (Note: do not use a for loop for this).
var zodiacSigns = 
    {
        signs: ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"],
        quadriplicities: ["fire", "earth", "air", "water"],
        triplicities: ["cardinal", "fixed", "mutable"]
    }
console.log(zodiacSigns.signs);
console.log(zodiacSigns.quadriplicities);
console.log(zodiacSigns.triplicities);


//In JS: Create a variable and store an array in it. In this array, create three objects, with three properties each. Using a for loop, log the property values of each object to the console.
var esotericZodiacArray = 
[
    {
        zodiacSignsProp: 
            {
                ariesObj: "fire",
                taurusObj: "earth",
                geminiObj: "air",
                cancerObj: "water"
            }
    },
    {
        bodiesInAstrology:
            {
                planets: ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"],
                asteroids: ["ceres", "juno", "vesta", "pallas", "chiron"]
            }
    },
    {
        aspects:
            {
                conjunction: 
                    {
                        effect: "makes two planets' energies fuse together",
                        challenge: "energies are subconsciously focused upon by the individual to the point of being unable to seperate the two energies",
                        orb: "10 degrees"
                    },
                opposition:
                    {
                        effect: "makes two planets' energies' stand at odds",
                        challenge: "energies are subconsciously unbalanced. We one energy attempts to express itself the other interupts the expression",
                        orb: "10 degrees"
                    },
                sextile:
                    {
                        effect: "makes two planets' energies enjoying to consciously use together",
                        challenge: "the two energies can become an escape from problems, but are more often gifts that are used to solves challenges",
                        orb: "6 degrees"
                    }
            }
    }
];


//For my own test of console.logging objects in objects using dot notation
var zodiacObj = 
    {
        zodiacSignsProp: 
            {
                aries: "fire",
                taurus: "earth",
                gemini: "air",
                cancer: "water"
            },
        bodiesInAstrology:
            {
                planets: ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"],
                asteroids: ["ceres", "juno", "vesta", "pallas", "chiron"]
            },
        aspects:
            {
                conjunction: 
                    {
                        effect: "makes two planets' energies fuse together",
                        challenge: "energies are subconsciously focused upon by the individual to the point of being unable to seperate the two energies",
                        orb: "10 degrees"
                    },
                opposition:
                    {
                        effect: "makes two planets' energies' stand at odds",
                        challenge: "energies are subconsciously unbalanced. We one energy attempts to express itself the other interupts the expression",
                        orb: "10 degrees"
                    },
                sextile:
                    {
                        effect: "makes two planets' energies enjoying to consciously use together",
                        challenge: "the two energies can become an escape from problems, but are more often gifts that are used to solves challenges",
                        orb: "6 degrees"
                    }
            }
    };





//In JS: Declare your function and inside it, store the value of the input in a variable, with a name of your choice. The way this will work is, a user
//will type something into the input field and then click the button, which will invoke your function and store what they have typed in into a variable.
var signH1 = document.getElementById("sign");
var quadraplicityH1 = document.getElementById("quadraplicity");
var triplicityH1 = document.getElementById("triplicity");

function zodiacInfo(zodiac) {
    //Determines Zodiac Sun Sign information
    if(userZodiacSign.value == "aries" || userZodiacSign.value == "Aries") {
        signH1.innerText = "Your Sun Sign is Aries!";
    }
        else if(userZodiacSign.value == "taurus" || userZodiacSign.value == "Taurus") {
            signH1.innerText = "Your Sun Sign is Taurus!";
        }
            else if(userZodiacSign.value == "gemini" || userZodiacSign.value == "Gemini") {
                signH1.innerText = "Your Sun Sign is Gemini!";
            }
                else if(userZodiacSign.value == "cancer" || userZodiacSign.value == "Cancer") {
                    signH1.innerText = "Your Sun Sign is Cancer!";
                }
                    else if(userZodiacSign.value == "leo" || userZodiacSign.value == "Leo") {
                        signH1.innerText = "Your Sun Sign is Leo!";
                    }
                        else if(userZodiacSign.value == "virgo" || userZodiacSign.value == "Virgo") {
                            signH1.innerText = "Your Sun Sign is Virgo!";
                        }
                            else if(userZodiacSign.value == "libra" || userZodiacSign.value == "Libra") {
                                signH1.innerText = "Your Sun Sign is Libra!";
                            }
                                else if(userZodiacSign.value == "scorpio" || userZodiacSign.value == "Scorpio") {
                                    signH1.innerText = "Your Sun Sign is Scorpio!";
                                }
                                    else if(userZodiacSign.value == "sagittarius" || userZodiacSign.value == "Sagittarius") {
                                        signH1.innerText = "Your Sun Sign is Sagittarius!";
                                    }
                                        else if(userZodiacSign.value == "capricorn" || userZodiacSign.value == "Capricorn") {
                                            signH1.innerText = "Your Sun Sign is Capricorn!";
                                        }
                                            else if(userZodiacSign.value == "aquarius" || userZodiacSign.value == "Aquarius") {
                                                signH1.innerText = "Your Sun Sign is Aquarius!";
                                            }
                                                else if(userZodiacSign.value == "pisces" || userZodiacSign.value == "Pisces") {
                                                    signH1.innerText = "Your Sun Sign is Pisces!";
                                                }
                                                    //Alert that makes sure input is correct
                                                    else {
                                                        alert("Please type in your Zodiac Sign and click Submit")
                                                    }

    //Determines Zodiac Sun Sign Quadraplicity
    if(userZodiacSign.value == "aries" || userZodiacSign.value == "leo" || userZodiacSign .value== "sagittarius" || userZodiacSign.value == "Aries" || userZodiacSign.value == "Leo" || userZodiacSign .value== "Sagittarius") {
        quadraplicityH1.innerText = "Your Sun Sign is a Fire sign!";
    } 
        else if(userZodiacSign.value == "taurus" || userZodiacSign.value == "virgo" || userZodiacSign.value == "capricorn" || userZodiacSign.value == "Taurus" || userZodiacSign.value == "Virgo" || userZodiacSign .value== "Sagittarius") {
            quadraplicityH1.innerText = "Your Sun Sign is an Earth sign!";
        } 
            else if(userZodiacSign.value == "gemini" || userZodiacSign.value == "libra" || userZodiacSign.value == "aquarius" || userZodiacSign.value == "Gemini" || userZodiacSign.value == "Libra" || userZodiacSign .value== "Aquarius") {
                quadraplicityH1.innerText = "Your Sun Sign is an Air sign!";
            }
                else if(userZodiacSign.value == "cancer" || userZodiacSign.value == "scorpio" || userZodiacSign.value == "pisces" || userZodiacSign.value == "Cancer" || userZodiacSign.value == "Scorpio" || userZodiacSign .value== "Pisces") {
                    quadraplicityH1.innerText = "Your Sun Sign is a Water sign!";
                }

    //Determines Zodiac Sun Sign Triplicity
    if(userZodiacSign.value == "aries" || userZodiacSign.value == "cancer" || userZodiacSign .value== "libra" || userZodiacSign .value== "capricorn" || userZodiacSign.value == "Aries" || userZodiacSign.value == "Cancer" || userZodiacSign .value== "Libra" || userZodiacSign .value== "Capricorn") {
        triplicityH1.innerText = "Your Sun Sign is a Cardinal sign!";
    } 
        else if(userZodiacSign.value == "taurus" || userZodiacSign.value == "leo" || userZodiacSign.value == "scorpio" || userZodiacSign .value== "aquarius" || userZodiacSign.value == "Taurus" || userZodiacSign.value == "Leo" || userZodiacSign .value== "Scorpio" || userZodiacSign .value== "Aquarius") {
            triplicityH1.innerText = "Your Sun Sign is an Fixed sign!";
        } 
            else if(userZodiacSign.value == "gemini" || userZodiacSign.value == "virgo" || userZodiacSign.value == "sagittarius" || userZodiacSign .value== "pisces" || userZodiacSign.value == "Gemini" || userZodiacSign.value == "Virgo" || userZodiacSign .value== "Sagittarius" || userZodiacSign .value== "Pisces") {
                triplicityH1.innerText = "Your Sun Sign is an Mutable sign!";
            }

    //Changes color of information text about signs
    if(userZodiacSign.value == "aries" || userZodiacSign.value == "leo" || userZodiacSign .value== "sagittarius" || userZodiacSign.value == "Aries" || userZodiacSign.value == "Leo" || userZodiacSign .value== "Sagittarius") {
        signH1.style.color = "#FF1919";
        quadraplicityH1.style.color = "#FF1919";
        triplicityH1.style.color = "#FF1919";
    }
        else if(userZodiacSign.value == "taurus" || userZodiacSign.value == "virgo" || userZodiacSign.value == "capricorn" || userZodiacSign.value == "Taurus" || userZodiacSign.value == "Virgo" || userZodiacSign .value== "Sagittarius") {
            signH1.style.color = "#2F972F";
            quadraplicityH1.style.color = "#2F972F";
            triplicityH1.style.color = "#2F972F";
        } 
            else if(userZodiacSign.value == "gemini" || userZodiacSign.value == "libra" || userZodiacSign.value == "aquarius" || userZodiacSign.value == "Gemini" || userZodiacSign.value == "Libra" || userZodiacSign .value== "Aquarius") {
                signH1.style.color = "#E5E500";
                quadraplicityH1.style.color = "#E5E500";
                triplicityH1.style.color = "#E5E500";
            }
                else if(userZodiacSign.value == "cancer" || userZodiacSign.value == "scorpio" || userZodiacSign.value == "pisces" || userZodiacSign.value == "Cancer" || userZodiacSign.value == "Scorpio" || userZodiacSign .value== "Pisces") {
                    signH1.style.color = "#6666FF";
                    quadraplicityH1.style.color = "#6666FF";
                    triplicityH1.style.color = "#6666FF";
                }
}

//resets info on page to default
function zodiacReset(x) {
    userZodiacSign.value = "";
    signH1.innerText = "";
    quadraplicityH1.innerText = "";
    triplicityH1.innerText = "";
} 