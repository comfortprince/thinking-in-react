export default function SearchBar() {
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
				<input type="search" placeholder="Search..."/>
			</div>
			<div>
				<input type="checkbox"/>
				<span>
					Only show products in stock
				</span>
			</div>
		</div>
	)
}