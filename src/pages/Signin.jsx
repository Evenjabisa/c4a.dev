import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Level II
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form action="">

          <p style={{ fontSize: 20 }}>Welcome Back <span>💗</span></p>


          <input onChange={(eo) => {
            setEmail(eo.target.value);
          }}
            type="email"
            placeholder="write your Email..."
            required
          />
          <input onChange={(eo) => {
            setPassword(eo.target.value);
          }}
            type="password"
            placeholder="write your Password..."
            required
          />
          <button onClick={(eo) => {
            eo.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
              });


          }}
            type="submit">Sign In</button>
          <p>Don't hava account? <Link to="/Signup">Sign-Up</Link></p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
