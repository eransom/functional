// find the average price

var prices = items.map(object => object.price)
var sum = prices.reduce(function(a,b) {
  return a + b;
});
var avg = "The average price is " + sum/prices.length;
  console.log(avg);

// I set the variable prices to be a mapped array of all item prices.
// I got the sum of all prices using the reduce method.
// I set a variable avg to be the total sum of all prices devided by the length of the prices array.



// get an array of items that cost between $14.00 and $18.00 USD

items.filter(compare => compare.price>14 && compare.price<18).map(name => name.title)

// I used the filter method on the items variable to get prices between $14 & $18 by way of a function that uses comparison
// operators on the price property.  I then use the map method to list an array of the item names by way of the title property.



// Which item has a "GBP" currency code? Display its name and price.

items.filter(item => item.currency_code.includes("GBP")).map(object => object.title + " costs £" + object.price)

// By filtering the items variable, I am able to get only the item that has the currency_code property value of "GBP" using the
  //includes method. I then used the map method to concatonate the title name and price.



// Display a list of all items which are made of wood

items.filter(item => item.description.includes("wood")).map(object => object.title)

// Used filter on the items variable and the includes method to get only the items that have "wood" listed in
// the description property. I then used map to list an array of item names that are made of wood.



// Which items are made of eight or more materials? Display the name, number of items and the items it is made of

items.filter(find => find.materials.length>=8).map(name => name.title + name.materials)

// used filter to set a function that lists all items that are made of 8 or more materials.  This is done by writing a
// comparison expression between the length of the materials property array and 8.  I then use the map method
// to list the item names and differint item materials used.



// How many items were made by their sellers?

items.filter(item => item.who_made.includes("i_did")).length + " were made by their sellers"

// I filter the items variable which sorts through the property "who_made" in order to find the
//length of the array that includes the value ("i_did").  I then concatonate my answer to include
// the string "were made by their sellers".


function addTextNode(text) {
  var newtext = document.createTextNode(text),
      p1 = document.getElementById("p1");

  p1.appendChild(newtext);
}
