var slider = document.getElementById("sliderRangeDesconto");
var price_office = document.getElementById("Price_Office");
var discount = document.getElementById("Discount");
var price_clients = document.getElementById("value_clientes");
var dsc = document.getElementById("desc");
var comissao = document.getElementById("comissao");
var comissao_recorrente = document.getElementById("comissao_recorrente");
var sliderRangeIndicacao = document.getElementById("sliderRangeIndicacao");
var economia = document.getElementById("economia");
var ind = document.getElementById("indicacao");

var preco_escritorio;
// desconto de {5%  15% 25%}
var desconto;
var porcento;
var com_recorente;
var cal_economia;

slider.style.background = 'linear-gradient(to right, #0053FC 0%' + 50 + '%, #C1CEE8 ' + 50 + '%, #C1CEE8 100%)'
sliderRangeIndicacao.style.background = 'linear-gradient(to right, #0053FC 0%' + 17 + '%, #C1CEE8 ' + 17 + '%, #C1CEE8 100%)'


function Slider() {
    if (slider.value == 0) {
        var valor = (sliderRangeIndicacao.value-slider.min)/(sliderRangeIndicacao.max-slider.min)*100 - 5;
        sliderRangeIndicacao.style.background = 'linear-gradient(to right, #0053FC 0%' + valor + '%, #C1CEE8 ' + valor + '%, #C1CEE8 100%)'
        
        indicacao = sliderRangeIndicacao.value;
        porcento = 0.05;
        preco_escritorio = 996;
        desconto = preco_escritorio - (preco_escritorio * porcento);
        com_recorente = (desconto * 0.2) * indicacao;
        cal_economia = (preco_escritorio * porcento) * indicacao;

        var value = (slider.value-slider.min)/(slider.max-slider.min)*100
        slider.style.background = 'linear-gradient(to right, #0053FC 0%' + value + '%, #C1CEE8 ' + value + '%, #C1CEE8 100%)'
        
        price_office.innerHTML = preco_escritorio.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        discount.innerHTML = (preco_escritorio * porcento).toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        price_clients.innerHTML = desconto.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        dsc.innerHTML = "5%" + "<br>" + "desconto";
        comissao.innerHTML = "20%" + "<br>" + "comissão";
        comissao_recorrente.innerHTML = com_recorente.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        economia.innerHTML = cal_economia.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        ind.innerHTML = indicacao;

    } else if (slider.value == 5) {
        var valor = (sliderRangeIndicacao.value-slider.min)/(sliderRangeIndicacao.max-slider.min)*100 -3;
        sliderRangeIndicacao.style.background = 'linear-gradient(to right, #0053FC 0%' + valor + '%, #C1CEE8 ' + valor + '%, #C1CEE8 100%)'

        indicacao = sliderRangeIndicacao.value;
        porcento = 0.15;
        preco_escritorio = 996;
        desconto = preco_escritorio - (preco_escritorio * porcento);
        com_recorente = (desconto * 0.1) * indicacao;
        cal_economia = (preco_escritorio * porcento) * indicacao;

        var value = (slider.value-slider.min)/(slider.max-slider.min)*100
        slider.style.background = 'linear-gradient(to right, #0053FC 0%' + value + '%, #C1CEE8 ' + value + '%, #C1CEE8 100%)'

        price_office.innerHTML = preco_escritorio.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        discount.innerHTML = (preco_escritorio * porcento).toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        price_clients.innerHTML = desconto.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        dsc.innerHTML = "15%" + "<br>" + "desconto";
        comissao.innerHTML = "10%" + "<br>" + "comissão";
        comissao_recorrente.innerHTML = com_recorente.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        economia.innerHTML = cal_economia.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        ind.innerHTML = indicacao;

    } else if (slider.value == 10){
        var valor = (sliderRangeIndicacao.value-slider.min)/(sliderRangeIndicacao.max-slider.min)*100 - 3.8;
        sliderRangeIndicacao.style.background = 'linear-gradient(to right, #0053FC 0%' + valor + '%, #C1CEE8 ' + valor + '%, #C1CEE8 100%)'

        indicacao = sliderRangeIndicacao.value;
        porcento = 0.25;
        preco_escritorio = 996;
        desconto = preco_escritorio - (preco_escritorio * porcento);
        com_recorente = (desconto * 0) * indicacao;
        cal_economia = (preco_escritorio * porcento) * indicacao;

        var value = (slider.value-slider.min)/(slider.max-slider.min)*100
        slider.style.background = 'linear-gradient(to right, #0053FC 0%' + value + '%, #C1CEE8 ' + value + '%, #C1CEE8 100%)'

        price_office.innerHTML = preco_escritorio.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        discount.innerHTML = (preco_escritorio * porcento).toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        price_clients.innerHTML = desconto.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        dsc.innerHTML = "25%" + "<br>" + "desconto";
        comissao.innerHTML = "0%" + "<br>" + "comissão";
        comissao_recorrente.innerHTML = com_recorente.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        economia.innerHTML = cal_economia.toLocaleString("pt-br",{style: 'currency', currency: 'BRL'});
        ind.innerHTML = indicacao;

    }

}
