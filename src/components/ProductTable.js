function ProductCategoryRow({category}) {
	return (
		<tr>
			<th colSpan="2" > {category} </th>
		</tr>
	)
}

function ProductRow({product}) {
	return (
		<tr>
			<td 
				style={{
					color: product.stocked ? '' : 'red',
					textAlign: 'center',
					width: '50%'
				}}
			> 
				{product.name} 
			</td>
			<td
				style={{
					textAlign: 'center',
					width: '50%'
				}}
			> 
				{product.price} 
			</td>
		</tr>
	)
}

export default function ProductTable({products, filterText, inStockOnly}) {
	const categories = getCategories(products)
	const tableRows = []

	for(let i = 0; i < categories.length; i++){
		const category = categories[i]
		const productsInCategory = fiterByCategory(products, category)

		tableRows.push( <ProductCategoryRow key={category} category={category}/> )
		let j = 0
		productsInCategory.forEach((product) => {
			if (!product.name.toLowerCase().includes(filterText.toLowerCase()))
		      return

		  	if(inStockOnly && !product.stocked)
		  		return

			tableRows.push( <ProductRow key={product.id} product={product} /> )
		})
	}

	return (
		<table
			style = {{
				width: '100%'
			}}
		>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{tableRows}
			</tbody>
		</table>
	)
}

function fiterByCategory(products, category) {
	const filteredProducts = products.filter((product) => {
		return product.category === category
	})

	return filteredProducts
}

function getCategories(products) {
	const categories = []
	products.forEach(product => {
		if(!categories.includes(product.category))
			categories.push(product.category)	
	})
	return categories
}