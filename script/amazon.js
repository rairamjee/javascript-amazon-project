let productHtml = ''
productElements = products.forEach((product) => {
    productHtml +=
        `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart js-add-to-cart-update" data-product-id=${product.id}>
            Add to Cart
          </button>
        </div>
`
});

document.querySelector('.products-grid').innerHTML = productHtml;
 let totalQuantity=0
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId
           
            if(cart.length === 0){
                cart.push({productId, quantity:1})
                totalQuantity=1

            }else{
                const existingProduct = cart.find((item) => item.productId === productId);
                
                if(existingProduct !== undefined){
                    existingProduct.quantity += 1;
                }else{
                    cart.push({productId, quantity:1})           
                }
                totalQuantity+=1
            }
            console.log(cart)

            document.querySelector('.cart-quantity').innerHTML=totalQuantity

            // if (cart.length === 0) {
            //     cart.push({  productId ,quantity: 1})
            //     console.log(cart)
            // } else {
            //     cart.forEach(item => {
            //         console.log(cart)
            //         if (item.productId === productId) {
            //             item.quantity += 1;
            //         }
            //         else {
            //             cart.push({
            //                 productId,
            //                 quantity: 1
            //             });

                        
            //         }
            //     })
            // }
            // let totalQuantity=0
            // cart.forEach(item=>{
            //     totalQuantity=item.quantity;
            // })
          
           // document.querySelector('.cart-quantity').innerHTML=totalQuantity
        })
    })


    // document.querySelector

    // document.querySelector('.js-add-to-cart-update').
    // let totalQuantity=0
    // function cartUpdate(){
    //     cart.forEach(item=>{
    //         totalQuantity+=item.quantity
    //     })

    //     document.querySelector('.cart-quantity').innerHTML=totalQuantity
    // }