let estado = 0;
let posActual = 0;
turno = true;

let casillas = [
    [12, 13, 14, 15, 16, 14, 13, 12],
    [11, 11, 11, 11, 11, 11, 11, 11],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
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



// ------------------------------------------ CREACION DE LAS CASILLAS ------------------------------------------
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

// FUNCIÓN ENCARGADA DE ACTUALIZAR LOS ARRAY DE ATAQUE DE AMBOS JUGADORES, 
// PARA PODER COMPROBAR CUANDO EL REY ESTA EN JAQUE, SI PUEDE O NO ENROCAR ETC
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

    //Se recorren todas las casillas para comprobar el ataque de cada casilla
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            calcularMov(i, j, ataqueBlanco, ataqueNegro, true);
        }   
    }

    // console.log("ataque blanco: ");
    // console.table(ataqueBlanco);
    // console.log("ataque negro: ");
    // console.table(ataqueNegro);
}


//FUNCIÓN ENCARGADA DEL MOVIMIENTO
function mover(fila, columna){

    pieza = casillas[fila][columna];
    console.log(pieza + " --- " + turno);

    if(estado == 0 && casillas[fila][columna] != 0){
        if(turno && pieza > 0 && pieza < 7 || !turno && pieza > 10 && pieza < 17){
            
            //Se resetea el array de movimiento
            for(let i=0; i<8; i++){
                for(let j=0; j<8; j++){
                    movimiento[i][j] = 0;
                }
            }

            //Calcula los posibles movimientos de la pieza indicada
            calcularMov(fila, columna, movimiento, movimiento, false);

            //Se pinta en verde las casillas donde se puede mover
            for(let i=0; i<8; i++){
                for(let j=0; j<8; j++){
                    if(movimiento[i][j] != 0){
                        document.getElementById(`casilla${i}${j}`).style.backgroundColor = 'green';
                    }
                }
            }

            posActual = [fila, columna];

            estado = 1;

            console.table(movimiento);
        }
    } else if(estado == 1){
        if(movimiento[fila][columna] != 0){
            turno = !turno;
            
            casillas[fila][columna] = movimiento[fila][columna];

            casillas[posActual[0]][posActual[1]] = 0;
            
            pintarCasillas();
            actualizarPiezas();

            estado = 0;
        }
        else{
            estado = 0;
            pintarCasillas();
        }

    } else{
        estado = 0;
        pintarCasillas();
    }
    

}



