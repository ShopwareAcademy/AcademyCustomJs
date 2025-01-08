import { test } from './BaseTestFile';

test('Plugin scroll to bottom scenario.', async ({ page, DefaultSalesChannel }) => {
  // Open the product detail page
  await page.goto('/');

  // Listen for the alert dialog and handle it if it appears
  const dialogPromise = page.waitForEvent('dialog').then(async dialog => {
    const message = dialog.message();

    if (message !== "Seems like there is nothing more to see here.") {
      throw new Error('Expected dialog message did not appear. Visual test(s) have failed - see logs for details.');
    }
    await dialog.dismiss(); // Dismiss the dialog
  });

  // Scroll to the bottom of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Wait for either the dialog or timeout
  await Promise.race([
    dialogPromise,
    page.waitForTimeout(2000).then(() => {
      throw new Error('No dialog appeared');
    }),
  ]);
});
