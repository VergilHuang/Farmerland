import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 1024})

        await page.goto("http://localhost:4173/articles")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="articles_view.png", full_page=True)

        await browser.close()

asyncio.run(run())
