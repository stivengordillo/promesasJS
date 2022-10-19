
import './styles.css';
import {buscarHeroe, buscarHeroeAsync} from './js/promesas'
/*promesaLenta.then(console.log('promesa lenta'));
promesaMedia.then(console.log('promesa Media'));
promesaRapida.then(console.log('promesa Rapida'));*/

buscarHeroe('capi').then(console.log).catch(console.warm)
buscarHeroeAsync('iron').then(console.log).catch(console.warm)