# AcademyCustomJs

This plugin contains the reference implementation for the **Custom Storefront JavaScript** learning unit in the Shopware Academy **Frontend Development Essentials** learning path.

## Reference State

The `main` branch represents the final state of the learning unit. It demonstrates how to:

- Register a custom Storefront JavaScript plugin with the `PluginManager`.
- Attach the plugin to a Storefront template through a data attribute.
- Build Storefront JavaScript into distributable assets.
- Override the Storefront `AddToCart` plugin.
- Preserve asynchronous loading with a dynamic import.
- Add a product to the cart without opening the offcanvas cart.

The final state has been verified with **Shopware 6.7.16.0**.

This reference plugin intentionally uses one maintained final state instead of separate Git tags for intermediate steps.

## Configuration Before Customization

Shopware 6.7.16.0 already provides the `core.cart.openOffcanvasAfterAddToCart` configuration for controlling whether the offcanvas cart opens after adding a product.

In a real project, use the existing configuration when it meets the requirement. The JavaScript override in this plugin demonstrates the extension mechanism for cases where configuration alone is not sufficient.

The overridden `_shouldOpenOffcanvas()` method is private in Shopware Core. Recheck the implementation against the target Shopware version when upgrading.

## Install

Run the following commands from your Shopware project root.

**Shopware CLI:**

```bash
shopware-cli project console plugin:refresh
shopware-cli project console plugin:install AcademyCustomJs --activate --clearCache
shopware-cli project storefront-build
```

**Direct Shopware Console:**

```bash
bin/console plugin:refresh
bin/console plugin:install AcademyCustomJs --activate --clearCache
bin/console theme:compile
```

Run only one command variant.

## Verify the Final State

Test both examples in the Storefront:

- Open the start page and scroll to the bottom. An alert should appear.
- Add a product to the cart. The cart count should update without opening the offcanvas cart.

The success alert displayed after adding a product is controlled separately by `core.cart.openOffcanvasAfterAddToCart`. The JavaScript override alone does not add that template to the page.

## License

MIT License.

You may use this plugin in commercial and professional projects.
It is provided as an educational example and comes without a warranty and without support.

## Contributing

This plugin is part of the Shopware Academy curriculum.
