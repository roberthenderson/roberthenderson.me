import { Home } from '../components/Home/Home';
import { PageSectionIdEnum } from '../types';
import { getPageSectionMetadata } from '../utils/getPageSectionMetadata';

export const metadata = getPageSectionMetadata(PageSectionIdEnum.Contact);

export default function Contact() {
  return <Home />;
}
