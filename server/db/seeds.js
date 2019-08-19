use sliderData;
db.dropDatabase();

//all kg of co2 used for all calculation figures.
​
db.emissions.insertMany(
  [
    {
      name: "food",
      data: [
        {
          name: "Food sourced locally",
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
          name: "Food waste",
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
          name: "Days per week consuming meat & dairy",
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
      name: "housing",
      data: [
        {
          name: "Yearly Electricity use (kWh)",
          isSmoothSlider: true,
          calcValue: 0.309,
          bottomValue: "0",
          topValue: "5000",
          modifier: "0.75"
        },
        {
          name: "Yearly Gas use (kWh)",
          isSmoothSlider: true,
          calcValue: 0.185,
          bottomValue: "0",
          topValue: "30000",
        },
        {
          name: "Recycling",
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
      name: "transport",
      data: [
        {
          name: "Flights hours per year",
          isSmoothSlider: true,
          calcValue: 134,
          bottomValue: "0",
          topValue: "50",
        },
        {
          name: "Car journey miles per year",
          isSmoothSlider: true,
          calcValue: 0.43,
          bottomValue: "0",
          topValue: "25000",
        },
        {
          name: "Public transport miles per week",
          isSmoothSlider: true,
          calcValue: 5.2,
          bottomValue: "0",
          topValue: "500",
        }
      ]
    }
  ]);
