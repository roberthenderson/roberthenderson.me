import { clsxMerge } from '@/src/utils/clsxMerge';

export function Divider({
  soft = false,
  className,
  ...props
}: { soft?: boolean } & React.ComponentPropsWithoutRef<'hr'>) {
  return (
    <hr
      role="presentation"
      {...props}
      className={clsxMerge(
        className,
        'w-full border-t',
        soft && 'border-teal-950/5 dark:border-white/5',
        !soft && 'border-teal-950/10 dark:border-white/10',
      )}
    />
  );
}
