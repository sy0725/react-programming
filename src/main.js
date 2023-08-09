const greetCurry = (message) => {
    return function greet(name) {
      return `${name} ${message}!`;
    };
  }
  
  const morningGreet = greetCurry('안녕! 좋은 아침이야!');
  const eveningGreet = greetCurry('맛있는 저녁 먹으러 가자!');
  
  console.log(typeof morningGreet); // data type is [function]
  console.log(typeof morningGreet('야무'));
  console.log(typeof morningGreet('동균'));
  console.log(typeof morningGreet('치현'));
  
  
  greetCurry('안녕! 좋은 아침이야!')('범쌤');