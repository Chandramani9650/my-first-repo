
function fetchdata(){
    fetch("https://reqres.in/api/users?page=2").then((res)=>{
    return res.json()
}).then(obj=>{
   let p = obj.data
  display(p)
}).catch(err=>{
    alert("something went wrong");
})
}
let fetchruser = document.getElementById("fetch_user")
fetchruser.addEventListener('click', function(){
    fetchdata()
})


function display(q){
  let disp = document.getElementById("disp")
  q.map((el)=>{
  let div = document.createElement("div")
  let p = document.createElement("p")
  let email = document.createElement("p")
  let first = document.createElement("p")
  let last = document.createElement("p")
  let img = document.createElement("img")
  img.src = el.avatar
  p.innerText = ` Id: ${el.id}`
  email.innerText = `email id: ${el.email}`
  first.innerText = `Name: ${el.first_name}  ${el.last_name}`

  div.append(img, p,email,first,last)
  disp.append(div)
 
  
  })
}