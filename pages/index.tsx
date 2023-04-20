export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <svg viewBox="0 0 100 70" width={48} height={48}>
        <rect x="0" y="0" width="100" height="30" fill="#fff" />
        <rect x="0" y="30" width="100" height="30" fill="#f00" />
        <circle cx="50" cy="60" r="10" fill="#000" />
        <rect x="65" y="10" width="25" height="20" fill="#000" />
      </svg>
    </main>
  );
}
