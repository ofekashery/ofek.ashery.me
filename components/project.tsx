import React from 'react';
import Image from 'next/image';

const Project = ({ title, titleFormatted = title, description, link, logo }) => {
  return (
    <>
      <a className="project__container" href={link} target="_blank" rel="nofollow noopener">
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
          transition: all 0.2s ease;
          padding: 0.875rem;
          border-radius: 0.5rem;
          color: inherit;
          box-sizing: border-box;
        }
        .project__container:hover,
        .project__container:focus {
          transform: scale(1.04);
          background: #181818;
          outline: none;
        }
        .project__container :global(.project__logo) {
          border-radius: 50%;
        }
        .project__content {
          margin-left: 0.875rem;
        }
        .project__title {
          font-weight: 600;
          margin: 0;
          font-size: 1rem;
          line-height: 1;
        }
        .project__description {
          font-size: 0.875rem;
          line-height: 1.2;
          margin: 0.125rem 0 0;
          color: #888;
        }
      `}</style>
    </>
  );
};

export default Project;
