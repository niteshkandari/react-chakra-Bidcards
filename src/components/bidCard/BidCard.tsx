import React from "react";
import { Box, Image, Stack, Text, Button, Skeleton } from "@chakra-ui/react";
import { Bid } from "../../utils/bid-card-class"
import { AiOutlineHeart } from "react-icons/ai";
import BiddingClock from "../BiddingClock";

type BidCardPropsType = {
 data:Bid,
 isLoading:boolean
}

const BidCard = ({ data, isLoading }: BidCardPropsType) => {
  return (
    <Skeleton borderRadius="10" isLoaded={isLoading} className="mt-16">
    <Box className="relative" maxW="300">
      <Box
        className="absolute inset-0 bg-gradient-to-r
         from-pink-600 to-purple-600 rounded-lg blur-xl"
        maxW="300"
      />
      <Box
        className="relative bg-slate-900 flex flex-col space-y-4"
        borderRadius="md"
        maxW="300"
        p="7"
      >
        <Box className="flex justify-between">
          <div className=" w-auto h-5 flex justify-center items-center 
           px-3 py-2 text-sm font-bold bg-transparent 
           text-purple-300 border border-purple-900 rounded-xl">
            {data.action.dealType}
          </div>
          <div className=" w-auto h-5 flex justify-center 
             items-center px-3 py-2 text-sm font-bold 
             bg-transparent text-white border border-red-500 rounded-xl">
            {data.action.saleType}
          </div>
        </Box>

        <Box className="relative z-20 h-44">
          <Image
            className="absolute hover:animate-pulse h-full
            w-full object-cover rounded-lg"
            src={data.imgAdress}
          ></Image>
        </Box>

        <Box className="flex justify-between">
          <Box>
            <Text color="white">{data.regId}</Text>
            <Text color="blue">{data.citizen}</Text>
          </Box>
          <Box className=" text-slate-500 flex gap-2 items-center">
            <AiOutlineHeart />
            <Text>{data.noOfLikes}</Text>
          </Box>
        </Box>

        <Box className="flex sm:flex sm:flex-shrink-0 justify-between items-center gap-2">
          <Box
            className="border w-auto p-2 h-16 flex-shrink-0"
            borderColor="blue"
          >
            <Text>
              <Text as="b" className="uppercase" fontSize="12" color="green">
                {data.citizen}
              </Text>
              <Text color="white">&#36; {data.highestBid}</Text>
            </Text>
          </Box>

          <Box
            className="border min-w-md p-2 h-16 flex-shrink-0 "
            borderColor="grey"
          >
            <Stack spacing={1}>
              <Text fontSize="12" as="b" color="teal" className="uppercase">
                {data.auctionText}
              </Text>
              <Text color="white" fontSize="md">
                <BiddingClock startTime={data.bidTime}/>
              </Text>
            </Stack>
          </Box>
        </Box>

        <Box>
          <Button colorScheme="blue" size="lg" w="100%" borderRadius="0" className="uppercase">
            {data.buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
    </Skeleton>
  );
};

export default BidCard;
