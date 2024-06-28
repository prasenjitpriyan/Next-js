import Incdec from "@/components/Incdec";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-lime-500 flex justify-center items-center">
      <div className="h-[448px] w-[640px] flex justify-center items-center border-2 rounded-2xl gap-5">
        <Incdec />
      </div>
    </div>
  );
};

export default Home;
