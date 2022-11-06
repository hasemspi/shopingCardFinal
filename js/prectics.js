const Arraycart = [];

function displayProduct(){
    let totalPrice = 0; //total price defual deleration

    const totalProducts = document.getElementById("total-products"); //Table id
    totalProducts.innerText = Arraycart.length;

    const cartContainer = document.getElementById("products-cart");

    cartContainer.textContent = ''; //data clear 


//console.log(Arraycart);
    for(let i = 0; i < Arraycart.length; i++)
    {
    //console.log(Arraycart[i].pdName,Arraycart[i].pdPrice);
    // const productName = Arraycart[i].pdName;
    // const productPrice = Arraycart[i].pdPrice;

    // totalPrice = totalPrice + cart[i].pdPrice;
     totalPrice +=  cart[i].pdPrice;
     const finalResult = parseFloat(totalPrice)


    const tr = document.createElement("tr");//Table create 
    tr.innerHTML = `
    <th>${i+1}</th>
    <td>${Arraycart[i].pdName}</td>
    <td>${Arraycart[i].pdPrice}</td>
    `;
    cartContainer.appendChild(tr);
    }

//result data showing tr

const tr = document.createElement('tr');
tr.innerHTML = `
<th></th>
<td>Total Price</td>
<td>${finalResult}</td>
`;

cartContainer.appendChild(tr);

}



function addToCart(element) {

    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);


    const pdName = element.parentNode.parentNode.children[0].innerText;
    const pdPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const ObjecProduct = {
        pdName: pdName,
        pdPrice: parseInt(pdPrice)
    }

    Arraycart.push(ObjecProduct);
 //document.getElementById('total-products').innerText =Arraycart.length;
//displayProduct(Arraycart)
}