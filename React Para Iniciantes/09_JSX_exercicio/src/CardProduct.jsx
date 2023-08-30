const CardProduct = (props) => {
    const product = props.produto;
    return (
        <section key={product.id}>
            <h1>{product.nome}</h1>
            <p>Preço: {product.preco}</p>
            {product.cores.map((color) => <p style={{ backgroundColor: color, color: "white" }}>{color}</p>)}
        </section>
    );
}

export default CardProduct;