let casillas = [
    [12, 13, 14, 15, 16, 14, 13, 12],
    [11, 11, 11, 11, 11, 11, 11, 11],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [2, 3, 4, 5, 6, 4, 3, 2]
];

//Piezas blancas
//0 = nada. 1 = Peon. 2 = torre. 3 = Caballo. 4 = Alfil. 5 = Dama. 6 = Rey;

//Piezas negras
//11 = Peon. 12 = Torre. 13 = Caballo. 14 = Alfil. 15 = Dama. 16 = Rey;

let tableroColor = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];

//Array donde se marcaran las casilla que estan siendo atacadas
let ataqueBlanco = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

let ataqueNegro = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];



//Array que se usará mas tarde para el movimiento
let movimiento = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];


//Creación de los elementos en el html
for(let i=0; i<64; i++){
    
}

for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
        let casilla = document.createElement("div");

        casilla.id = `casilla${i}${j}`;
        casilla.classList = 'casilla';

        casilla.style.backgroundImage = `url(img/${casillas[i][j]}.png)`;

        document.getElementById("tablero").appendChild(casilla);
    }   
}


function actualizarPiezas(){
    //Se actualizan las piezas del tablero
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            document.getElementById(`casilla${i}${j}`).style.backgroundImage = `url(img/${casillas[i][j]}.png)`;
        }   
    }
}

function pintarCasillas(){
    //Se recorre el array del color de las casillas y se pintan:
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){

            if(tableroColor[i][j] == 1) document.getElementById(`casilla${i}${j}`).style.backgroundColor = `#739552`;
            if(tableroColor[i][j] == 0) document.getElementById(`casilla${i}${j}`).style.backgroundColor = `white`;

            
        }   
    }
}

pintarCasillas();