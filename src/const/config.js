import uniswapV2Router02 from "./UniswapV2Router02.json";
import uniswapV2Factory from "./UniswapV2Factory.json";
import uniswapV2Pair from "./UniswapV2Pair.json";
import erc20 from "./Erc20.json";

const config = {
  router02: uniswapV2Router02,
  UniswapV2Factory: uniswapV2Factory,
  UniswapV2Pair: uniswapV2Pair,
  erc20: erc20,
  router02_addr: "0xc61FD639dC9cE77FF0E7a8aC826Bf0c291B93C09",
  factoryAddr: "0x20FfE544d1c19d990E269D2a758AdF1883FDa8Ed",
  rpc: "https://test.metabasenet.site/rpc-102",
  mnt_addr: "0x6bB636dB36a5f04BE8fAfF375852862939b84442",
  usdt_addr: "0x599688E0f2752b95b71E9aee33765a39A8743172",
  wmnt_addr: "0x8F8738D94CA825602af06530a422b8D7a323568A",
};
export { config };
