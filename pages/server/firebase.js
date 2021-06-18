import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

//identificadores de acceso
const firebaseConfig = {
    apiKey: "AIzaSyAg7OGYyGb2i-ZsOBda08JOnANudlx2AjU",
    authDomain: "losmismisimos-f6556.firebaseapp.com",
    projectId: "losmismisimos-f6556",
    storageBucket: "losmismisimos-f6556.appspot.com",
    messagingSenderId: "929333062932",
    appId: "1:929333062932:web:465e04a2f4775f2b0b2601",
    measurementId: "G-7S187LXTT2"
  };


class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);

        //propiedades
        this.auth = app.auth();
        this.autorization = app.auth

        //manejador de interfaz gráfica
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth())
    }

}

export default Firebase;