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

var food = ["Ayam Kecap", "Ayam Bakar", "Rice Roll", "Satay", "Spicy Steamed Crab", 
                "Egg Soup", "Hot Pot", "Beef Steak", "Makizushi", "Baked Turkey"];

var drink = ["Black Tea", "Hot Chocolate", "Coffee", "Coffee Latte", "Lemonade", 
                "Milkshake", "Orange Juice", "Jasmine Tea", "Berry Tea", "Cherry Tea"];

var snack = ["Fried Bun", "Chocolate Cake", "Cupcake", "Dumpling", "Cupcake Mini", 
                "Macaroons", "Ice Cream", "Berry Ice Cream", "Chocolate Muffin", "Onigiri"];

var qtyFood = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var qtyDrink = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var qtySnack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var hargaFoodawal = [30, 40, 35, 25, 50, 25, 30, 45, 25, 50];
var hargaDrinkawal = [15, 20, 25, 25, 20, 15, 17, 20, 22, 25];
var hargaSnackawal = [20, 20, 15, 20, 15, 25, 20, 25, 15, 20];

var hargaFood = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var hargaDrink = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var hargaSnack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var totalhargaFood = ["Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0"];
var totalhargaDrink = ["Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0"];
var totalhargaSnack = ["Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0", "Rp.0"];


x = Math.floor(Math.random() * 10);
y = Math.floor(Math.random() * 10);
z = Math.floor(Math.random() * 10);
randomnomormeja = Math.floor(Math.random() * 20) + 1;
randomnomornota = Math.floor(Math.random() * 70) + 1;

