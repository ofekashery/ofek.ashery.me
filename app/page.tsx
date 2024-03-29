import Project from '@/components/project';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';

const Page = () => {
  return (
    <div className="max-w-2xl	mx-auto pt-16 md:pt-32 px-8 pb-12">
      <h1 className="text-4xl font-semibold mb-8 tracking-tight">Ofek Ashery</h1>
      <div className="text-gray-11 leading-6">
        <p>
          Hey, I’m <span className="text-white">Ofek</span>. I’m focused on building{' '}
          <span className="text-white">fast &amp; beautiful products</span> with JavaScript, specifically React.js and
          Next.js.
        </p>
        <p className="mt-2">
          Working with{' '}
          <a
            href="https://www.firstinspires.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            FIRST
          </a>{' '}
          to inspire young people to be science and technology leaders and innovators.
        </p>
      </div>
      <div className="mt-3 font-semibold">
        <a href="https://github.com/ofekashery" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span className="mx-2 text-gray-8">/</span>
        <a href="https://www.linkedin.com/in/ofekashery" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <span className="mx-2 text-gray-8">/</span>
        <a href="mailto:ofek.ashery@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </div>

      <h2 className="text-lg font-semibold mt-12 mb-3">Some projects that I’ve built</h2>
      <div>
        <Project title="FIRST" logo="/assets/projects/firstisrael.jpg" link="https://firstisrael.org.il">
          This is where I work and spent the last few years.
        </Project>
        <Project title="Geist" logo="/assets/projects/geist.jpg" link="https://github.com/geist-org/react">
          Design system for building modern websites and applications.
        </Project>
        <Project
          title="The Orange Alliance"
          logo="/assets/projects/theorangealliance.jpg"
          link="https://github.com/the-orange-alliance"
        >
          A project for accessing the <em>FIRST</em> Tech Challenge event results.
        </Project>
        <Project
          title="vertical-stack-in-card"
          logo="/assets/projects/homeassistant.jpg"
          link="https://github.com/ofekashery/vertical-stack-in-card"
        >
          A sleek and modern custom card for Home Assistant.
        </Project>
        <Project
          title="The Channels"
          logo="/assets/projects/thechannels.jpg"
          link="https://github.com/ofekashery/the-channels"
        >
          An open-source TV guide app.
        </Project>
        <a
          href="https://github.com/ofekashery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 px-2 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10"
        >
          View more on GitHub
          <ChevronRightIcon className="inline w-4 h-4 ml-1" strokeWidth={2} />
        </a>
      </div>

      <h2 className="text-lg font-semibold mt-12 mb-3">Skills</h2>
      <div className="flex flex-wrap">
        {[
          'TypeScript',
          'React.js',
          'Next.js',
          'Web Security',
          'Architecture',
          'CSS',
          'Python',
          'Node.js',
          'Git',
          'User Interface Design',
          'Sketch',
          'Figma',
        ].map((skill) => (
          <div key={skill} className="px-3.5 py-2 rounded-lg text-sm font-semibold border border-gray-3 mr-2 mb-2">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
