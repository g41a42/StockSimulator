import displayAllStocks from "./visual/displayAllStocks.js";
import displayMyStocks from "./visual/displayMyStocks.js";
import oparationsControler from "./oparations/controler.js";
import User from "./classes/user.js";
import teste from "./test.js";

teste();
displayAllStocks();
let user = new User();
displayMyStocks(user.portifolio.stockList);
oparationsControler(user);
