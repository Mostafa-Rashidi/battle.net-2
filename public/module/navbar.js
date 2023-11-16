const navbar = async () => {
  let data = await fetch("https://mostafa-rashidi.github.io/json-battle/db.json");
  let res = await data.json();
  let navMenu = `
    <input type="radio" name="navigation" id="open" />
    <label for="open">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <input type="radio" name="navigation" id="close" />
    <label for="close"> &times; </label>
    <nav>
      <div class="log-2">
        <a href="${res.navbar[0].nav[0].log2.link}" class="logA">
          <i class="fa-brands fa-battle-net"></i>
          <h1>${res.navbar[0].nav[0].log2.name}</h1>
        </a>
      </div>
      <div class="menu">
       <ul>
       ${ res.navbar[0].nav[1].menu.map((elem) => {
        if (elem.dropdown.length !== 0) {
            return `
        <li>
                 <a href="${elem.link}">${elem.name} <span>&#8964;</span></a>
                 <ul>
                 ${elem.dropdown
                   .map((menu) => {
                     return `<li>
                    <a href="${menu.link}"
                      >${menu.title}
                      <span>${menu.content} </span>
                    </a>
                  </li>`;
                   }).join("" )
                   }</ul>    
        `;
        } else {
          return `<li><a href="${elem.link}">${elem.name}</a></li>`;
        }
      }) }
      </ul>
  </div>
  <div class="search">
      <i class="fa-light fa-magnifying-glass"></i>
      <input type="text" placeholder="search" />
    </div>
    <div class="balance">
      <ul>
        <li>
          <a href="${res.navbar[0].nav[2].balance[0].link}"> ${res.navbar[0].nav[2].balance[0].name}</a>
          <ul>
          ${res.navbar[0].nav[2].balance[0].dropdown.map(elem=>{
            return`<li><a href="${elem.link}">${elem.title}</a></li>`
          }).join("")}
         </ul>
        </li>
      </ul>
    </div>
  
  </nav>
  
      `;
  document.querySelector(".navbar").innerHTML = navMenu;
};
export default navbar;
