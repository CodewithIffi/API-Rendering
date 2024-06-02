
let div = document.querySelector('div')


axios('https://fakestoreapi.com/products')
    .then((res) => {
        console.log(res.data);
        res.data.map((items) => {
            div.innerHTML += `
            <div class="card" style="width: 20rem;" >
            <img  p-4 width="300" height='300' src="${items.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h3>Title:${items.title} </h3>
            <h3>Price:${items.price} </h3>
            </div>
            <button class="btn  btn-outline-warning btn-primary">Add to Cart</button>
          </div>
        
    `
        })

    })
    .catch((error) => {
        console.log(error);
    })