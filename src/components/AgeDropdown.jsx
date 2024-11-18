import React from 'react';

const AgeDropdown = ({ value, onChange }) => {
    const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1); // 1 to 100

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
        >
            <option value="">Select Age</option>
            {ageOptions.map((age) => (
                <option key={age} value={age}>
                    {age}
                </option>
            ))}
        </select>
    );
};

export default AgeDropdown;
