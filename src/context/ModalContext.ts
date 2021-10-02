// import useModal from 'hooks/modal';
// import React, { createContext } from 'react';

// let ModalContext;
// const { Provider } = (ModalContext = createContext({
// 	open: false,
// 	toggleModal: null,
// 	title: null,
// 	body: null
// }));

// const ModalProvider = ({ children }) => {
// 	const { open, toggleModal, title, body } = useModal();

// 	return (
// 		<Provider value={{ open, toggleModal, title, body }}>
// 			{/* <Modal /> */}
// 			{children}
// 		</Provider>
// 	);
// };

// export { ModalContext, ModalProvider };

import { createContext } from 'react';
const ModalContext = createContext(null);
export default ModalContext;
