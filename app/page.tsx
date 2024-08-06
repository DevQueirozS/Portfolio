import Header from "@/components/Header";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
    <Welcome />
    <div className="bg-custom-gradient w-full h-full flex">
      <Header />
      
    </div>
    </>
  );
}
