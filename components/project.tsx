import Image from 'next/image';
import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';

interface ProjectProps {
  title: string;
  link: string;
  logo: string;
  children: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ title, link, logo, children }) => {
  return (
    <>
      <a
        className="group flex items-center px-4 py-3 my-2 rounded-xl text-current bg-gray-1 border border-gray-2 transition-colors duration-200 hover:bg-gray-2 focus-visible:bg-gray-2"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="rounded-lg" src={logo} alt={`${title} Logo`} width={28} height={28} />
        <div className="flex-1 pl-4">
          <span className="text-sm font-medium flex items-center">
            {title}
            <ArrowUpRightIcon
              className="opacity-0 w-3 h-3 ml-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:ml-1"
              strokeWidth={2}
              focusable="false"
            />
          </span>
          <p className="text-sm text-gray-9">{children}</p>
        </div>
      </a>
    </>
  );
};

export default Project;
