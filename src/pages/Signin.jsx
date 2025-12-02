import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";



const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form action="">
     
          <p style={{ fontSize: 20 }}>Welcome Back <span>💗</span></p>


          <input type="email" placeholder="write your Email..." required />
          <input type="password" placeholder="write your Password..." required />
          <button type="submit">Sign In</button>
          <p>Don't hava account? <Link to="/Signup">Sign-Up</Link></p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
