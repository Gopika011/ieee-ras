import Image from "next/image"
import git from "@/app/assets/github.svg"
import Carousal from "./components/carousal/Carousal";

export default function Home() {
  return (
    <div>
      <div className="h-[618px] bg-[#242424]"></div>
      <div className="m-10"><Carousal /></div>
    </div>

  );
}
