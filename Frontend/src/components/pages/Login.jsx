import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { ToastContainer, toast } from "react-toastify";
  import { useDispatch, useSelector } from "react-redux";
  import { addUser, removeUser } from "../../redux/cartSlice";
  import { useNavigate } from "react-router-dom";
  import { githubLogo, googleLogo } from "../../assets";
  
  const Login = () => {
    const userInfo = useSelector((state) => state.cart.userInfo); // Access userInfo from Redux
    const navigate = useNavigate(); // Simplified useNavigate
    const dispatch = useDispatch();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  
    // ============== Google Login Start here =====================
    const handleLogin = () => {
      signInWithPopup(auth, provider.setCustomParameters({ prompt: "select_account" }))
        .then((result) => {
          const user = result.user;
          dispatch(
            addUser({
              _id: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.photoURL,
            })
          );
          setTimeout(() => {
            navigate("/"); // Redirect after login
          }, 1500);
        })
        .catch((error) => {
          // Handle Errors here
          console.log(error);
          toast.error("Login failed. Please try again!");
        });
    };
    // ============== Google Login End here =======================
  
    // ============== Logout Start here ===========================
    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          toast.success("Log Out Successfully!");
          dispatch(removeUser()); // Remove user from Redux state
        })
        .catch((error) => {
          console.log(error);
          toast.error("Logout failed. Please try again!");
        });
    };
    // ============== Logout End here =============================
  
    // ============== Github Login Start here =====================
    const githubLogin = (e) => {
      e.preventDefault();
      toast.warning("GitHub login not implemented yet.");
    };
    // ============== Github Login End here =======================
  
    return (
      <div className="w-full flex flex-col items-center justify-center gap-4 py-20">
        <div className="w-full flex items-center justify-center gap-10">
          <div
            onClick={handleLogin}
            className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 hover:bg-orange-100 cursor-pointer duration-300"
          >
            <img className="w-8" src={googleLogo} alt="googleLogo" />
            <span className="text-sm text-gray-900">Sign in with Google</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-10">
          <div
            onClick={githubLogin}
            className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 hover:bg-orange-100 cursor-pointer duration-300"
          >
            <img className="w-8" src={githubLogo} alt="githubLogo" />
            <span className="text-sm text-gray-900">Sign in with Github</span>
          </div>
        </div>
  
        {userInfo ? (
          <button
            onClick={handleSignOut}
            className="bg-black text-white text-base w-60 h-12 tracking-wide rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        ) : (
          <p className="text-base text-gray-900">Please log in to continue.</p>
        )}
  
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    );
  };
  
  export default Login;
  