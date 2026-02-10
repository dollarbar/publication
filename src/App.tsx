
import bg from "/public/background.png";
import { Background } from "@/background";

<Background image={bg}>
  <h1 className="text-white">Hello</h1>
</Background>

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/background.png)" }}
    ></div>
  )
}

export default App;
