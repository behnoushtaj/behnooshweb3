const Recepe = async () => {
    let data = await fetch("https://behnoushtaj.github.io/json/db.json");
    let res = await data.json();
    let recepe = `
   
    <span>${res.txt1} </span>
        <span> ${res.txt2}</span>
   
    `;
    document.querySelector(".recipe").innerHTML = recepe;
  };


  export default Recepe;