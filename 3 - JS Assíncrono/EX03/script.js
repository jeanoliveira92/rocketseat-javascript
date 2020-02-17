var btn = document.querySelector('body button');
var input = document.querySelector('body input');
var ul = document.querySelector('body ul');

btn.onclick = function () {
    ul.innerHTML = '<li>Carregando...</li>';

    axios.get('https://api.github.com/users/' + input.value + '/repos')
        .then(function (response) {
            ul.innerHTML = '';
            //console.log(response);
            for (repo of response.data) {
                var li = document.createElement('li');
                var txt = document.createTextNode(repo.name);
                li.appendChild(txt);
                ul.appendChild(li);
            }
        })
        .catch(function (error) {
            ul.innerHTML = '';
            ul.innerHTML = 'Erro ao processar pedido ou usuário inválido';
            console.warn('Erro ao processar pedido  ou usuário inválido');
            console.warn(error);
        })
}