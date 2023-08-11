import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.set('port', process.env.PORT || 3000);
app.use(cors({origin:'*'}));
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('servidor funcionando');
});

export default app;