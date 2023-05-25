import app from './config/express';

const main = () =>{
    try{
        app.listen(app.get('port'), ()=>{
            console.log(`Checale wacho http://localhost:${app.get('port')}`);
        })
    }catch(err){
        console.log(err);
    }
}

main();