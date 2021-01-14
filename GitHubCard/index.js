import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/elCarlosSantiago")
  .then((res) => {
    const gitData = res.data;
    const newGitCard = gitCardMaker({
      avatar_url: gitData.avatar_url,
      name: gitData.name,
      login: gitData.login,
      location: gitData.location,
      html_url: gitData.html_url,
      followers: gitData.followers,
      following: gitData.following,
      bio: gitData.bio,
    });
    cards.appendChild(newGitCard);
  })
  .catch((err) => {
    debugger;
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

function gitCardMaker({
  avatar_url,
  name,
  login,
  location,
  html_url,
  followers,
  following,
  bio,
}) {
  // Instantiate the elements
  const gitCard = document.createElement("div");
  const avatar = document.createElement("img");
  const cardInfo = document.createElement("div");
  const gitName = document.createElement("h3");
  const username = document.createElement("p");
  const locationP = document.createElement("p");
  const profile = document.createElement("p");
  const gitLink = document.createElement("a");
  const gitFollowers = document.createElement("p");
  const gitFollowing = document.createElement("p");
  const gitBio = document.createElement("p");
  // Set class names, attributes & text

  gitCard.classList.add("card");
  avatar.src = avatar_url;
  cardInfo.classList.add("card-info");
  gitName.classList.add("name");
  gitName.textContent = name;
  username.classList.add("username");
  username.textContent = login;
  locationP.textContent = location;
  profile.textContent = "Profile: ";
  gitLink.href = html_url;
  gitLink.textContent = html_url;
  gitFollowers.textContent = `Followers: ${followers}`;
  gitFollowing.textContent = `Following: ${following}`;
  gitBio.textContent = `Bio: ${bio}`;
  // creating hierarchy
  gitCard.appendChild(avatar);
  gitCard.appendChild(cardInfo);
  cardInfo.appendChild(gitName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locationP);
  cardInfo.appendChild(profile);
  profile.appendChild(gitLink);
  cardInfo.appendChild(gitFollowers);
  cardInfo.appendChild(gitFollowing);
  cardInfo.appendChild(gitBio);
  console.log(gitCard);
  return gitCard;
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
