import axios from 'axios';

export async function loadProducts() {
  // Call an external API endpoint to get posts
  const response = await axios.get(
    'https://fakestoreapi.com/products'
  );
  return response.data;
}
