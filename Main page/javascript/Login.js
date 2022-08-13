
var objaccounts = [
    {
        username:"B10401119",
        password:"qwertyuiop"
    },
    {
        username:"hello",
        password:"thisisahello"
    }
]
function check(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0;i < objaccounts.length; i++){
        if(username == objaccounts[i].username && password == objaccounts[i].password){
            document.getElementById("sign_in").href = "Main page.html"
            return
        }
    }
    document.getElementById("sign_in").href = "#"
}
