const footer = async () => {
  let data = await fetch("https://mostafa-rashidi.github.io/json-battle/db.json");
  let res = await data.json();
  let footer = `
  <div class="adventure">
          <img src="${res.footer[0].adventuer[0].image1}" alt="${res.footer[0].adventuer[0].alt1}" />
          <div class="image">
            <img src="${res.footer[0].adventuer[0].image2}" alt="${res.footer[0].adventuer[0].alt2}" />
          </div>
          <div class="mobile">
            <h2>${res.footer[0].adventuer[0].mobile[0].title1}</h2>
            <h6>${res.footer[0].adventuer[0].mobile[0].title2}</h6>
            <div class="tagA">
              <a href="${res.footer[0].adventuer[0].mobile[0].link}">${res.footer[0].adventuer[0].mobile[0].tagA1}</a>
              <a href="${res.footer[0].adventuer[0].mobile[0].link}">${res.footer[0].adventuer[0].mobile[0].tagA2}</a>
            </div>
            <div class="text">
              <span>${res.footer[0].adventuer[0].mobile[0].text.span1}</span>
              <a href="${res.footer[0].adventuer[0].mobile[0].text.link}">${res.footer[0].adventuer[0].mobile[0].text.name1}</a>
              <span>${res.footer[0].adventuer[0].mobile[0].text.span2}</span>
              <a href="${res.footer[0].adventuer[0].mobile[0].text.link}">${res.footer[0].adventuer[0].mobile[0].text.name2}</a>
            </div>
          </div>
        </div>
        <div class="about">
          <a href="${res.footer[1].about[0].link}" class="En">${res.footer[1].about[0].name1}</a>
          <a href="${res.footer[1].about[0].link}" class="logo">
            <i class="fa-brands fa-battle-net"></i>
            <span>${res.footer[1].about[0].name2}</span>
          </a>
          <div>
            <ul>
              <li><a href="${res.footer[1].about[0].ulli.link1}">${res.footer[1].about[0].ulli.name1}</a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].ulli.link2}">${res.footer[1].about[0].ulli.name2}</a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].ulli.link3}">${res.footer[1].about[0].ulli.name3}</a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].ulli.link4}">${res.footer[1].about[0].ulli.name4}</a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].ulli.link5}">${res.footer[1].about[0].ulli.name5}</a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].ulli.link6}">${res.footer[1].about[0].ulli.name6}</a></li>
            </ul>
            <div class="fil">
              <a href="${res.footer[1].about[0].fill.link1}"><i class="fa-brands fa-facebook"></i></a>
              <a href="${res.footer[1].about[0].fill.link2}"><i class="fa-brands fa-instagram"></i></a>
              <a href="${res.footer[1].about[0].fill.link3}"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <span
            >${res.footer[1].about[0].content1}
            <a href="${res.footer[1].about[0].link}">
              <i class="fa-brands fa-battle-net"></i>${res.footer[1].about[0].content2}</a
            ></span
          >
          <div class="last">
            <span>${res.footer[1].about[0].last[0].title}</span>
            <span
              >${res.footer[1].about[0].last[0].span1}<a href="${res.footer[1].about[0].last[0].link}">${res.footer[1].about[0].last[0].name}</a>${res.footer[1].about[0].last[0].span2}</span
            >
            <ul>
              <li><a href="${res.footer[1].about[0].last[0].ulli.link1}">${res.footer[1].about[0].last[0].ulli.name1} </a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].last[0].ulli.link2}">${res.footer[1].about[0].last[0].ulli.name2}</a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].last[0].ulli.link3}">${res.footer[1].about[0].last[0].ulli.name3}</a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].last[0].ulli.link4}">${res.footer[1].about[0].last[0].ulli.name4}</a><span>|</span></li>
              <li><a href="${res.footer[1].about[0].last[0].ulli.link5}">${res.footer[1].about[0].last[0].ulli.name5}</a></li>
            </ul>
          </div>
        </div>
  `;
  document.querySelector(".footer").innerHTML = footer;
};
export default footer;
