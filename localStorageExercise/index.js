let form = document.querySelector("form")
let name = document.getElementById("name")
let age = document.getElementById("age")
let btn = document.querySelector("button")
let retrive = document.getElementById("retrive_data")
let tbody = document.getElementById("tbody")
let arr = []
form.addEventListener('submit', function(e){
    // e.preventDefault()
    let obj = {}
obj.name = name.value
obj.age =  age.value

arr.push(obj)
localStorage.setItem("user_data",JSON.stringify(arr))
// console.log(store);
// let sas  = JSON.parse(localStorage.getItem("user_data"))
// console.log(sas);
arr = []

})
retrive.addEventListener('click',function(){
    let sas  = JSON.parse(localStorage.getItem("user_data"))
    sas.map((el)=>{
        let tr = document.createElement("tr")
        let nam = document.createElement("td")
        let age = document.createElement("td")
        nam.innerText = el.name
        age.innerText = el.age
        tr.append(nam,age)
        tbody.append(tr)

    })
})



