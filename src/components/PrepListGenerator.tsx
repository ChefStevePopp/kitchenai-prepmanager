import React, { useState } from 'react';
import axios from 'axios';
import { List, RefreshCw } from 'lucide-react';

const PrepListGenerator: React.FC = () => {
  const [prepList, setPrepList] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const generatePrepList = async () => {
    setLoading(true);
    try {
      // In a real app, you would send the current inventory data to the API
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{
          role: "system",
          content: "You are an AI assistant for a restaurant kitchen. Generate a prioritized prep list based on the current inventory and typical restaurant needs. Include efficiency suggestions."
        }, {
          role: "user",
          content: "Generate a prep list for today's service."
        }],
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      setPrepList(response.data.choices[0].message.content);
    } catch (error) {
      console.error('Error generating prep list:', error);
      setPrepList('Error generating prep list. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Prep List Generator</h2>
      <button
        onClick={generatePrepList}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
        disabled={loading}
      >
        {loading ? <RefreshCw className="inline mr-1 animate-spin" /> : <List className="inline mr-1" />}
        {loading ? 'Generating...' : 'Generate Prep List'}
      </button>
      {prepList && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">Generated Prep List:</h3>
          <pre className="whitespace-pre-wrap">{prepList}</pre>
        </div>
      )}
    </div>
  );
};

export default PrepListGenerator;