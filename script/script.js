let estado = 0;

let casillas = [
    [12, 13, 14, 15, 16, 14, 13, 12],
    [11, 11, 11, 11, 11, 11, 11, 11],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
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

let posibleMovCaballo = [
    [-2, 1],//Arriba derecha
    [-2, -1],//Arriba izquierda
    [2, 1],//Abajo derecha
    [2, -1],//Abajo izquierda
    [-1, 2],//Derecha arriba
    [-1, -2],//Izquierda arriba
    [1, 2],//Derecha abajo
    [1, -2]//Izquierda abajo
];

let posibleMovAlfil = [
    [-1, 1],  // Arriba-Derecha
    [-1, -1], // Arriba-Izquierda
    [1, 1],   // Abajo-Derecha
    [1, -1]   // Abajo-Izquierda
];

let posibleMovTorre = [
    [-1, 0],  // Arriba
    [1, 0], // Abajo
    [0, -1],   // Izquierda
    [0, 1]   // Derecha
];

let posibleMovDamaRey = [
    [-1, 0],  // Arriba
    [1, 0], // Abajo
    [0, -1],   // Izquierda
    [0, 1],  // Derecha
    [-1, 1],  // Arriba-Derecha
    [-1, -1], // Arriba-Izquierda
    [1, 1],   // Abajo-Derecha
    [1, -1]   // Abajo-Izquierda
];



//CREACION DE LOS DIVS CON LAS CASILLAS
for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
        let casilla = document.createElement("div");

        casilla.id = `casilla${i}${j}`;
        casilla.classList = 'casilla';

        casilla.setAttribute('onclick', `mover(${i}, ${j})`);

        casilla.style.backgroundImage = `url(img/${casillas[i][j]}.png)`;

        document.getElementById("tablero").appendChild(casilla);
    }   
}


//FUNCION USADA PARA ACTUALIZAR EL ESTADO DEL TABLERO VISIBLE, ACTUALIZANDO LAS IMAGENES
function actualizarPiezas(){
    //Se actualizan las piezas del tablero
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            document.getElementById(`casilla${i}${j}`).style.backgroundImage = `url(img/${casillas[i][j]}.png)`;
        }   
    }
}


//PINTA CON SU CORRESPONDIENTE COLOR LAS CASILLAS
function pintarCasillas(){
    //Se recorre el array del color de las casillas y se pintan:
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){

            if(tableroColor[i][j] == 1) document.getElementById(`casilla${i}${j}`).style.backgroundColor = `#739552`;
            if(tableroColor[i][j] == 0) document.getElementById(`casilla${i}${j}`).style.backgroundColor = `white`;

            
        }   
    }
}


function mover(fila, columna){
    console.log(`fila: ${fila}. columna: ${columna}`);

    if(estado == 0){
        pintarPosiblesMov(fila, columna, casillas[fila][columna]);
    }
}

function pintarPosiblesMov(fila, columna, pieza){
    console.log(`pieza: ${pieza}`);
}





function actualizarCasillasAtacadas(){

    //Se resetean los arrays de ataque
    ataqueBlanco = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];
    
    ataqueNegro = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){

            let pieza = casillas[i][j];
            console.log(pieza);

            if(pieza == 1 || pieza == 11){
                //Peón blanco
                //Direccion -1 indica que el peon debe subir, dirección 1 indica que el peon debe bajar
                let dir = 1;

                //Se guarda la direccion de la pieza
                (pieza==1) ? dir = -1 : dir = 1;

                //POSIBLES MOV DE ATAQUE DEL PEON
                if(j > 0 && j < 7){
                    if(dir == -1 && i < 7){
                        //console.log("funciona");
                        ataqueBlanco[i+dir][j+1] = pieza;
                        ataqueBlanco[i+dir][j-1] = pieza;
                    }
                    if(dir == 1 && i > 0){
                        //console.log("funciona2");
                        ataqueNegro[i+dir][j+1] = pieza;
                        ataqueNegro[i+dir][j-1] = pieza;
                    }
                }
            }

            if(pieza == 2 || pieza == 4 || pieza == 5 || pieza == 6){
                let movimientoActual;
                
                //Segun la pieza en la que estemos, se determina el array de movimiento
                if(pieza == 2) movimientoActual = JSON.parse(JSON.stringify(posibleMovTorre));
                if(pieza == 4) movimientoActual = JSON.parse(JSON.stringify(posibleMovAlfil));
                if(pieza == 5) movimientoActual = JSON.parse(JSON.stringify(posibleMovDamaRey));
                if(pieza == 6) movimientoActual = JSON.parse(JSON.stringify(posibleMovDamaRey));


                //console.log(`funciona, fila: ${i} y columna: ${j}`);
                //Se recorren todas las direcciones posibles de la pieza
                for(let k=0; k<movimientoActual.length; k++){

                    //Se almacena en mover la dirección actual
                    let mover = JSON.parse(JSON.stringify(movimientoActual[k]));
    
                    while(true){
                        //Se crea un bucle infinito del cual se saldrá cuando la pieza encuentre un borde o una pieza enemiga
                        let nuevaFila = i + mover[0];
                        let nuevaColumna = j + mover[1];

                        //Se comprueba si hemos salido de los bordes
                        if(nuevaFila < 0 || nuevaFila > 7 || nuevaColumna < 0 || nuevaColumna > 7){
                            console.log("estas fuera");
                            break;
                        }

                        //se comprueba si estamos atacando a una casilla vacia
                        if(casillas[nuevaFila][nuevaColumna] == 0){
                            console.log("FUNCIONA");
                            ataqueBlanco[nuevaFila][nuevaColumna] = pieza;
                        }


                        mover[0] += movimientoActual[k][0];
                        mover[1] += movimientoActual[k][1];

                    }
                }

                
                
                
                    
                


            }
            
        }   
    }

    console.log("ataque blanco: ");
    console.table(ataqueBlanco);
    console.log("ataque negro: ");
    console.table(ataqueNegro);
}



actualizarCasillasAtacadas();
pintarCasillas();

//let moverr = JSON.parse(JSON.stringify(posibleMovCaballo[4]));
//console.log(moverr);

console.log(posibleMovCaballo.length);