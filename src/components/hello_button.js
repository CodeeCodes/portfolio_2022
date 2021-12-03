export default function Button() {
  // const getInTouch = () => {
  //   let button = document.querySelector(".button_div_press");
  //   let newWindow = document.querySelector(".App");
  //   newWindow.classList.toggle("blur");
  //   button.classList.toggle("bright");
  //   console.log(newWindow);
  //   if (newWindow.classList === "App blur") {
  //     console.log("its blur");
  //   } else {
  //     // Create a break line element
  //     let br = document.createElement("br");

  //     // Create form
  //     let form = document.createElement("form");
  //     form.classList.add("form");
  //     form.setAttribute("method", "post");
  //     form.setAttribute("action", "submit");

  //     // Create an input element for Full Name
  //     let name = document.createElement("input");
  //     name.classList.add("form_name");
  //     name.setAttribute("type", "text");
  //     name.setAttribute("name", "FullName");
  //     name.setAttribute("placeholder", "Full Name");

  //     // Create an input element for date of birth
  //     let phone = document.createElement("input");
  //     phone.classList.add("form_phone");
  //     phone.setAttribute("type", "text");
  //     phone.setAttribute("name", "phone");
  //     phone.setAttribute("placeholder", "Phone Number");

  //     // Create an input element for emailID
  //     let email = document.createElement("input");
  //     email.classList.add("form_email");
  //     email.setAttribute("type", "text");
  //     email.setAttribute("name", "email");
  //     email.setAttribute("placeholder", "E-Mail");

  //     // create a submit button
  //     let s = document.createElement("input");
  //     s.setAttribute("type", "submit");
  //     s.setAttribute("value", { name });

  //     // Append the full name input to the form
  //     form.appendChild(name);

  //     // Inserting a line break
  //     form.appendChild(br.cloneNode());

  //     // Append the phone to the form
  //     form.appendChild(phone);
  //     form.appendChild(br.cloneNode());

  //     // Append the email to the form
  //     form.appendChild(email);
  //     form.appendChild(br.cloneNode());

  //     // Append the submit button to the form
  //     form.appendChild(s);
  //     document.getElementsByTagName("body")[0].appendChild(form);
  //     console.log(form);
  //   }
  return (
    <div className="button_div">
      <button className="button_div_press">
        Let's Work Together{" "}
        <span role="img" aria-label="emoji">
          {" "}
          🙌
        </span>
      </button>
    </div>
  );
}
