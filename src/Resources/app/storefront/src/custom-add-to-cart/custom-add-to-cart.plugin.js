import AddToCartPlugin from 'src/plugin/add-to-cart/add-to-cart.plugin';

export default class CustomAddToCartPlugin extends AddToCartPlugin {
    _shouldOpenOffcanvas() {
        // Return false so the item is added without opening the offcanvas cart
        console.log('Adding item to cart without opening offcanvas');
        return false;
    }
}
