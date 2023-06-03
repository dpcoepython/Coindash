// @ts-check

const axios = require("axios").default;
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'

export default async function handler(req, res) {
  try {
    const coins = [];
    const builder = await imageUrlBuilder(client)
    axios.get('https://rmrjmc60.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22coins%22%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D')
        .then(response => {
            response.data.result.forEach(coin => {
                coins.push({
                  name: coin.name,
                  sign: coin.symbol,
                  logo: builder.image(coin.logo).url(),
                  balanceUsd: 0,
                  balanceCoin: 0,
                  priceUsd: coin.usdPrice,
                  change: 0,
                  allocation: 0,
                })
            })
            res.status(200).json(coins)
            }
        )
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}


