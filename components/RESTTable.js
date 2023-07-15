import Table from './Table';

import { useStore } from '@nanostores/react';


export default function RESTTable({ store, columns }) {
  const {data,mutate, loading, error} = useStore(store);
  console.log('hook=',{data,mutate, loading, error});
  if (error) return <>Error={error}</>;
  if (loading) return <>Loading...</>;
  return <>
    <Table rows={data} {...{columns}} />
  </>;

}