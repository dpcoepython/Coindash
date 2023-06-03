// @ts-check

const axios = require("axios").default;

export default function handler(req, res) {
  try {
    axios
      .get("https://crypto-news16.p.rapidapi.com/news/top/10", {
        headers: {
          "X-RapidAPI-Key":
            "3556d940cfmsha9f40fef3c2bce8p10c176jsn638a9d651a07",
          "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
        },
      })
      .then((response) => {
        return res.status(200).json(response.data);
      })
    // return res.status(200).json([
    //   {
    //     title: "Bitcoin",
    //     description: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //     url: "https://www.coindesk.com/price/bitcoin",
    //     source: "CoinDesk",
    //     date: "2021-10-25T13:00:00.000Z",
    //     image: "https://static.coindesk.com/static/images/fb-share-2.jpg",
    //     body: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //   },
    //   {
    //     title: "Bitcoin",
    //     description: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //     url: "https://www.coindesk.com/price/bitcoin",
    //     source: "CoinDesk",
    //     date: "2021-10-25T13:00:00.000Z",
    //     image: "https://static.coindesk.com/static/images/fb-share-2.jpg",
    //     body: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //   },
    //   {
    //     title: "Bitcoin",
    //     description: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //     url: "https://www.coindesk.com/price/bitcoin",
    //     source: "CoinDesk",
    //     date: "2021-10-25T13:00:00.000Z",
    //     image: "https://static.coindesk.com/static/images/fb-share-2.jpg",
    //     body: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //   },
    //   {
    //     title: "Bitcoin",
    //     description: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //     url: "https://www.coindesk.com/price/bitcoin",
    //     source: "CoinDesk",
    //     date: "2021-10-25T13:00:00.000Z",
    //     image: "https://static.coindesk.com/static/images/fb-share-2.jpg",
    //     body: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //   },
    //   {
    //     title: "Bitcoin",
    //     description: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //     url: "https://www.coindesk.com/price/bitcoin",
    //     source: "CoinDesk",
    //     date: "2021-10-25T13:00:00.000Z",
    //     image: "https://static.coindesk.com/static/images/fb-share-2.jpg",
    //     body: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //   },
    //   {
    //     title: "Bitcoin",
    //     description: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //     url: "https://www.coindesk.com/price/bitcoin",
    //     source: "CoinDesk",
    //     date: "2021-10-25T13:00:00.000Z",
    //     image: "https://static.coindesk.com/static/images/fb-share-2.jpg",
    //     body: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //   },
    //   {
    //     title: "Bitcoin",
    //     description: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //     url: "https://www.coindesk.com/price/bitcoin",
    //     source: "CoinDesk",
    //     date: "2021-10-25T13:00:00.000Z",
    //     image: "https://static.coindesk.com/static/images/fb-share-2.jpg",
    //     body: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //   },
    //   {
    //     title: "Bitcoin",
    //     description: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //     url: "https://www.coindesk.com/price/bitcoin",
    //     source: "CoinDesk",
    //     date: "2021-10-25T13:00:00.000Z",
    //     image: "https://static.coindesk.com/static/images/fb-share-2.jpg",
    //     body: "Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    //   },
    // ]);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
