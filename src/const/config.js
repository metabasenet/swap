import uniswapV2Router02 from './UniswapV2Router02.json';
import uniswapV2Factory from './UniswapV2Factory.json';
import uniswapV2Pair from './UniswapV2Pair.json';
import erc20 from './Erc20.json';

const config = {
    router02: uniswapV2Router02,
    UniswapV2Factory:uniswapV2Factory,
    UniswapV2Pair:uniswapV2Pair,
    erc20:erc20,
    router02_addr: '0xc61FD639dC9cE77FF0E7a8aC826Bf0c291B93C09',
    factoryAddr:'0x20FfE544d1c19d990E269D2a758AdF1883FDa8Ed',
    rpc: 'https://test.metabasenet.site/rpc-102',
    mnt_addr:'0x6bB636dB36a5f04BE8fAfF375852862939b84442',
    usdt_addr: '0x3056ed8057dA4eFB828321E308fa400EB7ACAF7D',
    wmnt_addr:'0x4493432a154201D0068095B9742B802834564cc0',
}
export { config }