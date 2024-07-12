const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('.waether-box');
const weatherDetails=document.querySelector('.weather-details');

search.addEventListener('click',()=>{
//it ApI take from openweather app side on google
    const APIKey ='dfb6febb066fe504b3d833de1f6f40d5';
const city= document.querySelector('.search-box input').ariaValueMax;
if(city=='')
    return;
fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${API key}').then(response=>response.json()).then(json=>
    {

         const img=document.querySelector('.weather-box img');
         const temperature=document.querySelector('.weather-box .temperature');
         const description=document.querySelector('.weather-box .description');
         const humidity=document.querySelector('.weather-details .humidity span');
         const wind=document.querySelector('.weather-details .wind span');

         switch(json.weather[0].main){
            case 'clear':
                img.src='images/clear.png';
            
                break;
            case 'Rain':
                    img.src='images/rain.png';
                
                    break;  
            case 'Snow':
                img.src='images/snow.png';
            
                break; 
             case 'Clouds':
                img.src='images/cloud.png';
            
                break; 
            case 'Mist':
                img.src='images/mist.png';
            
                break;
            
                default:
                 img.src='/images/images/cloud.png';
            }
         });




    });
