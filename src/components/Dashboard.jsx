import React, { useState } from 'react';
import AgeDropdown from './AgeDropdown';

const Dashboard = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        alert('Form submitted successfully!');
        setFormData({
            name: '',
            age: '',
            file: null,
        });
    };

    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Healthcare Dashboard</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Age Dropdown */}
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        Age
                    </label>
                    <AgeDropdown
                        value={formData.age}
                        onChange={(value) => setFormData({ ...formData, age: value })}
                    />
                </div>

                {/* File Upload */}
                <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Upload File
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Dashboard;