$(document).ready(function(){
    document.getElementById("carousel1").style.backgroundImage = imageFood[x];
    document.getElementById("carousel2").style.backgroundImage = imageDrink[y];
    document.getElementById("carousel3").style.backgroundImage = imageSnack[z];

    for (let index = 0; index < hargaFoodawal.length; index++) {
        if(index == x){
            hargaFood[index] = 20;
        }
        else{
            hargaFood[index] = hargaFoodawal[index];
        }
    }

    for (let index = 0; index < hargaDrinkawal.length; index++) {
        if(index == y){
            hargaDrink[index] = 10;
        }
        else{
            hargaDrink[index] = hargaDrinkawal[index];
        }
    }

    for (let index = 0; index < hargaSnackawal.length; index++) {
        if(index == z){
            hargaSnack[index] = 10;
        }
        else{
            hargaSnack[index] = hargaSnackawal[index];
        }
    }

    $('#nomormeja').text("Nomor Meja : " + randomnomormeja);
    $('#nomornota').text("Nomor Nota : " + randomnomornota);

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
            if(x == 0){
                $('#harga1').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga1').css("color", "darkred")
            }
            
            $('#qty1').text(qtyFood[0]);
            
            $('#total1').text((qtyFood[0] == 0) ? "Rp. 0" : totalhargaFood[0]);

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
            if(x == 1){
                $('#harga2').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga2').css("color", "darkred")
            }
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
    
    $('body').on('click', '.trigger3', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal3').modal().open();
        $('#modal3').ready(function(){
            if(x == 2){
                $('#harga3').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga3').css("color", "darkred")
            }
            
            $('#qty3').text(qtyFood[2]);
            
            $('#total3').text((qtyFood[2] == 0) ? "Rp. 0" : totalhargaFood[2]);

            var value = parseInt($('#qty3').text());

            $('#plusqty3').click(function(){
                $('#qty3').text( ++value );
                // qtys[0] = ++value;
                qtyFood[2] = value;
                var temp = value * hargaFood[2];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[2] = temp;
                $('#total3').text((qtyFood[2] == 0) ? "Rp.0" : totalhargaFood[2]);
            });

            $('#minusqty3').click( function(){
                $('#qty3').text((value - 1 < 0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[2] = value;
                var temp = value * hargaFood[2];
                temp = "Rp." + temp + ".000";
                totalhargaFood[2] = temp;
                $('#total3').text((qtyFood[2] == 0) ? "Rp.0" : totalhargaFood[2]);
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
    
    $('body').on('click', '.trigger4', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal4').modal().open();
        $('#modal4').ready(function(){
            if(x == 3){
                $('#harga4').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga4').css("color", "darkred")
            }
            
            $('#qty4').text(qtyFood[3]);
            
            $('#total4').text((qtyFood[3] == 0) ? "Rp. 0" : totalhargaFood[3]);

            var value = parseInt($('#qty4').text());

            $('#plusqty4').click(function(){
                $('#qty4').text( ++value );
                // qtys[0] = ++value;
                qtyFood[3] = value;
                var temp = value * hargaFood[3];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[3] = temp;
                $('#total4').text((qtyFood[3] == 0) ? "Rp.0" : totalhargaFood[3]);
            });

            $('#minusqty4').click( function(){
                $('#qty4').text((value - 1 < 0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[3] = value;
                var temp = value * hargaFood[3];
                temp = "Rp." + temp + ".000";
                totalhargaFood[3] = temp;
                $('#total4').text((qtyFood[3] == 0) ? "Rp.0" : totalhargaFood[3]);
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
    
    $('body').on('click', '.trigger5', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal5').modal().open();
        $('#modal5').ready(function(){
            if(x == 4){
                $('#harga5').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga5').css("color", "darkred")
            }
            
            $('#qty5').text(qtyFood[4]);
            
            $('#total5').text((qtyFood[4] == 0) ? "Rp. 0" : totalhargaFood[4]);

            var value = parseInt($('#qty5').text());

            $('#plusqty5').click(function(){
                $('#qty5').text( ++value );
                // qtys[0] = ++value;
                qtyFood[4] = value;
                var temp = value * hargaFood[4];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[4] = temp;
                $('#total5').text((qtyFood[4] == 0) ? "Rp.0" : totalhargaFood[4]);
            });

            $('#minusqty5').click( function(){
                $('#qty5').text((value - 1 < 0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[4] = value;
                var temp = value * hargaFood[4];
                temp = "Rp." + temp + ".000";
                totalhargaFood[4] = temp;
                $('#total5').text((qtyFood[4] == 0) ? "Rp.0" : totalhargaFood[4]);
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
    
    $('body').on('click', '.trigger6', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal6').modal().open();
        $('#modal6').ready(function(){
            if(x == 5){
                $('#harga6').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga6').css("color", "darkred")
            }
            
            $('#qty6').text(qtyFood[5]);
            
            $('#total6').text((qtyFood[5] == 0) ? "Rp. 0" : totalhargaFood[5]);

            var value = parseInt($('#qty6').text());

            $('#plusqty6').click(function(){
                $('#qty6').text( ++value );
                // qtys[0] = ++value;
                qtyFood[5] = value;
                var temp = value * hargaFood[5];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[5] = temp;
                $('#total6').text((qtyFood[5] == 0) ? "Rp.0" : totalhargaFood[5]);
            });

            $('#minusqty6').click( function(){
                $('#qty6').text((value - 1 < 0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[5] = value;
                var temp = value * hargaFood[5];
                temp = "Rp." + temp + ".000";
                totalhargaFood[5] = temp;
                $('#total6').text((qtyFood[5] == 0) ? "Rp.0" : totalhargaFood[5]);
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
    
    $('body').on('click', '.trigger7', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal7').modal().open();
        $('#modal7').ready(function(){
            if(x == 6){
                $('#harga7').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga7').css("color", "darkred")
            }
            
            $('#qty7').text(qtyFood[6]);
            
            $('#total7').text((qtyFood[6] == 0) ? "Rp. 0" : totalhargaFood[6]);

            var value = parseInt($('#qty7').text());

            $('#plusqty7').click(function(){
                $('#qty7').text( ++value );
                // qtys[0] = ++value;
                qtyFood[6] = value;
                var temp = value * hargaFood[6];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[6] = temp;
                $('#total7').text((qtyFood[6] == 0) ? "Rp.0" : totalhargaFood[6]);
            });

            $('#minusqty7').click( function(){
                $('#qty7').text((value - 1 < 0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[6] = value;
                var temp = value * hargaFood[6];
                temp = "Rp." + temp + ".000";
                totalhargaFood[6] = temp;
                $('#total7').text((qtyFood[6] == 0) ? "Rp.0" : totalhargaFood[6]);
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
    
    $('body').on('click', '.trigger8', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal8').modal().open();
        $('#modal8').ready(function(){
            if(x == 7){
                $('#harga8').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga8').css("color", "darkred")
            }
            
            $('#qty8').text(qtyFood[7]);
            
            $('#total8').text((qtyFood[7] == 0) ? "Rp. 0" : totalhargaFood[7]);

            var value = parseInt($('#qty8').text());

            $('#plusqty8').click(function(){
                $('#qty8').text( ++value );
                // qtys[0] = ++value;
                qtyFood[7] = value;
                var temp = value * hargaFood[7];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[7] = temp;
                $('#total8').text((qtyFood[7] == 0) ? "Rp.0" : totalhargaFood[7]);
            });

            $('#minusqty8').click( function(){
                $('#qty8').text((value - 1 < 0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[7] = value;
                var temp = value * hargaFood[7];
                temp = "Rp." + temp + ".000";
                totalhargaFood[7] = temp;
                $('#total8').text((qtyFood[7] == 0) ? "Rp.0" : totalhargaFood[7]);
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
    
    $('body').on('click', '.trigger9', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal9').modal().open();
        $('#modal9').ready(function(){
            if(x == 8){
                $('#harga9').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga9').css("color", "darkred")
            }
            
            $('#qty9').text(qtyFood[8]);
            
            $('#total9').text((qtyFood[8] == 0) ? "Rp. 0" : totalhargaFood[8]);

            var value = parseInt($('#qty9').text());

            $('#plusqty9').click(function(){
                $('#qty9').text( ++value );
                // qtys[0] = ++value;
                qtyFood[8] = value;
                var temp = value * hargaFood[8];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[8] = temp;
                $('#total9').text((qtyFood[8] == 0) ? "Rp.0" : totalhargaFood[8]);
            });

            $('#minusqty9').click( function(){
                $('#qty9').text((value - 1 < 0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[8] = value;
                var temp = value * hargaFood[8];
                temp = "Rp." + temp + ".000";
                totalhargaFood[8] = temp;
                $('#total9').text((qtyFood[8] == 0) ? "Rp.0" : totalhargaFood[8]);
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
    
    $('body').on('click', '.trigger10', function(e){
        e.preventDefault();
        // document.getElementById("qty1").innerHTML = qtys[0];
        $('#modal10').modal().open();
        $('#modal10').ready(function(){
            if(x == 9){
                $('#harga10').html("Rp. 20.000 <i class='fas fa-tags'></i>");
                $('#harga10').css("color", "darkred")
            }
            
            $('#qty10').text(qtyFood[9]);
            
            $('#total10').text((qtyFood[9] == 0) ? "Rp. 0" : totalhargaFood[9]);

            var value = parseInt($('#qty10').text());

            $('#plusqty10').click(function(){
                $('#qty10').text( ++value );
                // qtys[0] = ++value;
                qtyFood[9] = value;
                var temp = value * hargaFood[9];
                temp = "Rp." + temp + ".000";
                
                totalhargaFood[9] = temp;
                $('#total10').text((qtyFood[9] == 0) ? "Rp.0" : totalhargaFood[9]);
            });

            $('#minusqty10').click( function(){
                $('#qty10').text((value - 1 < 0)?value:--value)
                // qtys[0] = +(value - 1<0)?value:--value;
                qtyFood[9] = value;
                var temp = value * hargaFood[9];
                temp = "Rp." + temp + ".000";
                totalhargaFood[9] = temp;
                $('#total10').text((qtyFood[9] == 0) ? "Rp.0" : totalhargaFood[9]);
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
    $('body').on('click', '.trigger11', function(e){
        e.preventDefault();
        $('#modal11').modal().open();
        $('#modal11').ready(function(){
            if(y == 0){
                $('#harga11').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga11').css("color", "darkred")
            }
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

jQuery(function($){
    $('body').on('click', '.trigger12', function(e){
        e.preventDefault();
        $('#modal12').modal().open();
        $('#modal12').ready(function(){
            if(y == 1){
                $('#harga12').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga12').css("color", "darkred")
            }
            $('#qty12').text(qtyDrink[1]);
            $('#total12').text((qtyDrink[1] == 0) ? "Rp.0" : totalhargaDrink[1]);
            var value2 = parseInt($('#qty12').text());;

            $('#plusqty12').click(function(){
                $('#qty12').text( ++value2 )
                qtyDrink[1] = value2;
                var temp = value2 * hargaDrink[1];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[1] = temp;
                $('#total12').text((qtyDrink[1] == 0) ? "Rp.0" : totalhargaDrink[1]);
            });

            $('#minusqty12').click( function(){
                $('#qty12').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[1] = value2;
                var temp = value2 * hargaDrink[1];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[1] = temp;
                $('#total12').text((qtyDrink[1] == 0) ? "Rp.0" : totalhargaDrink[1]);
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
    $('body').on('click', '.trigger13', function(e){
        e.preventDefault();
        $('#modal13').modal().open();
        $('#modal13').ready(function(){
            if(y == 2){
                $('#harga13').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga13').css("color", "darkred")
            }
            $('#qty13').text(qtyDrink[2]);
            $('#total13').text((qtyDrink[2] == 0) ? "Rp.0" : totalhargaDrink[2]);
            var value2 = parseInt($('#qty13').text());;

            $('#plusqty13').click(function(){
                $('#qty13').text( ++value2 )
                qtyDrink[2] = value2;
                var temp = value2 * hargaDrink[2];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[2] = temp;
                $('#total13').text((qtyDrink[2] == 0) ? "Rp.0" : totalhargaDrink[2]);
            });

            $('#minusqty13').click( function(){
                $('#qty13').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[2] = value2;
                var temp = value2 * hargaDrink[2];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[2] = temp;
                $('#total13').text((qtyDrink[2] == 0) ? "Rp.0" : totalhargaDrink[2]);
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
    $('body').on('click', '.trigger14', function(e){
        e.preventDefault();
        $('#modal14').modal().open();
        $('#modal14').ready(function(){
            if(y == 3){
                $('#harga14').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga14').css("color", "darkred")
            }
            $('#qty14').text(qtyDrink[3]);
            $('#total14').text((qtyDrink[3] == 0) ? "Rp.0" : totalhargaDrink[3]);
            var value2 = parseInt($('#qty14').text());;

            $('#plusqty14').click(function(){
                $('#qty14').text( ++value2 )
                qtyDrink[3] = value2;
                var temp = value2 * hargaDrink[3];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[3] = temp;
                $('#total14').text((qtyDrink[3] == 0) ? "Rp.0" : totalhargaDrink[3]);
            });

            $('#minusqty14').click( function(){
                $('#qty14').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[3] = value2;
                var temp = value2 * hargaDrink[3];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[3] = temp;
                $('#total14').text((qtyDrink[3] == 0) ? "Rp.0" : totalhargaDrink[3]);
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
    $('body').on('click', '.trigger15', function(e){
        e.preventDefault();
        $('#modal15').modal().open();
        $('#modal15').ready(function(){
            if(y == 4){
                $('#harga15').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga15').css("color", "darkred")
            }
            $('#qty15').text(qtyDrink[4]);
            $('#total15').text((qtyDrink[4] == 0) ? "Rp.0" : totalhargaDrink[4]);
            var value2 = parseInt($('#qty15').text());;

            $('#plusqty15').click(function(){
                $('#qty15').text( ++value2 )
                qtyDrink[4] = value2;
                var temp = value2 * hargaDrink[4];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[4] = temp;
                $('#total15').text((qtyDrink[4] == 0) ? "Rp.0" : totalhargaDrink[4]);
            });

            $('#minusqty15').click( function(){
                $('#qty15').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[4] = value2;
                var temp = value2 * hargaDrink[4];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[4] = temp;
                $('#total15').text((qtyDrink[4] == 0) ? "Rp.0" : totalhargaDrink[4]);
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
    $('body').on('click', '.trigger16', function(e){
        e.preventDefault();
        $('#modal16').modal().open();
        $('#modal16').ready(function(){
            if(y == 5){
                $('#harga16').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga16').css("color", "darkred")
            }
            $('#qty16').text(qtyDrink[5]);
            $('#total16').text((qtyDrink[5] == 0) ? "Rp.0" : totalhargaDrink[5]);
            var value2 = parseInt($('#qty16').text());;

            $('#plusqty16').click(function(){
                $('#qty16').text( ++value2 )
                qtyDrink[5] = value2;
                var temp = value2 * hargaDrink[5];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[5] = temp;
                $('#total16').text((qtyDrink[5] == 0) ? "Rp.0" : totalhargaDrink[5]);
            });

            $('#minusqty16').click( function(){
                $('#qty16').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[5] = value2;
                var temp = value2 * hargaDrink[5];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[5] = temp;
                $('#total16').text((qtyDrink[5] == 0) ? "Rp.0" : totalhargaDrink[5]);
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
    $('body').on('click', '.trigger17', function(e){
        e.preventDefault();
        $('#modal17').modal().open();
        $('#modal17').ready(function(){
            if(y == 6){
                $('#harga17').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga17').css("color", "darkred")
            }
            $('#qty17').text(qtyDrink[6]);
            $('#total17').text((qtyDrink[6] == 0) ? "Rp.0" : totalhargaDrink[6]);
            var value2 = parseInt($('#qty17').text());;

            $('#plusqty17').click(function(){
                $('#qty17').text( ++value2 )
                qtyDrink[6] = value2;
                var temp = value2 * hargaDrink[6];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[6] = temp;
                $('#total17').text((qtyDrink[6] == 0) ? "Rp.0" : totalhargaDrink[6]);
            });

            $('#minusqty17').click( function(){
                $('#qty17').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[6] = value2;
                var temp = value2 * hargaDrink[6];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[6] = temp;
                $('#total17').text((qtyDrink[6] == 0) ? "Rp.0" : totalhargaDrink[6]);
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
    $('body').on('click', '.trigger18', function(e){
        e.preventDefault();
        $('#modal18').modal().open();
        $('#modal18').ready(function(){
            if(y == 7){
                $('#harga18').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga18').css("color", "darkred")
            }
            $('#qty18').text(qtyDrink[7]);
            $('#total18').text((qtyDrink[7] == 0) ? "Rp.0" : totalhargaDrink[7]);
            var value2 = parseInt($('#qty18').text());;

            $('#plusqty18').click(function(){
                $('#qty18').text( ++value2 )
                qtyDrink[7] = value2;
                var temp = value2 * hargaDrink[7];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[7] = temp;
                $('#total18').text((qtyDrink[7] == 0) ? "Rp.0" : totalhargaDrink[7]);
            });

            $('#minusqty18').click( function(){
                $('#qty18').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[7] = value2;
                var temp = value2 * hargaDrink[7];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[7] = temp;
                $('#total18').text((qtyDrink[7] == 0) ? "Rp.0" : totalhargaDrink[7]);
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
    $('body').on('click', '.trigger19', function(e){
        e.preventDefault();
        $('#modal19').modal().open();
        $('#modal19').ready(function(){
            if(y == 8){
                $('#harga19').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga19').css("color", "darkred")
            }
            $('#qty19').text(qtyDrink[8]);
            $('#total19').text((qtyDrink[8] == 0) ? "Rp.0" : totalhargaDrink[8]);
            var value2 = parseInt($('#qty19').text());;

            $('#plusqty19').click(function(){
                $('#qty19').text( ++value2 )
                qtyDrink[8] = value2;
                var temp = value2 * hargaDrink[8];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[8] = temp;
                $('#total19').text((qtyDrink[8] == 0) ? "Rp.0" : totalhargaDrink[8]);
            });

            $('#minusqty19').click( function(){
                $('#qty19').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[8] = value2;
                var temp = value2 * hargaDrink[8];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[8] = temp;
                $('#total19').text((qtyDrink[8] == 0) ? "Rp.0" : totalhargaDrink[8]);
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
    $('body').on('click', '.trigger20', function(e){
        e.preventDefault();
        $('#modal20').modal().open();
        $('#modal20').ready(function(){
            if(y == 9){
                $('#harga20').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga20').css("color", "darkred")
            }
            $('#qty20').text(qtyDrink[9]);
            $('#total20').text((qtyDrink[9] == 0) ? "Rp.0" : totalhargaDrink[9]);
            var value2 = parseInt($('#qty20').text());;

            $('#plusqty20').click(function(){
                $('#qty20').text( ++value2 )
                qtyDrink[9] = value2;
                var temp = value2 * hargaDrink[9];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[9] = temp;
                $('#total20').text((qtyDrink[9] == 0) ? "Rp.0" : totalhargaDrink[9]);
            });

            $('#minusqty20').click( function(){
                $('#qty20').text((value2 - 1 < 0) ? value2 : --value2)
                qtyDrink[9] = value2;
                var temp = value2 * hargaDrink[9];
                temp = "Rp." + temp + ".000";
                totalhargaDrink[9] = temp;
                $('#total20').text((qtyDrink[9] == 0) ? "Rp.0" : totalhargaDrink[9]);
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
    $('body').on('click', '.trigger21', function(e){
        e.preventDefault();
        $('#modal21').modal().open();
        $('#modal21').ready(function(){
            if(z == 0){
                $('#harga21').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga21').css("color", "darkred")
            }
            $('#qty21').text(qtySnack[0]);
            $('#total21').text((qtySnack[0] == 0) ? "Rp.0" : totalhargaSnack[0]);
            var value2 = parseInt($('#qty21').text());;

            $('#plusqty21').click(function(){
                $('#qty21').text( ++value2 )
                qtySnack[0] = value2;
                var temp = value2 * hargaSnack[0];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[0] = temp;
                $('#total21').text((qtySnack[0] == 0) ? "Rp.0" : totalhargaSnack[0]);
            });

            $('#minusqty21').click( function(){
                $('#qty21').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[0] = value2;
                var temp = value2 * hargaSnack[0];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[0] = temp;
                $('#total21').text((qtySnack[0] == 0) ? "Rp.0" : totalhargaSnack[0]);
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
    $('body').on('click', '.trigger22', function(e){
        e.preventDefault();
        $('#modal22').modal().open();
        $('#modal22').ready(function(){
            if(z == 1){
                $('#harga22').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga22').css("color", "darkred")
            }
            $('#qty22').text(qtySnack[1]);
            $('#total22').text((qtySnack[1] == 1) ? "Rp.0" : totalhargaSnack[1]);
            var value2 = parseInt($('#qty22').text());;

            $('#plusqty22').click(function(){
                $('#qty22').text( ++value2 )
                qtySnack[1] = value2;
                var temp = value2 * hargaSnack[1];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[1] = temp;
                $('#total22').text((qtySnack[1] == 0) ? "Rp.0" : totalhargaSnack[1]);
            });

            $('#minusqty22').click( function(){
                $('#qty22').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[1] = value2;
                var temp = value2 * hargaSnack[1];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[1] = temp;
                $('#total22').text((qtySnack[1] == 0) ? "Rp.0" : totalhargaSnack[1]);
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
    $('body').on('click', '.trigger23', function(e){
        e.preventDefault();
        $('#modal23').modal().open();
        $('#modal23').ready(function(){
            if(z == 2){
                $('#harga23').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga23').css("color", "darkred")
            }
            $('#qty23').text(qtySnack[2]);
            $('#total23').text((qtySnack[2] == 0) ? "Rp.0" : totalhargaSnack[2]);
            var value2 = parseInt($('#qty23').text());;

            $('#plusqty23').click(function(){
                $('#qty23').text( ++value2 )
                qtySnack[2] = value2;
                var temp = value2 * hargaSnack[2];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[2] = temp;
                $('#total23').text((qtySnack[2] == 0) ? "Rp.0" : totalhargaSnack[2]);
            });

            $('#minusqty23').click( function(){
                $('#qty23').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[2] = value2;
                var temp = value2 * hargaSnack[2];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[2] = temp;
                $('#total23').text((qtySnack[2] == 0) ? "Rp.0" : totalhargaSnack[2]);
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
    $('body').on('click', '.trigger24', function(e){
        e.preventDefault();
        $('#modal24').modal().open();
        $('#modal24').ready(function(){
            if(z == 3){
                $('#harga24').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga24').css("color", "darkred")
            }
            $('#qty24').text(qtySnack[3]);
            $('#total24').text((qtySnack[3] == 0) ? "Rp.0" : totalhargaSnack[3]);
            var value2 = parseInt($('#qty24').text());;

            $('#plusqty24').click(function(){
                $('#qty24').text( ++value2 )
                qtySnack[3] = value2;
                var temp = value2 * hargaSnack[3];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[3] = temp;
                $('#total24').text((qtySnack[3] == 0) ? "Rp.0" : totalhargaSnack[3]);
            });

            $('#minusqty24').click( function(){
                $('#qty24').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[3] = value2;
                var temp = value2 * hargaSnack[3];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[3] = temp;
                $('#total24').text((qtySnack[3] == 0) ? "Rp.0" : totalhargaSnack[3]);
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
    $('body').on('click', '.trigger25', function(e){
        e.preventDefault();
        $('#modal25').modal().open();
        $('#modal25').ready(function(){
            if(z == 4){
                $('#harga25').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga25').css("color", "darkred")
            }
            $('#qty25').text(qtySnack[4]);
            $('#total25').text((qtySnack[4] == 0) ? "Rp.0" : totalhargaSnack[4]);
            var value2 = parseInt($('#qty25').text());;

            $('#plusqty25').click(function(){
                $('#qty25').text( ++value2 )
                qtySnack[4] = value2;
                var temp = value2 * hargaSnack[4];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[4] = temp;
                $('#total25').text((qtySnack[4] == 0) ? "Rp.0" : totalhargaSnack[4]);
            });

            $('#minusqty25').click( function(){
                $('#qty25').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[4] = value2;
                var temp = value2 * hargaSnack[4];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[4] = temp;
                $('#total25').text((qtySnack[4] == 0) ? "Rp.0" : totalhargaSnack[4]);
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
    $('body').on('click', '.trigger26', function(e){
        e.preventDefault();
        $('#modal26').modal().open();
        $('#modal26').ready(function(){
            if(z == 5){
                $('#harga26').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga26').css("color", "darkred")
            }
            $('#qty26').text(qtySnack[5]);
            $('#total26').text((qtySnack[5] == 0) ? "Rp.0" : totalhargaSnack[5]);
            var value2 = parseInt($('#qty26').text());;

            $('#plusqty26').click(function(){
                $('#qty26').text( ++value2 )
                qtySnack[5] = value2;
                var temp = value2 * hargaSnack[5];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[5] = temp;
                $('#total26').text((qtySnack[5] == 0) ? "Rp.0" : totalhargaSnack[5]);
            });

            $('#minusqty26').click( function(){
                $('#qty26').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[5] = value2;
                var temp = value2 * hargaSnack[5];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[5] = temp;
                $('#total26').text((qtySnack[5] == 0) ? "Rp.0" : totalhargaSnack[5]);
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
    $('body').on('click', '.trigger27', function(e){
        e.preventDefault();
        $('#modal27').modal().open();
        $('#modal27').ready(function(){
            if(z == 6){
                $('#harga27').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga27').css("color", "darkred")
            }
            $('#qty27').text(qtySnack[6]);
            $('#total27').text((qtySnack[6] == 0) ? "Rp.0" : totalhargaSnack[6]);
            var value2 = parseInt($('#qty27').text());;

            $('#plusqty27').click(function(){
                $('#qty27').text( ++value2 )
                qtySnack[6] = value2;
                var temp = value2 * hargaSnack[6];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[6] = temp;
                $('#total27').text((qtySnack[6] == 0) ? "Rp.0" : totalhargaSnack[6]);
            });

            $('#minusqty27').click( function(){
                $('#qty27').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[6] = value2;
                var temp = value2 * hargaSnack[6];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[6] = temp;
                $('#total27').text((qtySnack[6] == 0) ? "Rp.0" : totalhargaSnack[6]);
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
    $('body').on('click', '.trigger28', function(e){
        e.preventDefault();
        $('#modal28').modal().open();
        $('#modal28').ready(function(){
            if(z == 7){
                $('#harga28').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga28').css("color", "darkred")
            }
            $('#qty28').text(qtySnack[7]);
            $('#total28').text((qtySnack[7] == 0) ? "Rp.0" : totalhargaSnack[7]);
            var value2 = parseInt($('#qty28').text());;

            $('#plusqty28').click(function(){
                $('#qty28').text( ++value2 )
                qtySnack[7] = value2;
                var temp = value2 * hargaSnack[7];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[7] = temp;
                $('#total28').text((qtySnack[7] == 0) ? "Rp.0" : totalhargaSnack[7]);
            });

            $('#minusqty28').click( function(){
                $('#qty28').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[7] = value2;
                var temp = value2 * hargaSnack[7];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[7] = temp;
                $('#total28').text((qtySnack[7] == 0) ? "Rp.0" : totalhargaSnack[7]);
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
    $('body').on('click', '.trigger29', function(e){
        e.preventDefault();
        $('#modal29').modal().open();
        $('#modal29').ready(function(){
            if(z == 8){
                $('#harga29').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga29').css("color", "darkred")
            }
            $('#qty29').text(qtySnack[8]);
            $('#total29').text((qtySnack[8] == 0) ? "Rp.0" : totalhargaSnack[8]);
            var value2 = parseInt($('#qty29').text());;

            $('#plusqty29').click(function(){
                $('#qty29').text( ++value2 )
                qtySnack[8] = value2;
                var temp = value2 * hargaSnack[8];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[8] = temp;
                $('#total29').text((qtySnack[8] == 0) ? "Rp.0" : totalhargaSnack[8]);
            });

            $('#minusqty29').click( function(){
                $('#qty29').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[8] = value2;
                var temp = value2 * hargaSnack[8];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[8] = temp;
                $('#total29').text((qtySnack[8] == 0) ? "Rp.0" : totalhargaSnack[8]);
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
    $('body').on('click', '.trigger30', function(e){
        e.preventDefault();
        $('#modal30').modal().open();
        $('#modal30').ready(function(){
            if(z == 9){
                $('#harga30').html("Rp. 10.000 <i class='fas fa-tags'></i>");
                $('#harga30').css("color", "darkred")
            }
            $('#qty30').text(qtySnack[9]);
            $('#total30').text((qtySnack[9] == 0) ? "Rp.0" : totalhargaSnack[9]);
            var value2 = parseInt($('#qty30').text());;

            $('#plusqty30').click(function(){
                $('#qty30').text( ++value2 )
                qtySnack[9] = value2;
                var temp = value2 * hargaSnack[9];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[9] = temp;
                $('#total30').text((qtySnack[9] == 0) ? "Rp.0" : totalhargaSnack[9]);
            });

            $('#minusqty30').click( function(){
                $('#qty30').text((value2 - 1 < 0) ? value2 : --value2)
                qtySnack[9] = value2;
                var temp = value2 * hargaSnack[9];
                temp = "Rp." + temp + ".000";
                totalhargaSnack[9] = temp;
                $('#total30').text((qtySnack[9] == 0) ? "Rp.0" : totalhargaSnack[9]);
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
        
        for (let index = 0; index < qtySnack.length; index++) {
            if(qtySnack[index] != 0){
                temp += '<div> <h4> ' + snack[index] + '</h4> <h4 class="notaqty">' + qtySnack[index] + '</h4> <h4 style="float: right;">' + totalhargaSnack[index] + '</h4> </div>'
                total += qtySnack[index] * hargaSnack[index]
                document.getElementById("nota").style.display="block"
            }
        }

        document.getElementById("menu").innerHTML = temp;

        temp2 = '<div> <h4 class="notaqty"> Total Harga </h4> <h4 style="float: right;"> Rp.' + total + '.000</h4> </div>'
        document.getElementById("totalharganota").innerHTML = temp2;
    });
});
