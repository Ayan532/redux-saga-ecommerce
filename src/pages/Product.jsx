// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, CardMedia, Typography } from '@mui/material';

// const fetchProduct = async (productId) => {
//   const response = await fetch(`https://dummyjson.com/products/${productId}`);
//   const product = await response.json();
//   return product;
// };

// const ProductPage = ({ productId }) => {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetchProduct(productId).then(setProduct);
//   }, [productId]);

//   if (!product) {
//     return 'Loading...';
//   }

//   return (
//     <Card style={{ maxWidth: 345, margin: 10 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={product.thumbnail}
//         alt={product.title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {product.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {product.description}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductPage;
