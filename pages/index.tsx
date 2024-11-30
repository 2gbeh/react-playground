import Header from "@/components/atoms/header";
import Ribbon from "@/components/atoms/ribbon";

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <Ribbon title="Dashboard" />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content */}
        </div>
      </main>
    </div>
  );
}
