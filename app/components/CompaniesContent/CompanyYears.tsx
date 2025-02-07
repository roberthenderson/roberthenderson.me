import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC } from 'react';
import { Tag, TagProps } from '../base/Tag/Tag';

interface CompanyYearsProps {
  years: number[];
  color?: TagProps['color'];
  className?: string;
}

export const CompanyYears: FC<CompanyYearsProps> = ({
  years,
  color,
  className,
}) => {
  return (
    <div className={clsxMerge('flex flex-wrap gap-2', className)}>
      {years?.map((year) => (
        <Tag key={year} color={color}>
          {year}
        </Tag>
      ))}
    </div>
  );
};
