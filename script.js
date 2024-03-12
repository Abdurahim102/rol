const inp = document.querySelector('.inp')
// let formData = {};
const div = document.querySelector('.div')
const li = document.querySelector('.li')
const btn = document.querySelector('.btn')
const Ls = sessionStorage;
function Changer() {
    const inp2 = inp.value
    Ls.setItem('value', JSON.stringify(inp2)); 
    const data = sessionStorage.getItem('value')
    const vl = document
    .createElement("p")
    vl.textContent = inp.value;
    document.querySelector('p').append(vl)
console.log(vl);
}


