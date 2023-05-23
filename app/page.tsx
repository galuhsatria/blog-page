import PostItem from "./components/PostItem";

export default function Home() {
  return (
    <main>
      <div className="layout my-4 dark:bg-white">
        <div>
          <h1 className="text-2xl font-bold">Hi! 👋</h1>
          <h1 className="text-2xl font-bold">
            Im <span>Galuh Satria</span>
          </h1>
        </div>
        <p className="max-w-xl sm:text-sm md:text-base text-zinc-400 mt-3">Im a computer sience student. I like to explore some new tech stuf and a passionate Front-End Developer</p>
      </div>
      <PostItem />
    </main>
  );
}
