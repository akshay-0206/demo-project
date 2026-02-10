export default function Dashboard() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Dashboard App</h1>
      <p className="mt-4">User dashboard content</p>

      <a
        href="/dashboard/services"
        className="text-blue-500 underline mt-6 block"
      >
        Services
      </a>
      <br />
      <a
        href="/dashboard/banner"
        className="text-blue-500 underline mt-6 block"
      >
        Banner
      </a>
      <br />
      <a href="/" className="text-blue-500 underline mt-6 block">
        Back to Home
      </a>
    </main>
  );
}
