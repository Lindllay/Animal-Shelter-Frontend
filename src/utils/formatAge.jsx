const formatAge = (age) => {
  if (!Number.isInteger(age)) {
    return "roku";
  } else if (age === 1) {
    return "rok";
  } else if ((age > 9 && age % 10 === 2) || age % 10 === 3 || age % 10 === 4) {
    return "lata";
  } else if (age >= 2 && age <= 4) {
    return "lata";
  } else {
    return "lat";
  }
};

export default formatAge;
