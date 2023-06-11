chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'drinkWater') {
    const notificationOptions = {
      type: 'basic',
      iconUrl: 'images/icon128.png',
      title: 'Drink Water Reminder',
      message: 'Time to drink some water!'
    };
    chrome.notifications.create('drinkWaterNotification', notificationOptions);
  }
});

