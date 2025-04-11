import React, { useState } from 'react';

function HealthSuggest() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch('http://localhost:4000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      if (!Array.isArray(data.medicines) || !Array.isArray(data.selfCare)) {
        throw new Error('Invalid response format from server.');
      }

      setResponse(data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f9] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-[#dce3e8]">
        <h1 className="text-3xl font-bold text-[#ABBFCF] text-center mb-6">
          Health Recommendation Assistant 🩺
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="prompt" className="block font-semibold text-gray-700">
            Describe how you're feeling:
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., I have a sore throat, mild fever, and body aches..."
            className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ABBFCF] transition"
            rows="5"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#ABBFCF] hover:bg-[#94aebf] text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Analyzing Symptoms...' : 'Get Recommendations'}
          </button>
        </form>

        {error && (
          <div className="mt-6 text-red-600 font-semibold text-center">{error}</div>
        )}

        {response && (
          <div className="mt-8 space-y-6">
            <div className="bg-[#ecf2f6] p-6 rounded-lg border border-[#c7d4dc] shadow-sm">
              <h3 className="text-xl font-semibold text-[#506675] mb-2">
                💊 Suggested Medicines:
              </h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                {response.medicines.map((med, i) => (
                  <li key={i}>{med}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f1f7f9] p-6 rounded-lg border border-[#c8d9e0] shadow-sm">
              <h3 className="text-xl font-semibold text-[#4e6c77] mb-2">
                🛌 Self-Care Tips:
              </h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                {response.selfCare.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HealthSuggest;
