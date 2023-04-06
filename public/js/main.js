import { authModule } from "./googleauth.js"
const socket = io.connect()

async function main(){
  const user = await userLogged() 
  
  if ( user ) {
    logged( user ) 
  
  } else {
    document.querySelector('#sessionUser').innerHTML = loginTemplate()
    const logName = document.getElementById("logName")
    const logPassword = document.getElementById("logPassword")
   
 
    document.getElementById("loginBtn").addEventListener("click", ev => { 
      if ( validateObject ({ a: logName.value , b: logPassword.value })) {
        console.log('Debe completar todos los datos')
      
      } else {    
        fetch(`http://localhost:8080/session/login/
        `, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: logName.value,
            password: logPassword.value
          })
        })
        .then(response => {
          if( response.status === 401 ){
            console.log("Usuario y/o contrasena incorrectos")
          } else {
            logged ( logName.value )
          }
        })
        .catch(error => {
          console.error('Se produjo un error: ', error)
        })
      }

    })

    document.getElementById("googleBtn").addEventListener("click", async (ev) => {    
      await authModule.signInWithPopup( authModule.auth, authModule.provider )

      authModule.onAuthStateChanged( authModule.auth, async user => {
        if ( user ) {
           fetch(`http://localhost:8080/session/logingoogle/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: user.email,
              password: user.accessToken
            })
          })
          .then(response => {
            if( response.status === 401 ){
              toast("Fallo de autentificacion", "#f75e25", "#ff4000")
            } else {
              logged ( user.email )
            }
          })
          .catch(error => {
            console.error('Se produjo un error: ', error)
          })
        }

      })
      
    })  

  }
}



socket.on('productos', data => {
    document.querySelector('#tabla').innerHTML = productsTable( data )
})

const userEmail = document.getElementById("userEmail")
const userName = document.getElementById("userName")
const userSurname = document.getElementById("userSurname")
const userAge = document.getElementById("userAge")
const userNickname = document.getElementById("userNickname")
const userMensaje = document.getElementById("userMsj")

document.getElementById("sendBtn").addEventListener("click", ev => {
  if ( validateEmail(userEmail.value) ) {
    if ( userMensaje.value ){
    
      socket.emit('newMsj', {
        author: {
          id: userEmail.value,
          name: userName.value,
          surname: userSurname.value,
          age: userAge.value,
          nickname: userNickname.value,
        },
        text: userMensaje.value
       })

       userMensaje.value = ''

    } else {
      alert("Ingrese un mensaje!")
    }
  }
})


socket.on('mensajes', data => {
  document.querySelector('#chat').innerHTML = chatMessages( data )
})

main()