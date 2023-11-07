import puppeteer, {Browser, Page} from 'puppeteer';

describe("App.tsx", () => {
    let browser: Browser;
    let page: Page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            executablePath: 'chrome.exe',
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        page = await browser.newPage();
    });

    it("when click player card should show matches", async () => {
        await page.goto("http://localhost:3000");
        await page.waitForSelector(".players-container");
        await page.click(".player-container")
        const matchesCard = await page.waitForSelector(".matches-container");
        expect(matchesCard).not.toBeNull();
    });

    afterAll(() => browser.close());
});