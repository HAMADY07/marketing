document.addEventListener("DOMContentLoaded", function () {
    const cart = [];

    function addToCart(item) {
        cart.push(item);
        alert(`${item} a été ajouté au panier.`);
    }

    window.addToCart = addToCart;
});
