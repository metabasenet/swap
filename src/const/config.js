import uniswapV2Router02 from "./UniswapV2Router02.json";
import uniswapV2Factory from "./UniswapV2Factory.json";
import uniswapV2Pair from "./UniswapV2Pair.json";
import erc20 from "./Erc20.json";

const config = {
  router02: uniswapV2Router02,
  UniswapV2Factory: uniswapV2Factory,
  UniswapV2Pair: uniswapV2Pair,
  erc20: erc20,
  router02_addr: "0xdfD106145cC3491E727244deF09CecC46F31BE31",
  factoryAddr: "0x6064216D6817a1620002FBa69d485949A009B59d",
  rpc_test: "https://test.metabasenet.site/rpc-test",
  rpc: "https://rpc.metabasenet.site/",
  usdt_addr: "0x599688E0f2752b95b71E9aee33765a39A8743172",
  mnt_addr: "0x8F8738D94CA825602af06530a422b8D7a323568A",
  domainUser_url: "main.metabasenet.site",
};
export { config };
