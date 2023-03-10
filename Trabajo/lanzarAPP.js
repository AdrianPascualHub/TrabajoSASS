const express = require('express') //Requerimos Express
const app = express() //Variable para utilizar lo que estamos requiriendo
const port = 3005 //Habitualmente el 3000 para entornos locales
//Cuando lo subamos a un servidor real, deberemos cambiarlo, COMO YA VEREMOS
app.use(express.static(__dirname + '/public'));
//Vamos a recibir una petición realizada por el cliente mediante GET,
//que como ya hemos visto y sabemos viene determinada por la URL
app.get('/', (req, res) => {  //Usamos la función flecha (para evitar crear ninguna función)
 
    res.send('gfgfggf')
   })



app.listen(port, () => { //Nuevamente, usamos la función flecha
  console.log(`Example app listening at http://localhost:${port}`)
  //Es importante mostrar el puerto, ya que cuando esté en producción
  //ese puerto será dinámico y habrá cambiado. Así podremos saber cual es
})
