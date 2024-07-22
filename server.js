import Epxress from 'express';
import {engine} from 'express-handlebars';
import config from 'config';
import { mainrouter } from './routes/mainrouter.js';
import { errors } from './routes/errors.js';
import morgan from 'morgan';

const port=config.get('server.port');
const host=config.get('server.host');
const app=new Epxress();



app.engine('.hbs', engine({extname: '.hbs',partialsDir:'views/components'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(Epxress.static('./public'));
app.use(morgan('dev'));
app.use(mainrouter);
app.use(errors);

app.listen(port,host,()=>{
console.log(`Server http://${host}:${port} manzilda ishga tushdi..!`);
});