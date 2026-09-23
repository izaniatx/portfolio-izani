const clock=document.querySelector('#clock');
function tick(){clock.textContent=new Date().toLocaleTimeString('es-ES',{hour12:false})} tick();setInterval(tick,1000);
const spot=document.querySelector('.spotlight');
window.addEventListener('pointermove',e=>{spot.style.left=e.clientX+'px';spot.style.top=e.clientY+'px'});
const modal=document.querySelector('#terminal'),input=document.querySelector('#terminalInput'),output=document.querySelector('#output');
document.querySelector('#openTerminal').onclick=()=>{modal.classList.add('open');input.focus()};
document.querySelector('#closeTerminal').onclick=()=>modal.classList.remove('open');
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.querySelector('#terminalForm').addEventListener('submit',e=>{
 e.preventDefault();const cmd=input.value.trim().toLowerCase();input.value='';
 if(!cmd)return;
 output.innerHTML+=`<p class="cmd">❯ ${cmd}</p>`;
 const answers={
 help:'commands: <b>about</b> · <b>projects</b> · <b>stack</b> · <b>contact</b> · <b>coffee</b> · <b>clear</b>',
 about:'Izani Achega — junior web developer. Based in Donostia. Curious by default.',
 projects:'ONGARBI · ARO AUTOMOCIÓN',
 stack:'HTML CSS JavaScript React Laravel WordPress SEO Analytics',
 contact:'try: mailto:tuemail@ejemplo.com',
 coffee:'☕ compiling motivation... 100% ██████████'
 };
 if(cmd==='clear') output.innerHTML='';
 else output.innerHTML+=`<p class="lime">${answers[cmd]||'command not found. try <b>help</b>.'}</p>`;
 output.scrollTop=output.scrollHeight;
});
document.querySelector('#surprise').addEventListener('click',()=>{
 const toast=document.querySelector('#toast');toast.classList.add('show');document.body.animate([{transform:'translateX(0)'},{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}],{duration:300});
 setTimeout(()=>toast.classList.remove('show'),2200);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open');if(e.key==='`'){modal.classList.toggle('open');if(modal.classList.contains('open'))input.focus()}});
