import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
const ExternalLink = ({
  href,
  label,
  classNames,
  children,
}: {
  href: string;
  label?: string;
  classNames?: string;
  children?: React.ReactNode;
}) => (
  <>
    <Link href={href} passHref legacyBehavior>
      <a target="_blank" className={cn(classNames)}>
        {label ? label : children}
      </a>
    </Link>
  </>
);

export default ExternalLink;