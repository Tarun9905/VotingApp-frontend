// // // import React from "react";
// // // import styled from "styled-components";

// // // const Container = styled.div`
// // //   height: 100vh;
// // //   background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // //   color: white;
// // // `;

// // // const VotingBox = styled.div`
// // //   background: #111;
// // //   padding: 40px;
// // //   border-radius: 16px;
// // //   box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
// // //   width: 90%;
// // //   max-width: 500px;
// // //   text-align: center;
// // // `;

// // // const Title = styled.h2`
// // //   margin-bottom: 30px;
// // //   font-size: 2rem;
// // // `;

// // // const Option = styled.button`
// // //   background: #1db954;
// // //   border: none;
// // //   margin: 10px 0;
// // //   width: 100%;
// // //   padding: 14px;
// // //   font-size: 1rem;
// // //   border-radius: 10px;
// // //   color: white;
// // //   font-weight: bold;
// // //   cursor: pointer;
// // //   transition: 0.3s;

// // //   &:hover {
// // //     background: #1ed760;
// // //   }
// // // `;

// // // const VotingPage = () => {
// // //   const handleVote = (option) => {
// // //     const email = localStorage.getItem("user_email");
// // //     console.log(`Email: ${email}, Voted for: ${option}`);
// // //   };

// // //   return (
// // //     <Container>
// // //       <VotingBox>
// // //         <Title>Vote for Your Favorite</Title>
// // //         <Option onClick={() => handleVote("OptionA")}>Option A</Option>
// // //         <Option onClick={() => handleVote("OptionB")}>Option B</Option>
// // //       </VotingBox>
// // //     </Container>
// // //   );
// // // };

// // // export default VotingPage;

// // import React, { useState } from "react";
// // import styled from "styled-components";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const Container = styled.div`
// //   height: 100vh;
// //   background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   color: white;
// // `;

// // const VotingBox = styled.div`
// //   background: #111;
// //   padding: 40px;
// //   border-radius: 16px;
// //   box-shadow: 0 0 30px rgba(0,0,0,0.5);
// //   width: 90%;
// //   max-width: 500px;
// //   text-align: center;
// // `;

// // const Title = styled.h2`
// //   margin-bottom: 30px;
// //   font-size: 2rem;
// // `;

// // const Option = styled.button`
// //   background: #1db954;
// //   border: none;
// //   margin: 10px 0;
// //   width: 100%;
// //   padding: 14px;
// //   font-size: 1rem;
// //   border-radius: 10px;
// //   color: white;
// //   font-weight: bold;
// //   cursor: pointer;
// //   transition: 0.3s;

// //   &:hover {
// //     background: #1ed760;
// //   }
// // `;

// // const VotingPage = () => {
// //   const navigate = useNavigate();

// //   const handleVote = async (selectedOption) => {
// //     const email = localStorage.getItem("user_email");
// //     console.log("Option clicked:", selectedOption);
// //     console.log("Email:", email);

// //     try {
// //       const response = await axios.post("http://127.0.0.1:8000/castvote/", {
// //         email: email,
// //         options: selectedOption,
// //       })
// //       navigate('/');
// //       console.log("Vote submitted:", response.data);
// //     } catch (error) {
// //       console.error("Vote submission failed:", error);
// //     }
// //   };

// //   return (
// //     <Container>
// //       <VotingBox>
// //         <Title>Vote for Your Favorite</Title>
// //         <Option onClick={() => handleVote("OptionA")}>Option A</Option>
// //         <Option onClick={() => handleVote("OptionB")}>Option B</Option>
// //       </VotingBox>
// //     </Container>
// //   );
// // };

// // export default VotingPage;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Container = styled.div`
//   height: 100vh;
//   background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
// `;

// const VotingBox = styled.div`
//   background: #111;
//   padding: 40px;
//   border-radius: 16px;
//   box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
//   width: 90%;
//   max-width: 500px;
//   text-align: center;
// `;

// const Title = styled.h2`
//   margin-bottom: 30px;
//   font-size: 2rem;
// `;

// const Option = styled.button`
//   background: #1db954;
//   border: none;
//   margin: 10px 0;
//   width: 100%;
//   padding: 14px;
//   font-size: 1rem;
//   border-radius: 10px;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: #1ed760;
//   }
// `;

// const VoteCount = styled.div`
//   margin-bottom: 20px;
//   font-size: 1.2rem;
//   color: #ccc;
// `;

// const VotingPage = () => {
//   const navigate = useNavigate();
//   const [voteCounts, setVoteCounts] = useState({ OptionA: 0, OptionB: 0 });

//   const fetchVoteCounts = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/count/");
//       setVoteCounts(response.data);
//     } catch (error) {
//       console.error("Failed to fetch vote counts:", error);
//     }
//   };

//   useEffect(() => {
//     fetchVoteCounts();
//   }, []);

//   const handleVote = async (selectedOption) => {
//     const email = localStorage.getItem("user_email");

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/castvote/", {
//         email: email,
//         options: selectedOption,
//       });
//       console.log("Vote submitted:", response.data);

//       // Refresh vote counts after voting
//       fetchVoteCounts();
//       navigate('/');
//     } catch (error) {
//       console.error("Vote submission failed:", error);
//     }
//   };

//   return (
//     <Container>
//       <VotingBox>
//         <Title>Vote for Your Favorite</Title>
//         <VoteCount>Option A: {voteCounts.OptionA} votes</VoteCount>
//         <VoteCount>Option B: {voteCounts.OptionB} votes</VoteCount>
//         <Option onClick={() => handleVote("OptionA")}>Option A</Option>
//         <Option onClick={() => handleVote("OptionB")}>Option B</Option>
//       </VotingBox>
//     </Container>
//   );
// };

// export default VotingPage;


import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const VotingBox = styled.div`
  background: #111;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 500px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
    border-radius: 12px;
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const VoteCount = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #ccc;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Option = styled.button`
  background: #1db954;
  border: none;
  margin: 10px 0;
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1ed760;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.95rem;
  }
`;

const VotingPage = () => {
  const navigate = useNavigate();
  const [voteCounts, setVoteCounts] = useState({ OptionA: 0, OptionB: 0 });

  const fetchVoteCounts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/count/");
      setVoteCounts(response.data);
    } catch (error) {
      console.error("Failed to fetch vote counts:", error);
    }
  };

  useEffect(() => {
    fetchVoteCounts();
  }, []);

  const handleVote = async (selectedOption) => {
    const email = localStorage.getItem("user_email");

    try {
      const response = await axios.post("http://127.0.0.1:8000/castvote/", {
        email: email,
        options: selectedOption,
      });
      console.log("Vote submitted:", response.data);

      fetchVoteCounts(); // Refresh vote counts
      navigate("/");
    } catch (error) {
      console.error("Vote submission failed:", error);
    }
  };

  return (
    <Container>
      <VotingBox>
        <Title>Vote for Your Favorite</Title>
        <VoteCount>Option A: {voteCounts.OptionA} votes</VoteCount>
        <VoteCount>Option B: {voteCounts.OptionB} votes</VoteCount>
        <Option onClick={() => handleVote("OptionA")}>Option A</Option>
        <Option onClick={() => handleVote("OptionB")}>Option B</Option>
      </VotingBox>
    </Container>
  );
};

export default VotingPage;
