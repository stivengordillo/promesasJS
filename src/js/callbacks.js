const heroes ={
    capi:{
        nombre: 'capitan america',
        poder:'Mandar'
    },
    iron:{
        nombre:'Ironman',
        poder:'Volar'
    },
    spider:{
        nombre:'Peter',
        poder:'Telaraña'
    }
}

export const buscarHeroe = (id,callback) =>{
    const heroe = heroes[id];
    if(heroe){
        callback(null, heroe);
    }else{
        callback(`No existe un heroe con el id ${id}`);
    }

    //callback(heroe);
}