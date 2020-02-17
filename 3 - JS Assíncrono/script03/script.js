axios.get('htt://api.github.com/users/jeanoliveira92')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    })