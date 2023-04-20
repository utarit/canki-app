import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Link className="btn btn-primary btn-lg" href="/cpr">
        TYD Notları
      </Link>
    </main>
  );
}
