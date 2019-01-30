/*This is the list of products available*/
var data = [   
    {"name": "BED", "price": 225.0},
    {"name": "BENCH", "price": 29.99},
    {"name": "CHAIR", "price": 9.99},
    {"name": "COUCH", "price": 50.0},
    {"name": "PILLOW", "price": 5.0}
]

/* that populates with the Shopping Cart Information*/

var Cart = [];

function renderProductSelect(){
  let select = document.getElementById('productSelect');
  for (let  [index, product] of data.entries()) {
    let option = document.createElement('option');
    option.value = index;
    option.innerText = product.name;
    select.append(option);
  }
}

/*Function to load the Products Catalog in the Website*/

function loadProductsData() {
  renderProductSelect();
    var count = 0;
    var dataList1 = document.getElementById("dataList1");
  
    while (count < data.length) {
      var listItem = document.createElement("section");
      listItem.classList.add("row");
  
      var Product = document.createElement("div");
      Product.classList.add("col-sm");
      Product.innerText = data[count].name;
  
      var Price = document.createElement("div");
      Price.classList.add("col-sm");
      Price.innerText = data[count].price;
    
      dataList1.appendChild(listItem);
      listItem.appendChild(Product);
      listItem.appendChild(Price);
      
      count++;
    }
    }

function refreshCart() {
  var dataList = document.getElementById("dataList2");

  while (dataList.childElementCount > 1) {
    dataList.removeChild(dataList.lastChild);
  }
}


/*Function to add a product to the Shopping Cart*/
    
function addNewProduct() {

    
    Cart.push({
      "product": data[document.getElementById("productSelect").value],
      "quantity": parseInt(document.getElementById("QuantityInput").value)
    });

    console.log(Cart);

    var i = 0;
    var dataList2 = document.getElementById("dataList2");
  
    refreshCart()

    while (i < Cart.length) {
      var listItem = document.createElement("section");
      listItem.classList.add("row");
  
      var Product = document.createElement("div");
      Product.classList.add("col-sm");
      Product.innerText = Cart[i].product.name;
  
      var Quantity = document.createElement("div");
      Quantity.classList.add("col-sm");
      Quantity.innerText = Cart[i].quantity;
    
      dataList2.appendChild(listItem);
      listItem.appendChild(Product);
      listItem.appendChild(Quantity);
      
      i++;
 
}
}

var OrderTotal = "$1500"; /*This variable will store the Orders Total Amount to be paid.*/ 

/*Function CheckOut was created to calculate the total the customer needs to pay but ran out of time. The time for the test is over =( */

function CheckOut(){
  let OrderTotal = 0;
  for (const item of Cart) {
    OrderTotal += item.product.price * item.quantity;
  }

    var Total = document.getElementById("Total");
    Total.innerText= `$${OrderTotal}`;
}


  