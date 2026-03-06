consolefunction openPopup(project){

const popup=document.getElementById("popup")
const text=document.getElementById("popup-text")

if(project==="rec"){

text.innerHTML=
"<h2>OTT Recommendation System</h2><p>Content based system using TF-IDF vectorization and cosine similarity on Netflix dataset.</p>"

}

if(project==="stock"){

text.innerHTML=
"<h2>Stock Volatility</h2><p>Regression and GARCH modeling for financial volatility using macroeconomic indicators.</p>"

}

if(project==="aqi"){

text.innerHTML=
"<h2>AQI Analysis</h2><p>Regression analysis of Pune Smart City pollution data with robust estimation.</p>"

}

popup.style.display="block"

}

function closePopup(){

document.getElementById("popup").style.display="none"

}
