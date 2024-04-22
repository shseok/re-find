import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';

type Props = {
  date: string;
  type?: string;
  content: string;
  directLink?: string;
};

export default function NoticeCard({ date, type, content, directLink }: Props) {
  return (
    <div className="w-full gap-2 rounded-xl bg-white p-4 shadow-cardBox dark:bg-dark-card">
      <p>{`${type} ${content}`}</p>
      <div className="mt-2 flex flex-row justify-between">
        <p className="text-sm">{date}</p>
        {directLink && (
          <Link
            href={directLink}
            target="_blank"
            className="text-light-main dark:text-dark-main"
          >
            <div className="flex items-center">
              <p className="text-sm">링크</p>
              <LuExternalLink className="ml-1 text-sm" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
