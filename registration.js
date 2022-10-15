// REGISTRATION
const registrationForm = {
  email: document.getElementById("emailRegistration"),
  password: document.getElementById("passwordRegistration"),
  name: document.getElementById("nameRegistration"),
  age: document.getElementById("ageRegistration"),
  submit: document.getElementById("submitRegistration"),
  // messages: document.getElementById("registrationForm-messages"),
};
let registrationButton = registrationForm.submit.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    const registration =
      "https://api-nodejs-todolist.herokuapp.com/user/register";

    fetch(registration, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registrationForm.email.value,
        password: registrationForm.password.value,
        name: registrationForm.name.value,
        age: registrationForm.age.value,
      }),
    })
      .then((response) => {
        console.log(response);
        console.log(response.ok);
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.token);
        // code here //
        if (data.token === undefined) {
          alert(data); /*displays error message*/
        } else {
          window.open(
            "index.html"
          ); /*opens the target page while Id & password matches*/
        }
      });
  }
);
