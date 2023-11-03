import dynamic from 'next/dynamic';

const DynamicSidebar = dynamic(() => import('./PersonalInfoSidebar'), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col sm:flex-row page-layout_personal">
      <div className="w-full sm:w-1/4">
        {/* Sidebar */}
        <DynamicSidebar />
      </div>
      <div className="w-full sm:w-3/4 pt-5">{children}</div>
    </div>
  );
}
