import { useSession, signIn } from 'next-auth/react';
import { nanoquery } from '@nanostores/query';
import { useStore } from '@nanostores/react';

const
	[createFetcherStore] = nanoquery(
		{ fetcher: (...keys) => fetch(keys.join('')).then(r => r.json()), }),
	$posts = createFetcherStore(['/api/restricted/myaccount']);


export default function MyAccount() {
	const sessionHookResult = useSession();
	const storeHookResult = useStore($posts);
	return <>
		<button onClick={() => signIn()}>Link Account</button>
		<h3>frontend:</h3>
		<pre>{JSON.stringify(sessionHookResult, null, '\t')}</pre>
		<h3>backend:</h3>
		<pre>{JSON.stringify(storeHookResult, null, '\t')}</pre>
	</>;



}