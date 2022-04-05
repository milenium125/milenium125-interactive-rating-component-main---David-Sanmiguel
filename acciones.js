let click;
let activo;
let opciones = ["#uno", "#dos", "#tres", "#cuatro", "#cinco"]

function hacerClick(id) {
    $(function() {

        click = id;
        if (activo !== id) {
            $(opciones[id]).css({
                'background': 'hsl(25, 97%, 53%)',
                'color': 'hsl(0, 0%, 100%)'
            });
            activo = id;
            for (let i = 0; i < opciones.length; i++) {
                if (i !== id) {
                    $(opciones[i]).css({
                        'background': 'hsl(216, 12%, 25%)',
                        'color': 'hsl(216, 12%, 54%)'
                    });

                }

            }
        } else {
            $(objeto).css({
                'background': 'hsl(216, 12%, 25%)',
                'color': 'hsl(216, 12%, 54%)'

            })
            activo = undefined;
        };
    })
}

function inPuntero(id) {
    objeto = opciones[id];

    $(function() {
        if (click !== id) {
            $(objeto).css({
                'background': 'hsl(216, 12%, 54%)',
                'color': 'hsl(0, 0%, 100%)'
            });
        }


    });
}

function outPuntero(id) {
    objeto = opciones[id];
    if (click !== id) {
        $(objeto).css({
            'background': 'hsl(216, 12%, 25%)',
            'color': 'hsl(216, 12%, 54%)'
        })
    }
}

function enviar() {
    let codigo = click + 1
    $('#puntaje').text(codigo)
    $('.contenedor2').css({
        'display': 'flex'
    })
    $('.contenedor1').css({
        'display': 'none'
    })
}




$(function() {
    $('#uno').mouseover(function() {
        inPuntero(0);
    })
})
$(function() {
    $('#dos').mouseover(function() {
        inPuntero(1);
    })
})
$(function() {
    $('#tres').mouseover(function() {
        inPuntero(2);
    })
})
$(function() {
    $('#cuatro').mouseover(function() {
        inPuntero(3);
    })
})
$(function() {
    $('#cinco').mouseover(function() {
        inPuntero(4);
    })
})


$(function() {
    $('#uno').mouseout(function() {
        outPuntero(0);
    })
})
$(function() {
    $('#dos').mouseout(function() {
        outPuntero(1);
    })
})
$(function() {
    $('#tres').mouseout(function() {
        outPuntero(2);
    })
})
$(function() {
    $('#cuatro').mouseout(function() {
        outPuntero(3);
    })
})
$(function() {
    $('#cinco').mouseout(function() {
        outPuntero(4);
    })
})

$(function() {
    $('#uno').click(function() {
        hacerClick(0);
    })
})
$(function() {
    $('#dos').click(function() {
        hacerClick(1);
    })
})
$(function() {
    $('#tres').click(function() {
        hacerClick(2);
    })
})
$(function() {
    $('#cuatro').click(function() {
        hacerClick(3);
    })
})
$(function() {
    $('#cinco').click(function() {
        hacerClick(4);
    })
})


$(function() {
    $('.submit').click(function() {
        enviar();
    })
})