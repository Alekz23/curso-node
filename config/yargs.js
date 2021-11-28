
const argv = require('yargs')
            .options('b',{
                alias: 'base',
                type : 'number',
                demandOption: true,
                describe: 'es la base de la tabla multilicar'

            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'muestra la tabla en consola'

            })

            .option('h',{
                alias: 'hasta',
                type: 'number',
               // default: 10,
                describe: 'es el max de multiplicar'

            })
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw 'la base tiene q ser un numero'
                }else{
                    return true;
                }
            })
            .argv;

module.exports = argv;