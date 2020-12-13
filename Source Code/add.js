$(document).ready(function(){
    badge = 0;
    var laptops={lap1:{img: new Image(),
                name: "Idea Pad 3",
                brand: "Lenovo",
                price: '$'+ 99,
                description: "aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa"
    },
    lap2:{img: new Image(),
        name: "Idea Pad 5",
        brand: "Lenovo",
        price: '$'+ 199,
        description: "aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa"
    },
    lap3:{img: new Image(),
        name: "Samsung A",
        brand: "samsung",
        price: '$'+ 98,
        description: "aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa"
    },
    lap4:{img: new Image(),
        name: "Samsung B",
        brand: "samsung",
        price: '$'+ 250,
        description: "aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa"
    },
    lap5:{img: new Image(),
        name: "Asus A",
        brand: "asus",
        price: '$'+ 100,
        description: "aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa"
    },
    lap6:{img: new Image(),
        name: "Asus B",
        brand: "asus",
        price: '$'+ 300,
        description: "aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaa"
    }};
    $('.badge').html(badge);
    $('.cart').click(function(){
        alert('Added to cart');
    });

    $('.price').html(laptops.lap1.price);
    $('.pdDesc').html(laptops.lap1.description);
    $('.pdName').html(laptops.lap1.name);
});
