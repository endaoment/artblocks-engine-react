export const appTitle = process.env.REACT_APP_TITLE;
export const graphQLURL = process.env.REACT_APP_GRAPHQL_URL;
export const coreContractAddress = process.env.REACT_APP_CORE_CONTRACT_ADDRESS;
export const mintContractAddress = process.env.REACT_APP_MINT_CONTRACT_ADDRESS;
export const tokenUrl = process.env.REACT_APP_TOKEN_URL;
export const mediaUrl = process.env.REACT_APP_MEDIA_URL;
export const generatorUrl = process.env.REACT_APP_GENERATOR_URL;
export const jsonRpcProviderMainnetUrl = process.env.REACT_APP_JSON_RPC_PROVIDER_MAINNET_URL || '';
export const jsonRpcProviderRopstenUrl = process.env.REACT_APP_JSON_RPC_PROVIDER_ROPSTEN_URL || '';
export const jsonRpcProviderGoerliUrl = process.env.REACT_APP_JSON_RPC_PROVIDER_GOERLI_URL || '';
export const openseaBaseUrl = process.env.REACT_APP_OPENSEA_BASE_URL;
export const etherscanBaseUrl = process.env.REACT_APP_ETHERSCAN_BASE_URL;
export const expectedChainId = Number(process.env.REACT_APP_EXPECTED_CHAIN_ID);
export const projectsPerPage = 8;
export const tokensPerPage = 12;
export const confirmations = 3;
export const isDev = false;

if (!process.env.REACT_APP_TITLE) {
		throw new Error("`REACT_APP_TITLE` not set")
}

console.log("REACT_APP_TITLE is", process.env.REACT_APP_TITLE)

export const config = {
		GIT_SHA: process.env.REACT_APP_TITLE,
}
