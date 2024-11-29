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
editPage="edit.html";
viewPage="view.html"
// Reset
// localStorage.setItem("inventory",JSON.stringify(startProducts))

function loadData() {
    saveProducts = JSON.parse(localStorage.getItem("inventory"))
    let content = ""
    for (let eachProduct of saveProducts) {
        content += `<tr>
                        <td>${eachProduct.id}</td>
                        <td>${eachProduct.name}</td>
                        <td>${eachProduct.cost}</td>
                        <td> <button type = "button" class = "btn btn-success" onClick="setProduct(${eachProduct.id},'view.html')">View </button>
                        <button type = "button" class = "btn btn-warning" onClick="setProduct(${eachProduct.id},'edit.html')">Edit </button>
                        <button type = "button" class = "btn btn-danger" onClick="deleteItem(${eachProduct.id})">Delete </button>
                        </td>
                    </tr>`

    }
    document.getElementById("data").innerHTML = content;
}

function deleteItem(productID) {
    saveProducts = JSON.parse(localStorage.getItem("inventory"))
    let index = saveProducts.findIndex((eachProduct) => eachProduct.id == productID);
    saveProducts.splice(index, 1);
    localStorage.setItem("inventory", JSON.stringify(saveProducts))
    loadData();
}

function setProduct(productID,pageName) {
    localStorage.setItem("product", productID)
    window.location.href=pageName;
}

function getProduct(){
    let saveProducts = JSON.parse(localStorage.getItem("inventory"));
    pId = parseInt(localStorage.getItem("product"));
    let index = saveProducts.findIndex((eachProduct) => eachProduct.id == pId);
    let product = saveProducts[index];
    console.log(product);
    document.getElementById("pId").value = product.id;
    document.getElementById("pName").value = product.name 
    document.getElementById("pCost").value = product.cost
}

function editProduct(){
    let editProduct = {
        id: document.getElementById("pId").value,
        name: document.getElementById("pName").value,
        cost: document.getElementById("pCost").value

    };
    

    saveProducts = JSON.parse(localStorage.getItem("inventory"))
    let index = saveProducts.findIndex((eachProduct) => eachProduct.id == editProduct.id);
    saveProducts[index] = editProduct;
    console.log(saveProducts);
    localStorage.setItem("inventory", JSON.stringify(saveProducts))
    window.location.href = "index.html";

}



function addProduct() {
    saveProducts = JSON.parse(localStorage.getItem("inventory"))
    let newId = 0
    if (saveProducts.length == 0) {
        newId = 1001
    }
    else {
        newId = saveProducts[saveProducts.length - 1].id + 1;
    }

    let newProduct = {
        id: newId,
        name: document.getElementById("pName").value,
        cost: document.getElementById("pCost").value

    };
    saveProducts.push(newProduct);
    localStorage.setItem("inventory", JSON.stringify(saveProducts))
    window.location.href = "index.html"


}
