import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    executablePath: '/home/aditya/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const dir = '/home/aditya/projects/onboarding-ux-design-improvement-/screenshots';

  // Landing page
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${dir}/landing.png`, fullPage: false });

  // Quick Start view
  const qsBtn = page.locator('button:has-text("Quick Start")');
  await qsBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${dir}/quickstart-intro.png`, fullPage: false });

  const dismiss1 = page.locator('button:has-text("Show me")');
  await dismiss1.click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${dir}/quickstart-editor.png`, fullPage: false });

  // Back to landing
  const backBtn1 = page.locator('button:has-text("Back")');
  await backBtn1.click();
  await page.waitForTimeout(300);

  // Full editor view
  const fullBtn = page.locator('button:has-text("Full Editor")');
  await fullBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${dir}/full-editor-intro.png`, fullPage: false });

  const dismiss2 = page.locator('button:has-text("Show me")');
  await dismiss2.click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${dir}/full-editor.png`, fullPage: false });

  // Back to landing
  const backBtn2 = page.locator('button:has-text("Back")');
  await backBtn2.click();
  await page.waitForTimeout(300);

  // Before view
  const beforeBtn = page.locator('button:has-text("Before")');
  await beforeBtn.click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${dir}/before-classic.png`, fullPage: false });

  await browser.close();
  console.log('All screenshots taken!');
})();