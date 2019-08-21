use sliderData;
db.dropDatabase();

//all kg of co2 used for all calculation figures.
​
db.emissions.insertMany(
  [
    {
      category: "FOOD",
      data: [
        {
          name: "Food Miles - How much of your food is produced locally?",
          isSmoothSlider: false,
          sliderValues: [
            {
              label: "very little",
              value: "500"
            },
            {
              label: "average",
              value: "300"
            },
            {
              label: "above average",
              value: "200"
            },
            {
              label: "very often",
              value: "100"
            }
          ]
        },
        {
          name: "Food waste - How much food annually do you waste on average?",
          calculayionInfo: "On average over one fifth of edible food is thrown away. In the UK, about one third of the food bought is thrown away, and at least half of this is food that could have been eaten. Inedible food includes potato peelings, bones, banana skins and teabags. Edible food can be discarded because too much is prepared, or because it has gone past its use-by date and so on.",
          isSmoothSlider: false,
          sliderValues: [
            {
              label: "very little",
              value: "660"
            },
            {
              label: "below average",
              value: "770"
            },
            {
              label: "average",
              value: "900"
            },
            {
              label: "above average",
              value: "1050"
            }
          ]
        },
        {
          name: "Meat and Dairy - How many days a week do you consume meat and or dairy?",
          isSmoothSlider: false,
          sliderValues: [
            {
              label: "One",
              value: "77.21"
            },
            {
              label: "Two",
              value: "154.42"
            },
            {
              label: "Three",
              value: "231.63"
            },
            {
              label: "Four",
              value: "308.84"
            },
            {
              label: "Five",
              value: "386.06"
            },
            {
              label: "Six",
              value: "463.26"
            },
            {
              label: "Seven",
              value: "540.47"
            }
          ]
        }
      ]
    },
    {
      category: "HOUSING",
      data: [
        {
          name: "Electricity - What is Your Yearly Electricity Use? (kWh)",
          calculationInfo: 'Electricity use is measured in kilowatt-hours (abbreviated to kWh).To make an accurate calculation, you need to find your latest bill and the reading (in kWh) at the end of the last quarter. Then find the bill 12 months before it and the corresponding reading. ',
          isSmoothSlider: true,
          sliderValues: {
            calcValue: 0.309,
            min: "0",
            max: "5000",
            modifier: "0.75"
          }
        },
        {
          name: "Gas - What is Your Yearly Gas Use? (kWh)",
          calculationInfo: "Gas consumption is generally measured in units of volume, and this is converted on gas bills into units of energy i.e. kilowatt-hours (kWh) - see Sources page.\nTo make an accurate calculation of the CO2 generated, you can enter the annual kWh used (if you know this), or you can calculate it from your bills. To calculate from your bills, first select how your gas is measured. If your bills don't say what the units are, you can probably find the units on the meter.\nRecently installed meters measure gas in cubic metres (m3), but older meters measure in hundreds of cubic feet - or you may have the kWh already calculated.\nEnter the meter reading at the end of the last quarter from the latest bill and then the reading from 12 months before. ",
          isSmoothSlider: true,
          sliderValues: {
            calcValue: 0.185,
            min: "0",
            max: "30000"
          }
        },
        {
          name: "Recycling - How Often Do You Recycle Paper, Plastics and Glass?",
          isSmoothSlider: false,
          sliderValues: [
            {
              label: "very little",
              value: "71"
            },
            {
              label: "average",
              value: "46"
            },
            {
              label: "above average",
              value: "23"
            },
            {
              label: "very often",
              value: "0"
            }
          ]
        }
      ]
    },
    {
      category: "TRANSPORT",
      data: [
        {
          name: "Flights - How Many Hours Per Year Are You on a Plane?",
          calculationInfo: ' Enter the hours spent on flights within the UK, or in flights between airports outside the UK.',
          isSmoothSlider: true,
          sliderValues: {
            calcValue: 134,
            min: "0",
            max: "50"
          }
        },
        {
          name: "Car - How many miles per year does your car travel?",
          calculationInfo: 'To work out your annual mileage:If you have owned the car from new, divide the total mileage by the number of years. For an older car, you can take the difference between the mileage shown on your last two MOT certificates.',
          isSmoothSlider: true,
          sliderValues: {
            calcValue: 0.43,
            min: "0",
            max: "25000"
          }
        },
        {
          name: "Public transport - How Many Miles per week do you use bus and or train?",
          calculationInfo: 'You can estimate your mileage by either estimating the average journey time or multiplying by average bus speeds (roughly 15mph for urban journeys and 20mph for rural journeys). \nIf you are a regular bus traveller, enter a typical week and these will be multiplied up (by 48 and 12 respectively) and added to your other mileage.',
          isSmoothSlider: true,
          sliderValues: {
            calcValue: 5.2,
            min: "0",
            max: "500"
          }
        }
      ]
    }
  ]);
