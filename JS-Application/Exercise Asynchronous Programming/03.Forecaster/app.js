async function attachEvents() {
    const locationField=document.getElementById('location');
    const submitBtn=document.getElementById('submit');
    const url='http://localhost:3030/jsonstore/forecaster/locations';
    const weatherDiv=document.getElementById(`forecast`);
    const currWeather=document.getElementById('current');
    const upcomingWeather=document.getElementById('upcoming');

    let weatherIcons={
        'Sunny':'&#x2600;',
        'Partly sunny':'&#x26C5;',
        'Overcast' :'&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;',
    }

    let currentCity={};
    submitBtn.addEventListener('click',async (e)=>{
        weatherDiv.style.display="block";

        try{
            const response=await fetch(url);
            const data=await response.json();
            currentCity=data.find(x=>x.name===locationField.value);
        }
        catch(error){
            console.log(error);
        }
        

        try{
            const cityUrl=`http://localhost:3030/jsonstore/forecaster/today/${currentCity.name.toLowerCase()}`;
            const response=await fetch(cityUrl);
            const data=await response.json();
            console.log(data);

            let spanSymbol=document.createElement('span');
            spanSymbol.innerHTML=weatherIcons[data.forecast.condition];
            spanSymbol.classList.add('condition');
            spanSymbol.classList.add('symbol');

            let spanDataCategory=document.createElement('span');
            spanDataCategory.classList.add('condition');

            let spanDataCity=document.createElement('span');
            spanDataCity.classList.add('forecast-data');
            spanDataCity.innerHTML=`${data.name}`;

            let spanDataDegrees=document.createElement('span');
            spanDataDegrees.classList.add('forecast-data');
            console.log(data);
            spanDataDegrees.innerHTML=`${data.forecast.low}${weatherIcons['Degrees']}/${data.forecast.high}${weatherIcons['Degrees']}`;

            let spanDataForecast=document.createElement('span');
            spanDataForecast.classList.add('forecast-data');
            spanDataForecast.innerHTML=`${data.forecast.condition}`;

            spanDataCategory.appendChild(spanDataCity);
            spanDataCategory.appendChild(spanDataDegrees);
            spanDataCategory.appendChild(spanDataForecast);
            currWeather.appendChild(spanSymbol);
            currWeather.appendChild(spanDataCategory);
        }
        catch(error){

        }

        try {
            const threeDaysForecastUrl=`http://localhost:3030/jsonstore/forecaster/upcoming/${currentCity.name.toLowerCase()}`;
            const response=await fetch(threeDaysForecastUrl);
            const data=await response.json();
            console.log(data);
            debugger;

        } catch (error) {
            
        }
    })
  

}

attachEvents();