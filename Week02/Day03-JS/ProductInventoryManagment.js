// PRODUCT CLASS
class Product{
    static currentId = 1;
    #costPrice;

    constructor(name,category,price,quantity,costPrice=0){
        this.id =Product.generateId();
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.lastUpdated =new Date().toLocaleDateString();
        this.#costPrice = costPrice;
    }

    static generateId(){
        return `PRD${String(this.currentId++).padStart(5,"0")}`;
    }

    updateStock(newQuantity){
        this.quantity = newQuantity;
        this.lastUpdated =new Date().toLocaleDateString();
    }

    applyDiscount(percent){
        this.price =this.price-(this.price * percent / 100);
    }

    getDetails(){
        return `${this.name} - ₹${this.price}`;
    }
}

let productMap = new Map();
let categorySet = new Set();

let products = [
    new Product("Wireless Mouse","Electronics",1200,50),
    new Product("USB Cable", "Electronics",300, 100),
    new Product("Keyboard", "Electronics",2500,20),
    new Product("T-Shirt","Clothing",800,10),
    new Product("Jeans","Clothing",1500,5),
    new Product("Jacket","Clothing",3000,2),
    new Product("JavaScript Guide","Books",700,15),
    new Product("Notebook","Stationery",100,60)
];

products.forEach(product => {
    productMap.set(product.id,product);
    categorySet.add(product.category);
});


// RENDER CATEGORY DROPDOWN
function renderCategories(){
    const categoryFilter =document.getElementById("categoryFilter");
    categorySet.forEach(category => {
        categoryFilter.innerHTML += `
            <option value="${category}">
                ${category}
            </option>
        `;
    });
}
renderCategories();

// RENDER PRODUCTS
function renderProducts(productArray){
    const container =document.getElementById("productContainer");
    container.innerHTML = "";
    productArray.forEach(product => {

        let stockClass = "";
        if(product.quantity <= 5){
            stockClass = "low";
        }
        else if(product.quantity <= 20){
            stockClass = "medium";
        }
        else{
            stockClass = "high";
        }

        container.innerHTML += `
            <div class="product-card ${stockClass}">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ₹${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <p>${product.lastUpdated}</p>
                <button onclick="deleteProduct('${product.id}')">
                    Delete
                </button>
            </div>
        `;

    });
}


// ADD PRODUCT
document.getElementById("addBtn").addEventListener("click",()=>{
    const name =document.getElementById("name").value;
    const category =document.getElementById("category").value;
    const price =Number(document.getElementById("price").value);
    const quantity =Number(document.getElementById("quantity").value);
    const product =new Product(
        name,
        category,
        price,
        quantity
    );

    productMap.set(product.id,product);
    categorySet.add(category);

    renderProducts([...productMap.values()]);
    renderCategories();
    calculateInventoryValue();
    stockAlert();
    incrementOperation();
});


// DELETE PRODUCT
function deleteProduct(id){
    productMap.delete(id);

    renderProducts([...productMap.values()]);
    calculateInventoryValue();
    stockAlert();
    incrementOperation();
}


// INVENTORY VALUE
function calculateInventoryValue(){
    const total =[...productMap.values()].reduce((acc,product)=>{
        return acc+(product.price*product.quantity);
    },0);

    document.getElementById("inventoryValue").innerText = `₹${total}`;
}
calculateInventoryValue();


// FILTER PRODUCTS
document.getElementById("filterBtn").addEventListener("click",()=>{
    const search =document.getElementById("searchBox").value.toLowerCase();

    const category =document.getElementById("categoryFilter").value;

    const minPrice =Number(document.getElementById("minPrice").value);

    const maxPrice =Number(document.getElementById("maxPrice").value);

    let filtered =[...productMap.values()].filter(product=>{

        let matchSearch =product.name.toLowerCase().includes(search);
        let matchCategory =(category === "All"||product.category === category);

        let matchPrice =(!minPrice || product.price >= minPrice)
            &&
        (!maxPrice || product.price <= maxPrice);

        return (matchSearch && matchCategory && matchPrice);
    });

    renderProducts(filtered);
});


// LOW STOCK ALERT CALLBACK
function stockAlert(){
    const alertSection =document.getElementById("alertSection");
    alertSection.innerHTML = "";
    [...productMap.values()].forEach(product => {
        if(product.quantity <= 5)showAlert(product);
    });
}

function showAlert(product){
    document.getElementById("alertSection").innerHTML += `
        <div class="alert">
            Low Stock:
            ${product.name}
        </div>
    `;
}
stockAlert();

function operationCounter(){
    let count = 0;
    return function(){
        count++;
        document.getElementById("operationCount").innerText = count;
    };
}
let incrementOperation = operationCounter();


async function simulateAPICall(){
    try{
        document.getElementById("loading").classList.remove("hidden");
        let data = await new Promise(resolve=>{
            setTimeout(()=>{
                resolve(
                    [...productMap.values()]
                );
            },2000);
        });
        renderProducts(data);
    }
    catch(error){
        console.log(error);
    }
    finally{
        document.getElementById("loading").classList.add("hidden");
    }
}
simulateAPICall();


