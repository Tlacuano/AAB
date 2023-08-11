import {MongoClient, MongoClientOptions} from 'mongodb';
import 'dotenv/config';

const uri = process.env.URI || '';

const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as MongoClientOptions);


export const connection = async () => {
    try {
        await client.connect();
        console.log('Database is connected');
    } catch (error) {
        console.log(error);
    }
}

export const closeConnection = async () => {
    try {
        await client.close();
    } catch (error) {
        console.log(error);
    }
}

