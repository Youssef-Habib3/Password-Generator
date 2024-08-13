import Header from "@/components/Header";
import Main from "@/components/Main";

const Home = () => {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <div className="w-[100%] md:w-[100%] select-none">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
