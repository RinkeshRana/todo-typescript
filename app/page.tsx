import Image from "next/image";
import Header from "./Header";
import dynamic from "next/dynamic";
const TodoBody = dynamic(() => import("./TodoBody"), { ssr: false });

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="px-2 w-[90vw] md:w-96">
        <Header />
        <TodoBody />
      </div>
    </main>
  );
}
