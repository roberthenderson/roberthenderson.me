import { clsxMerge } from '@/src/utils/clsxMerge';
import { Link } from './link';

export function Text({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      data-slot="text"
      {...props}
      className={clsxMerge(
        className,
        'text-base/6 text-text-primary sm:text-sm/6 dark:text-teal-400',
      )}
    />
  );
}

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsxMerge(
        className,
        'text-teal-950 underline decoration-teal-950/50 data-[hover]:decoration-teal-950 dark:text-white dark:decoration-white/50 dark:data-[hover]:decoration-white',
      )}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'strong'>) {
  return (
    <strong
      {...props}
      className={clsxMerge(
        className,
        'font-medium text-teal-950 dark:text-white',
      )}
    />
  );
}

export function Code({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      {...props}
      className={clsxMerge(
        className,
        'rounded border border-teal-950/10 bg-teal-950/[2.5%] px-0.5 text-sm font-medium text-teal-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white',
      )}
    />
  );
}
