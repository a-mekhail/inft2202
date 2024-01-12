// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("groceries");

// ADD NEW ITEM TO END OF LIST
// Create element
const newListItem = document.createElement("li");
// Create text node
const listItemText = document.createTextNode("bananas");
// Add text node to element
newListItem.appendChild(listItemText);
// Add element end of list
groceryList.appendChild(newListItem);

// ADD NEW ITEM START OF LIST
// Create element
const newListItem2 = document.createElement("li"); 
// Create text node
const listItemText2 = document.createTextNode("milk");
// Add text node to element
newListItem2.appendChild(listItemText2);
// Add element to list
groceryList.prepend(newListItem2);


// All <li> elements
var groceryListItems = groceryList.getElementsByTagName("li");
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
var groceryListCount = groceryListItems.length;
// Loop through elements
for (let i = 0; i < groceryListCount; i++) {
    // Change class to cool
    groceryListItems[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
const h2Element = document.getElementById("subheading");
// h2 text
const h2Text = h2Element.textContent;
// No. of <li> elements
// Content
const newH2Text = `${h2Text} (${groceryListCount})`
// Update h2 using innerHTML (not textContent) because it contains markup
h2Element.innerHTML = newH2Text;