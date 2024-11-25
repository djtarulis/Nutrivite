import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import FoodList from './components/FoodList';

const App = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (filters) => {
        setLoading(true);
        const query = new URLSearchParams(filters).toString();
        try {
            const response = await fetch(`/api/foods/search?${query}`);
            const data = await response.json();
            setFoods(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Food Search</h1>
            <SearchForm onSearch={handleSearch} />
            {loading ? <p>Loading...</p> : <FoodList foods={foods} />}
        </div>
    );
};

export default App;
