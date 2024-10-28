const app = require('./app/app');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
