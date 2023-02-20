const formEl = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(`Заповніть всі поля!`);
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

formEl.addEventListener('submit', handleSubmit);