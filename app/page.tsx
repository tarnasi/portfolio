import Sidebar from "@/components/siderbar";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-txt">
      <main className="flex flex-row min-h-screen">
        <Sidebar />
        <Profile />
      </main>
    </div>
  );
}
