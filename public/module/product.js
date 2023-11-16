const product = async () => {
    let data = await fetch("https://mostafa-rashidi.github.io/json-battle/db.json");
    let res = await data.json();
    let product = `
${
    res.product.map((elem)=>{
        if (elem.id===1) {
            return `
           <h3>${elem.title}</h3>
           ${
            elem.product1.map((product1)=>{
                if(product1.yellowContent.length===0){
                    return `
                <div>
          <a href="${product1.link}">
            <img
              src="${product1.image}"
              alt="${product1.alt}"
            />
            <span>${product1.name}</span>
            <h4>${product1.title2}</h4>
            <span>${product1.content}</span>
          </a>
        </div>
                `
                }else{
                    return `
                    <div>
          <a href="${product1.link}">
            <img
              src="${product1.image}"
              alt="${product1.alt}"
            />
            <span>${product1.name}</span>
            <h4>${product1.title2}</h4>
            <span class="yellow">${product1.contyellow}</span>
            <span>${product1.content}</span>
          </a>
        </div>
                    `
                }
                
            })
        
        }
        }
       
           `
        }
        else if (elem.id===2){
            return `
            <h3>${elem.title}</h3>
            ${
             elem.product2.map(product2=>{
                 if(product2.yellowContent.length===0){
                     return `
                 <div>
           <a href="${product2.link}">
             <img
               src="${product2.image}"
               alt="${product2.alt}"
             />
             <span>${product2.name}</span>
             <h4>${product2.title2}</h4>
             <span>${product2.content}</span>
           </a>
         </div>
                 `
                 }else{
                     return `
                     <div>
           <a href="${product2.link}">
             <img
               src="${product2.image}"
               alt="${product2.alt}"
             />
             <span>${product2.name}</span>
             <h4>${product2.title2}</h4>
             <span class="yellow">${product2.contyellow}</span>
             <span>${product2.content}</span>
           </a>
         </div>
                     `
                 }
                 
             })
            }
         
            ` 
        }else if (elem.id===3){
            return `
            <h3>${elem.title}</h3>
            ${
             elem.product3.map(product3=>{
                 if(product3.yellowContent.length===0){
                     return `
                 <div>
           <a href="${product3.link}">
             <img
               src="${product3.image}"
               alt="${product3.alt}"
             />
             <span>${product3.name}</span>
             <h4>${product3.title2}</h4>
             <span>${product3.content}</span>
           </a>
         </div>
                 `
                 }else{
                     return `
                     <div>
           <a href="${product3.link}">
             <img
               src="${product3.image}"
               alt="${product3.alt}"
             />
             <span>${product3.name}</span>
             <h4>${product3.title2}</h4>
             <span class="yellow">${product3.contyellow}</span>
             <span>${product3.content}</span>
           </a>
         </div>
                     `
                 }
                 
             })
            }
         
            ` 
        }else if (elem.id===4){
            return `
            <h3>${elem.title}</h3>
            ${
             elem.product4.map(product4=>{
                 if(product4.yellowContent.length===0){
                     return `
                 <div>
           <a href="${product4.link}">
             <img
               src="${product4.image}"
               alt="${product4.alt}"
             />
             <span>${product4.name}</span>
             <h4>${product4.title2}</h4>
             <span>${product4.content}</span>
           </a>
         </div>
                 `
                 }else{
                     return `
                     <div>
           <a href="${product4.link}">
             <img
               src="${product4.image}"
               alt="${product4.alt}"
             />
             <span>${product4.name}</span>
             <h4>${product4.title2}</h4>
             <span class="yellow">${product4.contyellow}</span>
             <span>${product4.content}</span>
           </a>
         </div>
                     `
                 }
                 
             })
            }
         
            ` 
        }
    }).join("")
}
        `;
    document.querySelector(".product").innerHTML = product;
  };
  export default product;
  