function coleta_de_dados(){
    var nome = document.getElementById(`first_name`).value, senha = document.getElementById(`last_name`).value

    alert(`credenciais sao: ${nome} ${senha}`)

}

function redirecionar(){
    window.location.href= "home.html"
}
function redirecionar_login(){
    window.location.href= "login.html"
}