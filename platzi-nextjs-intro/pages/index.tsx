import React from 'react';

const Home = () => {
    const [productList, setProductList] = React.useState<TProduct>([]);
    React.useEffect(() => {
        fetch('/api/avo')
            .then(res => res.json())
            .then(json => {
                setProductList(json.data)
            })
    },[])
    return (
        <div>
            <h1>Hola platzi</h1>
            {
                productList.map(product => (
                    <div>{product.image}</div>
                ))
            }
        </div>
    );
};

export default Home;