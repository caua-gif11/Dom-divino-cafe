const CONFIG={whatsapp:"5511900000000",maps:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Dom Divino Café Mogi das Cruzes")};
const IMG={1:"assets/img/1-bolinhos-e-cafe-com-leite.jpg",2:"assets/img/2-cafe-especial-chantilly.jpg",3:"assets/img/3-chocolate-quente-chantilly.jpg",4:"assets/img/4-cafe-gelado-cremoso.jpg",5:"assets/img/5-croissant.jpg",6:"assets/img/6-torta-morango.jpg",7:"assets/img/7-cappuccino.jpg",8:"assets/img/8-bolo-chocolate.jpg",9:"assets/img/9-hero-cappuccino-e-bolo.jpg"};
const $=s=>document.querySelector(s);
const CATS=["Todos","Cafés quentes","Cafés gelados","Bebidas especiais","Bolos","Tortas","Doces e sobremesas","Lanches"];
const ITEMS=[
{n:"Cappuccino",d:"Com arte de coração na espuma, em xícara de cerâmica.",c:"Cafés quentes",p:"R$ 0,00",i:7},
{n:"Café com leite",d:"Servido em xícara de porcelana, com espuma cremosa.",c:"Cafés quentes",p:"R$ 0,00",i:1,z:2.2,px:80,py:41},
{n:"Café gelado cremoso",d:"Gelado e cremoso, com chantilly e raspas de chocolate.",c:"Cafés gelados",p:"R$ 0,00",i:4},
{n:"Café especial com chantilly",d:"Em taça de vidro, coroado com chantilly e cacau.",c:"Bebidas especiais",p:"R$ 0,00",i:2},
{n:"Chocolate quente com chantilly",d:"Cremoso, com chantilly e canela por cima.",c:"Bebidas especiais",p:"R$ 0,00",i:3},
{n:"Croissant",d:"Folhado dourado, crocante por fora e macio por dentro.",c:"Lanches",p:"R$ 0,00",i:5},
{n:"Bolo de chocolate (fatia)",d:"Camadas de massa e recheio de chocolate com cobertura brilhante.",c:"Bolos",p:"R$ 0,00",i:8},
{n:"Torta de morango e chocolate",d:"Camadas de creme e morangos, finalizada com chantilly.",c:"Tortas",p:"R$ 0,00",i:6},
{n:"Bolinho de chuva com doce de leite",d:"Quentinho, com açúcar e canela e doce de leite para mergulhar.",c:"Doces e sobremesas",p:"R$ 0,00",i:1,z:1.6,px:27,py:39},
{n:"Doce de leite para acompanhar",d:"Porção individual, ótima com os bolinhos de chuva.",c:"Doces e sobremesas",p:"R$ 0,00",i:1,z:2.2,px:36,py:75}];
const cl=(v,m)=>Math.max(-m,Math.min(m,v));
const tr=x=>x.z?`transform:translate(${cl(-x.z*(x.px-50),(x.z-1)*50)}%,${cl(-x.z*(x.py-50),(x.z-1)*50)}%) scale(${x.z})`:"";
const art=k=>`<img src="${IMG[k.slice(1)]}" alt="" style="object-position:50% 40%">`;
const ORD=[["Bolos inteiros","Para aniversários e datas especiais.","p8"],["Tortas","Doces e salgadas, para mesas especiais.","p6"],["Doces e sobremesas","Porções e caixas para comemorar.","p1"],["Eventos e produtos especiais","Conte o que você precisa e receba um orçamento.","p3"]];
let cat="Todos",admin=false;
document.querySelectorAll("[data-img]").forEach(e=>e.src=IMG[e.dataset.img]);
$("#maps").href=CONFIG.maps;
$(".hbg").style.backgroundImage="url("+IMG[9]+")";
function wa(msg){$("#dm").textContent=msg;$("#dl").href="https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(msg);$("#d").showModal()}
function render(){
 $("#grid").innerHTML=ITEMS.map((x,k)=>({x,k})).filter(({x})=>cat==="Todos"||x.c===cat).map(({x,k},j)=>`<article class="card" style="--i:${j}"><div class="ph">${x.i?`<img src="${IMG[x.i]}" alt="${x.n}" style="${tr(x)}">`:ART[x.a]}<span class="tag">Demonstrativo</span></div><div class="cb"><h3 data-k="${k}" data-f="n">${x.n}</h3><p data-k="${k}" data-f="d">${x.d}</p><div class="pr"><b data-k="${k}" data-f="p">${x.p}</b><button class="btn" data-ask="${k}">Pedir</button></div></div></article>`).join("")||"<p>Em breve, novidades nesta categoria.</p>";
 document.querySelectorAll("[data-f]").forEach(e=>e.contentEditable=admin);
}
$("#chips").innerHTML=CATS.map(c=>`<button class="chip" aria-pressed="${c===cat}">${c}</button>`).join("");
$("#chips").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;cat=b.textContent;document.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));render()};
$("#grid").addEventListener("click",e=>{const b=e.target.closest("[data-ask]");if(b)wa("Olá! Gostaria de pedir: "+ITEMS[b.dataset.ask].n+".")});
$("#grid").addEventListener("input",e=>{const t=e.target;if(t.dataset.f)ITEMS[t.dataset.k][t.dataset.f]=t.textContent});
$("#orders").innerHTML=ORD.map(o=>`<div class="ord"><div class="oi">${art(o[2])}</div><h3>${o[0]}</h3><p>${o[1]}</p><button class="btn" data-q="${o[0]}">Solicitar orçamento</button></div>`).join("");
$("#orders").onclick=e=>{const b=e.target.closest("[data-q]");if(b)wa("Olá! Gostaria de solicitar um orçamento de: "+b.dataset.q+".")};
document.querySelectorAll("[data-wa]").forEach(a=>a.onclick=e=>{e.preventDefault();wa(a.dataset.wa)});
$("#f").onsubmit=e=>{e.preventDefault();const f=e.target;wa("Olá! Sou "+f.n.value+". Assunto: "+f.a.value+". "+f.m.value)};
document.querySelectorAll("[data-lb]").forEach(b=>b.onclick=()=>{const[i,c]=b.dataset.lb.split("|");$("#li").src=IMG[i];$("#li").alt=c;$("#lc").textContent=c;$("#lb").showModal()});
["#d","#lb"].forEach(s=>$(s).addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.close()}));
$("#adm").onclick=()=>{admin=!admin;document.body.classList.toggle("adm",admin);$("#adm").textContent=admin?"Sair do painel (demo)":"Painel administrativo (demo)";location.hash="#cardapio";render()};
$("#bg").onclick=()=>{const o=$("#nv").classList.toggle("open");$("#bg").setAttribute("aria-expanded",o)};
$("#nv").onclick=()=>{$("#nv").classList.remove("open");$("#bg").setAttribute("aria-expanded",false)};
document.querySelectorAll("[data-split]").forEach(el=>{const t=el.textContent.trim();el.setAttribute("aria-label",t);el.innerHTML=t.split(/\s+/).map((w,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(" ")});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.25});
document.querySelectorAll("[data-split],.rv,.about figure").forEach(e=>io.observe(e));

