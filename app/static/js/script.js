
loaded = false;
let n = 0;
let x = 0;

function mygroups() {
  let table = '<table><tr> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library1.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library2.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library3.jpg><div class=caption>Library 1</div></div></a></td>\
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library4.jpg><div class=caption>Library 1</div></div></a></td> \
    </tr><tr> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place1.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place2.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place3.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/school1.jpg><div class=caption>See More!</div></div></a></td> \
    </tr></table>'
  document.getElementById('dash').innerHTML =
      '<center><h1>My Groups</h1>' + table + '</center>';
}

async function groupsuggestions() {
  loaded = false;
  getCurrentLocationFromIP();
  while (!loaded) {
    await sleep(100);
  }
  var location = document.getElementById('user_district').innerText;
  console.log(location);
  let table = '<table><tr> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library1.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library2.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library3.jpg><div class=caption>Library 1</div></div></a></td>\
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library4.jpg><div class=caption>Library 1</div></div></a></td> \
    </tr><tr> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place1.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place2.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place3.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/school1.jpg><div class=caption>See More!</div></div></a></td> \
    </tr></table>'
  document.getElementById('dash').innerHTML = '<center><h1>Group Suggestions [' +
      location + ']</h1>' + table + '</center>';
}

function myevents() {
  let table = '<table><tr> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library1.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library2.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library3.jpg><div class=caption>Library 1</div></div></a></td>\
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library4.jpg><div class=caption>Library 1</div></div></a></td> \
    </tr><tr> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place1.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place2.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place3.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/school1.jpg><div class=caption>See More</div></div></a></td> \
    </tr></table>'
  document.getElementById('dash').innerHTML =
      '<center><h1>My Events</h1>' + table + '</center>';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function eventsuggestions() {
  loaded = false;
  // getCurrentLocationFromIP('210.189.86.128');
  getCurrentLocationFromIP('8.8.8.8');
  while (!loaded) {
    await sleep(100);
  }
  var location = document.getElementById('user_district').innerText;
  console.log(location);
  let table = '<table><tr> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library1.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library2.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library3.jpg><div class=caption>Library 1</div></div></a></td>\
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/library4.jpg><div class=caption>Library 1</div></div></a></td> \
    </tr><tr> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place1.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place2.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/place3.jpg><div class=caption>Library 1</div></div></a></td> \
    <td><a href=library/pakurangalibrary><div class=tablecontainer><img class=imageHolder src=../pics/school1.jpg><div class=caption>See More</div></div></a></td> \
    </tr></table>'
  document.getElementById('dash').innerHTML =
      '<center><h1>Event Suggestions [' + location + ']</h1>' + table +
      '</center>';
}

function upcoming() {
  let table = '<table><tr> \
    <td><div class=suggested></td> \
    <td><div class=suggested></td> \
    <td><div class=suggested></td> \
    <td><div class=suggested></td> \
    </tr></table>'
  document.getElementById('pakurangalibrary').innerHTML =
      '<center><h1>Sign up for some events!</h1>' + table + '</center>';
}

function suggested() {
  let table = '<table><tr> \
  <td><div class=suggested><h2>Robotics Workshop</h2>When: 5 May 2019, 10:30 - 12:30 <br><br> Organiser: Robogals, a group from the University of Auckland run by engineering students. <br><br> Description: To introduce children to the idea of Engineering. </td>\
  <td><div class=suggested><h2>Basics of Javascript</h2>When: 16 May 2019, 10:30 - 12:30 <br><br> Organiser: AUCS, a group of Computer Science students from the University of Auckland. <br><br> Description: To introduce children Javascript. <br><br></td> \
  </tr></table>'
  document.getElementById('pakurangalibrary').innerHTML =
      '<center><h1>Vote for your favourite events!</h1>' + table + '</center>';
}

function suggestions() {
  let table = '<table><tr> \
    <td><div class=suggested><h2>Basics of Webdesign</h2><br><br>Idea: A workshop which covers the basics of css and html <br><br> <button onclick="increment()">Vote</button><div id=num>0</div></td> \
    <td><div class=suggested><h2>Rust</h2><br><br>Idea: A workshop to teach students and children how to use rust <br><br> <button onclick="increment1()">Vote</button><div id=num1>0</div></td> \
    </tr></table>'
  document.getElementById('eventspage').innerHTML =
      '<center><br><h2>Vote for you favourite events!</h2>' + table + '<br></center>'; 
}

function increment() {
  n += 1;
  document.getElementById('num').innerHTML = n; 
}

function increment1() {
  x += 1;
  document.getElementById('num1').innerHTML = x; 
}

function moremyevents() {
  let table = '<table><tr> \
    <td><div class=suggested><h2>Robotics Workshop</h2>When: 5 May 2019, 10:30 - 12:30 <br><br> Organiser: Robogals, a group from the University of Auckland run by engineering students. <br><br> Description: To introduce children to the idea of Engineering. </td>\
    <td><div class=suggested><h2>Basics of Javascript</h2>When: 16 May 2019, 10:30 - 12:30 <br><br> Organiser: AUCS, a group of Computer Science students from the University of Auckland. <br><br> Description: To introduce children Javascript. <br><br></td> \
    </tr></table>'

  document.getElementById('eventspage').innerHTML =
      '<center><br><h2>You are currently registered for these events!</h2>' + table + '<br></center>';
}

function suggestedforyou() {
  let table = '<table><tr> \
    <td><div class=suggested><h2>Python101 Workshop</h2>Where: Campbell Library<br><br> When: 5 May 2019, 10:30 - 12:30 <br><br> Organiser: A group of students from CalTech will are holding an event to teach children how to code. </td>\
    <td><div class=suggested><h2>Basics of Scratch</h2>Where: Santa Clara County High School<br><br> When: 16 May 2019, 10:30 - 12:30 <br><br> Organiser: Code club will be holding an event teaching children between the ages of 5 - 8, how to use scratch.<br><br></td> \
    </tr></table>'

  document.getElementById('eventspage').innerHTML = 
    '<center><br><h2>Events in your local area!</h2>' + table + '<br></center>';
}
function getCurrentLocationFromIP(ip = null) {
  var API_KEY = '03323b4d7a3740f1b37d65b5f1c0c17d';
  var request = new XMLHttpRequest();
  if (ip != null) {
    request.open(
        'GET',
        'https://api.ipgeolocation.io/ipgeo?apiKey=' + API_KEY + '&ip=' + ip,
        true);
  } else {
    request.open(
        'GET', 'https://api.ipgeolocation.io/ipgeo?apiKey=' + API_KEY, true);
  }
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      var dict = data;
      Object.keys(dict).forEach(function(key) {
        document.getElementById('user_district').innerHTML = dict['district'];
        loaded = true;
      });
    }
  };
  request.send();
}
