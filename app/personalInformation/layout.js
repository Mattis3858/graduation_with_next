import dynamic from 'next/dynamic';
import PersonalInfoSidebar from './PersonalInfoSidebar';

const DynamicSidebar = dynamic(() => import('./PersonalInfoSidebar'), {
  ssr: false,
});
export default function RootLayout({ children }) {
  return (
    <div className="flex mt-6 mx-8 page-layout">
      <div className="w-1/4">
        {' '}
        {/* Sidebar */}
        <DynamicSidebar />
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
}
