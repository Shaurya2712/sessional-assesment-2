// document.querySelector("#search").addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();

//   const searchValue = document.querySelector("#my-text").value;

//   //   const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBL7tmoBcFl44584VA4eC7RrVu_izPyyLM&part=snippet&q=${searchValue}&maxResults=50`;
//   const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09&q=${searchValue}`;

//   xhr.open("GET", url);

//   xhr.onreadystatechange = () => {
//     if (xhr.status === 200 && xhr.readyState === 4) {
//       const response = JSON.parse(xhr.responseText);
//       console.log(response);

//       let template = "";
//       for (let i = 0; i < response.items.length; i++) {
//         template += `
//                     <div class="video-items" style="width: 20%; margin: 1.2em;">
//                         <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
//                             <img style="width: 100%" src="${response.items[i].snippet.thumbnails.high.url}" />
//                         </a>
//                         <h5>${response.items[i].snippet.title}</h5>
//                         <p style="color: gray">${response.items[i].snippet.description}</p>
//                     </div>
//                 `;
//       }

//       document.querySelector("#my-container").innerHTML = template;
//     }
//   };

//   xhr.send();
// });
var typedAbout = new Typed(".auto-type-about", {
  strings: ["BLOG SPOT", "Your Place to Write "],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  showCursor: false,
});
