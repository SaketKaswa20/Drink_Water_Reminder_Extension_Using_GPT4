document.getElementById('reminder-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const interval = document.getElementById('interval').value;
  if (interval) {
    chrome.alarms.create('drinkWater', { periodInMinutes: parseInt(interval) });
    window.close();
  }
});

document.getElementById('stop-reminder').addEventListener('click', () => {
  chrome.alarms.clear('drinkWater');
  window.close();
});

