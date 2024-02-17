const API_KEY = '7ELdv1u6sDeLUVCxf5UhKOTTxw5vuetMidf6e8qh';

async function selectDateFunc() {
    const selectedDate = document.getElementById('selectDate').value;
    if(!selectedDate) {
        alert('Please input date');
        return;
    }

    const getTodayBySelectedDate = new Date(selectedDate);
    const getToday = new Date();

    if(getTodayBySelectedDate.getTime() > getToday.getTime()) {
        document.querySelector('.nasa-error').style.display = 'block';
        document.querySelector('.nasa-error-message').textContent = 'The date should be past or current date';
        document.querySelector('.nasa-result').style.display = 'none';
        return;
    }

    document.querySelector('.nasa-result').style.display = 'block';
    document.querySelector('.nasa-error').style.display = 'none';
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`);
    const result = await response.json();
    document.querySelector('.nasa_title').textContent = result.title;
    const imageTag = document.querySelector('.nasa_image');
    imageTag.src = result.url;
    document.querySelector('.nasa_description').textContent = result.explanation;
}   