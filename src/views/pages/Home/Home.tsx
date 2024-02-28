import {
  HomeAgenda,
  HomeHeader,
  HomeInside,
  HomeSocials,
  HomeProjects,
  HomeTeachers,
  HomeFAQs,
} from "./components";

function Home() {
  return (
    <main className="">
      <HomeHeader />
      <HomeSocials />
      <HomeAgenda />
      <HomeInside />
      <HomeProjects />
      <HomeTeachers />
      <HomeFAQs />
    </main>
  );
}

export default Home;
