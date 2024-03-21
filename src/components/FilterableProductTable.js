import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'

export default function FilterableProductTable({products}){
	return (
		<>
			<SearchBar/>
			<ProductTable products={products}/>
		</>
	)
}