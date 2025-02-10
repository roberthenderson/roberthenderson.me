import { Home } from '../components/Home/Home';
import { PageSectionIdEnum } from '../types';
import { getPageSectionMetadata } from '../utils/getPageSectionMetadata';

export const metadata = getPageSectionMetadata(PageSectionIdEnum.Work);

export default function Work() {
  return <Home />;
}
