const siteCountDOM = document.querySelector('.siteCounter');

///User Visits
let visitCount = localStorage.getItem("pageVisit");
localStorage.setItem("pageVisit", 1);
let visitCounter = Number(visitCount) + 1;
localStorage.setItem("pageVisit", visitCounter);
siteCountDOM.insertAdjacentHTML('afterbegin', `
<p class="count">You have visited: ${visitCount} times</p>
`)