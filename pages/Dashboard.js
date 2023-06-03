import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'


const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider('https://eth-sepolia.g.alchemy.com/v2/6E-lMq4heuPJfW9MwEnTOlTsZl39o9w8'),  //sepolia
  ),
)
const Dashboard = ({address}) => {
  const [sanityTokens, setSanityTokens] = useState([])
  const [thirdWebTokens, setThirdWebTokens] = useState([])
  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
        const coins = await fetch(`https://px3hi0pm.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D`) //px3hi0pm
        const sanityTokens = (await coins.json()).result
        setSanityTokens(sanityTokens)

        setThirdWebTokens(sanityTokens.map(token => sdk.getTokenModule(token.contractAddress)))
    }
    getSanityAndThirdWebTokens()
  }, [])
  console.log('SanityTokens >> ',sanityTokens)
  console.log('ThirdWebTokens >>',thirdWebTokens)
  return (
    <Wrapper>
      <Sidebar/>
      <MainContainer>
      <Header
          thirdWebTokens={thirdWebTokens}
          sanityTokens={sanityTokens}
          walletAddress={address}
        />
        <Main
          thirdWebTokens={thirdWebTokens}
          sanityTokens={sanityTokens}
          walletAddress={address}
        />
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`

const MainContainer = styled.div`
  flex: 1;
`
