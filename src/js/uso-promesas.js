
import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
//funcion enviada como argumento Callback
const heroeId='capi';
const heroeId2='iron';

/*buscarHeroe(heroeId).then(heroe1 =>{
    buscarHeroe(heroeId2).then(heroe2=>{
        console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`)
    });
});*/

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
    .then(([heroe1,heroe2]) =>{
        console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`)
    }
).catch( err =>{
    alert(err);
}).finally (() =>{
    console.log('termino promise');
}) 


/*buscarHeroe(heroeId, (err, heroe) =>{
    if(err){
        console.error(err);
    }else{
        console.log(heroe);
    }
    
});*/
