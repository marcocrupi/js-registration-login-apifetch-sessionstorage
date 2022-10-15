// LOGIN
const formLogin = {
  email: document.getElementById("emailLogin"),
  password: document.getElementById("passwordLogin"),
  submit: document.getElementById("submitLogin"),
};
let loginButton = formLogin.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const login = "https://api-nodejs-todolist.herokuapp.com/user/login";

  fetch(login, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formLogin.email.value,
      password: formLogin.password.value,
    }),
  })
    .then((response) => {
      console.log(response);
      console.log(response.ok);
      console.log(response.status);
      if (response.status === 400) {
        alert("Error Password or Username");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.token);
      sessionStorage.setItem("userToken", data.token);
      //   console.log(data.user.email);
      //   console.log(JSON.stringify(formLogin.email.value));
      //   console.log(JSON.stringify(data.user.email));

      window.open(
        "profile.html"
      ); /*opens the target page while Id & password matches*/
    })
    .catch((err) => {
      alert("Error Password or Username");
      console.log(err);
    });
});
