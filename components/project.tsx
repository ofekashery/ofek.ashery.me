import Image from 'next/image';
import { ArrowUpRightIcon } from 'lucide-react';

interface ProjectProps {
  title: string;
  link: string;
  logo: string;
  children: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ title, link, logo, children }) => {
  return (
    <a
      className="group flex flex-col items-start py-2 text-current"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="inline-flex text-sm font-medium items-center rounded-md group-hover:bg-neutral-800 group-hover:px-1.5 group-hover:-mx-1.5 group-hover:py-0.5 group-hover:-my-0.5 transition-colors">
        {title}
        <ArrowUpRightIcon className="text-neutral-500 size-3.5 ml-1 transition-all duration-500" />
      </span>
      <p className="text-sm text-neutral-400">{children}</p>
    </a>
  );
};

export default Project;
