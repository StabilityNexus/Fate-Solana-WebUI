import PredictionPoolDashboard from "./PredictionPoolDashboard";

export async function generateStaticParams() {
  return [
    { pool: "pool" }
  ];
}

export default function PredictionPoolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <PredictionPoolDashboard />
      </main>
    </div>
  );
}
