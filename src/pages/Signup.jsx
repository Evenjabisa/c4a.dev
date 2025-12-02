import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";




const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <Header />

      <main>
        <form action="">
          <p style={{ fontSize: 20 }}>Create a new account <span>💗</span></p>

          <input onChange={(eo) => {

            setEmail(eo.target.value);
          }} type="email" placeholder="write your Email..." required />
          <input onClick={(eo) => {
            setPassword(eo.target.value)
          }} type="password" placeholder="write your Password..." required />
          <button onClick={(eo) => {
            eo.preventDefault();

            createUserWithEmailAndPassword(auth, email, password)

              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log('Doneeeeeeeeeeeeeee');
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

                // ..
              });
          }
          }>Sign Up</button>
          <p>Do you hava an account? <Link to="/Signin">Sign-in</Link></p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
