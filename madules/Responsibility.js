const Responsibility = async () => {
    let data = await fetch("https://behnoushtaj.github.io/json/db.json");
    let res = await data.json();
    let responsibility = `
   
    <div class="res"> ${res.txt1}</div>
    <div class="text1">
      <span> ${res.txt2}</span>
      <span>  ${res.txt3}</span>
    </div>
    <div class="text2"> ${res.txt4} </div>

    <div class="img">
      <img src=" ${res.img}" alt="" />
    </div>
    <div class="line"></div>
    <div class="text-res">
      <h3> ${res.title}</h3>
      <p>
      ${res.content}
      </p>
      <a href="#"> ${res.link} </a>
    </div>
   
    `;
    document.querySelector(".Responsibility").innerHTML = responsibility;
  };


  export default Responsibility;