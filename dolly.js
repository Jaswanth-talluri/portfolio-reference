let skills = document.getElementById('skills')
let courses=document.getElementById('courses')
let experience=document.getElementById('experience')
let education=document.getElementById('education')
document.querySelector('#s').onclick = () =>{
    skills.classList.toggle('active');
    courses.classList.remove('active');
    experience.classList.remove('active');
    education.classList.remove('active');
    s.classList.toggle('act');
    c.classList.remove('act');
    exp.classList.remove('act');
    edu.classList.remove('act');
}
document.querySelector('#c').onclick = () =>{
    skills.classList.remove('active');
    courses.classList.toggle('active');
    experience.classList.remove('active');
    education.classList.remove('active');
    s.classList.remove('act');
    c.classList.toggle('act');
    exp.classList.remove('act');
    edu.classList.remove('act');
}
document.querySelector('#exp').onclick = () =>{
    skills.classList.remove('active');
    courses.classList.remove('active');
    experience.classList.toggle('active');
    education.classList.remove('active');
    s.classList.remove('act');
    c.classList.remove('act');
    exp.classList.toggle('act');
    edu.classList.remove('act');
}
document.querySelector('#edu').onclick = () =>{
    skills.classList.remove('active');
    courses.classList.remove('active');
    experience.classList.remove('active');
    education.classList.toggle('active');
    s.classList.remove('act');
    c.classList.remove('act');
    exp.classList.remove('act');
    edu.classList.toggle('act');
}
let scrollContainer = document.querySelector("#cer");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");
nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft+=1200;
  });
  backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=1200;
  });
