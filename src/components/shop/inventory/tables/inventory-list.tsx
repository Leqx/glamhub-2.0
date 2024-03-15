import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const products = [
  {
    id: 'CLTH001',
    name: "Men's T-Shirt",
    description: 'Comfortable cotton t-shirt for men.',
    price: 20.99,
    stock: 100,
    image: 'mens_tshirt.jpg',
    vendorId: 'VEND001',
    category: "Men's Clothing",
    createdAt: '2024-03-15T09:00:00Z',
  },
  {
    id: 'CLTH002',
    name: "Women's Jeans",
    description: 'Stylish and durable denim jeans for women.',
    price: 34.99,
    stock: 80,
    image: 'womens_jeans.jpg',
    vendorId: 'VEND002',
    category: "Women's Clothing",
    createdAt: '2024-03-15T09:30:00Z',
  },
  {
    id: 'CLTH003',
    name: 'Unisex Hoodie',
    description:
      'Warm and cozy hoodie suitable for both men and women.',
    price: 45.5,
    stock: 60,
    image: 'unisex_hoodie.jpg',
    vendorId: 'VEND003',
    category: 'Unisex Clothing',
    createdAt: '2024-03-15T10:00:00Z',
  },
  {
    id: 'CLTH004',
    name: "Men's Dress Shirt",
    description: 'Elegant dress shirt tailored for men.',
    price: 55.99,
    stock: 50,
    image: 'mens_dress_shirt.jpg',
    vendorId: 'VEND001',
    category: "Men's Clothing",
    createdAt: '2024-03-15T10:30:00Z',
  },
  {
    id: 'CLTH005',
    name: "Women's Skirt",
    description:
      'Fashionable skirt for women suitable for various occasions.',
    price: 39.99,
    stock: 70,
    image: 'womens_skirt.jpg',
    vendorId: 'VEND002',
    category: "Women's Clothing",
    createdAt: '2024-03-15T11:00:00Z',
  },
];

export function InventoryList() {
  return (
    <div className=" flex flex-col gap-2">
      <h6 className="text-lg text-primary">Current Inventory</h6>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                {product.name}
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
        </TableFooter>
      </Table>
    </div>
  );
}

export default InventoryList;
