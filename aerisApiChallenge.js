import AerisWeather from '@aerisweather/javascript-sdk';

const target = document.getElementById('obs');

const aeris = new AerisWeather('RPWkCaESX2v8UsgEhZSu8', 'NIKctIWAkkEvTHWQsELj51e32qonWWGVS0DZ7OV5');

const request = aeris
    .api()
    .endpoint('observations')
    .place('chicago,il');
request
    .get()
    .then((result) => {
            const { ob } = result.data;
            if (ob) {
                const html = (`
 <p class="timestamp">Last updated at ${aeris.utils.dates.format(new Date(ob.timestamp * 1000), 'h:mm a, MMM D, YYYY')}</p>
 <div class="cols">
     <div>
         <p class="temp">${ob.tempF}<span>&deg;F</span></p>
         <p class="wx">${ob.weatherPrimary}</p>
     </div>
     <div>
         <img class="icon" src="https://cdn.aerisapi.com/wxblox/icons/${ob.icon || 'na.png'}">
     </div>
     <div class="details">
         <div class="row">
             <div>Winds</div>
             <div>${ob.windSpeedMPH > 0
                ? `${ob.windSpeedMPH} mph`
                : `Calm`}</div>
         </div>
         <div class="row">
             <div>Dew Point</div>
             <div>${ob.dewpointF || 'N/A'}&deg;F</div>
         </div>
         <div class="row">
             <div>Humidity</div>
             <div>${ob.humidity || 'N/A'}%</div>
         </div>
         <div class="row">
             <div>Pressure</div>
             <div>${ob.pressureIN || 'N/A'} in.</div>
         </div>
         <div class="row">
             <div>Visibility</div>
             <div>${ob.visibilityMI || 'N/A'} mi</div>
         </div>
         <div class="row">
             <div>Sky Cover</div>
             <div>${ob.sky || 'N/A'}%</div>
         </div>
     </div>
 </div>
`);
            target.innerHTML = html;
        }
    });