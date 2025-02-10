import { Home } from '../components/Home/Home';
import { PageSectionIdEnum } from '../types';
import { getPageSectionMetadata } from '../utils/getPageSectionMetadata';

export const metadata = getPageSectionMetadata(PageSectionIdEnum.About);

export default function About() {
  return <Home />;
}
