var timeOfDay = [16, "noon", 8, "morning", "evening", 12];
timeOfDay.forEach(function (time, index) {
  console.log(`The ${time} element is at position ${index}`);
});

//for (var time of timeOfDay) {
//console.log(`It is ${time}.`);

var employeeAges = [15, 36, 78, 25, 17, 42, 19, 18];
var adultAge = employeeAges.filter(function (item) {
  return item >= 18;
});
console.log(adultAge);

var lastNames = ["Khan", "Martino", "Martinez", "Li", "Martindale", "Bai"];
var martinName = lastNames.filter(function (item) {
  return item.includes("Martin");
});
console.log(martinName);
