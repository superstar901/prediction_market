// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const addressArg = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  // We get the contract to deploy
  const PredictionMarket = await hre.ethers.getContractFactory(
    "PredictionMarket"
  );
  const predictionMarket = await PredictionMarket.deploy(addressArg);

  await predictionMarket.deployed();

  console.log("Greeter deployed to:", predictionMarket.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
