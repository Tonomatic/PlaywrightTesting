// @ts-check
const { test, expect } = require('@playwright/test');

test('Check Job tracker', async ({ page }) => {
    await page.goto('https://www.trueup.io/');

    // Expect a title "to contain" a substring.
    await expect(page.locator('[src="/img/trueup_logo.svg"]')).toBeVisible();

    // Click on the MORE link
    await page.locator('[class="dropdown-toggle nav-link"]:has-text("MORE")').click();

    // Click the Layoff tracker
    await page.locator('[href="/layoffs"]').click();

    // Click the Job Trend
    await page.locator('[href="/job-trend"]').click();

    // Grab the number of job openings
    const jobOpenings = await page.locator('div:text-is("Open Jobs at Tech Companies") ~ div div >> nth = 0').innerText();

    // Return job openings
    console.log(jobOpenings);
});

test('Get all jobs posted within 3 days', async ({ page }) => {
    await page.goto('https://www.levels.fyi');

    // Expect Levels.fyi logo to be visible
    await expect(page.locator('.logo:has-text("Levels FYI Logo")')).toBeVisible();

    // Click on the jobs link
    await page.locator('a :text-is("Jobs")').click();

    // Fill in the Software Keyword
    await page.locator('[placeholder="Search by title, keyword or company"]').fill("Software Engineer");

    // Press enter
    await page.keyboard.press('Enter');

    // Click on the filter button and click Entry
    await page.locator('[type="button"] span:has-text("Level")').click();
    await page.locator('[for="Entry Level"]').click();

    // Exit out of the modal by clicking 0, 0 position
    await page.mouse.click(0, 0);

    // Click on the filter button for Date posted and click past 3 days
    await page.locator('span:has-text("Date Posted")').click();
    await page.locator('[for="3"]').click();

    // Exit out of the modal by clicking 0, 0 position
    await page.mouse.click(0, 0);

    // Click on the filter button for location and click United States
    await page.locator('span:has-text("Location")').click();
    await page.locator('[for="United States"]').click();

    // Exit out of the modal by clicking 0, 0 position
    await page.mouse.click(0, 0); 

    // 

});

test('Get all jobs posted today', async ({ page }) => {
    await page.goto('https://www.levels.fyi');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
