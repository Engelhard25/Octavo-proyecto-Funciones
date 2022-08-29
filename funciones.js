//Octavo proyecto Funciones

function always_true(){
    return true;
};

console.log(always_true());

function promesa() {
    return setTimeout(()=>console.log("tiempo promesa 5 segundos"), 5000)
};

console.log(promesa());

function* GenerarID_Par(){
    let id=0;
    while(true){
        id = id+2;
        yield id;
    }
};

const generar = GenerarID_Par();

console.log(generar.next());
console.log(generar.next());
console.log(generar.next());
console.log(generar.next());
console.log(generar.next());
console.log(generar.next());