const th=f=>{let e,q;return v=>{e=v;if(!q){q=1;requestAnimationFrame(()=>{q=0;f(e)})}}};
$("#grid").addEventListener("pointermove",th(e=>{const c=e.target.closest(".card");if(!c||e.pointerType!=="mouse")return;const b=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-b.left)+"px");c.style.setProperty("--my",(e.clientY-b.top)+"px");c.style.setProperty("--ry",((e.clientX-b.left)/b.width-.5)*10+"deg");c.style.setProperty("--rx",(.5-(e.clientY-b.top)/b.height)*8+"deg")}));
$("#grid").addEventListener("pointerout",e=>{const c=e.target.closest(".card");if(c){c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")}});

const hero=$(".hero");
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const lenis=window.Lenis&&!rm?new Lenis({lerp:.09}):null;
document.querySelectorAll('a[href^="#"]').forEach(a=>{const h=a.getAttribute("href");if(h.length>1)a.addEventListener("click",e=>{const el=$(h);if(el&&lenis){e.preventDefault();lenis.scrollTo(el,{offset:-72})}})});
let tx=0,ty=0,cx=0,cy=0,sx=innerWidth*.7,sy=innerHeight*.35,px=sx,py=sy,hv=true;
hero.addEventListener("pointermove",e=>{tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5;sx=e.clientX;sy=e.clientY+scrollY});
new IntersectionObserver(e=>hv=e[0].isIntersecting).observe(hero);
const hbg=$(".hbg"),hs=$(".hspot"),bar=$("#bar");
const loop=t=>{lenis&&lenis.raf(t);const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(h>0?y/h:0)+")";if(hv&&!rm){cx+=(tx-cx)*.07;cy+=(ty-cy)*.07;px+=(sx-px)*.12;py+=(sy-py)*.12;hbg.style.transform="translate3d("+(-cx*34)+"px,"+(-cy*22+y*.1)+"px,0) scale("+(1.06+.03*Math.sin(t/5000))+")";hs.style.transform="translate3d("+px+"px,"+py+"px,0)"}requestAnimationFrame(loop)};
requestAnimationFrame(loop);
document.addEventListener("pointermove",th(e=>{const b=e.target.closest&&e.target.closest(".btn");if(!b||e.pointerType!=="mouse")return;const r=b.getBoundingClientRect();b.style.translate=((e.clientX-r.left-r.width/2)*.18)+"px "+((e.clientY-r.top-r.height/2)*.3)+"px"}));
document.addEventListener("pointerout",e=>{const b=e.target.closest&&e.target.closest(".btn");if(b)b.style.translate=""});
document.querySelectorAll(".ord,.gal>*").forEach((e,i)=>{e.classList.add("rise");e.style.setProperty("--i",i%4);io.observe(e)});
render();
