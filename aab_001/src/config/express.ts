import express from 'express';
import cors from 'cors';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors({origin: '*'}));
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response)=>{
    res.send('Backsito')
})


export default app;