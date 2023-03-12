function member_apply(applicant) {
  let member = document.querySelector("h3");
  member.innerHTML = applicant;
}

function click_button() {
  alert("Welcome!");
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let apply = prompt("Would you like to apply to our free cooking courses?👩‍🍳");
  apply.trim();
  apply.toLocaleLowerCase();

  if (apply === "yes") {
    member_apply(`${name}, Now you are a member!🥳`);
    alert(`${name}, We'll be in touch!📧`);
  } else {
    alert("Thank you for visiting us!");
  }
}

let learn_button = document.querySelector("button");
learn_button.addEventListener("click", click_button);
