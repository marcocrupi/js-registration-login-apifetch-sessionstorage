const token = sessionStorage.getItem("userToken");
console.log("token in session storage:", token);

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    sessionStorage.removeItem("userToken");
})

const user = "https://api-nodejs-todolist.herokuapp.com/user/me";

function getUser() {
  fetch(user, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const divParent = document.getElementById("divParent");

      let email = document.createElement("p");
      email.innerHTML = `Email: ${data.email}`;
      divParent.appendChild(email);

      let name = document.createElement("p");
      name.innerHTML = `Name: ${data.name}`;
      divParent.appendChild(name);

      let age = document.createElement("p");
      age.innerHTML = `Età: ${data.age}`;
      divParent.appendChild(age);
    })
    .catch(() => console.log("errore"));
}

getUser();
