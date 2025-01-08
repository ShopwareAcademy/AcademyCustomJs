import {expect, test} from './BaseTestFile';

function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test('Plugin test scenario.', async ({page, DefaultSalesChannel}) => {

    // Open the product detail page
    await page.goto(`${DefaultSalesChannel.url}`);

  // Listen for the alert dialog
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe("Seems like there's nothing more to see here.");
    await dialog.dismiss();
  });

  // Scroll to the bottom of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Wait for the alert to be shown
  await page.waitForTimeout(1000); // Adjust the timeout as needed
});
