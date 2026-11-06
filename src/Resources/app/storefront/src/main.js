// Import all necessary Storefront plugins
import ExamplePlugin from './example-plugin/example-plugin.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;

PluginManager.register('ExamplePlugin', ExamplePlugin, '[data-example-plugin]');
PluginManager.override(
    'AddToCart',
    () => import('./custom-add-to-cart/custom-add-to-cart.plugin'),
    '[data-add-to-cart]'
);
