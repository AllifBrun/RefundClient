import { Outlet } from "react-router";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col text-gray-100 items-center">
      <main className="p-3 w-full flex items-center flex-col">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
