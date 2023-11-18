const Rokn1 = async () => {
    let data = await fetch("https://behnoushtaj.github.io/json/db.json");
    let res = await data.json();
    let rokn1 = `
    <div class="ro1">${res.title} </div>
            <p>
            ${res.content} 
            </p>
            <div class="links">
              <a href="#"> ${res.lnk1} </a>
              <a href="#">  ${res.lnk2} </a>
            </div>
    `;
    document.querySelector(".first-part").innerHTML = rokn1;
  };

 
  
  export default Rokn1;