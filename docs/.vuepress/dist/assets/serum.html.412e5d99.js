import{_ as p,r as c,o as l,c as u,b as t,w as a,F as r,a as n,d as s}from"./app.c241040b.js";const i={},k=n("h1",{id:"serum",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#serum","aria-hidden":"true"},"#"),s(" Serum")],-1),d=n("p",null,"Serum is a protocol for decentralized exchanges built on Solana. You can use Serum to create new markets, get order books, trade, and more.",-1),b=n("h2",{id:"how-to-get-a-serum-market",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-get-a-serum-market","aria-hidden":"true"},"#"),s(" How to get a Serum market")],-1),m=n("p",null,"A market on Serum contains all the orders and capabilities to make orders on Serum. For everything you do on Serum you need to know the market you are working with.",-1),w=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"confirmed"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s(`
    connection`),n("span",{class:"token punctuation"},","),s(`
    marketAddress`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    programAddress
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br")])],-1),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),g=n("h2",{id:"how-to-get-serum-order-books",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-get-serum-order-books","aria-hidden":"true"},"#"),s(" How to get Serum order books")],-1),h=n("p",null,"Serum markets consist of orderbooks which have bids and asks. You can query this information so you can see what is going on on the market and act accordingly.",-1),f=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" bids "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadBids"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" bids"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" asks "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadAsks"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" asks"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),_=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" bids "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadBids"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" bids"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"let"),s(" asks "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadAsks"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" asks"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),v=n("h2",{id:"how-to-get-current-open-orders",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-get-current-open-orders","aria-hidden":"true"},"#"),s(" How to get current open orders")],-1),x=n("p",null,"As a trader, you will want to know what current open orders you have on a market. You can query your or anyone else's open orders on a market with Serum.",-1),A=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" trader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadOrdersForOwner"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" trader"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" order "),n("span",{class:"token keyword"},"of"),s(" orders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br")])],-1),S=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadOrdersForOwner"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" traderPublicKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1);function P(F,M){const e=c("SolanaCodeGroupItem"),o=c("SolanaCodeGroup");return l(),u(r,null,[k,d,b,m,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[w]),preview:a(()=>[y]),_:1})]),_:1}),g,h,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[f]),preview:a(()=>[_]),_:1})]),_:1}),v,x,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[A]),preview:a(()=>[S]),_:1})]),_:1})],64)}var C=p(i,[["render",P]]);export{C as default};
