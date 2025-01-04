import React, { useState } from 'react';

const StudentCouncilPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isApplied, setIsApplied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleApply = () => {
    setIsApplied(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsApplied(false);
  };

  return (
    <div className='justify-center align-item-center'>
    <div  style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Student Council and Leadership</h1>
      <p>
        Welcome to the Student Council and Leadership page! Here, you can learn about opportunities
        to develop your leadership skills and make a difference in the student community.
      </p>
      <p>
        If you're passionate about taking the lead, organizing events, or representing your peers,
        this is your chance to apply and make an impact.
      </p>

      {!isApplied ? (
        <button
          onClick={handleApply}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Apply
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: '20px',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                margin: '5px 0',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                margin: '5px 0',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                margin: '5px 0',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default StudentCouncilPage;
