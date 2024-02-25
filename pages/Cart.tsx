import React from 'react';

const Cart = () => {
  
  const products = [
    { id: 1, name: 'ASUS TUF GAMİNG LAPTOP', price: "₺30.000", image: 'ürün1.png' },
    { id: 2, name: 'Bisiklet Yaka Yeşil Sweatshirt', price: "₺300", image: 'ürün2.png' },
    { id: 3, name: 'Siyah Palazzo Kadın Pantolon', price: "₺300", image: 'ürün3.png' },
    { id: 4, name: 'Xiaomi Redmi Watch 3 Akıllı Saat', price: "₺1.500", image: 'ürün4.png' }
  ];

  return (
    <div className="cart-container">
      <div className="table-container pr-5">
        <table>
          <thead>
            <tr>
              <th>Ürün Adı</th>
              <th>Fiyat</th>
              <th>Fotoğraf</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <React.Fragment key={product.id}>
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <img src={product.image} alt={product.name} style={{ width: '100px' }} />
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottom: '1px solid #ccc' }}></td>
                  <td style={{ borderBottom: '1px solid #ccc' }}></td>
                  <td style={{ borderBottom: '1px solid #ccc' }}></td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

