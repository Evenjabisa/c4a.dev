import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";



const Signin = () => {
  return (
    <>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <Header />

      <main>
        <form action="">
          <p style={{ fontSize: 20 }}>Create a new account <span>💗</span></p>

          <input type="email" placeholder="write your Email..." required />
          <input type="password" placeholder="write your Password..." required />
          <input type="password" placeholder="cofirm your Password..." required />
          <button type="submit">Sign Up</button>
          <p>Do you hava an account? <Link to="/Signin">Sign-in</Link></p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
