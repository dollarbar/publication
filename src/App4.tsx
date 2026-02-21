import { FullPageFrame } from "@/components/FullPageFrame";

export default function App() {
  return (
    <FullPageFrame>
      <h1 className="text-5xl text-center tracking-wide">
        The Chronicle
      </h1>

      <p className="mt-8 text-center max-w-2xl mx-auto leading-8">
        A publication of Orthodox theology, patristic writings,
        and sacred tradition.
      </p>
    </FullPageFrame>
  );
}