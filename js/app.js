const $days = document.querySelector('#days');
const $hours = document.querySelector('#hours');
const $minutes = document.querySelector('#minutes');
const $seconds = document.querySelector('#seconds');
const $countdown = document.querySelector('.counter');


const countdown = (nextDate) => {

    let timer = setInterval(() => {

        let waitTime  = new Date(nextDate.toString().replace(/\,/g, '/')).getTime();
        let currentTime = new Date().getTime();
        let difference = waitTime -  currentTime;
        
        let daysMissings = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hoursMissings = Math.floor((difference / (1000 * 60 * 60 ))  % 24 );
        let minutesMissings = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let secondsMissings = Math.floor((difference % (1000 * 60)) / (1000));
        

        $days.textContent =  daysMissings < 10 ? `0${daysMissings}` : `${daysMissings}`;
        $hours.textContent = hoursMissings < 10 ? `0${hoursMissings}` : `${hoursMissings}`;
        $minutes.textContent = minutesMissings < 10 ? `0${minutesMissings}` : `${minutesMissings}`;
        $seconds.textContent = secondsMissings < 10 ? `0${secondsMissings}` : `${secondsMissings}`;

        if(difference < 0) {
            clearInterval(timer);
            $countdown.innerHTML = `<h1 class="timeOut">It's time!!!<br>🥳📢</h1>`;
        }
        
    }, 1000);

    timer;
    
}


countdown('2021-05-01');

