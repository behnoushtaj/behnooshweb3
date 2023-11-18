const TEA = async () => {
    let data = await fetch("https://behnoushtaj.github.io/json/db.json");
    let res = await data.json();
    let tea = `
   
    <img src="${res.img}" />
   
    `;
    document.querySelector(".teapic").innerHTML = tea;
  };


  export default TEA;