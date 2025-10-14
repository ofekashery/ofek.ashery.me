import Project from '@/components/project';
import SocialLink from '@/components/social-link';
import { ChevronRightIcon } from 'lucide-react';

const Page = () => {
  return (
    <div className="max-w-xl	mx-auto pt-16 md:pt-32 px-8 pb-12">
      <h1 className="text-3xl font-semibold mb-8 tracking-tight">Ofek Ashery</h1>
      <div className="text-sm text-neutral-400 leading-6">
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

      <div className="flex gap-2 mt-4">
        <SocialLink name="GitHub" href="https://github.com/ofekashery" />
        <span className="text-neutral-600">/</span>
        <SocialLink name="LinkedIn" href="https://www.linkedin.com/in/ofekashery" />
        <span className="text-neutral-600">/</span>
        <SocialLink name="Email" href="mailto:ofek.ashery@gmail.com" />
      </div>

      <h2 className="text-base font-semibold mt-12 mb-4">Some projects that I’ve built</h2>
      <div>
        <Project title="FIRST" logo="/assets/projects/firstisrael.svg" link="https://firstisrael.org.il">
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
          logo="/assets/projects/homeassistant.svg"
          link="https://github.com/ofekashery/vertical-stack-in-card"
        >
          A sleek and modern custom card for Home Assistant.
        </Project>
        <a
          href="https://github.com/ofekashery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 px-2 py-1.5 text-link text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10"
        >
          View more on GitHub
          <ChevronRightIcon className="size-4" />
        </a>
      </div>

      <h2 className="text-base font-semibold mt-12 mb-4">Skills</h2>
      <div className="flex flex-wrap">
        {[
          'System Architecture',
          'Cloud Computing',
          'Python',
          'Web Security',
          'TypeScript',
          'React.js',
          'User Interface Design',
        ].map((skill) => (
          <div
            key={skill}
            className="px-2.5 py-1.5 rounded-lg text-sm font-medium bg-neutral-500/10 text-neutral-300 mr-2 mb-2"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
