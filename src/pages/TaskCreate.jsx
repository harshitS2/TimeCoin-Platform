import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
// import { useAuth } from '../contexts/AuthContext';

// Components
import Button from '../components/common/Button';
import CategorySelector from '../components/tasks/CategorySelector';

const CATEGORIES = [
  'Programming', 'Design', 'Writing', 'Marketing', 
  'Music', 'Photography', 'Language', 'Cooking', 
  'Fitness', 'Career', 'Education', 'Other'
];

const TaskCreate = () => {
  // const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    timeCoins: 0,
    isFreeExchange: false,
    estimatedDuration: 60, // in minutes
    availableDates: [],
    attachments: []
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({ ...prev, category }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Create FormData object for file uploads
      const taskData = new FormData();
      
      // Append task details
      Object.keys(formData).forEach(key => {
        if (key !== 'attachments') {
          taskData.append(key, formData[key]);
        }
      });
      
      // Append attachments
      formData.attachments.forEach(file => {
        taskData.append('attachments', file);
      });
      
      await api.post('/tasks', taskData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create task');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">Create a New Task</h1>
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Task Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="E.g., 'Teach JavaScript for 1 hour'"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            rows="5"
            placeholder="Describe what you're offering or need help with..."
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Category
          </label>
          <CategorySelector 
            categories={CATEGORIES}
            selected={formData.category}
            onChange={handleCategoryChange}
          />
        </div>
        
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block text-gray-700 font-semibold mb-2">
              Estimated Duration (minutes)
            </label>
            <input
              type="number"
              name="estimatedDuration"
              value={formData.estimatedDuration}
              onChange={handleChange}
              min="15"
              step="15"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          
          <div className="flex-1 min-w-[250px]">
            <label className="block text-gray-700 font-semibold mb-2">
              TimeCoin Amount
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="number"
                  name="timeCoins"
                  value={formData.timeCoins}
                  onChange={handleChange}
                  min="0"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none ${formData.isFreeExchange ? 'opacity-50' : ''}`}
                  disabled={formData.isFreeExchange}
                  required={!formData.isFreeExchange}
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFreeExchange"
                  name="isFreeExchange"
                  checked={formData.isFreeExchange}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="isFreeExchange" className="ml-2 text-gray-700">
                  Free Exchange
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Attachments (optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="space-y-2">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    Upload files
                  </span>
                  {' or drag and drop'}
                </div>
              </div>
            </label>
            {formData.attachments.length > 0 && (
              <div className="mt-4">
                <ul className="divide-y divide-gray-200">
                  {formData.attachments.map((file, index) => (
                    <li key={index} className="py-2 flex justify-between items-center">
                      <span className="text-sm text-gray-700">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            attachments: prev.attachments.filter((_, i) => i !== index)
                          }));
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end pt-4">
          <Button 
            type="button" 
            variant="secondary" 
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            loading={loading}
          >
            Create Task
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskCreate;