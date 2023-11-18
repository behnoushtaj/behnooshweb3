const Teaarticle = async () => {
    let data = await fetch("https://behnoushtaj.github.io/json/db.json");
    let res = await data.json();
    let teaarticle = `

   <div class="ro1">${res.title}</div>
            <p>
            ${res.content} 
            </p>
            <div class="links">
              <a href="#"> ${res.lnk1}</a>
            </div> 
   
    `;
    document.querySelector(".teap").innerHTML = teaarticle;
  };

 
  
  export default Teaarticle;