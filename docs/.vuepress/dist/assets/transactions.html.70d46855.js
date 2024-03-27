import{_ as g,r as s,o as e,c as r,a,b as t,w as l,F as c,d as n,e as u}from"./app.31cab234.js";const d={},m=a("h1",{id:"transactions",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#transactions","aria-hidden":"true"},"#"),n(" Transactions")],-1),h=n("Maaaring mag-invoke ang mga kliyente ng "),p=n("programs"),y=n(" sa pamamagitan ng pagsusumite ng transaksyon sa isang cluster. Ang isang transaksyon ay maaaring magsama ng maraming instruction, ang bawat isa ay nagta-target ng sarili nitong programa. Kapag naisumite ang isang transaksyon, ipoproseso ng Solana "),k={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},b=n("Runtime"),_=n(" ang mga instruction na ito sa pagkakasunud-sunod at atomically. Kung nabigo ang anumang bahagi ng isang pagtuturo, mabibigo ang buong transaksyon."),f=u('<h2 id="facts" tabindex="-1"><a class="header-anchor" href="#facts" aria-hidden="true">#</a> Facts</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>Ang mga instruction ay ang pinakapangunahing yunit ng pagpapatakbo sa Solana</li><li>Ang bawat instruction ay naglalaman ng: <ul><li>Ang <code>program_id</code> ng nilalayon na programa</li><li>Isang hanay ng lahat ng <code>account</code> na nilalayon nitong basahin o sulatan</li><li>Isang <code>instruction_data</code> byte array na partikular sa nilalayon na programa</li></ul></li><li>Maramihang mga instruction ay maaaring isama sa isang solong transaksyon</li><li>Ang bawat transaksyon ay naglalaman ng: <ul><li>Isang hanay ng lahat ng <code>account</code> na nilalayon nitong basahin o sulatan</li><li>Isa o higit pang &#39;mga instruction&#39;</li><li>Isang kamakailang <code>blockhash</code></li><li>Isa o higit pang <code>pirma</code></li></ul></li><li>Ang mga instruction ay pinoproseso sa pagkakasunud-sunod at atomically</li><li>Kung nabigo ang anumang bahagi ng isang pagtuturo, mabibigo ang buong transaksyon.</li><li>Limitado ang mga transaksyon sa 1232 bytes</li></ul></div><h2 id="deep-dive" tabindex="-1"><a class="header-anchor" href="#deep-dive" aria-hidden="true">#</a> Deep Dive</h2><p>Ang Solana Runtime ay nangangailangan ng parehong mga instruction at mga transaksyon upang tukuyin ang isang listahan ng lahat ng mga account na nilayon nilang basahin o sulatan. Sa pamamagitan ng pag-aatas sa mga account na ito nang maaga, ang runtime ay nagagawang iparallelize ang pagpapatupad sa lahat ng mga transaksyon.</p><p>Kapag isinumite ang isang transaksyon sa isang cluster, ipoproseso ng runtime ang mga instruction na ito sa pagkakasunud-sunod at atomically. Para sa bawat pagtuturo, bibigyang-kahulugan ng tatanggap na programa ang array ng data nito at gagana sa mga tinukoy nitong account. Matagumpay na babalik ang program o may error code. Kung ang isang error ay ibinalik, ang buong transaksyon ay mabibigo kaagad.</p><p>Ang anumang transaksyon na naglalayong i-debit ang isang account o baguhin ang data nito ay nangangailangan ng lagda ng may hawak ng account nito. Ang anumang account na babaguhin ay minarkahan bilang <code>writable</code>. Maaaring ma-kredito ang isang account nang walang pahintulot ng may-ari hangga&#39;t sinasaklaw ng nagbabayad ng transaction fee ang kinakailangang renta at mga bayarin sa transaksyon.</p>',6),w=n("Bago isumite, ang lahat ng transaksyon ay dapat sumangguni sa isang "),v={href:"https://docs.solana.com/developing/programming-model/transactions#recent-blockhash",target:"_blank",rel:"noopener noreferrer"},S=n("recent blockhash"),x=n(". Ginagamit ang blockhash upang maiwasan ang mga duplikasyon at alisin ang mga lipas na transaksyon. Ang maximum na edad ng blockhash ng isang transaksyon ay 150 block, o humigit-kumulang ~1 minuto 19 segundo mula sa oras ng pagsulat na ito."),A=a("h3",{id:"fees",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#fees","aria-hidden":"true"},"#"),n(" Fees")],-1),I=a("p",null,"Nangongolekta ang network ng Solana ng dalawang uri ng mga bayarin:",-1),F={href:"https://docs.solana.com/transaction_fees",target:"_blank",rel:"noopener noreferrer"},K=n("Mga bayarin sa transaksyon"),M=n(' para sa pagpapalaganap ng mga transaksyon (aka "mga bayarin sa gas")'),T={href:"https://docs.solana.com/developing/programming-model/accounts#rent",target:"_blank",rel:"noopener noreferrer"},L=n("Mga bayarin sa renta"),B=n(" para sa pag-iimbak ng data on-chain"),N=a("p",null,[n("Sa Solana, ang mga bayarin sa transaksyon ay deterministiko: walang konsepto ng isang market ng bayad kung saan ang mga user ay maaaring magbayad ng mas mataas na mga bayarin upang mapataas ang kanilang mga pagkakataong mapabilang sa susunod na block. Sa oras ng pagsulat na ito, ang mga bayarin sa transaksyon ay tinutukoy lamang sa pamamagitan ng bilang ng mga kinakailangang lagda (ibig sabihin, "),a("code",null,"lamports_per_signature"),n("), hindi sa dami ng mga mapagkukunang ginamit. Ito ay dahil kasalukuyang may hard cap na 1232 bytes sa lahat ng transaksyon.")],-1),R=a("p",null,[n("Ang lahat ng mga transaksyon ay nangangailangan ng hindi bababa sa isang "),a("code",null,"writable"),n(" na account upang lagdaan ang transaksyon. Kapag naisumite na, ang nasusulat na signer account na unang naka-serialize ang magiging nagbabayad ng bayad. Babayaran ng account na ito ang halaga ng transaksyon hindi alintana kung magtagumpay o mabigo ang transaksyon. Kung ang nagbabayad ng bayad ay walang sapat na balanse upang bayaran ang bayad sa transaksyon, ang transaksyon ay ibababa.")],-1),D=a("p",null,"Sa oras ng pagsulat na ito, 50% ng lahat ng bayarin sa transaksyon ay kinokolekta ng validator na gumagawa ng block, habang ang natitirang 50% ay sinusunog. Gumagana ang istrukturang ito upang mahikayat ang mga validator na iproseso ang pinakamaraming transaksyon hangga't maaari sa kanilang mga puwang sa iskedyul ng pinuno.",-1),V=a("h2",{id:"other-resources",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),n(" Other Resources")],-1),E={href:"https://docs.solana.com/developing/programming-model/transactions",target:"_blank",rel:"noopener noreferrer"},j=n("Official Documentation"),z={href:"https://solana.wiki/docs/solidity-guide/transactions/#solana-transaction-structure",target:"_blank",rel:"noopener noreferrer"},C=n("Transaction Structure"),G={href:"https://jstarry.notion.site/Transaction-Fees-f09387e6a8d84287aa16a34ecb58e239",target:"_blank",rel:"noopener noreferrer"},J=n("Transaction Fees by Justin Starry"),O={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},P=n("An Introduction to Solana by Hana"),H={href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143",target:"_blank",rel:"noopener noreferrer"},q=n("Transaction Processing by Jito Labs"),Q={href:"https://medium.com/@asmiller1989/solana-transactions-in-depth-1f7f7fe06ac2",target:"_blank",rel:"noopener noreferrer"},U=n("Solana Transaction in Depth by Alex Miller");function W(X,Y){const i=s("RouterLink"),o=s("ExternalLinkIcon");return e(),r(c,null,[m,a("p",null,[h,t(i,{to:"/fil/core-concepts/programs.html"},{default:l(()=>[p]),_:1}),y,a("a",k,[b,t(o)]),_]),f,a("p",null,[w,a("a",v,[S,t(o)]),x]),A,I,a("ul",null,[a("li",null,[a("a",F,[K,t(o)]),M]),a("li",null,[a("a",T,[L,t(o)]),B])]),N,R,D,V,a("ul",null,[a("li",null,[a("a",E,[j,t(o)])]),a("li",null,[a("a",z,[C,t(o)])]),a("li",null,[a("a",G,[J,t(o)])]),a("li",null,[a("a",O,[P,t(o)])]),a("li",null,[a("a",H,[q,t(o)])]),a("li",null,[a("a",Q,[U,t(o)])])])],64)}var $=g(d,[["render",W]]);export{$ as default};
