const e="https://dummyjson.com/products";async function t(){let t=await fetch(e);return(await t.json()).products}async function n(t){let n=e+`/search?q=${t}`,r=await fetch(n);return(await r.json()).products}function r(e,t,n,r,c,o,a,i){let l=document.createElement("div"),d=document.createElement("img");d.src=a;let u=document.createElement("h2");u.innerText=e;let m=document.createElement("h3");m.innerText=t;let s=document.createElement("p");s.innerText="Price: "+n.toString();let p=document.createElement("p");p.innerText="Rating: "+r.toString();let f=document.createElement("p");f.innerText="Stock: "+c.toString(),c<10?f.style.color="red":c>50&&(f.style.color="green");let h=document.createElement("p");h.innerText="Category: "+o;let g=document.createElement("button");g.innerText="Add to cart",l.append(d,u,m,s,p,f,h,g),l.classList.add("card-styling-products"),i.append(l)}const c=document.querySelector("#products-container"),o=document.querySelector("#search-form");t().then(e=>{for(let t of e)r(t.title,t.description,t.price,t.rating,t.stock,t.category,t.thumbnail,c)}),o.addEventListener("submit",function(e){e.preventDefault(),c.innerHTML="",n(document.querySelector("#search-field").value).then(e=>{if(e.length<=0){var t;t="404 Product not found",document.createElement("h1").innerText=t,c.append(t)}for(let t of e)r(t.title,t.description,t.price,t.rating,t.stock,t.category,t.thumbnail,c)}),o.reset()});
//# sourceMappingURL=index.0d7ca581.js.map