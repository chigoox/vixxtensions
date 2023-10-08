import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut, signInAnonymously } from "firebase/auth";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import app, { AUTH } from "@/Firebase";
import { useState } from "react";

const provider = new GoogleAuthProvider();
const auth = getAuth(app)






const signUp = async (email, password) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    return userCredential
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage
  });
}

  const loginWith = async (provider) => {

        const returnProvider = (Provider) => {
          
          switch (Provider) {
            case 'google': {
              return new GoogleAuthProvider()
              break;
            }
            case 'facebook': {
              return new FacebookAuthProvider()
              break;
            }
            
            
          
            default:
              break;
          }

          
        }
        

        signInWithPopup(auth,  returnProvider(provider))
        .then((result) => {
          const thisProvider = (provider == 'google') ? GoogleAuthProvider :
                                (provider == 'facebook') ? FacebookAuthProvider : null

                // This gives you a  Access Token. You can use it to access the Google API.
                const credential = thisProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ...

            });
    }

const logIn = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential)
    return userCredential
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const logOut = async () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

}

const checkLoggedinUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
    //return user
  } else {
    // User is signed out
  }
});

const user = AUTH.currentUser

return user

}

const sendVerification = async () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
}

const sendPasswordReset = async () => {
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}



export {signUp, logIn, loginWith, logOut, checkLoggedinUser, sendVerification, sendPasswordReset, } 