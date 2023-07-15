import RESTTable from '../components/RESTTable';
import { $photos } from '../store/photos';

const columns = [
	{ name: 'Title', getVal: obj => obj.title },
	{ name: 'Url', getVal: obj => obj.url },
	{ name: 'id', getVal: obj => obj.id },
];

export default function photosPage() {
	return <RESTTable store={$photos} url="https://jsonplaceholder.typicode.com/photos" {...{ columns }} />;
} 