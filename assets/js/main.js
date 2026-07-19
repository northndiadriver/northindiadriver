const header=document.querySelector('.site-header');
const toggle=document.querySelector('.nav-toggle');
const menu=document.querySelector('.mobile-menu');
const onScroll=()=>{if(!header||header.classList.contains('inner'))return;header.classList.toggle('scrolled',window.scrollY>60)};
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');document.body.style.overflow=''}))}

const v12Header=document.querySelector('[data-v12-header]');
const v12Toggle=document.querySelector('[data-v12-toggle]');
const v12Menu=document.querySelector('[data-v12-menu]');
const v12Scroll=()=>{if(v12Header)v12Header.classList.toggle('scrolled',window.scrollY>50)};
window.addEventListener('scroll',v12Scroll,{passive:true});v12Scroll();
if(v12Toggle&&v12Menu){v12Toggle.addEventListener('click',()=>{const open=v12Menu.classList.toggle('open');v12Toggle.setAttribute('aria-expanded',String(open))});v12Menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>v12Menu.classList.remove('open')))}

const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();

const lightboxButtons=[...document.querySelectorAll('[data-lightbox]')];
const modal=document.querySelector('[data-lightbox-modal]');
if(lightboxButtons.length&&modal){
  const image=modal.querySelector('[data-lightbox-image]');
  const caption=modal.querySelector('[data-lightbox-caption]');
  let current=0;
  const show=(index)=>{current=(index+lightboxButtons.length)%lightboxButtons.length;const button=lightboxButtons[current];image.src=button.dataset.lightbox;image.alt=button.dataset.caption||'';caption.textContent=button.dataset.caption||'';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};
  const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};
  lightboxButtons.forEach((button,index)=>button.addEventListener('click',()=>show(index)));
  modal.querySelector('[data-lightbox-close]').addEventListener('click',close);
  modal.querySelector('[data-lightbox-prev]').addEventListener('click',()=>show(current-1));
  modal.querySelector('[data-lightbox-next]').addEventListener('click',()=>show(current+1));
  modal.addEventListener('click',event=>{if(event.target===modal)close()});
  document.addEventListener('keydown',event=>{if(!modal.classList.contains('open'))return;if(event.key==='Escape')close();if(event.key==='ArrowLeft')show(current-1);if(event.key==='ArrowRight')show(current+1)});
}
