import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import mongoose from 'mongoose';

import routes from './routes';

class App{
  public app:Application;

  constructor(){
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
  }

  private setConfig() {
    this.app.use(bodyParser.json({limit:'50mb'}));
    this.app.use(bodyParser.urlencoded({limit: '50mb', extended:true }));
    this.app.use(cors({origin: 'http://localhost:3000'}));
    this.app.use(routes)
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/week10", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }
}

export default new App().app;