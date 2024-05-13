// XML resquest is called = Ajax
const requestUrl = "https://api.github.com/users/khansrk956";
const xmlh = new XMLHttpRequest();
xmlh.open("GET", requestUrl);
let data;
xmlh.onreadystatechange = function () {
  //   console.log(xmlh.readyState);

  if (xmlh.readyState === 4 && xmlh.status === 200) {
    // console.log(this.responseText)
    data = JSON.parse(this.responseText); // it convert string into object.
    console.log(data.following);
    if (data && data.name && data.following && data.following !== undefined) {
      updateUserInfo(data);
    } else {
      console.error("Error: Unexpected data structure received from API.");
    }
  }
}; // current context par we use this keyword
xmlh.send();

function updateUserInfo(deta) {
  //console.log(deta);
  const userImage = document.querySelector(".user-image");
  const userName = document.querySelector(".user-name");
  const userFollowing = document.querySelector(".userFollowing");
  const userFollower = document.querySelector(".user-follower");

  userImage.src = deta.avatar_url;
  userName.textContent = `Name: ${deta.name}`;
  userFollowing.textContent = `Following: ${data.following}`;
  userFollower.textContent = `Followers: ${deta.followers}`;
}
