import { IndexerGrpcSpotApi } from '@injectivelabs/sdk-ts'
import { getNetworkEndpoints, Network } from '@injectivelabs/networks'

const endpoints = getNetworkEndpoints(Network.Mainnet)
const indexerGrpcSpotApi = new IndexerGrpcSpotApi(endpoints.indexer)

const marketId = '0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0'

try {
        await indexerGrpcSpotApi.fetchMarkets()
        console.log('[success] Spot fetchMarkets')
    } catch (error) {
        console.error('[error] Spot fetchMarkets\n', error)
    }

    try {
        await indexerGrpcSpotApi.fetchMarket(marketId)
        console.log(`[success] Spot fetchMarket ${marketId}`)
    } catch (error) {
        console.error(`[error] Spot fetchMarket ${marketId}\n`, error)
    }

    try {
        await indexerGrpcSpotApi.fetchOrderbooksV2([marketId])
        console.log(`[success] Spot fetchOrderbooksV2 [${marketId}]`)
    } catch (error) {
        console.error(`[error] Spot fetchOrderbooksV2 [${marketId}]\n`, error)
    }