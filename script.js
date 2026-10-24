
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const t=document.getElementById('themeToggle');
const saved=localStorage.getItem('scarlett-theme');
document.body.dataset.theme=saved || 'dark';

function themeLabel(){
  if(!t)return;
  const light=document.body.dataset.theme==='light';
  t.title=light?'Switch to dark mode':'Switch to light mode';
  t.setAttribute('aria-label',t.title);
}
themeLabel();
if(t)t.addEventListener('click',()=>{
  const next=document.body.dataset.theme==='light'?'dark':'light';
  document.body.dataset.theme=next;
  localStorage.setItem('scarlett-theme',next);
  themeLabel();
});
