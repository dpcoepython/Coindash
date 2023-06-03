import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const supportedChainIds = [11155111]  //sepolia
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
      <ToastContainer />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp