products = [
	{
		id: 1,
		name: "iPhone 12 Pro",
		type: "Golden",
		price: 999.0,
		quantity: 1,
		image: "/resources/Gold.png",
	},
	{
		id: 2,
		name: "Apple Watch",
		type: "Blue",
		price: 399.0,
		quantity: 1,
		image: "/resources/Apple-watch.png",
	},
	{
		id: 3,
		name: "iMac",
		type: "Green",
		price: 1199.0,
		quantity: 1,
		image: "/resources/iMac.png",
	},
];

const itemsInfo = document.getElementById("items-info");
const cartItems = document.getElementById("cart-items");
const subTotalHtml = document.getElementById("sub-total");
const taxHtml = document.getElementById("tax");
const totalHtml = document.getElementById("total");
const select = document.getElementById("select")

itemsInfo.innerHTML = `${products.length} ITEMS`;

let cartItemsHtml = "";
let subTotal = 0;
let total = 0;
const tax = 0.24;

products.map((product) => {
	cartItemsHtml += `
    <article class="cart-item">
        <aside class="item-image">
            <img
                src=${product.image}
                alt="item-image"
            />
        </aside>
        <div class="item-content">
            <div class="item-details">
                <div class="item-title">
                    <h2>${product.name}</h2>
                    <p>${product.type}</p>
                </div>
                <p class="quantity">x ${product.quantity}</p>
            </div>
            <div class="item-extra">
                <p class="price">$${product.price.toFixed(2)}</p>
                <button type="button" class="remove-btn">
                    &times;
                </button>
            </div>
        </div>
    </article>
    `;
});
cartItems.innerHTML = cartItemsHtml;

for (let i = 0; i < products.length; i++) {
	subTotal += products[i].quantity * products[i].price;
}

subTotalHtml.innerHTML = `$${subTotal.toFixed(2)}`;
taxHtml.innerHTML = `$${(subTotal * tax).toFixed(2)}`;
totalHtml.innerHTML = `$${(subTotal * (1 + tax)).toFixed(2)}`;
