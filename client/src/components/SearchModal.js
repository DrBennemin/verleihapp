// import React, { useEffect, useState } from "react";
// import styled from "@emotion/styled";
// import { getItemsRent } from "../api/items";
// import { useParams } from "react-router-dom";
// import SearchInput from "./SearchInput";

// function SearchModal({ value, onChange, onSetOverlay }) {
//   const { id } = useParams();
//   const [result, setResult] = useState(null);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     async function fetchResults() {
//       try {
//         const loadedResults = await getItemsRent(id);
//         console.log(loadedResults);
//         setResult(loadedResults);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchResults();
//   }, [id]);

//   const filteredResults = results.filter((result) => {
//     return query.name.startsWith(query.toLowerCase());
//   });

//   return (
//     <Container>
//       <Header>Suche</Header>
//       <Main>
//         <SearchInput
//           placeholder="Suchen..."
//           value={query}
//           onChange={(value) => setQuery(value)}
//         />
//         <Results>
//           Suchergebnisse:
//           {filteredResults?.map((result) => (
//             <li key={result.id} href={`/rent/detail/${result.id}`} />
//           ))}
//         </Results>
//       </Main>
//       <Footer>
//         <button onClick={() => onSetOverlay(true)}>Abbrechen</button>
//       </Footer>
//     </Container>
//   );
// }

// const Container = styled.div`
//   background-color: #fff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
//   border-radius: 5px;
// `;
// const Header = styled.h1`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   font-weight: bold;
//   text-transform: uppercase;
//   padding: 10px;
//   border-bottom: 1px solid #dedede;
// `;
// const Main = styled.div`
//   display: flex;
//   flex-grow: 1;
//   padding: 20px;
//   border-bottom: 1px solid #dedede;
// `;

// const Results = styled.div``;
// const Footer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-around;
//   padding: 10px;
//   & button {
//     background: transparent;
//     border: none;
//     cursor: pointer;
//   }
// `;

// export default SearchModal;
