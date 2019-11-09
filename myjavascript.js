var imageFood = ["url(img/food/chicken.jpg)", "url(img/food/chickenbake.jpg)", "url(img/food/riceroll.jpg)", 
                "url(img/food/satay.jpg)", "url(img/food/seafood.jpg)", "url(img/food/soup.jpg)", 
                "url(img/food/soup2.jpg)", "url(img/food/steak.jpg)", "url(img/food/sushi.jpg)", 
                "url(img/food/turkey.jpg)" ];

var imageDrink = ["url(img/drink/blacktea.jpg)", "url(img/drink/chocolate.jpg)", "url(img/drink/coffee.jpg)",
                "url(img/drink/coffee2.jpg)", "url(img/drink/lemonade.jpg)", "url(img/drink/milkshake.jpg)", 
                "url(img/drink/orange.jpg)", "url(img/drink/tea.jpg)", "url(img/drink/teaberry.jpg)", 
                "url(img/drink/teacherry.jpg)"];

var imageSnack = ["url(img/snack/bun.jpg)", "url(img/snack/cake.jpg)", "url(img/snack/cupcake.jpg)", 
                "url(img/snack/dumpling.jpg)", "url(img/snack/food6.jpg)", "url(img/snack/food7.jpg)", 
                "url(img/snack/icecream.jpg)", "url(img/snack/icecream2.jpg)", "url(img/snack/muffin.jpg)", 
                "url(img/snack/onigiri.jpg)",];

var food = ["Ayam Kecap", "Ayam Bakar", "Rice Roll", "Satay", "Seafood", 
                "Egg Soup", "Hot Pot", "Steak", "Sushi Roll", "Baked Turkey"];

var drink = ["Black Tea", "Chocolate", "Coffee", "Coffee Latte", "Lemonade", 
                "Milkshake", "Orange Juice", "Jasmine Tea", "Berry Tea", "Cherry Tea"];

var snack = ["bun", "cake", "cupcake", "dumpling", "food6", 
                "food7", "icecream", "icecream2", "muffin", "onigiri"];

var qtyFood = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var qtyDrink = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var qtySnack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var hargaFood = [30, 40, 0, 0, 0, 0, 0, 0, 0, 0];
var hargaDrink = [15, 40, 0, 0, 0, 0, 0, 0, 0, 0];
var hargaSnack = [30, 40, 0, 0, 0, 0, 0, 0, 0, 0];

var totalhargaFood = ["Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0"];
var totalhargaDrink = ["Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0"];


x = Math.floor(Math.random() * 10);

$(document).ready(function(){
    document.getElementById("carousel1").style.backgroundImage = imageFood[x];
    document.getElementById("carousel2").style.backgroundImage = imageDrink[x];
    document.getElementById("carousel3").style.backgroundImage = imageSnack[x];
});

$(document).ready(function(){
    $("#theTarget").skippr(
        {
            transition: 'slide',
            speed: 1000,
            easing: 'easeOutQuart',
            navType: 'bubble',
            childrenElementType: 'div',
            arrows: true,
            autoPlay: true,
            autoPlayDuration: 3000,
            keyboardOnAlways: true,
            hidePrevious: false
        }
    );
});

