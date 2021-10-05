const welcomeMsgDOM = document.querySelector('.welcomeMsg');


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


