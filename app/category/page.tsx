"use client"
import React,{ useState } from 'react';
import Header from '../comp/layout/header';
import Footer from '../comp/layout/footer';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  size: string;
  color: string;
}

const mockData: Product[] = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  name: 'The Adire Attire',
  price: 150000 - i * 2000,
  image: '/adire.png',
  category: ['Kaftan', 'Gown'][i % 2],
  size: ['S', 'M', 'L', 'XL', 'XXL'][i % 5],
  color: ['red', 'blue', 'yellow', 'cyan'][i % 4],
}));

interface Filters {
  category: string;
  size: string;
  color: string;
  price: [number, number];
}

const CategoryPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({ category: '', size: '', color: '', price: [50000, 150000] });
  const [sort, setSort] = useState<string>('NEWEST');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const handleFilterChange = (key: keyof Filters, value: string | [number, number]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPrice = [...filters.price];
    newPrice[index] = Number(e.target.value);
    setFilters((prev) => ({ ...prev, price: newPrice as [number, number] }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value);

  const filteredData = mockData
    .filter((item) => !filters.category || item.category === filters.category)
    .filter((item) => !filters.size || item.size === filters.size)
    .filter((item) => !filters.color || item.color === filters.color)
    .filter((item) => item.price >= filters.price[0] && item.price <= filters.price[1])
    .sort((a, b) => {
      switch (sort) {
        case 'PRICE_LOW_HIGH': return a.price - b.price;
        case 'PRICE_HIGH_LOW': return b.price - a.price;
        case 'A-Z': return a.name.localeCompare(b.name);
        case 'Z-A': return b.name.localeCompare(a.name);
        default: return 0;
      }
    });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
    <Header/>
    <div className="text-black p-6 max-w-[1440px] m-auto">
      <h1 className="text-3xl font-bold">Adire</h1>
      {/* Filter & Sort */}
      <div className="flex justify-between items-center my-4">
        <div className="relative group">
          <button className="text-sm  px-4 py-2 flex justify-between"><img src='/icons/fil.png'/>SHOW FILTER</button>
          <div className="absolute hidden group-hover:block bg-white border shadow-lg p-4 z-10 w-64">
            <h3 className="font-semibold mb-2">Category</h3>
            <select onChange={(e) => handleFilterChange('category', e.target.value)} className="w-full p-2 mb-4 border">
              <option value="">All</option>
              <option value="Kaftan">Kaftan</option>
              <option value="Gown">Gown</option>
            </select>

            <h3 className="font-semibold mb-2">Size</h3>
            <select onChange={(e) => handleFilterChange('size', e.target.value)} className="w-full p-2 mb-4 border">
              <option value="">All</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>

            <h3 className="font-semibold mb-2">Color</h3>
            <select onChange={(e) => handleFilterChange('color', e.target.value)} className="w-full p-2 mb-4 border">
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="cyan">Cyan</option>
            </select>

            <h3 className="font-semibold mb-2">Price Range</h3>
            <div className="flex items-center justify-between gap-2">
              <input type="number" min="0" value={filters.price[0]} onChange={(e) => handlePriceChange(e, 0)} className="w-1/2 p-2 border text-sm" />
              <span>-</span>
              <input type="number" min="0" value={filters.price[1]} onChange={(e) => handlePriceChange(e, 1)} className="w-1/2 p-2 border text-sm" />
            </div>
          </div>
        </div>

        <select onChange={handleSortChange} value={sort} className="text-sm border p-2">
          <option value="NEWEST">NEWEST</option>
          <option value="OLDEST">OLDEST</option>
          <option value="A-Z">A-Z</option>
          <option value="PRICE_LOW_HIGH">PRICE ( LOW {`>`} HIGH )</option>
          <option value="PRICE_HIGH_LOW">PRICE ( HIGH {`>`} LOW )</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-4">
        {currentData.map((item) => (
          <div key={item.id} className="text-center">
            <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
            <h2 className="text-sm mt-2">{item.name}</h2>
            <p className="text-lg font-semibold">₦{item.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
         {/* Pagination Buttons */}
         <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 border ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>  
    <Footer/>
    </>
  );
};

export default CategoryPage;
