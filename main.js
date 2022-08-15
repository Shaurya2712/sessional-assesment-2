var typedAbout = new Typed(".auto-type-about", {
  strings: ["BLOG SPOT", "Your Place to Write "],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  showCursor: false,
});

// fetching api starts------------------------------------------------

// var btn = document.getElementById("btn").addEventListener("click", getPost);
// var con = 0;
// var div = document.getElementById("cardDiv");

// function getPost() {
//   fetch(
//     "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((post) => {
//       for (let index = 0; index < 10; index++) {
//         div.innerHTML += `
//             <div class=" col-12 my-3 mx-auto bg-transparent">
//                 <div class="card-body border border-3 border-dark">
//                 <h3 class="card-title fw-normal">UserId: ${post[con].userId} </h3>
//                 <h3 class="card-title fw-normal ">Id: ${post[con].id} </h3>
//                 <h3 class="card-title">Title: ${post[con].title}</h3>
//                 <p class="card-text fst-italic fs-3">${post[con].body}</p>
//             </div>

//             `;
//         con = con + 1;
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

//preloader--------------------
// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () => {
//   setTimeout(loader.style.display="none", 2000);
// });

//GET api using XML

let fetch = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", fetchhandler);

function fetchhandler() {
  console.log("you clicked fetch button");

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);

      let list = document.getElementById("cardDiv");
      str = " ";
      for (key in obj) {
        str += `
        <div class=" col-12 my-3 mx-auto bg-transparent">
                 <div class="card-body border border-3 border-dark">
                 <h3 class="card-title fw-normal">UserId: ${obj[key].userId} </h3>
                 <h3 class="card-title fw-normal ">Id: ${obj[key].id} </h3>
                 <h3 class="card-title">Title: ${obj[key].title}</h3>
                 <p class="card-text fst-italic fs-3">${obj[key].body}</p>
             </div>
`;
      }
      list.innerHTML = str;
    } else {
      console.log("some error occured");
    }
  };
  xhr.send();

  console.log("you should see data");
}
