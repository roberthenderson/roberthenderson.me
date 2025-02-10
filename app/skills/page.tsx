import { Home } from '../components/Home/Home';
import { PageSectionIdEnum } from '../types';
import { getPageSectionMetadata } from '../utils/getPageSectionMetadata';

export const metadata = getPageSectionMetadata(PageSectionIdEnum.Skills);

export default function Skills() {
  return <Home />;
}
