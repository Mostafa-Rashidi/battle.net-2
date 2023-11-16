const Header = async () => {
  let data = await fetch(
    "https://mostafa-rashidi.github.io/json-battle/db.json"
  );
  let res = await data.json();
  let header = `
 <div class="top">
          <div class="logo">
            <a href=${res.header[0].top[0].logo.link}>
              <i class="fa-brands fa-battle-net"></i>
              <h1>${res.header[0].top[0].logo.name}</h1>
            </a>
          </div>
          <div class="login">
            <a href="${res.header[0].top[1].login[0].link}" id="Download">
              <i class="fa-regular fa-down-to-bracket"></i>
              <h2>${res.header[0].top[1].login[0].name}</h2>
            </a>
            <a href="${res.header[0].top[1].login[1].link}">
              <i class="fa-duotone fa-circle-question"></i>
              <h2>${res.header[0].top[1].login[1].name}</h2>
            </a>
            <input type="radio" name="navigation" id="open-1" />
            <label for="open-1">&#129333;</label>
            <input type="radio" name="navigation" id="close-1" />
            <label for="close-1"> &times; </label>
            <ul class="ulaccount">
              <li>
                <a href="${res.header[0].top[1].login[2].ulaccount[0].name}" class="Aaccount">
                  <i class="fa-regular fa-circle-user"></i> ${res.header[0].top[1].login[2].ulaccount[0].name}
                  </a>
                <div class="log-3">
                  <a href="${res.header[0].top[1].login[2].ulaccount[1].log3.link}" class="logB">
                    <i class="fa-brands fa-battle-net"></i>
                    <h1>${res.header[0].top[1].login[2].ulaccount[1].log3.name}</h1>
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="${res.header[0].top[1].login[2].ulaccount[2].ulli[0].lilogin.link}" class="login">${res.header[0].top[1].login[2].ulaccount[2].ulli[0].lilogin.name}</a>
                  </li>
                  <li>
                    <a href="${res.header[0].top[1].login[2].ulaccount[2].ulli[1].link}">
                      <i class="fa-duotone fa-user-gear"></i>
                      ${res.header[0].top[1].login[2].ulaccount[2].ulli[1].name}</a
                    >
                  </li>
                  <li>
                    <a href="${res.header[0].top[1].login[2].ulaccount[2].ulli[2].link}"><i class="fa-thin fa-heart"></i> ${res.header[0].top[1].login[2].ulaccount[2].ulli[2].name}</a>
                  </li>
                  <li>
                    <a href="${res.header[0].top[1].login[2].ulaccount[2].ulli[3].link}"
                      ><i class="fa-regular fa-barcode"></i> ${res.header[0].top[1].login[2].ulaccount[2].ulli[3].name}</a
                    >
                  </li>
                  <li>
                    <a href="${res.header[0].top[1].login[2].ulaccount[2].ulli[4].link}"
                      ><i class="fa-light fa-axe-battle fa-rotate-90"></i>
                      ${res.header[0].top[1].login[2].ulaccount[2].ulli[4].name}</a
                    >
                  </li>
                  <li class="ulAaccount">
                    <a href="${res.header[0].top[1].login[2].ulaccount[2].ulli[5].ulAaccount.link}" class="ulAaccount">
                      <i class="fa-duotone fa-circle-question"></i>
                      <h2>${res.header[0].top[1].login[2].ulaccount[2].ulli[5].ulAaccount.name}</h2>
                    </a>
                  </li>
                  <li>
                    <a href="${res.header[0].top[1].login[2].ulaccount[2].ulli[6].link}"><i class="fa-thin fa-pen"></i> ${res.header[0].top[1].login[2].ulaccount[2].ulli[6].name}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
 `;
  document.querySelector(".head-top").innerHTML = header;
};
export default Header;
