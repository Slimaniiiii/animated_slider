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

        if (days === 0) {
            chargeDisplay.textContent = '3 CHF';
        } else if (days === 1 && (hours > 0 || minutes >= 30)) {
            chargeDisplay.textContent = '5 CHF';
        } else if (days === 2) {
            chargeDisplay.textContent = '10 CHF';
        } else if (days === 3) {
            chargeDisplay.textContent = '15 CHF';
        } else if (days === 4) {
            chargeDisplay.textContent = '20 CHF';
        } else if (days === 5) {
            chargeDisplay.textContent = '25 CHF';
        }
        else {
            chargeDisplay.textContent = '3 CHF';
        }
    });
});
function goBack() {
    window.history.back()
}
