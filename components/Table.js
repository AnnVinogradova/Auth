export default function Table({ rows, columns, className }) {
	return (
	  <>
		<table {...{ className }}>
		  <thead>
			<tr>
			  {columns?.map((el) => (
				<th key={el.name}>{el.name}</th>
			  ))}
			</tr>
		  </thead>
		  <tbody>
			{Array.isArray(rows) ? (
			  rows.map((row) => (
				<tr key={row.id}>
				  {columns?.map(({ name, getVal, Wrap, val = getVal(row) }) => (
					<td key={name}>
					  {Wrap ? <Wrap value={val} /> : val}
					</td>
				  ))}
				</tr>
			  ))
			) : (
			  <tr>
				<td colSpan={columns.length}>No data available</td>
			  </tr>
			)}
		  </tbody>
		</table>
	  </>
	);
  }