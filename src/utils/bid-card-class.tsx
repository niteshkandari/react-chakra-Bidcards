import image1 from "../assets/jpg/img1.jpg";
import astronaut from "../assets/jpg/astronaut.jpg";
import nft1 from "../assets/jpg/nft1.jpg";
import nft2 from "../assets/jpg/nft2.jpg";
import galaxy from "../assets/png/galaxy.png";
import monkey from "../assets/png/monkey.png";
import technology from "../assets/png/technology.png";


type ActionType = {
  dealType: string;
  saleType: string;
};

export class Bid {
  constructor(
    public readonly key:string = "",
    public action: ActionType = { dealType: "", saleType: "" },
    public imgAdress: string = "",
    public readonly regId: string = "",
    public readonly noOfLikes: number = 0,
    public readonly citizen: string = "",
    public readonly highestBid: number = 0,
    public readonly bidTime:string = "",
    public buttonText:string = "",
    public auctionText:string = "",
  ) {}
}

export const bidData = [
  new Bid(
    "1",
    { dealType: "Hot Deal", saleType: "Auction" },
    image1,
    "#BB/457843",
    92,
    "Enoch Citizen",
    234,
    "Nov 26,2022",
    "bid now",
    "auction ends in"
  ),
  new Bid(
    "2",
    { dealType: "Hot Deal", saleType: "Auction" },
    astronaut,
   "#BB/457843",
    89,
    "Enoch Citizen",
    124,
    "Dec 1, 2022",
    "bid now",
    "auction ends in"
  ),
  new Bid(
    "3",
    { dealType: "Hot Deal", saleType: "Auction" },
    nft1,
   "#BB/457843",
    192,
    "Enoch Citizen",
    314,
    "Dec 6, 2022",
    "bid now",
    "auction ends in"
  ),
  new Bid(
    "4",
    { dealType: "Hot Deal", saleType: "Auction" },
    nft2,
   "#BB/457843",
    56,
    "Enoch Citizen",
    904,
    "Nov 10, 2022",
    "bid now",
    "auction ends in"
  ), 
  new Bid(
    "5",
    { dealType: "Hot Deal", saleType: "Auction" },
    galaxy,
   "#BB/457843",
    8,
    "Enoch Citizen",
    734,
    "Dec 28, 2022",
    "bid now",
    "auction ends in"
  ), 
  new Bid(
    "6",
    { dealType: "Hot Deal", saleType: "Auction" },
    monkey,
   "#BB/457843",
    2,
    "Enoch Citizen",
    434,
    "Dec 25, 2022",
    "bid now",
    "auction ends in"
  ), 
  new Bid(
    "7",
    { dealType: "Hot Deal", saleType: "Auction" },
    technology,
   "#BB/457843",
    9,
    "Enoch Citizen",
    734,
    "Nov 10, 2022",
    "bid now",
    "auction ends in"
  ), 
];
