import React, { useState, useEffect } from 'react';
import DarkToggle from '../components/dark-toggle';

const storageKey = 'theme';
const themes = {
  light: {
    foreground: '#000',
    background: '#FFF',
    gray: '#666',
    link: '#0070F3',
    bordrColor: '#EAEAEA'
  },
  dark: {
    foreground: '#FFF',
    background: '#000',
    gray: '#888',
    link: '#0076FF',
    bordrColor: '#333'
  }
};

const Index = () => {
  const [isDark, setDark] = useState(true);
  const theme = themes[isDark ? 'dark' : 'light'];

  const setTheme = (theme: string) => {
    setDark(theme !== 'light');
    localStorage.setItem(storageKey, theme !== 'light' ? 'dark' : 'light');
  };
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  useEffect(() => setTheme(localStorage.getItem(storageKey)), []);

  return (
    <main>
      <div className="content">
        <div style={{ display: 'flex' }}>
          <h1>Ofek Ashery</h1>
          <DarkToggle onClick={toggleTheme} theme={isDark ? 'dark' : 'light'} />
        </div>
        <div className="bio">
          <p>Hello! I'm Ofek, a 16-year-old passionate developer from Israel.</p>
          <p>
            I love contributing to open-source projects. <br />I participate in hackathons that give me lot of
            experience and skills.
          </p>
          <p>I'm currently enrolled in 10th grade at Maccabim-Re'ut High School.</p>
          <p className="social">
            <a href="https://github.com/ofekashery" target="_blank" rel="noopener">
              GitHub
            </a>
            {' | '}
            <a href="https://www.linkedin.com/in/ofekashery" target="_blank" rel="noopener">
              Linkedin
            </a>
            {' | '}
            <a href="mailto:ofek.ashery@gmail.com?subject=Hello Ofek!&amp;body=Hi," target="_blank">
              Email
            </a>
          </p>
        </div>

        <h3>Some of my projects that I've built</h3>
        <div className="projects">
          <a className="project" href="https://github.com/ofekashery/the-channels" target="_blank" rel="noopener">
            <div className="card">
              <img src="/assets/logos/thechannels.jpg" alt="The Channels Logo" />
              <h4>The Channels</h4>
              <p>TV guide app for Android</p>
            </div>
          </a>
          <a className="project" href="https://firstisrael.org.il" target="_blank" rel="noopener">
            <div className="card">
              <img src="/assets/logos/firstisrael.jpg" alt="FIRST Israel Logo" />
              <h4>
                <em>FIRST</em> Israel Website
              </h4>
              <p>Next.js Website + CMS for a global nonprofit</p>
            </div>
          </a>
          <a className="project" href="https://github.com/orange-alliance" target="_blank" rel="noopener">
            <div className="card">
              <img src="assets/logos/theorangealliance.jpg" alt="The Orange Alliance Logo" />
              <h4>The Orange Alliance</h4>
              <p>
                The official data provider for <em>FIRST</em> Tech Challenge
              </p>
            </div>
          </a>
          <a
            className="project"
            href="https://github.com/ofekashery/vertical-stack-in-card"
            target="_blank"
            rel="noopener"
          >
            <div className="card">
              <img src="assets/logos/home-assistant.jpg" alt="Home Assistant Logo" />
              <h4>vertical-stack-in-card</h4>
              <p>Custom card for Home Assistant</p>
            </div>
          </a>
          <a className="project" href="http://talia-ram.co.il" target="_blank" rel="noopener">
            <div className="card">
              <img src="assets/logos/talia-ram.jpg" alt="Talia Ram Logo" />
              <h4>Talia Ram Website</h4>
              <p>Bootstrap website for a lawyer</p>
            </div>
          </a>
          <div className="project">
            <div className="card">
              <img src="assets/logos/west-valley.jpg" alt="West Valley Logo" />
              <h4>West Valley Yifat School</h4>
              <p>School app for students</p>
            </div>
          </div>
          {/* <a className="project" href="https://github.com/ofekashery/first-scouter" target="_blank" rel="noopener">
            <div className="card">
              <img src="assets/logos/first-scouter.jpg" alt="FIRST Scouter Logo" />
              <h4>FIRST Scouter</h4>
              <p>
                Scouting app for <em>FIRST</em> competitions
              </p>
            </div>
          </a> */}
        </div>

        <h3>Skils</h3>
        <div className="skils">
          <div className="skil">Frontend</div>
          <div className="skil">React</div>
          <div className="skil">JavaScript</div>
          <div className="skil">TypeScript</div>
          <div className="skil">CSS</div>
          <div className="skil">Flutter</div>
          <div className="skil">Python</div>
          <div className="skil">Git</div>
        </div>
      </div>
      <style global jsx>{`
        ::selection {
          background: ${theme.foreground};
          color: ${theme.background};
        }
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background-color: ${theme.background};
          color: ${theme.foreground};
          line-height: 1.47059;
          letter-spacing: -0.022em;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        a {
          cursor: pointer;
          color: ${theme.link};
          text-decoration: none;
        }
      `}</style>
      <style jsx>{`
        .content {
          max-width: 768px;
          margin: 0 auto;
          padding: 36px;
        }
        .bio p {
          font-size: 18px;
          margin: 8px 0;
          font-weight: 300;
        }
        .social {
          line-height: 2em;
          font-weight: 400 !important;
        }
        h3 {
          margin-top: 42px;
        }
        .projects {
          display: flex;
          flex-wrap: wrap;
          margin: -12px;
        }
        .project {
          flex-basis: 33%;
          padding: 12px;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .project {
            flex: 0 50%;
          }
        }
        @media (max-width: 576px) {
          .project {
            flex: 1;
          }
          .projects {
            flex-direction: column;
          }
        }
        .card {
          background: ${theme.background};
          color: ${theme.foreground};
          margin: 0;
          width: 100%;
          transition: all 0.2s ease;
          padding: 24px;
          border-radius: 6px;
          box-shadow: ${isDark ? 'none' : '0 5px 10px rgba(0, 0, 0, 0.12)'};
          box-sizing: border-box;
          border: ${isDark ? `1px solid ${theme.bordrColor}` : 'none'};
          height: 100%;
        }
        a.project:hover .card {
          transform: scale(1.04);
        }
        .project img {
          height: 48px;
          width: 48px;
          border: 1px solid ${theme.bordrColor};
          border-radius: 50%;
        }
        .project h4 {
          font-weight: 600;
          margin: 12px 0px 0px;
        }
        .project p {
          font-size: 14px;
          margin: 6px 0px 0px;
          color: ${theme.gray};
        }
        .skils {
          display: flex;
          flex-wrap: wrap;
          margin: -4px;
        }
        .skil {
          background: ${theme.background};
          color: ${theme.foreground};
          padding: 8px 16px;
          margin: 4px;
          border-radius: 6px;
          border: 1px solid ${theme.bordrColor};
          transition: all 0.2s ease;
        }
      `}</style>
    </main>
  );
};

export default Index;
