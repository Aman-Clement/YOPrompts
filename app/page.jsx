import Feed from '@components/Feed'

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br>
        </br>
        <span className="orange_gradient text-center">Bard Better</span>
      </h1>
      <p className="desc text-center">
        Open Source Ai Prompting tool for people to discover , create and share
        creative prompts
      </p>

      <Feed/>
    </section>
  );
}

export default Home