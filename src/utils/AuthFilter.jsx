/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { useAuth } from '@nhost/react-auth';
import { useAuth } from '@nhost/react-auth';
import MainLayout from 'components/layouts/MainLayout';
// import { useCurrentUser } from 'hooks/auth';
import { useRouter } from 'next/dist/client/router';

export default function AuthFilter(Component) {
	return () => {
		const { signedIn } = useAuth();
		// const user = useCurrentUser();
		const router = useRouter();

		if (signedIn === null) {
			return <div>Checking auth...</div>;
		}

		if (!signedIn) router.push('/app/login');

		return (
			<MainLayout>
				<Component {...arguments} />
			</MainLayout>
		);
	};
}
