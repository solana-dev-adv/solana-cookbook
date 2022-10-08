import{_ as p,r as a,o as d,c as h,a as n,b as e,w as o,F as u,d as t,e as r}from"./app.c241040b.js";var _="/assets/tx-journey.dd6310be.png",k="/assets/tpu-jito-labs.8bb32fb6.png",b="/assets/dropped-via-rpc-pool.8d1ce9af.png",f="/assets/dropped-minority-fork-pre-process.555653e1.png",m="/assets/dropped-minority-fork-post-process.48c3c955.png";const g={},w=n("h1",{id:"retrying-transactions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#retrying-transactions","aria-hidden":"true"},"#"),t(" Retrying Transactions")],-1),y=t("On some occasions, a seemingly valid transaction may be dropped before it is included in a block. This most often occurs during periods of network congestion, when an RPC node fails to rebroadcast the transaction to the "),v={href:"https://docs.solana.com/terminology#leader",target:"_blank",rel:"noopener noreferrer"},T=t("leader"),P=t(". To an end-user, it may appear as if their transaction disappears entirely. While RPC nodes are equipped with a generic rebroadcasting algorithm, application developers are also capable of developing their own custom rebroadcasting logic."),x=r('<h2 id="facts" tabindex="-1"><a class="header-anchor" href="#facts" aria-hidden="true">#</a> Facts</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>RPC nodes will attempt to rebroadcast transactions using a generic algorithm</li><li>Application developers can implement their own custom rebroadcasting logic</li><li>Developers should take advantage of the <code>maxRetries</code> parameter on the <code>sendTransaction</code> JSON-RPC method</li><li>Developers should enable preflight checks to raise errors before transactions are submitted</li><li>Before re-signing any transaction, it is <strong>very important</strong> to ensure that the initial transaction\u2019s blockhash has expired</li></ul></div><h2 id="the-journey-of-a-transaction" tabindex="-1"><a class="header-anchor" href="#the-journey-of-a-transaction" aria-hidden="true">#</a> The Journey of a Transaction</h2><h3 id="how-clients-submit-transactions" tabindex="-1"><a class="header-anchor" href="#how-clients-submit-transactions" aria-hidden="true">#</a> How Clients Submit Transactions</h3><p>In Solana, there is no concept of a mempool. All transactions, whether they are initiated programmatically or by an end-user, are efficiently routed to leaders so that they can be processed into a block. There are two main ways in which a transaction can be sent to leaders:</p>',5),R=t("By proxy via an RPC server and the "),C={href:"https://docs.solana.com/developing/clients/jsonrpc-api#sendtransaction",target:"_blank",rel:"noopener noreferrer"},B=t("sendTransaction"),S=t(" JSON-RPC method"),L=t("Directly to leaders via a "),I={href:"https://docs.rs/solana-client/1.7.3/solana_client/tpu_client/index.html",target:"_blank",rel:"noopener noreferrer"},j=t("TPU Client"),z=n("p",null,"The vast majority of end-users will submit transactions via an RPC server. When a client submits a transaction, the receiving RPC node will in turn attempt to broadcast the transaction to both the current and next leaders. Until the transaction is processed by a leader, there is no record of the transaction outside of what the client and the relaying RPC nodes are aware of. In the case of a TPU client, rebroadcast and leader forwarding is handled entirely by the client software.",-1),A=n("p",null,[n("img",{src:_,alt:"Transaction Journey"})],-1),H=n("h3",{id:"how-rpc-nodes-broadcast-transactions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-rpc-nodes-broadcast-transactions","aria-hidden":"true"},"#"),t(" How RPC Nodes Broadcast Transactions")],-1),D=t("After an RPC node receives a transaction via "),q=n("code",null,"sendTransaction",-1),F=t(", it will convert the transaction into a "),V={href:"https://en.wikipedia.org/wiki/User_Datagram_Protocol",target:"_blank",rel:"noopener noreferrer"},W=t("UDP"),O=t(" packet before forwarding it to the relevant leaders. UDP allows validators to quickly communicate with one another, but does not provide any guarantees regarding transaction delivery."),U=t("Because Solana\u2019s leader schedule is known in advance of every "),E={href:"https://docs.solana.com/terminology#epoch",target:"_blank",rel:"noopener noreferrer"},K=t("epoch"),N=t(" (~2 days), an RPC node will broadcast its transaction directly to the current and next leaders. This is in contrast to other gossip protocols such as Ethereum that propagate transactions randomly and broadly across the entire network. By default, RPC nodes will try to forward transactions to leaders every two seconds until either the transaction is finalized or the transaction\u2019s blockhash expires (150 blocks or ~1 minute 19 seconds as of the time of this writing). If the outstanding rebroadcast queue size is greater than "),J={href:"https://github.com/solana-labs/solana/blob/bfbbc53dac93b3a5c6be9b4b65f679fdb13e41d9/send-transaction-service/src/send_transaction_service.rs#L20",target:"_blank",rel:"noopener noreferrer"},M=t("10,000 transactions"),G=t(", newly submitted transactions are dropped. There are command-line "),Y={href:"https://github.com/solana-labs/solana/blob/bfbbc53dac93b3a5c6be9b4b65f679fdb13e41d9/validator/src/main.rs#L1172",target:"_blank",rel:"noopener noreferrer"},Q=t("arguments"),X=t(" that RPC operators can adjust to change the default behavior of this retry logic."),Z=t("When an RPC node broadcasts a transaction, it will attempt to forward the transaction to a leader\u2019s "),$={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/validator.rs#L867",target:"_blank",rel:"noopener noreferrer"},nn=t("Transaction Processing Unit (TPU)"),tn=t(". The TPU processes transactions in five distinct phases:"),en={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/fetch_stage.rs#L21",target:"_blank",rel:"noopener noreferrer"},sn=t("Fetch Stage"),an={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/tpu.rs#L91",target:"_blank",rel:"noopener noreferrer"},on=t("SigVerify Stage"),rn={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/banking_stage.rs#L249",target:"_blank",rel:"noopener noreferrer"},cn=t("Banking Stage"),ln={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/poh/src/poh_service.rs",target:"_blank",rel:"noopener noreferrer"},pn=t("Proof of History Service"),dn={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/tpu.rs#L136",target:"_blank",rel:"noopener noreferrer"},hn=t("Broadcast Stage"),un=n("p",null,[n("img",{src:k,alt:"TPU Overview"}),n("small",{style:{display:"block","text-align":"center"}},"Image Courtesy of Jito Labs")],-1),_n=n("p",null,"Of these five phases, the Fetch Stage is responsible for receiving transactions. Within the Fetch Stage, validators will categorize incoming transactions according to three ports:",-1),kn={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/gossip/src/contact_info.rs#L27",target:"_blank",rel:"noopener noreferrer"},bn=t("tpu"),fn=t(" handles regular transactions such as token transfers, NFT mints, and program instructions"),mn={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/gossip/src/contact_info.rs#L31",target:"_blank",rel:"noopener noreferrer"},gn=t("tpu_vote"),wn=t(" focuses exclusively on voting transactions"),yn={href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/gossip/src/contact_info.rs#L29",target:"_blank",rel:"noopener noreferrer"},vn=t("tpu_forwards"),Tn=t(" forwards unprocessed packets to the next leader if the current leader is unable to process all transactions"),Pn=t("For more information on the TPU, please refer to "),xn={href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143",target:"_blank",rel:"noopener noreferrer"},Rn=t("this excellent writeup by Jito Labs"),Cn=t("."),Bn=n("h2",{id:"how-transactions-get-dropped",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-transactions-get-dropped","aria-hidden":"true"},"#"),t(" How Transactions Get Dropped")],-1),Sn=n("p",null,"Throughout a transaction\u2019s journey, there are a few scenarios in which the transaction can be unintentionally dropped from the network.",-1),Ln=n("h3",{id:"before-a-transaction-is-processed",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#before-a-transaction-is-processed","aria-hidden":"true"},"#"),t(" Before a transaction is processed")],-1),In=t("If the network drops a transaction, it will most likely do so before the transaction is processed by a leader. UDP "),jn={href:"https://en.wikipedia.org/wiki/Packet_loss",target:"_blank",rel:"noopener noreferrer"},zn=t("packet loss"),An=t(" is the simplest reason why this might occur. During times of intense network load, it\u2019s also possible for validators to become overwhelmed by the sheer number of transactions required for processing. While validators are equipped to forward surplus transactions via "),Hn=n("code",null,"tpu_forwards",-1),Dn=t(", there is a limit to the amount of data that can be "),qn={href:"https://github.com/solana-labs/solana/blob/master/core/src/banking_stage.rs#L389",target:"_blank",rel:"noopener noreferrer"},Fn=t("forwarded"),Vn=t(". Furthermore, each forward is limited to a single hop between validators. That is, transactions received on the "),Wn=n("code",null,"tpu_forwards",-1),On=t(" port are not forwarded on to other validators."),Un=t("There are also two lesser known reasons why a transaction may be dropped before it is processed. The first scenario involves transactions that are submitted via an RPC pool. Occasionally, part of the RPC pool can be sufficiently ahead of the rest of the pool. This can cause issues when nodes within the pool are required to work together. In this example, the transaction\u2019s "),En={href:"https://docs.solana.com/developing/programming-model/transactions#recent-blockhash",target:"_blank",rel:"noopener noreferrer"},Kn=t("recentBlockhash"),Nn=t(" is queried from the advanced part of the pool (Backend A). When the transaction is submitted to the lagging part of the pool (Backend B), the nodes will not recognize the advanced blockhash and will drop the transaction. This can be detected upon transaction submission if developers enable "),Jn={href:"https://docs.solana.com/developing/clients/jsonrpc-api#sendtransaction",target:"_blank",rel:"noopener noreferrer"},Mn=t("preflight checks"),Gn=t(" on "),Yn=n("code",null,"sendTransaction",-1),Qn=t("."),Xn=r('<p><img src="'+b+'" alt="Dropped via RPC Pool"></p><p>Temporarily network forks can also result in dropped transactions. If a validator is slow to replay its blocks within the Banking Stage, it may end up creating a minority fork. When a client builds a transaction, it\u2019s possible for the transaction to reference a <code>recentBlockhash</code> that only exists on the minority fork. After the transaction is submitted, the cluster can then switch away from its minority fork before the transaction is processed. In this scenario, the transaction is dropped due to the blockhash not being found.</p><p><img src="'+f+'" alt="Dropped due to Minority Fork (Before Processed)"></p><h3 id="after-a-transaction-is-processed-and-before-it-is-finalized" tabindex="-1"><a class="header-anchor" href="#after-a-transaction-is-processed-and-before-it-is-finalized" aria-hidden="true">#</a> After a transaction is processed and before it is finalized</h3><p>In the event a transaction references a <code>recentBlockhash</code> from a minority fork, it\u2019s still possible for the transaction to be processed. In this case, however, it would be processed by the leader on the minority fork. When this leader attempts to share its processed transactions with the rest of the network, it would fail to reach consensus with the majority of validators that do not recognize the minority fork. At this time, the transaction would be dropped before it could be finalized.</p><p><img src="'+m+'" alt="Dropped due to Minority Fork (After Processed)"></p><h2 id="handling-dropped-transactions" tabindex="-1"><a class="header-anchor" href="#handling-dropped-transactions" aria-hidden="true">#</a> Handling Dropped Transactions</h2><p>While RPC nodes will attempt to rebroadcast transactions, the algorithm they employ is generic and often ill-suited for the needs of specific applications. To prepare for times of network congestion, application developers should customize their own rebroadcasting logic.</p><h3 id="an-in-depth-look-at-sendtransaction" tabindex="-1"><a class="header-anchor" href="#an-in-depth-look-at-sendtransaction" aria-hidden="true">#</a> An In-Depth Look at sendTransaction</h3><p>When it comes to submitting transactions, the <code>sendTransaction</code> RPC method is the primary tool available to developers. <code>sendTransaction</code> is only responsible for relaying a transaction from a client to an RPC node. If the node receives the transaction, <code>sendTransaction</code> will return the transaction id that can be used to track the transaction. A successful response does not indicate whether the transaction will be processed or finalized by the cluster.</p>',10),Zn={class:"custom-container tip"},$n=n("p",{class:"custom-container-title"},"TIP",-1),nt=n("h4",{id:"request-parameters",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-parameters","aria-hidden":"true"},"#"),t(" Request Parameters")],-1),tt=n("li",null,[n("code",null,"transaction"),t(": "),n("code",null,"string"),t(" - fully-signed Transaction, as encoded string")],-1),et=t("(optional) "),st=n("code",null,"configuration object",-1),at=t(": "),ot=n("code",null,"object",-1),rt=n("li",null,[n("code",null,"skipPreflight"),t(": "),n("code",null,"boolean"),t(" - if true, skip the preflight transaction checks (default: false)")],-1),it=t("(optional) "),ct=n("code",null,"preflightCommitment",-1),lt=t(": "),pt=n("code",null,"string",-1),dt=t(" - "),ht={href:"https://docs.solana.com/developing/clients/jsonrpc-api#configuring-state-commitment",target:"_blank",rel:"noopener noreferrer"},ut=t("Commitment"),_t=t(' level to use for preflight simulations against the bank slot (default: "finalized").'),kt=n("li",null,[t("(optional) "),n("code",null,"encoding"),t(": "),n("code",null,"string"),t(' - Encoding used for the transaction data. Either "base58" (slow), or "base64". (default: "base58").')],-1),bt=n("li",null,[t("(optional) "),n("code",null,"maxRetries"),t(": "),n("code",null,"usize"),t(" - Maximum number of times for the RPC node to retry sending the transaction to the leader. If this parameter is not provided, the RPC node will retry the transaction until it is finalized or until the blockhash expires.")],-1),ft=n("h4",{id:"response",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),mt=n("code",null,"transaction id",-1),gt=t(": "),wt=n("code",null,"string",-1),yt=t(" - First transaction signature embedded in the transaction, as base-58 encoded string. This transaction id can be used with "),vt={href:"https://docs.solana.com/developing/clients/jsonrpc-api#getsignaturestatuses",target:"_blank",rel:"noopener noreferrer"},Tt=t("getSignatureStatuses"),Pt=t(" to poll for status updates."),xt=n("h2",{id:"customizing-rebroadcast-logic",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#customizing-rebroadcast-logic","aria-hidden":"true"},"#"),t(" Customizing Rebroadcast Logic")],-1),Rt=t("In order to develop their own rebroadcasting logic, developers should take advantage of "),Ct=n("code",null,"sendTransaction",-1),Bt=t("\u2019s "),St=n("code",null,"maxRetries",-1),Lt=t(" parameter. If provided, "),It=n("code",null,"maxRetries",-1),jt=t(" will override an RPC node\u2019s default retry logic, allowing developers to manually control the retry process "),zt={href:"https://github.com/solana-labs/solana/blob/98707baec2385a4f7114d2167ef6dfb1406f954f/validator/src/main.rs#L1258-L1274",target:"_blank",rel:"noopener noreferrer"},At=t("within reasonable bounds"),Ht=t("."),Dt=t("A common pattern for manually retrying transactions involves temporarily storing the "),qt=n("code",null,"lastValidBlockHeight",-1),Ft=t(" that comes from "),Vt={href:"https://docs.solana.com/developing/clients/jsonrpc-api#getlatestblockhash",target:"_blank",rel:"noopener noreferrer"},Wt=t("getLatestBlockhash"),Ot=t(". Once stashed, an application can then "),Ut={href:"https://docs.solana.com/developing/clients/jsonrpc-api#getblockheight",target:"_blank",rel:"noopener noreferrer"},Et=t("poll the cluster\u2019s blockheight"),Kt=t(" and manually retry the transaction at an appropriate interval. In times of network congestion, it\u2019s advantageous to set "),Nt=n("code",null,"maxRetries",-1),Jt=t(" to 0 and manually rebroadcast via a custom algorithm. While some applications may employ an "),Mt={href:"https://en.wikipedia.org/wiki/Exponential_backoff",target:"_blank",rel:"noopener noreferrer"},Gt=t("exponential backoff"),Yt=t(" algorithm, others such as "),Qt={href:"https://www.mango.markets/",target:"_blank",rel:"noopener noreferrer"},Xt=t("Mango"),Zt=t(" opt to "),$t={href:"https://github.com/blockworks-foundation/mango-ui/blob/b6abfc6c13b71fc17ebbe766f50b8215fa1ec54f/src/utils/send.tsx#L713",target:"_blank",rel:"noopener noreferrer"},ne=t("continuously resubmit"),te=t(" transactions at a constant interval until some timeout has occurred."),ee=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(`
  Keypair`),n("span",{class:"token punctuation"},","),t(`
  Connection`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token constant"},"LAMPORTS_PER_SOL"),n("span",{class:"token punctuation"},","),t(`
  SystemProgram`),n("span",{class:"token punctuation"},","),t(`
  Transaction`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token keyword"},"as"),t(" nacl "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},'"tweetnacl"'),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"sleep"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),t("ms"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},[n("span",{class:"token builtin"},"Promise")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("r"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),t("r"),n("span",{class:"token punctuation"},","),t(" ms"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" payer "),n("span",{class:"token operator"},"="),t(" Keypair"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"generate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" toAccount "),n("span",{class:"token operator"},"="),t(" Keypair"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"generate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("publicKey"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" connection "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"http://127.0.0.1:8899"'),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" airdropSignature "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(" connection"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"requestAirdrop"),n("span",{class:"token punctuation"},"("),t(`
    payer`),n("span",{class:"token punctuation"},"."),t("publicKey"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token constant"},"LAMPORTS_PER_SOL"),t(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"await"),t(" connection"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirmTransaction"),n("span",{class:"token punctuation"},"("),t("airdropSignature"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" blockhashResponse "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(" connection"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getLatestBlockhashAndContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" lastValidBlockHeight "),n("span",{class:"token operator"},"="),t(" blockhashResponse"),n("span",{class:"token punctuation"},"."),t("context"),n("span",{class:"token punctuation"},"."),t("slot "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" transaction "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Transaction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    feePayer`),n("span",{class:"token operator"},":"),t(" payer"),n("span",{class:"token punctuation"},"."),t("publicKey"),n("span",{class:"token punctuation"},","),t(`
    blockhash`),n("span",{class:"token operator"},":"),t(" blockhashResponse"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("blockhash"),n("span",{class:"token punctuation"},","),t(`
    lastValidBlockHeight`),n("span",{class:"token operator"},":"),t(" lastValidBlockHeight"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),t(`
    SystemProgram`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"transfer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      fromPubkey`),n("span",{class:"token operator"},":"),t(" payer"),n("span",{class:"token punctuation"},"."),t("publicKey"),n("span",{class:"token punctuation"},","),t(`
      toPubkey`),n("span",{class:"token operator"},":"),t(" toAccount"),n("span",{class:"token punctuation"},","),t(`
      lamports`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1000000"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" message "),n("span",{class:"token operator"},"="),t(" transaction"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"serializeMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" signature "),n("span",{class:"token operator"},"="),t(" nacl"),n("span",{class:"token punctuation"},"."),t("sign"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"detached"),n("span",{class:"token punctuation"},"("),t("message"),n("span",{class:"token punctuation"},","),t(" payer"),n("span",{class:"token punctuation"},"."),t("secretKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  transaction`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignature"),n("span",{class:"token punctuation"},"("),t("payer"),n("span",{class:"token punctuation"},"."),t("publicKey"),n("span",{class:"token punctuation"},","),t(" Buffer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),t("signature"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" rawTransaction "),n("span",{class:"token operator"},"="),t(" transaction"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"serialize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"let"),t(" blockheight "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(" connection"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBlockHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("blockheight "),n("span",{class:"token operator"},"<"),t(" lastValidBlockHeight"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    connection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sendRawTransaction"),n("span",{class:"token punctuation"},"("),t("rawTransaction"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      skipPreflight`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    blockheight `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(" connection"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBlockHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br")])],-1),se=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("blockheight "),n("span",{class:"token operator"},"<"),t(" lastValidBlockHeight"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  connection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sendRawTransaction"),n("span",{class:"token punctuation"},"("),t("rawTransaction"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    skipPreflight`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"sleep"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  blockheight `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(" connection"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBlockHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br")])],-1),ae=t("When polling via "),oe=n("code",null,"getLatestBlockhash",-1),re=t(", applications should specify their intended "),ie={href:"https://docs.solana.com/developing/clients/jsonrpc-api#configuring-state-commitment",target:"_blank",rel:"noopener noreferrer"},ce=t("commitment"),le=t(" level. By setting its commitment to "),pe=n("code",null,"confirmed",-1),de=t(" (voted on) or "),he=n("code",null,"finalized",-1),ue=t(" (~30 blocks after "),_e=n("code",null,"confirmed",-1),ke=t("), an application can avoid polling a blockhash from a minority fork."),be=t("If an application has access to RPC nodes behind a load balancer, it can also choose to divide its workload amongst specific nodes. RPC nodes that serve data-intensive requests such as "),fe=t("getProgramAccounts"),me=t(" may be prone to falling behind and can be ill-suited for also forwarding transactions. For applications that handle time-sensitive transactions, it may be prudent to have dedicated nodes that only handle "),ge=n("code",null,"sendTransaction",-1),we=t("."),ye=r('<h3 id="the-cost-of-skipping-preflight" tabindex="-1"><a class="header-anchor" href="#the-cost-of-skipping-preflight" aria-hidden="true">#</a> The Cost of Skipping Preflight</h3><p>By default, <code>sendTransaction</code> will perform three preflight checks prior to submitting a transaction. Specifically, <code>sendTransaction</code> will:</p><ul><li>Verify that all signatures are valid</li><li>Check that the referenced blockhash is within the last 150 blocks</li><li>Simulate the transaction against the bank slot specified by the <code>preflightCommitment</code></li></ul><p>In the event that any of these three preflight checks fail, <code>sendTransaction</code> will raise an error prior to submitting the transaction. Preflight checks can often be the difference between losing a transaction and allowing a client to gracefully handle an error. To ensure that these common errors are accounted for, it is recommended that developers keep <code>skipPreflight</code> set to <code>false</code>.</p><h3 id="when-to-re-sign-transactions" tabindex="-1"><a class="header-anchor" href="#when-to-re-sign-transactions" aria-hidden="true">#</a> When to Re-Sign Transactions</h3><p>Despite all attempts to rebroadcast, there may be times in which a client is required to re-sign a transaction. Before re-signing any transaction, it is <strong>very important</strong> to ensure that the initial transaction\u2019s blockhash has expired. If the initial blockhash is still valid, it is possible for both transactions to be accepted by the network. To an end-user, this would appear as if they unintentionally sent the same transaction twice.</p>',6),ve=t("In Solana, a dropped transaction can be safely discarded once the blockhash it references is older than the "),Te=n("code",null,"lastValidBlockHeight",-1),Pe=t(" received from "),xe=n("code",null,"getLatestBlockhash",-1),Re=t(". Developers should keep track of this "),Ce=n("code",null,"lastValidBlockHeight",-1),Be=t(" by querying "),Se={href:"https://docs.solana.com/developing/clients/jsonrpc-api#getepochinfo",target:"_blank",rel:"noopener noreferrer"},Le=n("code",null,"getEpochInfo",-1),Ie=t(" and comparing with "),je=n("code",null,"blockHeight",-1),ze=t(" in the response. Once a blockhash is invalidated, clients may re-sign with a newly-queried blockhash."),Ae=n("h2",{id:"acknowledgements",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#acknowledgements","aria-hidden":"true"},"#"),t(" Acknowledgements")],-1),He=t("Many thanks to Trent Nelson, "),De={href:"https://twitter.com/jacobvcreech",target:"_blank",rel:"noopener noreferrer"},qe=t("Jacob Creech"),Fe=t(", White Tiger, Le Yafo, "),Ve={href:"https://twitter.com/buffalu__",target:"_blank",rel:"noopener noreferrer"},We=t("Buffalu"),Oe=t(", and "),Ue={href:"https://twitter.com/jito_labs",target:"_blank",rel:"noopener noreferrer"},Ee=t("Jito Labs"),Ke=t(" for their review and feedback.");function Ne(Je,Me){const s=a("ExternalLinkIcon"),i=a("SolanaCodeGroupItem"),c=a("SolanaCodeGroup"),l=a("RouterLink");return d(),h(u,null,[w,n("p",null,[y,n("a",v,[T,e(s)]),P]),x,n("ol",null,[n("li",null,[R,n("a",C,[B,e(s)]),S]),n("li",null,[L,n("a",I,[j,e(s)])])]),z,A,H,n("p",null,[D,q,F,n("a",V,[W,e(s)]),O]),n("p",null,[U,n("a",E,[K,e(s)]),N,n("a",J,[M,e(s)]),G,n("a",Y,[Q,e(s)]),X]),n("p",null,[Z,n("a",$,[nn,e(s)]),tn]),n("ul",null,[n("li",null,[n("a",en,[sn,e(s)])]),n("li",null,[n("a",an,[on,e(s)])]),n("li",null,[n("a",rn,[cn,e(s)])]),n("li",null,[n("a",ln,[pn,e(s)])]),n("li",null,[n("a",dn,[hn,e(s)])])]),un,_n,n("ul",null,[n("li",null,[n("a",kn,[bn,e(s)]),fn]),n("li",null,[n("a",mn,[gn,e(s)]),wn]),n("li",null,[n("a",yn,[vn,e(s)]),Tn])]),n("p",null,[Pn,n("a",xn,[Rn,e(s)]),Cn]),Bn,Sn,Ln,n("p",null,[In,n("a",jn,[zn,e(s)]),An,Hn,Dn,n("a",qn,[Fn,e(s)]),Vn,Wn,On]),n("p",null,[Un,n("a",En,[Kn,e(s)]),Nn,n("a",Jn,[Mn,e(s)]),Gn,Yn,Qn]),Xn,n("div",Zn,[$n,nt,n("ul",null,[tt,n("li",null,[et,st,at,ot,n("ul",null,[rt,n("li",null,[it,ct,lt,pt,dt,n("a",ht,[ut,e(s)]),_t]),kt,bt])])]),ft,n("ul",null,[n("li",null,[mt,gt,wt,yt,n("a",vt,[Tt,e(s)]),Pt])])]),xt,n("p",null,[Rt,Ct,Bt,St,Lt,It,jt,n("a",zt,[At,e(s)]),Ht]),n("p",null,[Dt,qt,Ft,n("a",Vt,[Wt,e(s)]),Ot,n("a",Ut,[Et,e(s)]),Kt,Nt,Jt,n("a",Mt,[Gt,e(s)]),Yt,n("a",Qt,[Xt,e(s)]),Zt,n("a",$t,[ne,e(s)]),te]),e(c,null,{default:o(()=>[e(i,{title:"TS",active:""},{default:o(()=>[ee]),preview:o(()=>[se]),_:1})]),_:1}),n("p",null,[ae,oe,re,n("a",ie,[ce,e(s)]),le,pe,de,he,ue,_e,ke]),n("p",null,[be,e(l,{to:"/guides/get-program-accounts.html"},{default:o(()=>[fe]),_:1}),me,ge,we]),ye,n("p",null,[ve,Te,Pe,xe,Re,Ce,Be,n("a",Se,[Le,e(s)]),Ie,je,ze]),Ae,n("p",null,[He,n("a",De,[qe,e(s)]),Fe,n("a",Ve,[We,e(s)]),Oe,n("a",Ue,[Ee,e(s)]),Ke])],64)}var Ye=p(g,[["render",Ne]]);export{Ye as default};
