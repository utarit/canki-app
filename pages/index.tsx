import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <Head>
        <title>Sıkıcı Ana Sayfa</title>
        <meta name="description" content="OCİT Canki Ana sayfası" />
      </Head>
      <h1 className="text-2xl font-bold text-center mb-4">Sıkıcı Ana Sayfa</h1>
      <div className="w-full md:w-80 flex flex-col gap-4">
        <Link className="btn btn-primary btn-block" href="/tyd">
          TYD Notları
        </Link>
        <Link className="btn  btn-block" href="/metronom">
          Metronom
        </Link>
        <Link className="btn btn-block" href="/posts">
          Paylaşımlar
        </Link>

        <Link className="btn btn-block" href="/ocit">
          Biz kimiz?
        </Link>
      </div>
    </main>
  );
}
