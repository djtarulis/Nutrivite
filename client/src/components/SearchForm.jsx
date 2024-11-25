import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [maxCarbs, setMaxCarbs] = useState('');
    const [maxFats, setMaxFats] = useState('');
    const [maxSugars, setMaxSugars] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:', { query, maxCarbs, maxFats, maxSugars });
        onSearch({ query, maxCarbs, maxFats, maxSugars });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded">
            <input type="text" placeholder="Food Name" value={query} onChange={(e) => setQuery(e.target.value)} />
            <input type="number" placeholder="Max Carbs" value={maxCarbs} onChange={(e) => setMaxCarbs(e.target.value)} />
            <input type="number" placeholder="Max Fats" value={maxFats} onChange={(e) => setMaxFats(e.target.value)} />
            <input type="number" placeholder="Max Sugars" value={maxSugars} onChange={(e) => setMaxSugars(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
        </form>
    );
};

export default SearchForm;
