import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'viem/chains';
import { http } from 'viem';

const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!;
const walletProjectId = process.env.NEXT_PUBLIC_WALLET_PROJECT_ID!;
const sepoliaUrl = `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`;

export const config = getDefaultConfig({
  appName: 'Wallet_web3',
  projectId: walletProjectId,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(sepoliaUrl),
  },
});
