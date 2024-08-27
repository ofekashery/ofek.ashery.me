import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';

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
      className="text-inherit underline underline-offset-2 decoration-neutral-500 transition-all hover:decoration-neutral-50"
    >
      {name}
      <ArrowUpRightIcon className="inline w-3 h-3 ml-1" focusable="false" />
    </a>
  );
};

export default SocialLink;