jQuery(function($){
    
    $('body').on('click', '.trigger1', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal1').modal().open();
        $('#modal1').ready(function(){
            $('#qty1').text(qtyFood[0]);
            
            $('#total1').text((qtyFood[0] == 0) ? "Rp.0" : totalhargaFood[0]);

            var value = parseInt($('#qty1').text());

            $('#plusqty1').click(function(){
                $('#qty1').text( ++value );
                // qtys[0] = ++value;
                qtyFood[0] = value;
                var temp = value * hargaFood[0];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[0] = temp;
                $('#total1').text((qtyFood[0] == 0) ? "Rp.0" : totalhargaFood[0]);
            });

            $('#minusqty1').click( function(){
                $('#qty1').text((value - 1<0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[0] = value;
                var temp = value * hargaFood[0];
                temp = "Rp." + temp + ".000";
                totalhargaFood[0] = temp;
                $('#total1').text((qtyFood[0] == 0) ? "Rp.0" : totalhargaFood[0]);
            });
        });
        // document.getElementById("qty1").innerHTML = qtys[0];
    });
    $('.modal .close').on('click', function(e){
        e.preventDefault();
        $.modal().close();
    });
    $('.modal .more-toggle').on('click', function(e){
        e.stopPropagation();
        $('.modal .more').toggle();
    });
});

jQuery(function($){
    $('body').on('click', '.trigger2', function(e){
        e.preventDefault();
        $('#modal2').modal().open();
        $('#modal2').ready(function(){
            $('#qty2').text(qtyFood[1]);
            $('#total2').text((qtyFood[1] == 0) ? "Rp.0" : totalhargaFood[1]);
            var value2 = parseInt($('#qty2').text());;
            $('#plusqty2').click(function(){
                $('#qty2').text( ++value2 )
                qtyFood[1] = value2;
                var temp = value2 * hargaFood[1];
                temp = "Rp." + temp + ".000";
                totalhargaFood[1] = temp;
                $('#total2').text((qtyFood[1] == 0) ? "Rp.0" : totalhargaFood[1]);
            });

            $('#minusqty2').click( function(){
                $('#qty2').text((value2 - 1 < 0) ? value2 : --value2)
                qtyFood[1] = value2;
                var temp = value2 * hargaFood[1];
                temp = "Rp." + temp + ".000";
                totalhargaFood[1] = temp;
                $('#total2').text((qtyFood[1] == 0) ? "Rp.0" : totalhargaFood[1]);
            });
        });
    });
    $('.modal .close').on('click', function(e){
        e.preventDefault();
        $.modal().close();
    });
    $('.modal .more-toggle').on('click', function(e){
        e.stopPropagation();
        $('.modal .more').toggle();
    });
});

jQuery(function($){
    $('body').on('click', '.trigger11', function(e){
        e.preventDefault();
        $('#modal11').modal().open();
        $('#modal11').ready(function(){
            $('#qty11').text(qtyDrink[0]);
            $('#total11').text((qtyDrink[0] == 0) ? "Rp.0" : totalhargaDrink[0]);
            var value2 = parseInt($('#qty11').text());;

            $('#plusqty11').click(function(){
                $('#qty11').text( ++value2 )
                qtyDrink[0] = value2;
                var temp = value2 * hargaDrink[0];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[0] = temp;
                $('#total11').text((qtyDrink[0] == 0) ? "Rp.0" : totalhargaDrink[0]);
            });

            $('#minusqty11').click( function(){
                $('#qty11').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[0] = value2;
                var temp = value2 * hargaDrink[0];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[0] = temp;
                $('#total11').text((qtyDrink[0] == 0) ? "Rp.0" : totalhargaDrink[0]);
            });
        });
    });
    $('.modal .close').on('click', function(e){
        e.preventDefault();
        $.modal().close();
    });
    $('.modal .more-toggle').on('click', function(e){
        e.stopPropagation();
        $('.modal .more').toggle();
    });
});


$(document).ready(function(){
    $(".addButton").click(function(){
        document.getElementById("menu").innerHTML = "";
        document.getElementById("nota").style.display="none";

        temp = '';
        total = 0;
        for (let index = 0; index < qtyFood.length; index++) {
            if(qtyFood[index] != 0){
                temp += '<div> <h4> ' + food[index] + '</h4> <h4 class="notaqty">' + qtyFood[index] + '</h4> <h4 style="float: right;">' + totalhargaFood[index] + '</h4> </div>'
                total += qtyFood[index] * hargaFood[index]
                document.getElementById("nota").style.display="block"
            }
        }

        for (let index = 0; index < qtyDrink.length; index++) {
            if(qtyDrink[index] != 0){
                temp += '<div> <h4> ' + drink[index] + '</h4> <h4 class="notaqty">' + qtyDrink[index] + '</h4> <h4 style="float: right;">' + totalhargaDrink[index] + '</h4> </div>'
                total += qtyDrink[index] * hargaDrink[index]
                document.getElementById("nota").style.display="block"
            }
        }
        
        document.getElementById("menu").innerHTML = temp;

        temp2 = '<div> <h4 class="notaqty"> Total Harga </h4> <h4 style="float: right;"> Rp.' + total + '.000</h4> </div>'
        document.getElementById("totalharganota").innerHTML = temp2;
    });
});
