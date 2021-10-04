const welcomeMsgDOM = document.querySelector('.welcomeMsg');
const siteCountDOM = document.querySelector('.siteCounter');
//Local Storage
///User name
let username = localStorage.getItem("username");
if(!username){
    username = prompt("Please enter username");
    localStorage.setItem("username", username);
};
welcomeMsgDOM.insertAdjacentHTML('afterbegin', `
<p class="userName">Hello, <strong>${username}</strong></p>
`);

///User Visits
let visitCount = localStorage.getItem("pageVisit");
localStorage.setItem("pageVisit", 1);
let visitCounter = Number(visitCount) + 1;
localStorage.setItem("pageVisit", visitCounter);
siteCountDOM.insertAdjacentHTML('afterbegin', `
<p class="count">You have visited: ${visitCount} times</p>
`)