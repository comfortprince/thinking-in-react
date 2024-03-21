export default function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
	return (
		<div 
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '1rem'
			}}
		>
			<div>
				<input 
					type="search" 
					placeholder="Search..."
					value={filterText}
					onChange={(e) => {onFilterTextChange(e.target.value)}}/>
			</div>
			<div>
				<input type="checkbox" onChange={(e) => {onInStockOnlyChange(e.target.checked)}}/>
				<span>
					Only show products in stock
				</span>
			</div>
		</div>
	)
}