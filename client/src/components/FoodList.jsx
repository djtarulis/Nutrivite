import React from 'react';

const FoodList = ({ foods }) => {
    return (
        <div className="space-y-4">
            {foods.length > 0 ? (
                foods.map((food, index) => (
                    <div key={index} className="p-4 border rounded bg-gray-50">
                        <h3 className="text-lg font-bold">{food.label}</h3>
                        <p><strong>Carbs:</strong> {food.carbs} g</p>
                        <p><strong>Fats:</strong> {food.fats} g</p>
                        <p><strong>Sugars:</strong> {food.sugars} g</p>
                        <p><strong>Calories:</strong> {food.calories} kcal</p>
                    </div>
                ))
            ) : (
                <p>No results found. Please try another search.</p>
            )}
        </div>
    );
};

export default FoodList;
