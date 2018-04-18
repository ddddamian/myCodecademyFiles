const getAllEvents = () => {
  return ['Marathon', 'Triathlon', 'Decathlon'];
};

/* this is used a few places and it is vulnerable */ 

const getRandomEvent = () => {
  const allEvents = getAllEvents();
  let event = allEvents[Math.floor(Math.random() * allEvents.length)];
  return event;
};

const getEventActivities = (event) => {
  const allEvents = getAllEvents();
  let activities;

  if (!allEvents.includes(event)) {
    return null; 
  }
  
  if (event === 'Marathon') {
    activities = ['Running'];
    return activities.join(', '); 
  } 
  if (event === 'Triathlon') {
    activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', '); 
  } 
  if (event === 'Decathlon') {
    activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', '); 
  }
  
};

const getDaysToTrain = (event) => {
  const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null; 
  }
  
  const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];
};

const getEventMessage = () => {
  let myEvent = getRandomEvent();
  console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) +  ' days to train.');
};

getEventMessage();

