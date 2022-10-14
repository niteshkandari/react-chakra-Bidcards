import React, { useState, useEffect } from "react";
import { bidData, Bid } from "./utils/bid-card-class";
import BidCard from "./components/bidCard";
import { Box, Switch, Text } from "@chakra-ui/react";

const App = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [toggleBgColor, setToggleBgColor] = useState<boolean>(false);

  useEffect(() => {
    let timer: any;
    timer = setTimeout(() => {
      setIsloading(true);
      return () => clearTimeout(timer);
    }, 900);
  }, []);

  const handleSwitchBehaviour = (e: any) => {
    setToggleBgColor(e.target.checked);
  };

  return (
    <Box
      className={`
      relative
      bg-slate-100 flex flex-col 
      justify-center items-center
      gap-8 p-4 
      md:grid md:grid-cols-2 md:place-items-center
      md:bg-slate-500 
      ${
        toggleBgColor
          ? "animate-gradient-x bg-gradient-to-r from-blue-400 to-blue-800 via-slate-900"
          : "lg:bg-slate-900"
      }
      lg:p-8  
      lg:grid lg:grid-cols-3 lg:gap-3 lg:gap-y-7
      `}
    >
      <Box className="absolute z-50 top-4 right-4 md:m-2 flex justify-center items-center gap-2">
        <Switch size="lg" onChange={handleSwitchBehaviour} />
        <Box className="border rounded-xl px-1 cursor-progress w-auto bg-transparent
          border-purple-800 flex justify-center items-center">
          <Text className={`${toggleBgColor ? "text-white" : " text-purple-300"}`}>
          {toggleBgColor ? "stop animation" : "start animation"}
        </Text>
        </Box>
      </Box>
      {bidData.map((data: Bid) => (
        <BidCard key={data.key} data={data} isLoading={isLoading} />
      ))}
    </Box>
  );
};

export default App;
