import { FC, useMemo } from 'react';
import { Tag } from '../base/Tag/Tag';
import { ISkillTag } from './useSkills';

interface SkillTagProps {
  skill: ISkillTag;
}

export const SkillTag: FC<SkillTagProps> = ({ skill }) => {
  const color = useMemo(() => {
    if (skill.type === 'code') {
      return 'amber';
    }
    if (skill.type === 'framework') {
      return 'teal';
    }
    if (skill.type === 'design') {
      return 'fuchsia';
    }
    if (skill.type === 'devops') {
      return 'sky';
    }
    return 'purple';
  }, [skill.type]);

  return <Tag color={color}>{skill.label}</Tag>;
};
