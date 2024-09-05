import React from 'react';

const ProductFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedBrand,
  setSelectedBrand,
  selectedRating,
  setSelectedRating,
}) => {
  return (
    <aside className="w-1/4 bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        {Object.keys(categories).map((category) => (
          <li
            key={category}
            className={`cursor-pointer p-2 ${selectedCategory === category ? 'font-bold' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-4">Filters</h2>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="font-semibold">Price Range:</label>
        <div className="flex justify-between">
          <input
            type="number"
            min="0"
            className="border rounded p-2 w-1/2 mr-2"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseFloat(e.target.value), priceRange[1]])}
            placeholder="Min"
          />
          <input
            type="number"
            min="0"
            className="border rounded p-2 w-1/2"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
            placeholder="Max"
          />
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="font-semibold">Brand:</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          <option value="Brand C">Brand C</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <label className="font-semibold">Minimum Rating:</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedRating}
          onChange={(e) => setSelectedRating(parseFloat(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={4.5}>4.5 Stars & Up</option>
          <option value={4}>4 Stars & Up</option>
          <option value={3.5}>3.5 Stars & Up</option>
          <option value={3}>3 Stars & Up</option>
        </select>
      </div>
    </aside>
  );
};

export default ProductFilter;
