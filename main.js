/*This is the list of products available*/
var data = [   
    {"name":"BED","price":225.0},
    {"name":"BENCH","price":29.99},
    {"name":"CHAIR","price":9.99},
    {"name":"COUCH","price":50.0},
    {"name":"PILLOW","price":5.0}
]

/*Onject that populates with the Shopping Cart Information*/

var Cart = [{"Product":"", "Quantity":""},]

/*Function to load the Products Catalog in the Website*/

function loadProductsData() {
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

    var ProductInput = document.getElementById("ProductInput").value;
    var QuantityInput = document.getElementById("QuantityInput").value;
    
    Cart.push({
      "Product":ProductInput,"Quantity":QuantityInput,});

    var i = 0;
    var dataList2 = document.getElementById("dataList2");
  
    refreshCart()

    while (i < Cart.length) {
      var listItem = document.createElement("section");
      listItem.classList.add("row");
  
      var Product = document.createElement("div");
      Product.classList.add("col-sm");
      Product.innerText = Cart[i].Product;
  
      var Quantity = document.createElement("div");
      Quantity.classList.add("col-sm");
      Quantity.innerText = Cart[i].Quantity;
    
      dataList2.appendChild(listItem);
      listItem.appendChild(Product);
      listItem.appendChild(Quantity);
      
      i++;
 
}
}

var OrderTotal = "$1500"; /*This variable will store the Orders Total Amount to be paid.*/ 

/*Function CheckOut was created to calculate the total the customer needs to pay but ran out of time. The time for the test is over =( */

function CheckOut(){
    var Total = document.getElementById("Total");
    Total.innerText=OrderTotal;
}


  