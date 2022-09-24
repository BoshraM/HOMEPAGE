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
prettify.toHTML(run(), console);
<html lang=en>
<title>personal page</title>

<header class="c-site-header" >
  <a href="mailto:bosh1989ra@gmail.com">contact me</a>
</header>


  <h1 id="boshra" class="c-site-head-1">I am boshra </h1>

<main>
  <h2 class="c-site-head"> About me</h2>
  <ul>
    <li> I am 32 year old and I am kurdish </li>
    <li> I imigrated to UK in 2020</li>
    <li> I live in colchester with my husband and my son</li>
    <li> I come from
      <a href="https://www.google.com/search?q=paweh&client=ubuntu&hs=k7K&channel=fs&sxsrf=ALiCzsZmJ4lzioAQaWoUu0iHlCaEdBAPww:1654539013776&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjUnruRtpn4AhWIZsAKHZwVB2wQ_AUoAnoECAIQBA&biw=1846&bih=968&dpr=1">Paweh</a>,where is a small town in East of Kurdestan
    </li>
  </ul>
  <img id="home-town" src="https://i.pinimg.com/736x/ef/5a/0f/ef5a0fe3d2f97639b8434adfea3b5287--iran.jpg" alt="paweh">
  <nav aria-label="Main Site Links.">
    <a href="https://www.google.com/search?q=paweh&client=ubuntu&hs=k7K&channel=fs&sxsrf=ALiCzsZmJ4lzioAQaWoUu0iHlCaEdBAPww:1654539013776&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjUnruRtpn4AhWIZsAKHZwVB2wQ_AUoAnoECAIQBA&biw=1846&bih=968&dpr=1">you can have a look of where I am from</a>
  </nav>
  <h2 class="c-site-head"> my intreset</h2>
  <ul id="about-me">
    <li> I enjoy reading books and watching movies</li>
    <li> I enjoy spending time in nature</li>
  </ul>

  <h2 class="c-site-head">My study and job</h2>
  <ul>
    <li>I studied math and physic in highschool</li>
    <li>I studied uraban palning in university of kurdistan</li>
    <li>I have been worked as a GIS and AutoCad user for 1 year</li>
    <li>I had clothes shop for 3 years </li>
  </ul>
  <h2 class="c-site-head"> What I am doing know</h2>
  <ul>
    <li>I am a full time english student in
      <a href="https://www.ilcentres.com/">ILC</a>
    </li>
    <li> I am trying to attend softwore develper course by
      <a href="https://codeyourfuture.io/itc">CODEYOURFUTURE</a>
    </li>
  </ul>
  <h2 class="c-site-head">My advise for you</h2>
  <p> If you are searching for learning a good skill and enjoy it you can look this vidio</p>
  <div>
    <iframe class="iframe" src="https://player.vimeo.com/video/638708847?h=bc21f9c7ae&title=0&byline=0&portrait=0"></iframe>
  </div>
</main>

<footer class="c-site-footer">
  <a href="mailto:bosh1989ra@gmail.com">contact me</a>
</footer>

<!-- Your test console.
Don't delete!-->
<aside id="tests" aria-label="Test Readout." aria-live="polite" style="overflow:auto">
</aside>
