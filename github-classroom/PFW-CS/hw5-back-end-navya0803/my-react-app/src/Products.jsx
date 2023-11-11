import React from 'react';

function Products() {
  const productData = [
    {
      imageUrl: 'silver-beaded-bracelet-1.jpg',
      productName: 'Silver Beaded Bracelet',
      description:
        'One of the most versatile types of bracelets is the beaded bracelet. Ranging in materials from colorful gemstones to sterling silver, beaded bracelets are terrific for layering and can be styled a number of ways to suit your taste.',
      price: '$19.99',
    },
    {
      imageUrl: 'yellow-gold-charm-bracelet.jpg',
      productName: 'Yellow Gold Charm Bracelet',
      description:
        "If you’re drawn to jewelry that truly reflects your personality, a charm bracelet may be just what you’re looking for. Start with a charm bracelet and customize your new jewelry staple with a meaningful birthstone charm, an inspirational charm or a charm to commemorate a special memory. There’s no wrong way to customize your charm bracelet with charms, which is what makes each piece so special.",
      price: '$24.99',
    },
  ];

  return (
    <section id="products">
      <h2>Featured Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product, index) => (
            <tr key={index}>
              <td>
                <img src={product.imageUrl} alt={product.productName} width="100" />
              </td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Products;
