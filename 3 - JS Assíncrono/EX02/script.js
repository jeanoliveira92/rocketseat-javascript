var btn = document.querySelector('body button');
var input = document.querySelector('body input');
var ul = document.querySelector('body ul');

btn.onclick = function(){
    axios.get('https://api.github.com/users/' + input.value + '/repos')
    .then(function (response) {
        //console.log(response);
        ul.innerHTML = '';

        for(repo of response.data){
            var li = document.createElement('li');
            var txt = document.createTextNode(repo.name);
            li.appendChild(txt);
            ul.appendChild(li);
        }
    })
    .catch(function (error) {
        console.warn("Erro ao processar pedido");
        console.warn(error);
    })
}