var company_legalization = document.getElementById("company_legalization");
var virtual_office = document.getElementById("virtual-office");
var meeting = document.getElementById("meeting_room");
var office = document.getElementById("office");
var preco_smart;
var preco_silver;
var preco_gold;

office.innerHTML = "Legalização";

var planOffice = document.getElementById("escritorioVirtualPlan");
var planOffice2 = document.getElementById("escritorioVirtualPlan2");
var planOffice3 = document.getElementById("escritorioVirtualPlan3");

var planLegalization = document.getElementById("legalizacaoEmpresaPlan");
var planLegalization2 = document.getElementById("legalizacaoEmpresaPlan2");
var planLegalization3 = document.getElementById("legalizacaoEmpresaPlan3");

var planMeeting = document.getElementById("salasReuniaoPlan");
var planMeeting2 = document.getElementById("salasReuniaoPlan2");
var planMeeting3 = document.getElementById("salasReuniaoPlan3");


virtual_office.addEventListener("click", e => {
    e.preventDefault();
    
    console.log(e)

    

    if (planOffice.id == "escritorioVirtualPlan") {
        office.innerHTML = "Legalização"

        document.getElementById("office_vt").classList.remove("cor-disable");
        document.getElementById("busLeg").classList.add("cor-disable");
        document.getElementById("meeting_at").classList.add("cor-disable");

        document.getElementById("busLeg_txt").classList.add("cor-disable");
        document.getElementById("office_txt").classList.remove("cor-disable");
        document.getElementById("meeting_txt").classList.add("cor-disable");

        document.getElementById("legalizacaoEmpresaPlan").classList.replace("active-item", "disable-item");

        document.getElementById("salasReuniaoPlan").classList.replace("active-item", "disable-item");
 
                planOffice.classList.replace("disable-item", "active-item");
        planOffice2.classList.replace("disable-item", "active-item");
        document.getElementById("prices-values").style.maxHeight = "100%";
        virtual_office.classList.add("active-price-item");
        company_legalization.classList.remove("active-price-item");
        meeting.classList.remove("active-price-item");
    }

})

company_legalization.addEventListener("click", e => {
    e.preventDefault();
    
    console.log(e)

    if (planLegalization.id == "legalizacaoEmpresaPlan" ) {
        office.innerHTML = "Registro de Marca"
        
        document.getElementById("busLeg").classList.remove("cor-disable");
        document.getElementById("office_vt").classList.add("cor-disable");
        document.getElementById("meeting_at").classList.add("cor-disable");

        document.getElementById("busLeg_txt").classList.remove("cor-disable");
        document.getElementById("office_txt").classList.add("cor-disable");
        document.getElementById("meeting_txt").classList.add("cor-disable");

        document.getElementById("escritorioVirtualPlan").classList.replace("active-item", "disable-item");
        document.getElementById("escritorioVirtualPlan2").classList.replace("active-item", "disable-item");
        document.getElementById("salasReuniaoPlan").classList.replace("active-item", "disable-item");

        planLegalization.classList.replace("disable-item", "active-item");
       
        virtual_office.classList.remove("active-price-item");
        company_legalization.classList.add("active-price-item");
        meeting.classList.remove("active-price-item");
        document.getElementById("prices-values").style.maxHeight = "40vh";
    }

})

meeting.addEventListener("click", e => {
    e.preventDefault();

    if (planMeeting.id == "salasReuniaoPlan" ) {
        office.innerHTML = "Escritório Virtual"

        document.getElementById("meeting_at").classList.remove("cor-disable");
        document.getElementById("office_vt").classList.add("cor-disable");
        document.getElementById("busLeg").classList.add("cor-disable");

        document.getElementById("meeting_txt").classList.remove("cor-disable");
        document.getElementById("office_txt").classList.add("cor-disable");
        document.getElementById("busLeg_txt").classList.add("cor-disable");

        document.getElementById("escritorioVirtualPlan").classList.replace("active-item", "disable-item");
        document.getElementById("escritorioVirtualPlan2").classList.replace("active-item", "disable-item");

        document.getElementById("legalizacaoEmpresaPlan").classList.replace("active-item", "disable-item");

        planMeeting.classList.replace("disable-item", "active-item");
        document.getElementById("prices-values").style.maxHeight = "40vh";
      
        virtual_office.classList.remove("active-price-item");
        company_legalization.classList.remove("active-price-item");
        meeting.classList.add("active-price-item");
    }

})




