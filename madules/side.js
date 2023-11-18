const Side = async () => {
    let data = await fetch("https://behnoushtaj.github.io/json/db.json");
    let res = await data.json();
    let side = `
      <h1>${res.title}</h1>
      <h3>${res.h3}</h3>
      <p>${res.content}</p>
      <div><a href="#">${res.lnktext}</a></div>
    `;
    document.querySelector(".side-text").innerHTML = side;
  };
  
  export default Side;
