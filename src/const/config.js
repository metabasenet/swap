import uniswapV2Router02 from './uniswapV2Router02.json'
import uniswapV2Factory from './uniswapV2Factory.json'
import uniswapV2Pair from './uniswapV2Pair.json'
import erc20 from './erc20.json'
const config = {
    router02: uniswapV2Router02,
    UniswapV2Factory:uniswapV2Factory,
    UniswapV2Pair:uniswapV2Pair,
    erc20:erc20,
    // router02_addr: '0xE6dcb0905c54197BcE6b73e071BD73b13935167c',
    router02_addr: '0x052f218f647Ef35EbE39950D3A554Ab030B978Ca',
    factoryAddr:'0xF1895D368cbd330B026d44AF610160FeE1bEa675',
    rpc: 'https://test.metabasenet.site/rpc-102',
}
export { config }