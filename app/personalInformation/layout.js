import PersonalInfoSidebar from './PersonalInfoSidebar';
export default function RootLayout({ children }) {
  return (
    <div className="flex mt-6 mx-8 page-layout">
      <div className="w-1/4">
        {' '}
        {/* Sidebar */}
        <PersonalInfoSidebar />
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
}
