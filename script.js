// script.js 

let api =
    "https://api.github.com/users/";

let fetch =
    document.createElement("script");
fetch.src =
    `https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js`;

fetch.integrity =
    `ha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==`;

fetch.crossOrigin = "anonymous";
document.head.appendChild(fetch);
let main =
    document.getElementById("main");
let inputForm =
    document.getElementById("userInput");
let inputBox =
    document.getElementById("inputBox");
const userGetFunction = (name) => {
    axios(api + name)
        .then((response) => {
            userCard(response.data);
            repoGetFunction(name);
        })
        .catch((err) => {
            if (
                err.response.status ==
                404) {
                errorFunction(
                    "No profile with this username");
            }
        });
}
const repoGetFunction = (name) => {
    axios(
        api +
        name +
        "/repos?sort=created")
        .then((response) => {
            repoCardFunction(
                response.data);
        })
        .catch((err) => {
            errorFunction(
                "Problem fetching repos");
        });
}
const userCard = (user) => {
    let id = user.name || user.login;
    let info = user.bio
        ? `<p>${user.bio}</p>` : "";
    let cardElement = ` 
<div class="card"> 
<div> 
<img src="${user.avatar_url}"
	alt="${user.name}"
	class="avatar"> 
</div> 

<div class="user-info"> 
<h2>${id}</h2>${info}<ul> 
<li>${user.followers} <strong>Followers</strong></li>&nbsp;
<li>${user.following} <strong>Following</strong></li>&nbsp;
<li>${user.public_repos} <strong>Repos</strong></li>&nbsp;
</ul> 
<div id="repos"></div> 
</div> 
</div>`;
    main.innerHTML = cardElement
}

const errorFunction = (error) => {
    let cardHTML = ` 
<div class="card"> 
<h1>${error}</h1> 
</div>`;
    main.innerHTML = cardHTML
}

const repoCardFunction = (repos) => {
    let reposElement =
        document.getElementById(
            "repos");
    for (let i = 0; i < 5 && i < repos.length; i++) {
        let repo = repos[i];
        let repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;
        reposElement.appendChild(repoEl);
    }
}
inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = inputBox.value;
    if (user) {
        userGetFunction(user);
        inputBox.value = "";
    }
});
// 
$(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('.sticky-top').addClass('sticky-nav').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('sticky-nav').css('top', '-100px');
    }
});
function saveAndPrint() {
    const inputBox = document.getElementById('inputBox').value;
    // localStorage.setItem('enterWord', userInput);
    const entryCount = localStorage.getItem('Baar') || 0;
    const newKey = `${entryCount}`;
    localStorage.setItem(newKey, inputBox);
    localStorage.setItem('Baar', parseInt(entryCount) + 1)
    printLocalStorage();

}
