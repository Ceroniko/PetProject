document.addEventListener("DOMContentLoaded", function () {
  // this function runs when the DOM is ready, i.e. when the document has been parsed

  // all js code should go below this line
  const clickHandler = () => {
    document.querySelector(".header-menu__burger").classList.toggle("active");
    document.querySelector(".header-menu__list").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
  };

  const headerItemClickHandler = (event) => {
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header-menu__list").classList.remove("active");
    document.querySelector(".header-menu__burger").classList.remove("active");

    event.preventDefault();
    let source = event.target.innerHTML;
    let dest = document
      .querySelector("." + source.toLowerCase())
      .getBoundingClientRect().top;

    window.scrollTo({
      top: dest,
      behavior: "smooth",
    });
  };

  const footerItemClickHandler = (event) => {
    event.preventDefault();
    let source = event.target.innerHTML;
    let dest = document
      .querySelector("." + source.toLowerCase())
      .getBoundingClientRect();
    dest = dest.top + pageYOffset;
    window.scrollTo({
      top: dest,
      behavior: "smooth",
    });
  };

  const contactClickHandler = async (event) => {
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header-menu__list").classList.remove("active");
    document.querySelector(".header-menu__burger").classList.remove("active");
    event.preventDefault();
    let dest = document.querySelector(".footer-form").getBoundingClientRect()
      .top;
    window.scrollTo({
      top: dest,
      behavior: "smooth",
    });
    setTimeout(() => document.forms[0].elements[0].focus(), 1000);
  };

  const logoClickHandler = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let email = document.forms[0].elements[0].value;
    let message = document.forms[0].elements[1].value;
    let user = {
      email,
      message,
    };
    fetch("https://examle.com/message", {
      method: "POST",
      body: JSON.stringify(user),
    }).then((response) => console.log(response.json()));
  };

  document
    .querySelector(".header-menu__burger")
    .addEventListener("click", clickHandler);

  for (let node of document.querySelectorAll(".header-menu__item")) {
    node.addEventListener("click", headerItemClickHandler);
  }

  document
    .querySelector(".header-menu__contact")
    .addEventListener("click", contactClickHandler);

  for (let node of document.querySelectorAll(".footer-menu__item")) {
    node.addEventListener("click", footerItemClickHandler);
  }

  document.forms[0].addEventListener("submit", submitHandler);

  document
    .querySelector(".footer-body__logo")
    .addEventListener("click", logoClickHandler);
});
