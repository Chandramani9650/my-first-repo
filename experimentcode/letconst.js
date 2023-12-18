let arr = []
function sum(){
    fetch("https://reqres.in/api/users?page=2").then(function(res){
        return res.json()
    }).then(function(data){
        
       arr.push(data)
       display()
   
    }).catch(function(err){
        console.log(err);
    })
}
//resources/notifications.html#