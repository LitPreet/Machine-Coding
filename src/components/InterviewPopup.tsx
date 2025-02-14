import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
}

const InterviewPopup = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [isDirty, setIsDirty] = useState(false); // Track if form data has changed
  const navigate = useNavigate();

  // Update form state and mark as dirty
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsDirty(true); // Mark form as dirty when there is a change
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    setIsDirty(false); // Reset dirty state after submit
    alert('Form submitted!');
  };

  // Custom hook to block navigation when form is dirty
  useEffect(() => {
    // Listen for beforeunload event (used for browser page reload or closing)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = ''; // Trigger browser confirmation dialog
      }
    };

    // Listen to browser unload event
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  // Prevent navigation if the form is dirty
  const handleNavigation = (path: string) => {
    if (isDirty) {
      const confirmLeave = window.confirm('You have unsaved changes. Are you sure you want to leave?');
      if (confirmLeave) {
        setIsDirty(false); // Reset dirty state on navigation confirmation
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div>
      <h1>Form Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => handleNavigation('/another-page')}>Go to Another Page</button>
    </div>
  );
};

export default InterviewPopup;
