// import axios from 'axios';
// import {
//   RegisterButtonLocation,
//   RegisterLocationContainer,
// } from 'components/RegisterForm/RegisterForm.styled';
// import { useEffect, useMemo, useState } from 'react';

// const LocationAutoComplate = ({ locationIs }) => {
//   const [location, setLocation] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [arrayLocation, setArrayLocation] = useState([]);

//   const fetchProducts = useMemo(
//     () => async search => {
//       if (!search) return;
//       try {
//         const response = await axios.get(
//           `https://petssupportapi.onrender.com/location?city=${search}`
//         );
//         console.log(response?.data?.cities);
//         console.log(arrayLocation);
//         setArrayLocation(response?.data?.cities);
//       } catch (error) {
//         console.log(error.message);
//       }
//     },
//     [arrayLocation]
//   );
//   const handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       setIsOpen(false);
//     }
//   };
//   const handleButtonClick = e => {
//     setLocation(e.currentTarget.innerText);
//     console.log(e.currentTarget.innerText);
//     setIsOpen(false);
//   };
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   });

//   useEffect(() => {
//     const handelChangeLocation = loc => {
//       setLocation(loc);
//       setIsOpen(true);
//       fetchProducts(loc);
//       if (!loc) return setArrayLocation([]);
//     };
//     const off = handelChangeLocation(locationIs);
//     return off;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [locationIs]);

//   return (
//     <>
//       {arrayLocation && isOpen && (
//         <RegisterLocationContainer>
//           {arrayLocation.map(locate => (
//             <li key={location.name}>
//               <RegisterButtonLocation onClick={handleButtonClick}>
//                 <span>{locate.name}</span>
//                 {'  '}
//                 <span>{locate.regionArea}</span>
//               </RegisterButtonLocation>
//             </li>
//           ))}
//         </RegisterLocationContainer>
//       )}
//     </>
//   );
// };
// export default LocationAutoComplate;
