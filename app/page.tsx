import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the Shahriyar Website</h1>
        <p>It is not just a simple into about me life. It is much more you should know me we can do excited things like creating application, play video games, watch a movie and be a successful person all of us togather.</p>
        <p>I am programmer as you know. I professional are Python and frameworks of python like Django, FastAPI</p>
        <p>On the other hands I work with Javascript (and nodejs) like creating web app with nextjs I love it.</p>
        <p>But most thing I like to play is mind. how can create something to help people and get money to have awesome life with your family.</p>
        <p>These are my hashtags (#VideoGames, #Programming, #Coding, #Travel)</p>
        <p>Know if you read this message please <u><b>Go to this page and see my fully resume and you can contact me with email if you like I am ready accept your idea or job as programmer :)</b></u></p>
        <p style={{"color":"lightgreen"}}>
          <u>
            <a href="/tarnasi/intro">My Website (OR) Portfolio LINK</a>
          </u>
        </p>
      </main>
    </div>
  );
}
