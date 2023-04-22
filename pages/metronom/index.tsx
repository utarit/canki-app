import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Metronome() {
  const [bpm, setBpm] = useState<number>(104);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [context, setContext] = useState<AudioContext | null>(null);
  const [clickNode, setClickNode] = useState<OscillatorNode | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    let count = 0;

    if (isPlaying && context) {
      const interval = (60 / bpm) * 1000;
      timer = setInterval(() => {
        const clickOscillator = context.createOscillator();
        clickOscillator.frequency.value = count % 4 === 0 ? 880 : 440;
        clickOscillator.connect(context.destination);
        clickOscillator.start();
        clickOscillator.stop(context.currentTime + 0.05);
        count++;
      }, interval);
    }

    return () => {
      clearInterval(timer);
    };
  }, [bpm, isPlaying, context]);

  function handleBpmChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBpm(parseInt(event.target.value));
  }

  function handlePlayToggle() {
    if (isPlaying) {
      setIsPlaying(false);
      context?.suspend();
    } else {
      const newContext = new AudioContext();
      const newClickNode = newContext.createOscillator();
      setIsPlaying(true);
      setContext(newContext);
      setClickNode(newClickNode);
      newContext.resume();
    }
  }

  useEffect(() => {
    if (context && clickNode) {
      clickNode.frequency.value = 440;
      clickNode.type = "sine";
      clickNode.connect(context.destination);
    }
  }, [context, clickNode]);

  return (
    <main className="min-h-screen flex flex-col items-center pt-4">
      <Head>
        <title>Metronom</title>
        <meta
          name="description"
          content="Burdan bası ritmini dinleyebilir, kendinize şarkı seçebilirsiniz."
        />
      </Head>
      <h1 className="text-4xl font-bold my-4">Metronom</h1>

      <aside className="p-8 w-full sm:w-96">
        <label className="label flex flex-col gap-2">
          BPM: {bpm}
          <input
            type="range"
            min="100"
            max="120"
            value={bpm}
            onChange={handleBpmChange}
            className="range"
          />
        </label>
        <button
          className="btn btn-secondary btn-block mt-2"
          onClick={handlePlayToggle}
          type="button"
        >
          {isPlaying ? "Stop" : "Start"}
        </button>
      </aside>
      <article className="prose p-4 container">
        <p>
          Kalp masajı yaparken önerilen ritim 100-120 BPM olacak şekilde
          olmalıdır. Size bu hızlı geliyorsa even haklısınız, hızlı yapmanız
          gerekiyor.
        </p>
        Aklınızda tutmak için bazı şarkı önerileri
        <ul>
          <li>“Stayin’ Alive” - Bee Gees - 104 BPM</li>
          <li>“Dancing Queen” - ABBA - 100 BPM</li>
          <li>“Cecilia” - Simon & Garfunkel - 102 BPM</li>
          <li>“Hard To Handle” - The Black Crowes - 104 BPM</li>
          <li>
            “Can’t Stop the Feeling” - Justin Timberlake - 113 BPM (This is an
            original song from the movie “Trolls”)
          </li>
          <li>“Rock Your Body” - Justin Timberlake - 100 BPM</li>
          <li>“I Will Survive” - Gloria Gaynor - 117 BPM</li>
          <li>“MMMBop” - Hanson - 104 BPM</li>
          <li>“Girls Just Want to Have Fun” - Cyndi Lauper - 120 BPM</li>
          <li>“Just Dance” - Lady Gaga, Colby O’Donis - 119 BPM</li>
          <li>
            “Something Just Like This” - The Chainsmokers, Coldplay - 103 BPM
          </li>
          <li>“Rumour Has It” - Adele - 120 BPM</li>
          <li>“Fly” - Sugar Ray - 100 BPM</li>
          <li>“Hips Don’t Lie” - Shakira - 100 BPM</li>
          <li>“Work It” - Missy Elliott - 102 BPM</li>
          <li>“Suddenly I See” - KT Tunstall - 100 BPM</li>
          <li>“Crazy” - Gnarls Barkley - 112 BPM</li>
          <li>“Man in the Mirror” - Michael Jackson - 100 BPM</li>
          <li>“One Week” - Barenaked Ladies - 113 BPM</li>
          <li>“The Imperial March” - John Williams - 103 BPM</li>
        </ul>
        <Link
          target="_blank"
          href="https://www.procpr.org/blog/training/cpr-chest-compression-rate"
        >
          Kaynak 1
        </Link>{" "}
        <Link
          target="_blank"
          href="https://www.nhs.uk/conditions/first-aid/cpr/"
        >
          Kaynak 2
        </Link>
        <p>
          Kızılay&apos;ın&nbsp;
          <Link
            target="_blank"
            href="https://www.ilkyardim.org.tr/yetiskinler-icin-ilk-yardim.html"
          >
            resmi sitesinde
          </Link>
          &nbsp;yetişkin, bebek ve çocuk için dakikada yüz bası yapılması
          öneriliyor.
        </p>
      </article>
    </main>
  );
}

export default Metronome;
