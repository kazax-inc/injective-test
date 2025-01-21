import { IndexerGrpcDerivativesApi } from '@injectivelabs/sdk-ts'
import { getNetworkEndpoints, Network } from '@injectivelabs/networks'

const endpoints = getNetworkEndpoints(Network.Mainnet)
const indexerGrpcDerivativesApi = new IndexerGrpcDerivativesApi(
  endpoints.indexer,
)

const marketId = '0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce'

try {
        await indexerGrpcDerivativesApi.fetchMarkets()
        console.log('[success] Derivative fetchMarkets')
    } catch (error) {
        console.error('[error] Derivative fetchMarkets\n', error)
    }

    try {
        await indexerGrpcDerivativesApi.fetchMarket(marketId)
        console.log(`[success] Derivative fetchMarket ${marketId}`)
    } catch (error) {
        console.error(`[error] Derivative fetchMarket ${marketId}\n`, error)
    }

    try {
        await indexerGrpcDerivativesApi.fetchOrderbooksV2([marketId])
        console.log(`[success] Derivative fetchOrderbooksV2 [${marketId}]`)
    } catch (error) {
        console.error(`[error] Derivative fetchOrderbooksV2 [${marketId}]\n`, error)
    }