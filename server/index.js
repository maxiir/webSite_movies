import {app} from './server-config.js'

app.listen(app.get('port'),()=>{
    console.log('server runnig on port', app.get('port'))
})