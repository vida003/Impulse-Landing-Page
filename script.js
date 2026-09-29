/* Impulse - interações da landing page */
document.documentElement.classList.add("js"); // habilita o efeito de revelar as etapas
(function(){
var st=[].slice.call(document.querySelectorAll('.steps li'));
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.25,rootMargin:'0px 0px -6% 0px'});st.forEach(function(l){io.observe(l)})}else{st.forEach(function(l){l.classList.add('vis')})}
var WA="5514997397516";
var f=document.getElementById('f'),ok=document.getElementById('ok'),lk=document.getElementById('wa');
f.addEventListener('submit',function(e){e.preventDefault();var bad=null;
f.querySelectorAll('[required]').forEach(function(i){var b=!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));i.style.borderColor=b?'#ff2d45':'';if(b&&!bad)bad=i});
if(bad){bad.focus();return}
var v=function(n){return f.elements[n].value.trim()};
var msg="Olá! Vim pelo site da Impulse e gostaria de um diagnóstico sem compromisso.\n\n*Nome:* "+v('nome')+"\n*Telefone/WhatsApp:* "+v('tel')+"\n*Email:* "+v('email')+"\n*Empresa:* "+v('empresa')+"\n*O que me fez procurar a Impulse:* "+v('motivo');
var url="https://wa.me/"+WA+"?text="+encodeURIComponent(msg);
lk.href=url;ok.style.display='block';f.querySelector('button[type=submit]').style.display='none';
window.open(url,'_blank','noopener')});
var sl=[].slice.call(document.querySelectorAll('.sl')),ds=[].slice.call(document.querySelectorAll('.dots button:not(.ar)')),cur=0,timer;
function go(n){cur=(n+sl.length)%sl.length;sl.forEach(function(s,i){s.classList.toggle('on',i===cur);s.setAttribute('aria-hidden',i!==cur)});ds.forEach(function(d,i){d.classList.toggle('on',i===cur);d.setAttribute('aria-current',i===cur)})}
ds.forEach(function(d,i){d.addEventListener('click',function(){go(i);auto()})});
document.getElementById('pv').onclick=function(){go(cur-1);auto()};
document.getElementById('nx').onclick=function(){go(cur+1);auto()};
var tm=document.querySelector('.tm'),x0=null;
tm.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
tm.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){go(cur+(dx<0?1:-1));auto()}x0=null});
var box=document.querySelector('.cta'),paused=false;
box.addEventListener('mouseover',function(){paused=true});box.addEventListener('mouseout',function(){paused=false});
box.addEventListener('focusin',function(){paused=true});box.addEventListener('focusout',function(){paused=false});
function auto(){clearInterval(timer);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;timer=setInterval(function(){if(!paused)go(cur+1)},7000)}
auto();
})();
