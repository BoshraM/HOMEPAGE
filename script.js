/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
var roll, dice, total_dice, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list2 = document.getElementById('list');
  roll.forEach((item) => {
    let new_li2 = document.createElement('li');
    new_li2.innerText = item;

    element_list2.appendChild(new_li2);
  });
  let element_total2 = document.getElementById('total');
  element_total2.innerText = roll.reduce((a,b) => a+b, 0);
  let element_button_roll = document.getElementById('button_roll');
  element_button_roll.style.color = '#ff9900';
  element_button_roll.style.backgroundColor = '#66ffff';
  let element_button_remove = document.getElementById('button_remove');
  element_button_remove.style.color = '#660000';
  element_button_remove.style.backgroundColor = '#ffccff';
  let element_button_restart = document.getElementById('button_restart');
  element_button_restart.style.color = '#666666';
  element_button_restart.style.backgroundColor = '#66ff99';
}

// Describe this function...
function display_the_roll() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_info = document.getElementById('info');
  total_dice = [roll.reduce((a,b) => a+b, 0)];
  if (total_dice == 11) {
    element_info.innerText = 'you won';
    element_info.style.color = '#00cccc';
  } else if (total_dice < 11) {
    element_info.innerText = 'keep playing';
    element_info.style.color = '#33ff33';
  } else if (total_dice > 11) {
    element_info.innerText = 'you lost';
    element_info.style.color = '#cc0000';
  }
}


prettify.toHTML(run(), console);
var roll, dice, total_dice, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list2 = document.getElementById('list');
  roll.forEach((item) => {
    let new_li2 = document.createElement('li');
    new_li2.innerText = item;

    element_list2.appendChild(new_li2);
  });
  let element_total2 = document.getElementById('total');
  element_total2.innerText = roll.reduce((a,b) => a+b, 0);
  let element_button_roll = document.getElementById('button_roll');
  element_button_roll.style.color = '#ff9900';
  element_button_roll.style.backgroundColor = '#66ffff';
  let element_button_remove = document.getElementById('button_remove');
  element_button_remove.style.color = '#660000';
  element_button_remove.style.backgroundColor = '#ffccff';
  let element_button_restart = document.getElementById('button_restart');
  element_button_restart.style.color = '#666666';
  element_button_restart.style.backgroundColor = '#66ff99';
}

// Describe this function...
function display_the_roll() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_info = document.getElementById('info');
  total_dice = [roll.reduce((a,b) => a+b, 0)];
  if (total_dice == 11) {
    element_info.innerText = 'you won';
    element_info.style.color = '#00cccc';
  } else if (total_dice < 11) {
    element_info.innerText = 'keep playing';
    element_info.style.color = '#33ff33';
  } else if (total_dice > 11) {
    element_info.innerText = 'you lost';
    element_info.style.color = '#cc0000';
  }
}


roll = [];
dice = [1, 2, 3, 4, 5, 6];
let element_p1 = document.getElementById('p1');
element_p1.style.color = '#6600cc';
let element_p2 = document.getElementById('p2');
element_p2.style.color = '#6600cc';
rolls();


document.getElementById('button_roll').addEventListener('click', (event) => {
  roll.push(randomMember(dice));
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = roll.slice(-1)[0];

  element_list.appendChild(new_li);
  let element_total = document.getElementById('total');
  element_total.replaceChildren();
  element_total.innerText = roll.reduce((a,b) => a+b, 0);
  display_the_roll();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  roll = [];
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_total3 = document.getElementById('total');
  element_total3.innerText = roll.reduce((a,b) => a+b, 0);
  display_the_roll();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  let element_list4 = document.getElementById('list');
  element_list4.replaceChildren();
  roll.pop();
  rolls();
  display_the_roll();

});
var list, random, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


list = [];
random = [];
list.forEach((item) => {
  let element_list = document.getElementById('list');
  element_list.innerText = item;
});


document.getElementById('button').addEventListener('click', (event) => {
  list.unshift(getNumberOrString(document.getElementById('text').value));
  let element_list2 = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = list[0];

  element_list2.appendChild(new_li);

});

document.getElementById('select').addEventListener('click', (event) => {
  random = [randomMember(list)];
  let element_random = document.getElementById('random');
  let new_li2 = document.createElement('li');
  new_li2.innerText = random.shift();

  element_random.appendChild(new_li2);

});
