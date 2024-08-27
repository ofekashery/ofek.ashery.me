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
      <a className="group flex items-center gap-4 text-current" href={link} target="_blank" rel="noopener noreferrer">
        <Image className="rounded-lg" src={logo} alt={`${title} Logo`} width={28} height={28} />
        <div className="flex-1 py-3 border-b border-neutral-800/50">
          <span className="inline-flex text-sm font-medium items-center rounded-md group-hover:bg-neutral-800 group-hover:px-1.5 group-hover:-mx-1.5 group-hover:py-0.5 group-hover:-my-0.5">
            {title}
            <ArrowUpRightIcon
              className="opacity-0 w-3 h-3 ml-0.5 transition-all duration-500 group-hover:opacity-100 group-hover:ml-1"
              strokeWidth={2}
              focusable="false"
            />
          </span>
          <p className="text-sm text-neutral-500">{children}</p>
        </div>
      </a>
    </>
  );
};

export default Project;
