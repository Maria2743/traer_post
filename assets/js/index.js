//let boton = document.querySelector("button");

//boton.addEventListener("click", ())



//Definir el GETPOST

const getPosts = async () => {

    try {

        console.log("Estoy llamando el método GetPost")

        let url = 'https://jsonplaceholder.typicode.com/posts'

        let response = await fetch(url);
        let data = await response.json();

        console.log(data);

        let nuevoArreglo = data.map((objeto) => {
            return `<ul>
             <li>
                <strong>${objeto.title}</strong>
                <span><br>${objeto.body}</span>
            </li>
        </ul>`

        });

        document.getElementById("post-data").innerHTML = nuevoArreglo.join(" ");
    }

    catch (error) {
        console.log(error)
    }

}

