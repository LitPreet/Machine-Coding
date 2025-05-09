import React, { useState, useEffect, CSSProperties } from 'react';

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const styles: { [key: string]: CSSProperties } = {
    container: {
      width: '400px',
      height: '30px',
      backgroundColor: '#e0e0de',
      borderRadius: '15px',
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#3b82f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
      color: '#fff',
      transform:`translateX(${progress-100}%)`,
      transition: 'transform 0.1s ease-in-out',
    },
    progressText: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.progressBar}>
        <span style={styles.progressText}>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
