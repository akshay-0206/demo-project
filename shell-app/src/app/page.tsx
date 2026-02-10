export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Shell App</h1>

      <div className="mt-6 space-x-4">
        <a href="/auth" className="text-blue-600 underline">
          Go to Auth
        </a>
        <a href="/dashboard" className="text-green-600 underline">
          Go to Dashboard
        </a>
      </div>
    </main>
  );
}
