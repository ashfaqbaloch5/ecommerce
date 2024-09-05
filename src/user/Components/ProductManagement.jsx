import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import ProductTable from './ProductTable';
import { useCart } from '../context/AppProvider';

const ProductManagement = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('Shirts');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const { addToCart } = useCart();

  const handleEditProduct = (product) => {
    // Logic for editing the product
  };

  const handleDeleteProduct = (productId) => {
    // Logic for deleting the product
  };

  const filteredProducts = categories[selectedCategory]
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .filter(product => selectedBrand === '' || product.brand === selectedBrand)
    .filter(product => selectedRating === 0 || product.rating >= selectedRating);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 px-4">
      <ProductFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      <div className="w-3/4 p-6">
        <ProductTable
          products={filteredProducts}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default ProductManagement;
