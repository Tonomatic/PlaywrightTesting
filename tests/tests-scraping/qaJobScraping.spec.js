// @ts-check
const { test, expect } = require('@playwright/test');
const calculateKeywordScore = require('../Helpers/functions.js');
const {positiveQAKeywords, negativeQAKeywords} = require('../Helpers/filterKeys.js');

// Test within 3 days
test('Get all QA jobs posted within 3 days', async ({ page }) => {
    // Set default timeout to 10 seconds rather than 5
    page.setDefaultTimeout(10 * 1000);

    // Navigate to page
    await page.goto('https://www.levels.fyi/jobs?from=subnav');

    // Close Moda
    await page.locator('[aria-label="Close"][class*="closeButton"]').click();

    // Fill in the Software Keyword
    await page.locator('[placeholder="Search by title, keyword or company"]').fill("QA Engineer");

    // Press enter
    await page.keyboard.press('Enter');

    // Click on the filter button and click Entry
    await page.locator('[type="button"] span:has-text("Level")').click();
    await page.locator('[for="Entry Level"]').click();

    // Exit out of the modal by clicking 0, 0 position
    await page.mouse.click(0, 0);

    // Close Message Modal
    await expect(page.locator('a[aria-label="Open chat"] [data-id="new_messages"] span span span').first()).toBeVisible();
    await page.locator('a[aria-label="Open chat"] [data-id="new_messages"] span span span').first().click();
    await page.waitForTimeout(3000);

    // Click on the filter button for Date posted and click past 3 days
    await page.locator('span:has-text("Date Posted")').first().click();
    await page.locator('[for="3"]').click({ force: true });

    // Exit out of the modal by clicking 0, 0 position
    await page.mouse.click(0, 0);

    // Click on the filter button for location and click United States
    await page.locator('span:text-is("Location")').click();
    await page.locator('[for="United States"]').click();

    // Exit out of the modal by clicking 0, 0 position
    await page.mouse.click(0, 0);

    // Sort by Date Posted

});

// test('Get all jobs posted today', async ({ page }) => {
//     await page.goto('https://www.levels.fyi');

//     // Expect a title "to contain" a substring.
//     await expect(page.locator('.logo:has-text("Levels FYI Logo")')).toBeVisible();
// });
