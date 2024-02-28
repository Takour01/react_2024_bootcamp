import Footer from "@/views/components/Footer/Footer";
import Navbar from "@/views/components/Navbar/Navbar";
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export const Route = createRootRoute({
  component: () => {
    return (
      // <>
      //   <Outlet />
      // </>
      <div className="relative overflow-scroll bg-primary ">
        <Navbar />
        <main className="">
          <Outlet />
        </main>
        <Footer />
        <TanStackRouterDevtools />
      </div>
    );
  },
});
