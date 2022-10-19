import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";
console.time('await')
obtenerHeroeAwait('capid')
    .then(heroe=>{
        console.log(heroe);
        console.timeEnd('await');
    });

