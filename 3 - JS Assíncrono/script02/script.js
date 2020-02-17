var promise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = XMLHttpRequest();
        xhr.open('GET', 'http://api.github.com/users/jeanoliveira92');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    })
}

promise()
    .then(function (response) {
        console.log(resultado);
    }).catch(function (error) {
        console.warn(error);
    })