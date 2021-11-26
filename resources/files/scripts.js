const docStyle = getComputedStyle(document.body);
const head=document.querySelector("#list");
const lighty=document.querySelector(".lighty");
const darky=document.querySelector(".darky");
const nav=document.querySelector("header nav");
const user=document.querySelector("#user");
const admin=document.querySelector("#admin");
const adder=document.querySelector("#add");
const adderBtn=document.querySelector("#addBtn");
const container=document.querySelector(".contain");
let saveN=document.querySelectorAll(".save");
let count=4;

const changeTheme=(wat)=>{
if(wat=="dark")
{
nav.classList.add("dark");
document.body.classList.add("dark");
darky.style.opacity=0.5;
lighty.style.opacity=1;
}
else
{
nav.classList.remove("dark");
document.body.classList.remove("dark");
darky.style.opacity=1;
lighty.style.opacity=0.4;
}

}
const retDef=(word)=>
{
console.log(word);
if(typeof(word)=="undefined")
{return "0";}
return word;
}


const toHide=(count)=>
{
let dbookIdx=document.querySelector(`#dbookId${count}`);
let bookIdx=document.querySelector(`#bookId${count}`);
let dauthorx=document.querySelector(`#dauthor${count}`);
let authorx=document.querySelector(`#author${count}`);
let dcostx=document.querySelector(`#dcost${count}`);
let costx=document.querySelector(`#cost${count}`);
let bval=retDef(dbookIdx.innerText);
let aval=retDef(dauthorx.innerText);
let cval=retDef(dcostx.innerText);
const saver=document.querySelector(`#save${count}`);
dbookIdx.innerHTML=retDef(bval);
dauthorx.innerHTML=retDef(aval);
dcostx.innerHTML=retDef(cval);
bookIdx.classList.add("hidden");
bookIdx.classList.remove("visi");
dbookIdx.classList.remove("hidden");
dbookIdx.classList.add("visi");
authorx.classList.add("hidden");
authorx.classList.remove("visi");
dauthorx.classList.remove("hidden");
dauthorx.classList.add("visi");
costx.classList.add("hidden");
costx.classList.remove("visi");
dcostx.classList.remove("hidden");
dcostx.classList.add("visi");
saver.innerHTML="Edit";
}



const toEdit=(count)=>{
let dbookIdx=document.querySelector(`#dbookId${count}`);
let bookIdx=document.querySelector(`#bookId${count}`);
let dauthorx=document.querySelector(`#dauthor${count}`);
let authorx=document.querySelector(`#author${count}`);
let dcostx=document.querySelector(`#dcost${count}`);
let costx=document.querySelector(`#cost${count}`);
let bval=retDef(dbookIdx.innerText);
let aval=retDef(dauthorx.innerText);
let cval=retDef(dcostx.innerText);
const saver=document.querySelector(`#save${count}`);
if(saver.innerText=="Edit")
{
bookIdx.classList.add("visi");
bookIdx.classList.remove("hidden");
dbookIdx.classList.remove("visi");
dbookIdx.classList.add("hidden");
authorx.classList.add("visi");
authorx.classList.remove("hidden");
dauthorx.classList.remove("visi");
dauthorx.classList.add("hidden");
costx.classList.add("visi");
costx.classList.remove("hidden");
dcostx.classList.remove("visi");
dcostx.classList.add("hidden");
bookIdx.innerHTML=retDef(dbookIdx.innerText);
authorx.innerHTML=retDef(dauthorx.innerText);
costx.innerHTML=retDef(dcostx.innerText);
saver.innerHTML="Save";

}
else
{
dbookIdx.innerHTML=retDef(bookIdx.value);
dauthorx.innerHTML=retDef(authorx.value);
dcostx.innerHTML=retDef(costx.value);

bookIdx.classList.add("hidden");
bookIdx.classList.remove("visi");
dbookIdx.classList.remove("hidden");
dbookIdx.classList.add("visi");
authorx.classList.add("hidden");
authorx.classList.remove("visi");
dauthorx.classList.remove("hidden");
dauthorx.classList.add("visi");
costx.classList.add("hidden");
costx.classList.remove("visi");
dcostx.classList.remove("hidden");
dcostx.classList.add("visi");
saver.innerHTML="Edit";
}


}

const drop=()=>{
lighty.classList.remove("hidden");
darky.classList.remove("hidden");
lighty.classList.add("visi");
darky.classList.add("visi");
}

const dropin=()=>{
lighty.classList.add("hidden");
darky.classList.add("hidden");
lighty.classList.remove("visi");
darky.classList.remove("visi");
}

const navChange=()=>
{
if(window.scrollY > 650)
{
nav.classList.add("blk");
nav.classList.remove("trans");
}
else
{
nav.classList.remove("blk");
nav.classList.add("trans");
}}

const modeChange=(who)=>
{
if(who=="user")
{
user.classList.add("clicked");
admin.classList.remove("clicked");
adder.classList.toggle("hidden");
adder.classList.toggle("visi");

saveN=document.querySelectorAll(".save");
saveN.forEach((savex)=>{
savex.classList.remove("visi");
savex.classList.add("disapp");})
for (let i = 0; i < count; i++) 
{toHide(i);}
}

else if(who=="admin")
{
admin.classList.add("clicked");
user.classList.remove("clicked");
adder.classList.toggle("visi");
adder.classList.toggle("hidden");


saveN=document.querySelectorAll(".save");
saveN.forEach((savex)=>{
savex.classList.add("visi");
savex.classList.remove("disapp");})
}
}

const addIt=()=>{
count=count+1;
const bookNew=`
<div class='holder'>
<div class="inn-holder">
<div class='book'>
<img src="resources/book.jfif" alt="this is a imag of a book">
<div class="data" id=dName${count}>Book Number: ${count + 1}</div>
</div>
<div class="back">
<h3>Name:</h3>
<div class="data" id=dbookId${count}></div>
<textarea class="hidden" id=bookId${count}></textarea>
<h4>Author:</h4>
<div class="data" id=dauthor${count}></div>
<textarea id=author${count} class="hidden"></textarea>
<h4>Cost:</h4>
<div class="data" id=dcost${count}></div>
<textarea id=cost${count} class="hidden"></textarea>
<span class="buttons">
<button class="visi save" id=save${count} onClick=toEdit(${count})>Edit</button>
</span>
</div>
</div>
</div>`;
container.insertAdjacentHTML("afterbegin",bookNew);
saveN.forEach((savex)=>{
savex.classList.add("visi");
savex.classList.remove("disapp");})
}



document.addEventListener('DOMContentLoaded', function () {

head.addEventListener("mouseover",()=>drop());
head.addEventListener("mouseleave",()=>dropin());
window.addEventListener("scroll", navChange);
user.addEventListener("click",()=>modeChange("user"));
admin.addEventListener("click",()=>modeChange("admin"));    
adderBtn.addEventListener("click",()=>addIt());
lighty.addEventListener("click",()=>changeTheme('light'));    
darky.addEventListener("click",()=>changeTheme('dark'));
})
