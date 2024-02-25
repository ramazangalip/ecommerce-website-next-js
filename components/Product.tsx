import React, { useState } from 'react';

const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const showAllProducts = () => {
        setSelectedCategory(null);
    };

    return (
        <div>
            <h1 className='text-center' id='product'>ÜRÜNLERİMİZ</h1>
            <div className="d-flex card-container" style={{ marginLeft: '-10px' }}>
                <div style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '10px', marginRight: '20px' }}>
                    <ul className="list-group text-left">
                        <button className="list-group-item d-flex justify-content-start btn btn-primary" onClick={showAllProducts}>Hepsi</button>
                        <button className="list-group-item d-flex justify-content-start btn btn-primary" onClick={() => handleCategoryClick('electronic')}>Elektronik</button>
                        <button className="list-group-item d-flex justify-content-start btn btn-primary" onClick={() => handleCategoryClick('man')}>Erkek Giyim</button>
                        <button className="list-group-item d-flex justify-content-start btn btn-primary" onClick={() => handleCategoryClick('woman')}>Kadın Giyim</button>
                        <button className="list-group-item d-flex justify-content-start btn btn-primary" onClick={() => handleCategoryClick('accessories')}>Aksesuar</button>
                    </ul>
                </div>
                {(selectedCategory === null || selectedCategory === 'electronic') && (
                    <div className="card" style={{ width: '18rem', borderRadius:'10px', marginLeft: '10px' }} id='electronic'>
                        <img src="./ürün1.png" className="card-img-top" alt="ASUS TUF GAMİNG LAPTOP" />
                        <div className="card-body">
                            <h5 className="card-title">ASUS TUF GAMİNG LAPTOP</h5>
                            <hr />
                            <div>
                                <span className="card-text">₺30.000</span>
                            </div>
                            <a href="#" className="btn btn-primary">Satın Al</a>
                        </div>
                    </div>
                )}
                {(selectedCategory === null || selectedCategory === 'man') && (
                    <div className="card" style={{ width: '18rem', borderRadius:'10px', marginLeft: '10px' }} id='man'>
                        <img src="./ürün2.png" className="card-img-top" alt="Bisiklet Yaka Yeşil Sweatshirt" />
                        <div className="card-body">
                            <h5 className="card-title">Bisiklet Yaka Yeşil Sweatshirt</h5>
                            <hr />
                            <div>
                                <span className="card-text">₺300</span>
                            </div>
                            <a href="#" className="btn btn-primary">Satın Al</a>
                        </div>
                    </div>
                )}
                {(selectedCategory === null || selectedCategory === 'woman') && (
                    <div className="card" style={{ width: '18rem', borderRadius:'10px', marginLeft: '10px' }} id='woman'>
                        <img src="./ürün3.png" className="card-img-top" alt="Siyah Palazzo Kadın Pantolon" />
                        <div className="card-body">
                            <h5 className="card-title">Siyah Palazzo Kadın Pantolon</h5>
                            <hr />
                            <div>
                                <span className="card-text">₺300</span>
                            </div>
                            <a href="#" className="btn btn-primary">Satın Al</a>
                        </div>
                    </div>
                )}
                {(selectedCategory === null || selectedCategory === 'accessories') && (
                    <div className="card" style={{ width: '18rem', borderRadius:'10px', marginLeft: '10px' }} id='accessories'>
                        <img src="./ürün4.png" className="card-img-top" alt="Xiaomi Redmi Watch 3 Akıllı Saat" />
                        <div className="card-body">
                            <h5 className="card-title">Xiaomi Redmi Watch 3 Akıllı Saat</h5>
                            <hr />
                            <div>
                                <span className="card-text">₺1500</span>
                            </div>
                            <a href="#" className="btn btn-primary">Satın Al</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product;