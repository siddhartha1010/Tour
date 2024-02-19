/* eslint-disable */
import "@babel/polyfill";
import { login, logout, signup } from "./login";
import {updateSettings} from "./updateSettings";
import {reviews}from "./review";

// DOM ELEMENTS
const loginForm = document.querySelector(".form--login");
const logOutBtn = document.querySelector(".nav__el--logout");
const signupForm = document.querySelector(".form--signup");
const userDataForm=document.querySelector(".form-user-data")  ;
const reviewForm=document.querySelector(".review-form");

// DELEGATION

if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
    
  });

if (logOutBtn) logOutBtn.addEventListener("click", logout);
if (signupForm)
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    signup(name, email, password, passwordConfirm);
  });

  // if (userDataForm)
  // userDataForm.addEventListener('submit', e => {
  //   e.preventDefault();
  //   const form = new FormData();
  //   form.append('name', document.getElementById('name').value);
  //   form.append('email', document.getElementById('email').value);
  //   // form.append('photo', document.getElementById('photo').files[0]);

  //   updateSettings(form, 'data');
  // });

    if (userDataForm)
    userDataForm.addEventListener('submit', e => {
    e.preventDefault()
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    // const name=document.getElementById('name').value;
    // const email=document.getElementById('email').value;
    updateSettings(form);
  });

//   if(userDataForm)
//     userDataForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     updateSettings(name,email)
// });





  if(reviewForm)
  reviewForm.addEventListener('submit', e => {
    e.preventDefault()
    const review=document.getElementById('review').value;
    reviews(review);
    
  })