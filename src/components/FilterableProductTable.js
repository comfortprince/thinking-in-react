import { useState } from 'react'

import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'

export default function FilterableProductTable({products}){
	const [filterText, setFilterText] = useState("")
	const [inStockOnly, setInStockOnly] = useState(false)

	return (
		<>
			<SearchBar 
				filterText={filterText} 
				inStockOnly={inStockOnly}
				onFilterTextChange={setFilterText}
				onInStockOnlyChange={setInStockOnly}
			/>
			<ProductTable 
				products={products} 
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</>
	)
}