import React from 'react';

const Project = ({ title, titleFormatted = title, description, link, logo }) => {
  return (
    <>
      <a className="project" href={link} target="_blank" rel="nofollow noopener">
        <img className="project__logo" src={logo} alt={`${title} Logo`} width={40} height={40} />
        <div>
          <span className="project__title">{titleFormatted}</span>
          <p className="project__description">{description}</p>
        </div>
      </a>
      <style jsx>{`
        .project {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          transition: all 0.2s ease;
          padding: 14px;
          border-radius: 8px;
          color: inherit;
          box-sizing: border-box;
        }
        .project:hover,
        .project:focus {
          transform: scale(1.04);
          background: #181818;
          outline: none;
        }
        .project .project__logo {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          margin-right: 14px;
        }
        .project .project__title {
          font-weight: 600;
          margin: 0;
          font-size: 16px;
          line-height: 1;
        }
        .project .project__description {
          font-size: 14px;
          line-height: 1.2;
          margin: 2px 0 0;
          color: #888;
        }
      `}</style>
    </>
  );
};

export default Project;
