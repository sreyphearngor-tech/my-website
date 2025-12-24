import React, { useState } from "react";
import product_data, { products_categories } from "../../data/products";
import "./NewLetter.css";

const NewLetter = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    const text = searchText.toLowerCase().trim();

    const filtered = product_data.filter((item) => {
      const matchName = item.name.toLowerCase().includes(text);
      const matchCategory = selectedCategory
        ? item.category === selectedCategory
        : true;

      return matchName && matchCategory;
    });

    setResult(filtered);
  };

  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Get Exclusive Offers on your Email</h1>

      <div className="search-controls">

        {/* Category Select */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="search-select"
        >
          <option value="">All Categories</option>
          {products_categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        {/* Search Text */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />

        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>

      {/* Results */}
      <div className="search-results">
        {result.length > 0 ? (
          result.map((item) => (
            <div key={item.id} className="search-item">
              <img src={item.image} alt={item.name} className="search-img" />
              <p>{item.name} — <b>{item.category}</b></p>
              <p>${item.price}</p>
            </div>
          ))
        ) : (
          <p className="no-result">
            {searchText || selectedCategory ? "No products found." : ""}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewLetter;

