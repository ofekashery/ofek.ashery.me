import React from 'react';

interface Props {
  onClick: () => void;
  theme: 'light' | 'dark';
}

const DarkToggle = ({ onClick, theme }: Props) => (
  <div className="container">
    <div onClick={onClick} className="button">
      {theme === 'light' ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      )}
    </div>
    <style jsx>
      {`
        .container {
          display: flex;
          align-items: center;
          margin-left: auto;
        }
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2rem;
          width: 2.2rem;
          cursor: pointer;
          border: 1px solid ${theme === 'light' ? '#EAEAEA' : '#333333'};
          border-radius: 6px;
        }
      `}
    </style>
  </div>
);

export default DarkToggle;
