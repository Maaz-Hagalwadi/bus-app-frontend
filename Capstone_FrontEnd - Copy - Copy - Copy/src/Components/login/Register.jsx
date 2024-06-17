// import { useState } from "react";
// import { backendUrl } from "../../../config";
// import { Link, Navigate } from "react-router-dom";
// import '../../App.css'
// const Register = () => {
//   const [data, setData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });
//   const [loggedIn, setLoggedIn] = useState(false)
//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     try {
//       const response = await fetch(`https://billing-l50y.onrender.com/register`, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setData({
//         userName: "",
//         email: "",
//         password: "",
//         phoneNumber:"",
//       });
//       if (response.status === 409) {
//         alert("User already exists");
//       } else {
//         alert("User register successfully");
//         setLoggedIn(true)
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error while registering");
//     }
//   };
//   if(loggedIn === true){
//     return <Navigate to={'/login'} replace/>
//   }
//   if (
//     localStorage.getItem("user") &&
//     JSON.parse(localStorage.getItem("user"))
//   ) {
//     return <Navigate to={"/"} replace />;
//   }

//   return (
//     <div style={{ backgroundColor: '#d1e0e0' }}>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#3d5c5c' }}> {/* Changed bg-light to bg-primary for vibrant color */}
//                 <div className="container-fluid">
//                 <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2> {/* Removed href from h2 */}
//                     <div className="ml-auto">
//                         <Link to='/login' className="btn btn-light">Log In</Link> {/* Added btn-outline-light class for light outline */}
//                         <Link to='/register' className="btn btn-light">Sign In</Link> {/* Changed button color to light */}
//                     </div>
//                 </div>
//         </nav>
//         <h1 className="lk" style={{ color: '#1f2e2e' }}> Welcome To JourneyJet</h1>
//       {/* Split Page into Two Columns */}
//       <div className="container mt-5" >
//         <div className="row justify-content-center" >
//           {/* Left Column for Logo */}
//           <div className="col-md-4">
//             <img src="https://aathifpay.com/Content/HomeContentV3/images/busbooking.png" alt="Logo" className="img-fluid" />
//           </div>
//           {/* Right Column for Registration Form */}
//           <div className="col-md-6">
//             <div className="card" style={{ backgroundColor: '#b3cccc' }}>
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4">Sign In</h4>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="userName" className="form-label">Name:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="userName"
//                       name="userName"
//                       value={data.userName}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={data.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       value={data.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="phoneNumber" className="form-label">phoneNumber:</label>
//                     <input
//                       type="phoneNumber"
//                       className="form-control"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       value={data.phoneNumber}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                   </div>
//                 </form>
//                 <div className="text-center mt-3">
//                   <Link to="/login" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Already registered? Login</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import '../../App.css';

