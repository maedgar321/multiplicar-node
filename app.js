const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listaTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).then(result => console.log(`Archivo creado:`, colors.red(result.red))).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}