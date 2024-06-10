// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const timeSlider = document.getElementById('timeSlider');
    const chargeDisplay = document.getElementById('charge');
    const daysDisplay = document.getElementById('days');
    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');

    timeSlider.addEventListener('input', () => {
        let totalMinutes = parseInt(timeSlider.value);
        let days = Math.floor(totalMinutes / 1440);
        totalMinutes -= days * 1440;
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;

        daysDisplay.textContent = days;
        hoursDisplay.textContent = hours;
        minutesDisplay.textContent = minutes;

        if (days > 0) {
            chargeDisplay.textContent = `${5 * days} CHF`;
        } else {
            chargeDisplay.textContent = '3 CHF';
        }
    });
});
