export default function ServicesPage() {
  return (
    <div className="p-8 bg-gray-500">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>

      <p className="text-gray-600 mb-6">
        We provide high-quality digital services tailored to your needs.
      </p>

      <ul className="space-y-3">
        <li className="border p-4 rounded-lg">Web Development</li>
        <li className="border p-4 rounded-lg">Mobile App Development</li>
        <li className="border p-4 rounded-lg">UI / UX Design</li>
      </ul>
      <a href="/dashboard" className="text-blue-500 underline mt-6 block">
        Back
      </a>
    </div>
  );
}
