import app from './app';
import { PORT } from './constants/constants';

app.listen(PORT, ()=> console.log(`Sever started at http://localhost:${ PORT } `))