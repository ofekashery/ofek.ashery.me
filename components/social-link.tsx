import { ArrowUpRightIcon } from 'lucide-react';

interface SocialLinkProps {
  name: string;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-inherit underline underline-offset-2 decoration-neutral-500 transition-all hover:decoration-neutral-50"
    >
      {name}
      <ArrowUpRightIcon className="size-3.5" />
    </a>
  );
};

export default SocialLink;
