const url = 'https://jsonplaceholder.typicode.com/users'

/* fetch(url, {
    method: 'POST', 
    headers: {//nos sirve para indentificar quienes somos y decir que tipo de contenido vamos a enviar 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
    }, 
    body: JSON.stringify({
        name: 'Auto', 
        website: 'google.com'
    })
})
.then((respuesta) => respuesta.json())
.then(data => console.log(data)) */

const fn = async () => {
    const response = await fetch(url, {
        method: 'POST', 
        headers: {//nos sirve para indentificar quienes somos y decir que tipo de contenido vamos a enviar 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
        }, 
        body: JSON.stringify({
            name: 'Auto', 
            website: 'google.com'
        })
    })
    .then((respuesta) => respuesta.json())
    .then(data => console.log(data))

    const data = response.json()

    console.log(data); 
}

fn();