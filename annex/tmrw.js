const puppeteer = require('puppeteer');

(async () => {
  console.log('Fetching the time slots...')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const annexUrl = 'https://tinyurl.com/y3nfb3xy'
  await page.goto(annexUrl, { waitUntil: 'networkidle0'})

  const TimeSlots = await page.evaluate(async () => {
    const time = new Date().getHours();
    const cached = document.querySelector('#offering-page-selected-long-date').textContent
    const allDates = Array.from(document.querySelector('.ui-datepicker-calendar').querySelectorAll('td'))

    if(time < 21) {
      allDates.forEach((date, i) => {
        if (date.classList.contains('ui-datepicker-today')){
            allDates[i+1].click()
          }
      })

      return new Promise((resolve, reject) => {
        var timer = setInterval(async () => {
          let title = document.querySelector('#offering-page-selected-long-date').textContent
          if(title != cached) {
            let slots = {}
            clearInterval(timer);
            const timeSlots = document.querySelectorAll('#offering-page-select-events-table tr');
            timeSlots.forEach((slot) => {
              const tds = slot.querySelectorAll('td')
              slots[tds[0].textContent.replace(/\n/g, '')] = tds[1].textContent.replace('Availability', '').replace('. Please make a different selection.', '').replace(/\n/g, '')
            })
            resolve(slots);
          }
        }, 200);
      })
    }
    else {
      const timeSlots = document.querySelectorAll('#offering-page-select-events-table tr');
      slots = {}
      timeSlots.forEach((slot) => {
        const tds = slot.querySelectorAll('td')
        slots[tds[0].textContent.replace(/\n/g, '')] = tds[1].textContent.replace('Availability', '').replace('. Please make a different selection.', '').replace(/\n/g, '')
      })
      return slots
    }

  });
  browser.close();
  console.log('\n============= Annex TimeSlots Tomorrow =============\n')
  console.log(TimeSlots)
})();



