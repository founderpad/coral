import { useState } from 'react';

const useModal = (): any => {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const toggleModal = ({ title, body }: { title: string; body: string }) => {
		setOpen(!open);
		setTitle(title ?? '');
		setBody(body ?? '');
	};

	return { open, toggleModal, title, body };
};

export default useModal;
