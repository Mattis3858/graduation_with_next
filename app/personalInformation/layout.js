import PersonalInfoSidebar from './PersonalInfoSidebar';
export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        {' '}
        {/* Sidebar */}
        <PersonalInfoSidebar />
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
}
