

const API_KEY =process.env.CRYPTO_API_KEY;
// console.log('🍍🍍🍍', API_KEY)


export async function GET(request: Request) {
//     const url = new URL(request.url)
//     const limit = url.searchParams.get('limit') || 5


//     const response = await fetch (
//         `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=USD`,
//         {
//             headers: {
//                 'X-CMC_PRO_API_KEY': API_KEY!,
//             }
//         }
//     )

//   const res = await response.json();
//   return Response.json(res.data)
return Response.json(data)
}

const data = [
    {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 11747,
        "date_added": "2010-07-13T00:00:00.000Z",
        "tags": [
            "mineable",
            "pow",
            "sha-256",
            "store-of-value",
            "state-channel",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "galaxy-digital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "bitcoin-ecosystem",
            "ftx-bankruptcy-estate"
        ],
        "max_supply": 21000000,
        "circulating_supply": 19760950,
        "total_supply": 19760950,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 1,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:47:00.000Z",
        "quote": {
            "USD": {
                "price": 63917.37123668032,
                "volume_24h": 29874012243.598667,
                "volume_change_24h": 114.7918,
                "percent_change_1h": -0.20147613,
                "percent_change_24h": -2.73728585,
                "percent_change_7d": 1.09815144,
                "percent_change_30d": 8.22138951,
                "percent_change_60d": -0.43215362,
                "percent_change_90d": 3.28853454,
                "market_cap": 1263067977139.478,
                "market_cap_dominance": 56.0359,
                "fully_diluted_market_cap": 1342264795970.29,
                "tvl": null,
                "last_updated": "2024-09-30T14:47:00.000Z"
            }
        }
    },
    {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "num_market_pairs": 9367,
        "date_added": "2015-08-07T00:00:00.000Z",
        "tags": [
            "pos",
            "smart-contracts",
            "ethereum-ecosystem",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "hashkey-capital-portfolio",
            "kenetic-capital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "layer-1",
            "ftx-bankruptcy-estate"
        ],
        "max_supply": null,
        "circulating_supply": 120367966.81148952,
        "total_supply": 120367966.81148952,
        "infinite_supply": true,
        "platform": null,
        "cmc_rank": 2,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:46:00.000Z",
        "quote": {
            "USD": {
                "price": 2615.426908221301,
                "volume_24h": 15175585012.411177,
                "volume_change_24h": 50.039,
                "percent_change_1h": -0.63788439,
                "percent_change_24h": -1.36074568,
                "percent_change_7d": -1.24474632,
                "percent_change_30d": 3.80988361,
                "percent_change_60d": -17.20555943,
                "percent_change_90d": -23.1366528,
                "market_cap": 314813619286.6582,
                "market_cap_dominance": 13.9525,
                "fully_diluted_market_cap": 314813619286.66,
                "tvl": null,
                "last_updated": "2024-09-30T14:46:00.000Z"
            }
        }
    },
    {
        "id": 825,
        "name": "Tether USDt",
        "symbol": "USDT",
        "slug": "tether",
        "num_market_pairs": 99050,
        "date_added": "2015-02-25T00:00:00.000Z",
        "tags": [
            "stablecoin",
            "asset-backed-stablecoin",
            "avalanche-ecosystem",
            "solana-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
            "injective-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
            "optimism-ecosystem",
            "fiat-stablecoin"
        ],
        "max_supply": null,
        "circulating_supply": 119629274444.24619,
        "total_supply": 121372683868.56189,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x8254a986319461bf29ae35940a96786e507ad9ac"
        },
        "infinite_supply": true,
        "cmc_rank": 3,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:46:00.000Z",
        "quote": {
            "USD": {
                "price": 0.9999442461095376,
                "volume_24h": 57256976211.065926,
                "volume_change_24h": 60.7385,
                "percent_change_1h": 0.00652388,
                "percent_change_24h": -0.02017382,
                "percent_change_7d": -0.00869009,
                "percent_change_30d": 0.00213486,
                "percent_change_60d": 0.03696106,
                "percent_change_90d": 0.144071,
                "market_cap": 119622604646.78271,
                "market_cap_dominance": 5.3016,
                "fully_diluted_market_cap": 121365916869.24,
                "tvl": null,
                "last_updated": "2024-09-30T14:46:00.000Z"
            }
        }
    },
    {
        "id": 1839,
        "name": "BNB",
        "symbol": "BNB",
        "slug": "bnb",
        "num_market_pairs": 2251,
        "date_added": "2017-07-25T00:00:00.000Z",
        "tags": [
            "marketplace",
            "centralized-exchange",
            "payments",
            "smart-contracts",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "bnb-chain",
            "layer-1",
            "sec-security-token",
            "alleged-sec-securities",
            "celsius-bankruptcy-estate"
        ],
        "max_supply": null,
        "circulating_supply": 145932828.392192,
        "total_supply": 145932828.392192,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 4,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:46:00.000Z",
        "quote": {
            "USD": {
                "price": 576.1214476639637,
                "volume_24h": 1946265287.2611775,
                "volume_change_24h": 23.132,
                "percent_change_1h": -0.19870882,
                "percent_change_24h": -3.50300537,
                "percent_change_7d": -2.87869484,
                "percent_change_30d": 7.36621358,
                "percent_change_60d": 1.06269742,
                "percent_change_90d": 0.19332512,
                "market_cap": 84075032355.00645,
                "market_cap_dominance": 3.7271,
                "fully_diluted_market_cap": 84075032355.01,
                "tvl": null,
                "last_updated": "2024-09-30T14:46:00.000Z"
            }
        }
    },
    {
        "id": 5426,
        "name": "Solana",
        "symbol": "SOL",
        "slug": "solana",
        "num_market_pairs": 747,
        "date_added": "2020-04-10T00:00:00.000Z",
        "tags": [
            "pos",
            "platform",
            "solana-ecosystem",
            "cms-holdings-portfolio",
            "kenetic-capital-portfolio",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "okx-ventures-portfolio",
            "layer-1",
            "ftx-bankruptcy-estate",
            "sec-security-token",
            "alleged-sec-securities",
            "cmc-crypto-awards-2024"
        ],
        "max_supply": null,
        "circulating_supply": 469096229.80361944,
        "total_supply": 585684587.6481017,
        "infinite_supply": true,
        "platform": null,
        "cmc_rank": 5,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-09-30T14:46:00.000Z",
        "quote": {
            "USD": {
                "price": 157.07819503870562,
                "volume_24h": 2373260043.9017234,
                "volume_change_24h": 82.9421,
                "percent_change_1h": 0.05492636,
                "percent_change_24h": -0.06580146,
                "percent_change_7d": 9.68824814,
                "percent_change_30d": 15.43418239,
                "percent_change_60d": -6.27135446,
                "percent_change_90d": 6.40299622,
                "market_cap": 73684789077.0144,
                "market_cap_dominance": 3.2676,
                "fully_diluted_market_cap": 91998277889.75,
                "tvl": null,
                "last_updated": "2024-09-30T14:46:00.000Z"
            }
        }
    }
]