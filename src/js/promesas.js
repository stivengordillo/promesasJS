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

export const buscarHeroe = (id) =>{
    const heroe = heroes[id];

    return new Promise(
        (resolve, reject)=>{
            if(heroe){
                setTimeout(() =>{
                    resolve(heroe);
                },1000)
                
            }else{
                reject(`No existe un heroe con el id ${id}`);
            }
        }
    );
    return
}

export const buscarHeroeAsync =  async (id) =>{
    const heroe = heroes[id];

    if(heroe){
        return heroe
    }else{
        throw Error (`No existe un heroe con el id ${id}`);
    }
    return
}

const promesaLenta = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('promesa lenta'), 6000);
});

const promesaMedia = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('promesa media'), 3000);
});

const promesaRapida = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('promesa Rapida'), 1000);
});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}