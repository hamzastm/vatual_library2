let cartBooksHTML = '';
let totalPrice = 0;


cart.forEach((item) =>{
    cartBooksHTML += 
    `
                <div class="item" id = "cart-item" >
                <img src="${item.image}" alt="book" height="300px" width="220px">
                    <div class = "book-detail">
                        <h3>اسم الكتاب: ${item.name}</h3>
                        <hr>
                        <div>
                            <h3>سعر الكتاب الواحد</h3><span class="price">$${item.price/100}</span>
                        </div>
                        <hr>
                        <div><h3>السعر الكلي (${item.price / 100} * ${item.qun})</h3><span id="price" class="price">$ ${item.price * item.qun / 100}</span></div>
                    </div>
                    <div class="amount">
                        <button class="dic"><span>-</span></button>
                        <input type="text" placeholder="${item.qun}" class="text-input-amount" id="text-input-amount">
                        <button class="inc"><span>+</span></button>
                    </div>
                    <button class="delete-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(125, 96, 80, 1);"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                    </button>
                </div>

    `
    totalPrice += (item.price/100)*item.qun;
})

document.querySelector('#FinalPrice').innerHTML = '$' +totalPrice;
document.querySelector('.items').innerHTML += cartBooksHTML;
cartBooksHTML = '';


document.querySelector('.ClearBtn').addEventListener("click",() =>{
    cart = [];
    document.querySelector('#FinalPrice').innerHTML = '';
    document.querySelector('.items').innerHTML =  `
    <span style = "font-size: 20px; color: var(--mainhover)">the cart is empty add at least one item to show!</span>
    `;
});