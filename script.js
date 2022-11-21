const elForm = document.querySelector(".js-form");
const elSelection = document.querySelector(".js-select");
const elList = document.querySelector(".time-list");
const elTemplate = document.querySelector(".js-temp").content;
const elTemplateWeek = document.querySelector(".js-temp-week").content;
const elBtnDay = document.querySelector(".js-btn-day");
const elBtnWeek = document.querySelector(".js-btn-week");
const elBtnMonth = document.querySelector(".js-btn-month");
const GET_TIME_API = "https://islomapi.uz/api/present/day?region=Toshkent"

function renderTimes(obj) {
    elList.innerHTML = ""
    const elTemplateClone = elTemplate.cloneNode("true");
    elTemplateClone.querySelector(".namoz-vaqti").textContent = obj.times.tong_saharlik;
    elTemplateClone.querySelector(".namoz-vaqti1").textContent = obj.times.quyosh;
    elTemplateClone.querySelector(".namoz-vaqti2").textContent = obj.times.peshin;
    elTemplateClone.querySelector(".namoz-vaqti3").textContent = obj.times.asr;
    elTemplateClone.querySelector(".namoz-vaqti4").textContent = obj.times.shom_iftor;
    elTemplateClone.querySelector(".namoz-vaqti5").textContent = obj.times.hufton;
    
    
    elList.appendChild(elTemplateClone)
}

async function getTime(url) {
    try {
        const res = await fetch(url);
        
        const data = await res.json();
        renderTimes(data);
    } catch (error) {
        console.log(error);
    }
}

getTime(GET_TIME_API)

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    const newSelectValue = elSelection.value;
    
    const GET_TIME_API = `https://islomapi.uz/api/present/day?region=${newSelectValue}`;
    
    getTime(GET_TIME_API);
    
    
})

elBtnDay.addEventListener("click", function(){
    const newSelectValue = elSelection.value;
    
    const GET_TIME_API = `https://islomapi.uz/api/present/day?region=${newSelectValue}`;
    
    getTime(GET_TIME_API);
})

elBtnWeek.addEventListener("click", function(){
    const elTemplateWeekClone = elTemplateWeek.cloneNode("true");
    const newSelectValue = elSelection.value;
    
    const GET_TIME_API = `https://islomapi.uz/api/present/week?region=${newSelectValue}`;
    async function getTime1(url) {
        try {
            const res = await fetch(url);
            
            const data = await res.json();
            let i = 0
            
            elList.innerHTML = "";
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[0].times.tong_saharlik;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[0].times.quyosh;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[0].times.peshin;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[0].times.asr;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[0].times.shom_iftor;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[0].times.hufton;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[1].times.tong_saharlik;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[1].times.quyosh;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[1].times.peshin;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[1].times.asr;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[1].times.shom_iftor;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[1].times.hufton;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[2].times.tong_saharlik;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[2].times.quyosh;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[2].times.peshin;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[2].times.asr;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[2].times.shom_iftor;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[2].times.hufton;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[3].times.tong_saharlik;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[3].times.quyosh;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[3].times.peshin;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[3].times.asr;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[3].times.shom_iftor;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[3].times.hufton;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[4].times.tong_saharlik;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[4].times.quyosh;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[4].times.peshin;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[4].times.asr;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[4].times.shom_iftor;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[4].times.hufton;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[5].times.tong_saharlik;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[5].times.quyosh;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[5].times.peshin;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[5].times.asr;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[5].times.shom_iftor;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[5].times.hufton;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[6].times.tong_saharlik;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[6].times.quyosh;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[6].times.peshin;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[6].times.asr;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[6].times.shom_iftor;
            elTemplateWeekClone.querySelectorAll(".namoz-vaqtii")[i++].textContent = data[6].times.hufton;

            elList.appendChild(elTemplateWeekClone);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    
    getTime1(GET_TIME_API);
})