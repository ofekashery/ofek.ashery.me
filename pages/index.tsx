import React from 'react';
import Head from 'next/head';
import Project from '../components/project';

const Index = () => {
  return (
    <>
      <Head>
        <title>Ofek Ashery</title>
        <meta name="description" content="A 17-year-old passionate developer from Israel" />
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <meta property="og:title" content="Ofek Ashery" />
        <meta property="og:description" content="A 17-year-old passionate developer from Israel" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ofek.ashery.me" />
        <meta property="og:image" content="https://ofek.ashery.me/assets/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ofekashery" />
        <meta name="twitter:creator" content="@ofekashery" />
        <meta name="twitter:title" content="Ofek Ashery" />
        <meta name="twitter:description" content="A 17-year-old passionate developer from Israel" />
        <meta name="twitter:image" content="https://ofek.ashery.me/assets/og-image.png" />
      </Head>
      <div className="content">
        <h1>Ofek Ashery</h1>
        <div className="bio">
          <p>Hey, I'm Ofek, a 17-year-old passionate developer from Israel.</p>
          <p>
            I'm focused on building fast &amp; beautiful products with JavaScript, specifically React.js and Next.js. I
            love contributing to open-source projects.
          </p>
          <p>
            Working with{' '}
            <a href="https://www.firstinspires.org" target="_blank" rel="nofollow noopener">
              <em>FIRST</em>
            </a>{' '}
            to inspire young people to be science and technology leaders and innovators.
          </p>
        </div>
        <div className="social">
          <a href="https://github.com/ofekashery" target="_blank" rel="noopener">
            GitHub
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com/in/ofekashery" target="_blank" rel="noopener">
            Linkedin
          </a>
          <span>/</span>
          <a href="mailto:ofek.ashery@gmail.com" target="_blank">
            Email
          </a>
        </div>

        <h2>Some projects that I've built</h2>
        <div className="projects">
          <Project
            title="The Channels"
            description="TV guide app for Android"
            logo="/assets/logos/thechannels.jpg"
            link="https://github.com/ofekashery/the-channels"
          />
          <Project
            title="FIRST Israel"
            titleFormatted={
              <>
                <em>FIRST</em> Israel Website
              </>
            }
            description="Next.js Website + CMS for a global nonprofit"
            logo="/assets/logos/firstisrael.jpg"
            link="https://firstisrael.org.il"
          />
          <Project
            title="The Orange Alliance"
            description={
              <>
                A project for accessing the <em>FIRST</em> Tech Challenge event results
              </>
            }
            logo="/assets/logos/theorangealliance.jpg"
            link="https://github.com/orange-alliance"
          />
          <Project
            title="vertical-stack-in-card"
            description="Custom card for Home Assistant"
            logo="/assets/logos/homeassistant.jpg"
            link="https://github.com/ofekashery/vertical-stack-in-card"
          />
          <Project
            title="Talia Ram Website"
            description="Website for a lawyer"
            logo="/assets/logos/taliaram.jpg"
            link="http://talia-ram.co.il"
          />
        </div>

        <h2>Skills</h2>
        <div className="skills">
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
          <div className="skill">Next.js</div>
          <div className="skill">CSS</div>
          <div className="skill">Flutter</div>
          <div className="skill">Python</div>
          <div className="skill">Node.js</div>
          <div className="skill">Git</div>
          <div className="skill">User Interface Design</div>
          <div className="skill">Sketch</div>
          <div className="skill">Figma</div>
        </div>
      </div>
      <style global jsx>{`
        ::selection {
          background: #fff;
          color: #000;
        }
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          background: #000;
          color: #fff;
          line-height: 1.4;
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
      <style jsx>{`
        .content {
          max-width: 640px;
          margin: 0 auto;
          padding: 36px;
        }
        h1 {
          font-size: 32px;
          line-height: 1.2;
          margin: 1em 0;
        }
        .bio p {
          font-size: 18px;
          margin: 8px 0;
          font-weight: 400;
          color: #aaa;
        }
        .bio a {
          color: #ccc;
          text-decoration: none;
        }
        .bio a:hover,
        .bio a:focus {
          color: #fff;
          text-decoration: underline;
        }
        .social {
          font-size: 18px;
          font-weight: 500;
          line-height: 2;
        }
        .social span {
          color: #888;
          margin: 0 8px;
        }
        h2 {
          font-size: 20px;
          margin: 36px 0 12px;
        }
        .skills {
          display: flex;
          flex-wrap: wrap;
          margin: -4px;
        }
        .skill {
          padding: 10px 16px;
          margin: 4px;
          border-radius: 6px;
          border: 1px solid #333;
          line-height: 1;
        }
      `}</style>
    </>
  );
};

export default Index;
