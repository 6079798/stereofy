import Pristine from "pristinejs/dist/pristine.min.js";
import Toastify from "toastify-js";

const toastConfig = {
  duration: 4000,
  gravity: "top",
  position: "right",
  stopOnFocus: true
};

const pristineConfig = {
  classTo: "form__group",
  errorTextParent: "form__group",
  errorClass: "form__group--danger",
  successClass: "form__group--success",
  errorTextTag: "span",
  errorTextClass: "form__error"
};

Pristine.addValidator(
  "name",
  value =>
    /^[a-zA-Zа-яА-Я]+(([',. -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/gi.test(
      value.trim()
    ),
  "Invalid name",
  2,
  false
);

const successMsg = () => {
  Toastify(
    Object.assign(toastConfig, {
      text: "Thank you! Your feedback is greatly appreciated.",
      className: "toastify--success"
    })
  ).showToast();
};

const errorMsg = () => {
  Toastify(
    Object.assign(toastConfig, {
      text: `Error! Please, try again later!`,
      className: "toastify--error"
    })
  ).showToast();
};

const disableSubmitButton = btn => {
  btn.classList.add("form__submit--disabled");
  btn.setAttribute("data-original", btn.textContent);
  btn.textContent = "Sending ...";
};

const enableSubmitButton = btn => {
  btn.classList.remove("form__submit--disabled");
  btn.textContent = btn.getAttribute("data-original");
  btn.removeAttribute("data-original");
};

const contactForm = document.forms[0];
const pristine = new Pristine(contactForm, pristineConfig);

const doSubmit = event => {
  event.preventDefault();
  const { target: form } = event;
  const submitBtn = form.querySelector("button[type=submit]");

  const isValid = pristine.validate();
  if (!submitBtn.hasAttribute("data-original") && isValid) {
    const req = new XMLHttpRequest();
    req.open("POST", "https://echo.htmlacademy.ru", true);
    req.send(new FormData(form));
    req.onreadystatechange = () => {
      if (req.readyState !== 4) return;
      if (req.status !== 200) {
        errorMsg();
        enableSubmitButton(submitBtn);
      } else {
        console.log(req.responseText);
        successMsg();
        enableSubmitButton(submitBtn);
        form.reset();
      }
    };
    disableSubmitButton(submitBtn);
  }
};

document.addEventListener("submit", doSubmit);
