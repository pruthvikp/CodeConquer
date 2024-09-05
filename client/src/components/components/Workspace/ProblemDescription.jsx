import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const ProblemDescription = () => {
  const { id } = useParams(); // Get problem ID from URL
  const [problem, setProblem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      const url = `http://localhost:5500/api/problem-details/${id}`;
      try {
        const response = await axios.get(url);
        setProblem(response.data);
      } catch (err) {
        console.error('Error fetching problem details:', err);
        setError('Problem not found or server error');
      }
    };
    fetchProblem();
  }, [id]);

  if (error) return <div className="error">{error}</div>;
  if (!problem) return <div className="loading">Loading...</div>;

  return (
    <div className="problem-description-container">
      <h2>{id}. {problem.title}</h2>
      <div className="problem-meta">
        <span className="difficulty"> {problem.difficulty}</span>
        <span className="category"> {problem.category}</span>
        {/* <span className="companies">Companies: {problem.companies.join(', ')}</span> */}
      </div>
      <p>{problem.description}</p>
      
      <div className="examples">
        <h3>Examples</h3>
        {problem.examples.map((example, idx) => (
          <div key={idx}>
            <p><strong>Input:</strong> {example.input}</p>
            <p><strong>Output:</strong> {example.output}</p>
          </div>
        ))}
      </div>
      
      <div className="constraints">
        <h3>Constraints</h3>
        <ul>
          {problem.constraints.map((constraint, idx) => (
            <li key={idx}>{constraint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProblemDescription;
