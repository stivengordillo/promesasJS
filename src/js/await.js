import { buscarHeroeAsync , buscarHeroe} from "./promesas";

const heroesIds= ['capi','iron','spider'];

export const obtenerHeroesArr = async () => {

    return await Promise.all( heroesIds.map(buscarHeroe));
    /*const heroesArr = [];
    for(const id of heroesIds){
        heroesArr.push(buscarHeroe(id));
    }   
    return await Promise.all(heroesArr);*/
}

export const obtenerHeroeAwait =  async (id) =>{
    try{
        const heroe =  await buscarHeroeAsync(id);
        return heroe;
    }catch(err){
        console.log('catch!!!');
        return{
            nombre: 'sin nombre',
            poder:'sin poder'
        }
    }


    

}