// // // import axios from "axios";
// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import styled from "styled-components";

// // // const Container = styled.div`
// // //   height: 100vh;
// // //   background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // //   color: white;
// // // `;

// // // const FormWrapper = styled.div`
// // //   background: #111;
// // //   padding: 40px;
// // //   border-radius: 12px;
// // //   box-shadow: 0 0 20px rgba(0,0,0,0.6);
// // //   width: 90%;
// // //   max-width: 400px;
// // //   text-align: center;
// // // `;

// // // const Title = styled.h2`
// // //   margin-bottom: 10px;
// // // `;

// // // const ErrorMsg = styled.p`
// // //   color: #ff4d4f;
// // //   margin-bottom: 20px;
// // //   font-weight: 500;
// // // `;

// // // const Input = styled.input`
// // //   width: 100%;
// // //   padding: 12px;
// // //   margin-bottom: 20px;
// // //   border: none;
// // //   border-radius: 8px;
// // //   font-size: 1rem;
// // // `;

// // // const Button = styled.button`
// // //   width: 100%;
// // //   padding: 12px;
// // //   background: #1db954;
// // //   border: none;
// // //   border-radius: 8px;
// // //   color: white;
// // //   font-weight: bold;
// // //   font-size: 1rem;
// // //   cursor: pointer;
// // //   transition: 0.3s;

// // //   &:hover {
// // //     background: #1ed760;
// // //   }
// // // `;

// // // const Home = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     setError(""); // Reset error before new request

// // //     axios.post('http://127.0.0.1:8000/emailverify/', { email })
// // //       .then(() => {
// // //         navigate('/vote');
// // //         setEmail("");
// // //       },10000)
// // //       .catch((error) => {
// // //         if (error.response && error.response.status === 400) {
// // //           setError("Vote is already casted with this email.");
// // //         } else {
// // //           setError("Something went wrong. Please try again.");
// // //         }
// // //       });
// // //   };

// // //   return (
// // //     <Container>
// // //       <FormWrapper>
// // //         <Title>Enter Your Email</Title>
// // //         {error && <ErrorMsg>{error}</ErrorMsg>}
// // //         <form onSubmit={handleSubmit}>
// // //           <Input
// // //             type="email"
// // //             placeholder="your@email.com"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             required
// // //           />
// // //           <Button type="submit">Submit</Button>
// // //         </form>
// // //       </FormWrapper>
// // //     </Container>
// // //   );
// // // };

// // // export default Home;

// // import axios from "axios";
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import styled, { keyframes } from "styled-components";

// // const Container = styled.div`
// //   height: 100vh;
// //   background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   color: white;
// // `;

// // const FormWrapper = styled.div`
// //   background: #111;
// //   padding: 40px;
// //   border-radius: 12px;
// //   box-shadow: 0 0 20px rgba(0,0,0,0.6);
// //   width: 90%;
// //   max-width: 400px;
// //   text-align: center;
// // `;

// // const Title = styled.h2`
// //   margin-bottom: 10px;
// // `;

// // const ErrorMsg = styled.p`
// //   color: #ff4d4f;
// //   margin-bottom: 20px;
// //   font-weight: 500;
// // `;

// // const Input = styled.input`
// //   width: 100%;
// //   padding: 12px;
// //   margin-bottom: 20px;
// //   border: none;
// //   border-radius: 8px;
// //   font-size: 1rem;
// // `;

// // const Button = styled.button`
// //   width: 100%;
// //   padding: 12px;
// //   background: #1db954;
// //   border: none;
// //   border-radius: 8px;
// //   color: white;
// //   font-weight: bold;
// //   font-size: 1rem;
// //   cursor: pointer;
// //   transition: 0.3s;

// //   &:hover {
// //     background: #1ed760;
// //   }

// //   &:disabled {
// //     background: #555;
// //     cursor: not-allowed;
// //   }
// // `;

// // // Loading bar animation
// // const LoadingBar = styled.div`
// //   height: 4px;
// //   width: 100%;
// //   background: #1db954;
// //   margin-bottom: 20px;
// //   position: relative;
// //   overflow: hidden;

// //   &::after {
// //     content: "";
// //     position: absolute;
// //     width: 30%;
// //     height: 100%;
// //     background: #1ed760;
// //     animation: ${keyframes`
// //       0% { left: -30%; }
// //       50% { left: 50%; }
// //       100% { left: 100%; }
// //     `} 1.2s infinite linear;
// //   }
// // `;

// // const Home = () => {
// //   const [email, setEmail] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);
  
// //       axios.post("http://127.0.0.1:8000/emailverify/", { email: email })
// //       .then(() => {
// //         // Store email in local storage
// //         localStorage.setItem("user_email", email);
  
