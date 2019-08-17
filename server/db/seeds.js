use sliderData;
db.dropDatabase();

db.emissions.insertMany([
  {
    name: "Recycling",
    sliderType: false,
    sliderValues: [
      {
        label: "very little",
        value: 71
      },
      {
        label: "average",
        value: 46
      },
      {
        label: "above average",
        value: 23
      },
      {
        label: "very often",
        value: 0
      }
    ]
  },
  {
    name: "Locally sourced food",
    sliderType: false, 
    sliderValues: [
      {
        label: "very little",
        value: 0.5
      },
      {
        label: "average",
        value: 0.3
      },
      {
        label: "above average",
        value: 0.2
      },
      {
        label: "very often",
        value: 0.1
      }
    ]
  },
  {
    name: "Electricity used",
    sliderType: true,
    calcValue: "0.527",
    bottomValue: "0",
    topValue: "5000",
    modifier: "0.75"
  },
  {
    name: "Gas used",
    sliderType: true,
    calcValue: "0.185",
    bottomValue: "0",
    topValue: "30000",
  }

]);



















// use hotel;
// db.dropDatabase();
//
// db.guests.insertMany([
//   {
//     name: "Mat",
//     email: "mat@mattymattymat.com",
//     checkInStatus: true
//
//   },
//   {
//     name: "Michael",
//     email: "michael@mongoclient.com",
//     checkInStatus: true
//   }
// ])
