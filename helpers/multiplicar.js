const fs= require('fs');

//const crearArchivo= ( base =5)=> {


    //1 manera 
/* return new Promise( (resolve, reject) =>{

    console.log('==================');
    console.log('   TABLA DEL:' ,base);
    console.log('==================');

    let salida="";

    for( let i=1; i< 11; i++ ){
    
        salida +=(`${base}* ${i} = ${base*i} \n`);
    }
    console.log(salida);
    
    fs.writeFileSync(`tabla - ${base}.txt`, salida); 

    if(base>0){
        resolve(salida);
    }else{
        reject(`error ingrese una base >0 `);
    }
        
});

} */


//2da manera con reject
const crearArchivo= async( base =5, listar= false, hasta=2)=> {


try {

    

    let salida="";

    for( let i=1; i< (hasta+1); i++ ){
    
        salida +=(`${base}* ${i} = ${base*i} \n`);
    }

    if(listar){
    console.log('==================');
    console.log('   TABLA DEL:' ,base);
    console.log('==================');
    console.log(salida);
    }
    
    fs.writeFileSync(`./salidas/tabla - ${base}.txt`, salida); 
    return `tabla - ${base}.txt`
    
} catch (error) {
    throw error;
}    

}
       
       
module.exports={
    crearArchivo 
}