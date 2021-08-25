const pup = require('puppeteer');    // Library that allows automating actions on Google browsers
const XLSX = require('xlsx');    // Library that allows working with XLSX files

const excel = XLSX.readFile("C:\\wamp64\\www\\nav\\trackingKW.xlsx");    // Get the necessary data from the corresponding XLSX file
var nombreHoja = excel.SheetNames;
let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
var kwArr = [];
var domain = datos[0].Dominio;
var lang = datos[0].Idioma;
let i=0;
while(i>=0){
    try{
        kwArr.push(datos[i].Keywords)
        i++
    }catch(error){
            break
    }
}

for (let kw of kwArr){    // Get an array with all the domains that appear in the search results for each keyword 
    kw = kw.trim().replace(/[ ]{2,}/gi, ' ').split(" ").join("+");
    lang = lang.trim();
    domain = domain.trim();
    (async() => {
        const browser = await pup.launch();
        const page = await browser.newPage();
        await page.goto(`https://www.google.com/search?q=${kw}&hl=${lang}&num=100`);
        const txt = await page.evaluate(()=>{
            const urls = document.querySelectorAll(".yuRUbf > a");
            const domains = []
            for (let url of urls){
                const regex = /https?:\/\/(www\.)?([^\/]+)\//g;
                let urlRegex = String((url.href).match(regex));
                domains.push(urlRegex);
            }
            return domains;
        });
        // console.log(txt)
        // console.log(domain)
        const index = txt.indexOf(domain)+1;    // Show the position of the domain definded in the array for each keyword
        // console.log(index)
        console.log("\n- "+kw.split("+").join(" ")+" => "+index);
        await browser.close();
    })(); 
}