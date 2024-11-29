let startProducts = [
    {
        id: 1001,
        name: "Phone",
        cost: 300
    },
    {
        id: 1002,
        name: "Laptop",
        cost: 500
    },
    {
        id: 1003,
        name: "Desktop",
        cost: 1000
    }
]



function loadData() {
    saveProducts = JSON.parse(localStorage.getItem("inventory"))
    let content = ""
    for (let eachProduct of saveProducts) {
        content += `<tr>
                        <td>${eachProduct.id}</td>
                        <td>${eachProduct.name}</td>
                        <td>${eachProduct.cost}</td>
                        <td> <button type = "button" class = "btn btn-success">View </button>
                        <button type = "button" class = "btn btn-warning">Edit </button>
                        <button type = "button" class = "btn btn-danger" onClick="deleteItem(${eachProduct.id})">Delete </button>
                        </td>
                    </tr>`

    }
    document.getElementById("data").innerHTML = content;
}

function deleteItem(productID){
    saveProducts = JSON.parse(localStorage.getItem("inventory"))
    let index = saveProducts.findIndex((eachProduct) => eachProduct.id == productID);
    saveProducts.splice(index,1);
    localStorage.setItem("inventory",JSON.stringify(saveProducts))
    loadData();
}

function addProduct(){
    saveProducts = JSON.parse(localStorage.getItem("inventory"))
    let newId = 0
    if(saveProducts.length == 0){
        newId = 1001
    }
    else{
        newId = saveProducts[saveProducts.length-1].id + 1 ; 
    }
    
    let newProduct = {
        id: newId,
        name: document.getElementById("pName").value,
        cost: document.getElementById("pCost").value

    };
    saveProducts.push(newProduct);
    localStorage.setItem("inventory",JSON.stringify(saveProducts))
    window.location.href="index.html"
    

}
