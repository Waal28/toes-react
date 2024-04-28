import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./Navbar"));
export default function Home() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Navbar />
      </Suspense>
      <h1>Home</h1>
    </>
  );
}
