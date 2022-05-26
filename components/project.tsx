import React from 'react';
import Image from 'next/image';

const Project = ({ title, titleFormatted = title, description, link, logo }) => {
  return (
    <>
      <a className="project__container" href={link} target="_blank" rel="noopener noreferrer">
        <Image className="project__logo" src={logo} alt={`${title} Logo`} width={40} height={40} />
        <div className="project__content">
          <span className="project__title">{titleFormatted}</span>
          <p className="project__description">{description}</p>
        </div>
      </a>
      <style jsx>{`
        .project__container {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          padding: 0.875rem;
          border-radius: 0.75rem;
          color: inherit;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }
        .project__container:hover,
        .project__container:focus-visible {
          background: rgba(255, 255, 255, 0.1);
          outline: none;
          transform: scale(1.025);
        }
        .project__container:active {
          transform: scale(0.975);
        }
        .project__container :global(.project__logo) {
          border-radius: 50%;
          opacity: 0.75;
          transition: all 0.2s ease;
        }
        .project__container:hover :global(.project__logo),
        .project__container:focus-visible :global(.project__logo) {
          opacity: 1;
        }
        .project__content {
          flex: 1;
          margin-left: 0.875rem;
        }
        .project__title {
          font-weight: 500;
          margin: 0;
          font-size: 1rem;
          line-height: 1;
        }
        .project__description {
          font-size: 0.875rem;
          line-height: 1.2;
          margin: 0.125rem 0 0;
          color: #999;
        }
      `}</style>
    </>
  );
};

export default Project;
