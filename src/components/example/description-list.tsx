import { clsxMerge } from '@/src/utils/clsxMerge';

export function DescriptionList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'dl'>) {
  return (
    <dl
      {...props}
      className={clsxMerge(
        className,
        'grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6',
      )}
    />
  );
}

export function DescriptionTerm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'dt'>) {
  return (
    <dt
      {...props}
      className={clsxMerge(
        className,
        'col-start-1 border-t border-teal-950/5 pt-3 text-teal-500 first:border-none sm:border-t sm:border-teal-950/5 sm:py-3 dark:border-white/5 dark:text-teal-400 sm:dark:border-white/5',
      )}
    />
  );
}

export function DescriptionDetails({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'dd'>) {
  return (
    <dd
      {...props}
      className={clsxMerge(
        className,
        'pb-3 pt-1 text-teal-950 sm:border-t sm:border-teal-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none',
      )}
    />
  );
}
