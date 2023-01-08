let sum = (...numbers) => {
  console.log(
    "The sum of the numbers is: " +
      numbers.reduce((total, numbers) => total + numbers)
  );
};

sum(1, 2, 3);
