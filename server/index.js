const expres = require('express');
const cors = require('cors');
const morgan = require('morgan')
const roterIndex = require('./routers');

const app = expres();

//mongoosse
const { mongoose } = require('./db')


//settings
app.set('port', process.env.PORT || 3000)

//midellware
app.use(cors());
app.use(expres.json());
app.use(morgan('dev'));

//router
app.use('/api',roterIndex);

//server
app.listen(app.get('port'),()=>{
    console.log('Server On')
})
