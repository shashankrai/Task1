const mockCarData = {
  cars: [
    {
      stockNumber: 10063,
      manufacturerName: 'Dodge',
      modelName: 'Caliber',
      color: 'silver',
      mileage: { number: 101681, unit: 'km' },
      fuelType: 'Petrol',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
    },
    {
      stockNumber: 10070,
      manufacturerName: 'Porsche',
      modelName: 'Macan',
      color: 'black',
      mileage: { number: 124413, unit: 'km' },
      fuelType: 'Diesel',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
    },
    {
      stockNumber: 10144,
      manufacturerName: 'Porsche',
      modelName: '968',
      color: 'yellow',
      mileage: { number: 186083, unit: 'km' },
      fuelType: 'Diesel',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
    }
  ],
  totalPageCount: 1,
  totalCarsCount: 3
};

export default mockCarData;
