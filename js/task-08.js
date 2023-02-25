const formEl = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert(`Заповніть всі поля!`);
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  
  console.log(formData);
  event.currentTarget.reset();
}

formEl.addEventListener('submit', handleSubmit);