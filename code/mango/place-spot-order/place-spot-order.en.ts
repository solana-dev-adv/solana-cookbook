import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Market } from '@project-serum/serum';
import { IDS, MangoClient, Config, getTokenAccountsByOwnerWithWrappedSol } from "@blockworks-foundation/mango-client";

(async () => {
  const { wallet } = useWallet();
  
  const cluster = 'devnet';
  const group = 'devnet.3';

  const config = new Config(IDS);
  const groupConfig = config.getGroup(cluster, group);
  if(!groupConfig) {
    throw new Error("unable to get mango group config");
  }
  const mangoGroupKey = groupConfig.publicKey;

  const clusterData = IDS.groups.find((g) => {
    return g.name == group && g.cluster == cluster;
  });
  const mangoProgramIdPk = new PublicKey(clusterData.mangoProgramId);

  const clusterUrl = IDS.cluster_urls[cluster];
  const connection = new Connection(clusterUrl, 'singleGossip');
  const client = new MangoClient(connection, mangoProgramIdPk);
  const mangoGroup = await client.getMangoGroup(mangoGroupKey);
  const mangoAccount = await client.createMangoAccount(mangoGroup, wallet?.adapter, 23);
  const marketAddress = new PublicKey('...');
  const programAddress = new PublicKey('...');
  const market = await Market.load(connection, marketAddress, {}, programAddress);
  await client.placeSpotOrder(
    mangoGroup,
    mangoAccount,
    mangoGroup.mangoCache,
    market,
    wallet?.adapter,
    'buy',
    3,
    3.5
  )
})();