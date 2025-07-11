import * as React from 'react';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, className = '', ...props }, ref) => (
    <a
      ref={ref}
      className={`text-brand-900 underline hover:text-brand-1100 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  )
);

TextLink.displayName = 'TextLink';

export default TextLink;
