let Suma = () => {

    var cafe = document.pedido.cafe.value;
    var medialunas = document.pedido.medialunas.value;
    var tostadas = document.pedido.tostadas.value;
    var exprimido = document.pedido.exprimido.value;
    var soda = document.pedido.soda.value;
    var total = 0;


    const priceCafe = 100;
    const priceMedialunas = 80;
    const priceTostadas = 120;
    const priceExprimido = 70;
    const priceSoda = 50;

    try {

        //input modal
        document.pedido.cafe2.value = cafe;
        document.pedido.medialunas2.value = medialunas;
        document.pedido.tostadas2.value = tostadas;
        document.pedido.exprimido2.value = exprimido;
        document.pedido.soda2.value = soda;


        cafe = cafe * priceCafe;
        medialunas = medialunas * priceMedialunas;
        tostadas = tostadas * priceTostadas;
        exprimido = exprimido * priceExprimido;
        soda = soda * priceSoda;
        total = cafe + medialunas + tostadas + exprimido + soda;

        document.pedido.gasto1.value = cafe;
        document.pedido.gasto2.value = medialunas;
        document.pedido.gasto3.value = tostadas;
        document.pedido.gasto4.value = exprimido;
        document.pedido.gasto5.value = soda;
        document.pedido.total.value = total;
        //input modal
        document.pedido.total2.value = total;


        console.log(total);


    }

    catch (e) { }
};
//input modal
function PasarValor() {

    document.getElementById("mozo2").value = document.getElementById("mozo").value;
    document.getElementById("mesa2").value = document.getElementById("mesa").value;

}