// //         setTimeout(() => {
// //           setLoading(false);
// //           navigate("/vote");
// //         }, 1000); // Delay just for smoother transition
// //         setEmail("");
// //       })
// //       .catch((error) => {
// //         setLoading(false);
// //         if (error.response && error.response.status === 400) {
// //           setError("Vote is already casted with this email.");
// //         } else {
// //           setError("Something went wrong. Please try again.");
// //         }
// //       });
// //   };
  

// //   return (
// //     <Container>
// //       <FormWrapper>
// //         <Title>Enter Your Email</Title>
// //         {loading && <LoadingBar />}
// //         {error && <ErrorMsg>{error}</ErrorMsg>}
// //         <form onSubmit={handleSubmit}>
// //           <Input
// //             type="email"
// //             placeholder="your@email.com"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             disabled={loading}
// //           />
// //           <Button type="submit" disabled={loading}>
// //             {loading ? "Submitting..." : "Submit"}
// //           </Button>
// //         </form>
// //       </FormWrapper>
// //     </Container>
// //   );
// // };

// // export default Home;


// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled, { keyframes } from "styled-components";

// const Container = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   padding: 20px;
// `;

// const FormWrapper = styled.div`
//   background: #111;
//   padding: 40px;
//   border-radius: 12px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
//   width: 100%;
//   max-width: 400px;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 30px 20px;
//   }

//   @media (max-width: 480px) {
//     padding: 25px 15px;
//   }
// `;

// const Title = styled.h2`
//   margin-bottom: 10px;
//   font-size: 1.8rem;

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const ErrorMsg = styled.p`
//   color: #ff4d4f;
//   margin-bottom: 20px;
//   font-weight: 500;
//   font-size: 0.95rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 20px;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;

//   @media (max-width: 480px) {
//     padding: 10px;
//     font-size: 0.95rem;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background: #1db954;
//   border: none;
//   border-radius: 8px;
//   color: white;
//   font-weight: bold;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: #1ed760;
//   }

//   &:disabled {
//     background: #555;
//     cursor: not-allowed;
//   }

//   @media (max-width: 480px) {
//     padding: 10px;
//     font-size: 0.95rem;
//   }
// `;

// const LoadingBar = styled.div`
//   height: 4px;
//   width: 100%;
//   background: #1db954;
//   margin-bottom: 20px;
//   position: relative;
//   overflow: hidden;

//   &::after {
//     content: "";
//     position: absolute;
//     width: 30%;
//     height: 100%;
//     background: #1ed760;
//     animation: ${keyframes`
//       0% { left: -30%; }
//       50% { left: 50%; }
//       100% { left: 100%; }
//     `} 1.2s infinite linear;
//   }
// `;

// const Home = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     axios
//       .post("http://127.0.0.1:8000/emailverify/", { email })
//       .then(() => {
//         localStorage.setItem("user_email", email);
//         setTimeout(() => {
//           setLoading(false);
//           navigate("/vote");
//         }, 1000);
//         setEmail("");
//       })
//       .catch((error) => {
//         setLoading(false);
//         if (error.response && error.response.status === 400) {
//           setError("Vote is already casted with this email.");
//         } else {
//           setError("Something went wrong. Please try again.");
//         }
//       });
//   };

//   return (
//     <Container>
//       <FormWrapper>
//         <Title>Enter Your Email</Title>
//         {loading && <LoadingBar />}
//         {error && <ErrorMsg>{error}</ErrorMsg>}
//         <form onSubmit={handleSubmit}>
//           <Input
//             type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             disabled={loading}
//           />
//           <Button type="submit" disabled={loading}>
//             {loading ? "Submitting..." : "Submit"}
//           </Button>
//         </form>
//       </FormWrapper>
//     </Container>
//   );
// };

// export default Home;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const FormWrapper = styled.div`
  background: #111;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 25px 15px;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ErrorMsg = styled.p`
  color: #ff4d4f;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;


const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #1db954;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1ed760;
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;

const loadingAnimation = keyframes`
  0% { left: -30%; }
  50% { left: 50%; }
  100% { left: 100%; }
`;

const LoadingBar = styled.div`
  height: 4px;
  width: 100%;
  background: #1db954;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 30%;
    height: 100%;
    background: #1ed760;
    animation: ${loadingAnimation} 1.2s infinite linear;
  }
`;

const Home = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    axios
      .post("http://127.0.0.1:8000/emailverify/", { email })
      .then(() => {
        localStorage.setItem("user_email", email);
        setTimeout(() => {
          setLoading(false);
          navigate("/vote");
        }, 1000);
        setEmail("");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.status === 400) {
          setError("Vote is already casted with this email.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      });
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Enter Your Email</Title>
        {loading && <LoadingBar />}
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Home;