//FUNCION QUE COMPRUEBA LOS POSIBLES MOVIMIENTOS Y ATAQUES DE CADA PIEZA
function calcularMov(fila, columna, ataque1, ataque2, comprobarAtaque){
    let pieza = casillas[fila][columna];

    //Chequeo de ataque de los peones
    if(pieza == 1 || pieza == 11){
        //Direccion -1 indica que el peon debe subir, dirección 1 indica que el peon debe bajar
        let dir = 1;

        //Se guarda la direccion de la pieza
        (pieza==1) ? dir = -1 : dir = 1;


        //POSIBLES MOV DE ATAQUE DEL PEON
        if(comprobarAtaque){
            if(columna > 0){
                //MOVIMIENTOS A LA IZQUIERDA
                if(dir == -1 && fila > 0){
                    ataque1[fila+dir][columna-1] = pieza;
                }
                if(dir == 1 && fila < 7){
                    ataque2[fila+dir][columna-1] = pieza;
                }
            }
            if(columna < 7){
                //MOVIMIENTOS A LA DERECHA
                if(dir == -1 && fila > 0){
                    ataque1[fila+dir][columna+1] = pieza;
                }
                if(dir == 1 && fila < 7){
                    ataque2[fila+dir][columna+1] = pieza;
                }
            }
        } else{
            //POSIBLES MOV DE ATAQUE DEL PEON (ATAQUE SOLO SI PUEDE Y MOVIMIENTO NORMAL)
            if(columna > 0){
                //MOVIMIENTOS A LA IZQUIERDA
                if(dir == -1 && fila > 0 && casillas[fila+dir][columna-1] > 10 && casillas[fila+dir][columna-1] < 20){
                    ataque1[fila+dir][columna-1] = pieza;
                }
                if(dir == 1 && fila < 7 && casillas[fila+dir][columna-1] < 10 && casillas[fila+dir][columna-1] > 0){
                    ataque2[fila+dir][columna-1] = pieza;
                }
            }
            if(columna < 7){
                //MOVIMIENTOS A LA DERECHA
                if(dir == -1 && fila > 0 && casillas[fila+dir][columna+1] > 10 && casillas[fila+dir][columna+1] < 20){
                    ataque1[fila+dir][columna+1] = pieza;
                }
                if(dir == 1 && fila < 7 && casillas[fila+dir][columna+1] < 10 && casillas[fila+dir][columna+1] > 0){
                    ataque2[fila+dir][columna+1] = pieza;
                }
            }

            /*if(dir == -1 && fila== 6){
                ataque1[fila+dir*2][columna] = pieza;
            }else if(dir == -1 && fila > 0){
                ataque1[fila+dir][columna] = pieza;
            }

            if(dir == 11 && fila== 6){
                ataque1[fila+dir*2][columna] = pieza;
            }else if(dir == 11 && fila < 7){
                ataque1[fila+dir][columna] = pieza;
            }*/
            
            if(dir == -1 && fila > 0){
                ataque1[fila+dir][columna] = pieza;
                if(fila == 6) ataque1[fila+dir+dir][columna] = pieza;
            }
            if(dir == 1 && fila < 7){
                ataque2[fila+dir][columna] = pieza;
                if(fila == 1) ataque2[fila+dir+dir][columna] = pieza;
            }
        }
        
    }

    //CHEQUEO DE ATAQUE DE LAS OTRAS PIEZAS
    if(pieza == 2 || pieza == 3 || pieza == 4 || pieza == 5 || pieza == 6 || pieza == 12 || pieza == 13 || pieza == 14 || pieza == 15 || pieza == 16){
        let movimientoActual;
                
        //Segun la pieza en la que estemos, se determina el array de movimiento
        if(pieza == 2 || pieza == 12) movimientoActual = JSON.parse(JSON.stringify(posibleMovTorre));
        if(pieza == 3 || pieza == 13) movimientoActual = JSON.parse(JSON.stringify(posibleMovCaballo));
        if(pieza == 4 || pieza == 14) movimientoActual = JSON.parse(JSON.stringify(posibleMovAlfil));
        if(pieza == 5 || pieza == 15) movimientoActual = JSON.parse(JSON.stringify(posibleMovDamaRey));
        if(pieza == 6 || pieza == 16) movimientoActual = JSON.parse(JSON.stringify(posibleMovDamaRey));


        //Se recorren todas las direcciones posibles de la pieza
        for(let k=0; k<movimientoActual.length; k++){

            //Se almacena en mover la dirección actual
            let mover = JSON.parse(JSON.stringify(movimientoActual[k]));
    
            while(true){
                //Se crea un bucle infinito del cual se saldrá cuando la pieza encuentre un borde o una pieza enemiga
                let nuevaFila = fila + mover[0];
                let nuevaColumna = columna + mover[1];

                //Se comprueba si hemos salido de los bordes
                if(nuevaFila < 0 || nuevaFila > 7 || nuevaColumna < 0 || nuevaColumna > 7){
                    break;
                }

                //Si es una pieza blanca
                if(pieza < 7 && pieza > 0){

                    //Se comprueba si es una pieza amiga para parar
                    if(casillas[nuevaFila][nuevaColumna] > 0 && casillas[nuevaFila][nuevaColumna] < 10){
                              
                        break;
                    }
                            
                    //se comprueba si estamos atacando a una casilla vacia
                    if(casillas[nuevaFila][nuevaColumna] == 0){
                                
                        ataque1[nuevaFila][nuevaColumna] = pieza;

                        //En caso que la pieza sea un caballo o rey, el movimiento se calcula una sola vez
                        if(pieza == 6 || pieza == 3){
                            break;
                        }
                    }

                    if(casillas[nuevaFila][nuevaColumna] > 10 && casillas[nuevaFila][nuevaColumna] < 17){
                        //Comprueba si estamos atacando una pieza enemiga
                        ataque1[nuevaFila][nuevaColumna] = pieza;
                        break;
                    }
                }

                //Si es una pieza negra
                if(pieza > 10 && pieza < 17){
                    //Se ejecuta cuando toca una pieza amiga
                    if(casillas[nuevaFila][nuevaColumna] > 10 && casillas[nuevaFila][nuevaColumna] < 17){
                                
                        break;
                    }

                    //se comprueba si estamos atacando a una casilla vacia
                    if(casillas[nuevaFila][nuevaColumna] == 0){
                               
                        ataque2[nuevaFila][nuevaColumna] = pieza;

                        //En caso que la pieza sea un caballo o rey, el movimiento se calcula una sola vez
                        if(pieza == 16 || pieza == 13){
                            break;
                        }
                    }

                    if(casillas[nuevaFila][nuevaColumna] < 10 && casillas[nuevaFila][nuevaColumna] > 0){
                        //Comprueba si estamos atacando una pieza enemiga
                        ataque2[nuevaFila][nuevaColumna] = pieza;
                        break;
                    }
                }

                mover[0] += movimientoActual[k][0];
                mover[1] += movimientoActual[k][1];

            }
        }
    }

    //console.table(movimiento);

    // console.log("ataque blanco: ");
    // console.table(ataqueBlanco);
    // console.log("ataque negro: ");
    // console.table(ataqueNegro);
}


actualizarCasillasAtacadas();

pintarCasillas();

//#f3f995