// const Register = () => {
//   const [data, setData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//   });
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     try {
//       const response = await fetch(`https://sample-code-npxe.onrender.com/register`, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setData({
//         userName: "",
//         email: "",
//         password: "",
//         phoneNumber: "",
//       });
//       if (response.status === 409) {
//         alert("User already exists");
//       } else {
//         alert("User registered successfully");
//         setLoggedIn(true);
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error while registering");
//     }
//   };

//   if (loggedIn === true) {
//     return <Navigate to={'/login'} replace />;
//   }

//   if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))) {
//     return <Navigate to={"/"} replace />;
//   }

//   return (
//     <div
//       style={{
//         backgroundImage: 'url("/highway.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#d1e0e0', // Fallback color if image fails to load
//       }}
//     >
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#3d5c5c' }}>
//         <div className="container-fluid">
//           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
//           <div className="ml-auto">
//             <Link to='/login' className="btn btn-light">Log In</Link>
//             <Link to='/register' className="btn btn-light">Sign Up</Link>
//           </div>
//         </div>
//       </nav>

//       <h1 className="lk" style={{ color: '#1f2e2e' }}> Welcome To JourneyJet</h1>

//       {/* Split Page into Two Columns */}
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           {/* Left Column for Logo */}
//           <div className="col-md-4" style={{ paddingTop: '85px' }}>
//             <img src="https://aathifpay.com/Content/HomeContentV3/images/busbooking.png" alt="Logo" className="img-fluid" />
//           </div>
//           {/* Right Column for Registration Form */}
//           <div className="col-md-6">
//             <div className="card transparent-form">
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4">Sign Up</h4>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="userName" className="form-label">Name:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="userName"
//                       name="userName"
//                       value={data.userName}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={data.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       value={data.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       value={data.phoneNumber}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                   </div>
//                 </form>
//                 <div className="text-center mt-3">
//                   <Link to="/login" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Already registered? Log In</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import '../../App.css';

// const Register = () => {
//   const [data, setData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//   });
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     try {
//       const response = await fetch(`https://sample-code-npxe.onrender.com/register`, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setData({
//         userName: "",
//         email: "",
//         password: "",
//         phoneNumber: "",
//       });
//       if (response.status === 409) {
//         alert("User already exists");
//       } else {
//         alert("User registered successfully");
//         setLoggedIn(true);
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error while registering");
//     }
//   };

//   if (loggedIn === true) {
//     return <Navigate to={'/login'} replace />;
//   }

//   if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))) {
//     return <Navigate to={"/"} replace />;
//   }

//   return (
//     <div
//       className="background-container"
//       style={{
//         backgroundImage: 'url("/highway.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}
//     >
//       <div className="register-form-container">
//         <div className="container mt-5">
//           <div className="row justify-content-center">
//             <div className="col-md-8"> {/* Adjusted width */}
//               <div className="card transparent-form">
//                 <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
//                 <div className="card-body">
//                   <h4 className="card-title text-center mb-4">Sign Up</h4>
//                   <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                       <label htmlFor="userName" className="form-label">Name:</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="userName"
//                         name="userName"
//                         value={data.userName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="email" className="form-label">Email:</label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         value={data.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="password" className="form-label">Password:</label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         name="password"
//                         value={data.password}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="phoneNumber"
//                         name="phoneNumber"
//                         value={data.phoneNumber}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="d-grid">
//                       <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                     </div>
//                   </form>
//                   <div className="text-center mt-3">
//                     <Link to="/login" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Already registered? Log In</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import '../../App.css';

// const Register = () => {
//   const [data, setData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//   });
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     try {
//       const response = await fetch(`https://authentication-9qlt.onrender.com/register`, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setData({
//         userName: "",
//         email: "",
//         password: "",
//         phoneNumber: "",
//       });
//       if (response.status === 409) {
//         alert("User already exists");
//       } else {
//         alert("User registered successfully");
//         setLoggedIn(true);
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error while registering");
//     }
//   };

//   if (loggedIn === true) {
//     return <Navigate to={'/login'} replace />;
//   }

//   if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))) {
//     return <Navigate to={"/"} replace />;
//   }

//   return (
//     <div className="background-container">
//       <div className="register-form-container">
//         <div className="container mt-5">
//           <div className="row justify-content-center">
//             <div className="col-md-8"> {/* Adjusted width */}
//               <div className="card transparent-form">
//                 <h1 className="lk" style={{ color: '#1f2e2e' }}>Welcome To JourneyJet</h1>
//                 <div className="card-body">
//                   <h4 className="card-title text-center mb-4">Sign Up</h4>
//                   <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                       <label htmlFor="userName" className="form-label">Name:</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="userName"
//                         name="userName"
//                         value={data.userName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="email" className="form-label">Email:</label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         value={data.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="password" className="form-label">Password:</label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         name="password"
//                         value={data.password}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="phoneNumber"
//                         name="phoneNumber"
//                         value={data.phoneNumber}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="d-grid">
//                       <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Submit</button>
//                     </div>
//                   </form>
//                   <div className="text-center mt-3">
//                     <Link to="/login" className="text-decoration-none" style={{ color: '#1f2e2e' }}>Already registered? Log In</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Register = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (ele) => {
    const { name, value } = ele.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (ele) => {
    ele.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Error: ${response.status} ${response.statusText}`, errorData);

        if (response.status === 409) {
          alert("User already exists");
        } else {
          alert("Error while registering");
        }
        return;
      }

      const result = await response.json();
      console.log("Success:", result);

      setData({
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",
      });

      alert("User registered successfully");
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
      alert("Error while registering");
    }
  };

  if (loggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (localStorage.getItem("Register") && JSON.parse(localStorage.getItem("Register"))) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="background-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
          </Link>
          <div className="navbar-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: 'orange' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinations" style={{ color: 'orange' }}>Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: 'orange' }}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: 'orange' }}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <DropdownButton align="end" title="Accounts" id="dropdown-menu-align-end" variant="secondary">
              <Dropdown.Item as={Link} to="/register">Sign Up</Dropdown.Item>
              <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </nav>
      <div className="register-form-container">
        <div className="container mt-5">
          <div className="row justify-content-end">
            <div className="col-md-8">
              <div className="card transparent-form">
                <h1 className="lk" style={{ color: 'orange' }}>Welcome To MyBus</h1>
                <div className="card-body">
                  <h4 className="card-title text-center mb-4">Sign Up</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="userName" className="form-label" style={{ color: 'orange' }}>Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        name="userName"
                        value={data.userName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label" style={{ color: 'orange' }}>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label" style={{ color: 'orange' }}>Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label" style={{ color: 'orange' }}>Phone Number:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                  <div className="text-center mt-3">
                    <Link to="/login" className="text-decoration-none" style={{ color: 'orange' }}>Already registered? Log In</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
