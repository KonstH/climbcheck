const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const annexUrl = 'https://tinyurl.com/y3nfb3xy'
  await page.goto(annexUrl, { waitUntil: 'networkidle0'})

  const TimeSlots = await page.evaluate(() => {
    const time = new Date().getHours();
    if(time >= 21)
      return 'No more slots for today!'
    const timeSlots = document.querySelectorAll('#offering-page-select-events-table tr');
    slots = {}
    timeSlots.forEach((slot) => {
      const tds = slot.querySelectorAll('td')
      slots[tds[0].textContent.replace(/\n/g, '')] = tds[1].textContent.replace('Availability', '').replace('. Please make a different selection.', '').replace(/\n/g, '')
    })
    return slots
  });
  browser.close();
  console.log('\n============= Annex TimeSlots Today =============\n')
  console.log(TimeSlots)
})();



