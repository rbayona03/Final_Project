const welcomeMsgDOM = document.querySelector('.welcomeMsg');

const userName = prompt('Welcome what is your name?');

function createUserCookies(userName){
    document.cookie = userName;
}

console.log(userName);

//function checkUserCookie()