let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  }
  let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    }
  }
  console.log(vehicle);

  var car = Object.create(vehicle, carProps);

  console.log(carProps)
  console.log(car);