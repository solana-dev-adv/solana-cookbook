import{_ as i,r as n,o as d,c,a as e,b as o,w as r,F as l,d as t,e as h}from"./app.c241040b.js";var p="/assets/account-matrix.c3a79f80.png",u="/assets/pda-curve.7c0b9307.png";const g={},m=e("h1",{id:"program-derived-addresses-pdas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#program-derived-addresses-pdas","aria-hidden":"true"},"#"),t(" Program Derived Addresses (PDAs)")],-1),_=t("Program Derived Addresses (PDAs) are home to accounts that are designed to be controlled by a specific program. With PDAs, programs can programmatically sign for certain addresses without needing a private key. PDAs serve as the foundation for "),f={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations",target:"_blank",rel:"noopener noreferrer"},b=t("Cross-Program Invocation"),v=t(", which allows Solana apps to be composable with one another."),w=e("h2",{id:"facts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#facts","aria-hidden":"true"},"#"),t(" Facts")],-1),A={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"Fact Sheet",-1),y=e("li",null,"PDAs are 32 byte strings that look like public keys, but don\u2019t have corresponding private keys",-1),D=e("li",null,[e("code",null,"findProgramAddress"),t(" will deterministically derive a PDA from a programId and seeds (collection of bytes)")],-1),k=e("li",null,"A bump (one byte) is used to push a potential PDA off the ed25519 elliptic curve",-1),x=t("Programs can sign for their PDAs by providing the seeds and bump to "),I={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-signed-accounts",target:"_blank",rel:"noopener noreferrer"},T=t("invoke_signed"),L=e("li",null,"A PDA can only be signed by the program from which it was derived",-1),S=t("In addition to allowing for programs to sign for different instructions, PDAs also provide a hashmap-like interface for "),F=t("indexing accounts"),N=h('<h2 id="deep-dive" tabindex="-1"><a class="header-anchor" href="#deep-dive" aria-hidden="true">#</a> Deep Dive</h2><p>PDAs are an essential building block for developing programs on Solana. With PDAs, programs can sign for accounts while guaranteeing that no external user could also generate a valid signature for the same account. In addition to signing for accounts, certain programs can also modify accounts held at their PDAs.</p><p><img src="'+p+'" alt="Accounts matrix"></p><p><small style="text-align:center;display:block;">Image courtesy of <a href="https://twitter.com/pencilflip">Pencilflip</a></small></p><h3 id="generating-pdas" tabindex="-1"><a class="header-anchor" href="#generating-pdas" aria-hidden="true">#</a> Generating PDAs</h3><p>To understand the concept behind PDAs, it may be helpful to consider that PDAs are not technically created, but rather found. PDAs are generated from a combination of seeds (such as the string <code>\u201Cvote_account\u201D</code>) and a program id. This combination of seeds and program id is then run through a sha256 hash function to see whether or not they generate a public key that lies on the ed25519 elliptic curve.</p><p>In running our program id and seeds through a hash function, there is a ~50% chance that we actually end up with a valid public key that does lie on the elliptic curve. In this case, we simply add something to fudge our input a little bit and try again. The technical term for this fudge factor is a bump. In Solana, we start with bump = 255 and simply iterate down through bump = 254, bump = 253, etc. until we get an address that is not on the elliptic curve. This may seem rudimentary, but once found it gives us a deterministic way of deriving the same PDA over and over again.</p><p><img src="'+u+'" alt="PDA on the ellipitic curve"></p><h3 id="interacting-with-pdas" tabindex="-1"><a class="header-anchor" href="#interacting-with-pdas" aria-hidden="true">#</a> Interacting with PDAs</h3>',9),V=t("When a PDA is generated, "),W=e("code",null,"findProgramAddress",-1),B=t(" will return both the address and the bump used to kick the address off of the elliptic curve. Armed with this bump, a program can then "),C=t("sign"),E=t(" for any instruction that requires its PDA. In order to sign, programs should pass the instruction, the list of accounts, and the seeds and bump used to derive the PDA to "),R=e("code",null,"invoke_signed",-1),O=t(". In addition to signing for instructions, PDAs must also sign for their own creation via "),q=e("code",null,"invoke_signed",-1),z=t("."),G=t("When building with PDAs, it is common to "),U={href:"https://github.com/solana-labs/solana-program-library/blob/78e29e9238e555967b9125799d7d420d7d12b959/token-swap/program/src/state.rs#L100",target:"_blank",rel:"noopener noreferrer"},j=t("store the bump seed"),H=t(" in the account data itself. This allows developers to easily validate a PDA without having to pass in the bump as an instruction argument."),J=e("h2",{id:"other-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),t(" Other Resources")],-1),K={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses",target:"_blank",rel:"noopener noreferrer"},M=t("Official Documentation"),Q={href:"https://www.brianfriel.xyz/understanding-program-derived-addresses/",target:"_blank",rel:"noopener noreferrer"},X=t("Understanding Program Derived Addresses");function Y(Z,$){const a=n("ExternalLinkIcon"),s=n("RouterLink");return d(),c(l,null,[m,e("p",null,[_,e("a",f,[b,o(a)]),v]),w,e("div",A,[P,e("ul",null,[y,D,k,e("li",null,[x,e("a",I,[T,o(a)])]),L,e("li",null,[S,o(s,{to:"/guides/account-maps.html"},{default:r(()=>[F]),_:1})])])]),N,e("p",null,[V,W,B,o(s,{to:"/references/accounts.html#sign-with-a-pda"},{default:r(()=>[C]),_:1}),E,R,O,q,z]),e("p",null,[G,e("a",U,[j,o(a)]),H]),J,e("ul",null,[e("li",null,[e("a",K,[M,o(a)])]),e("li",null,[e("a",Q,[X,o(a)])])])],64)}var te=i(g,[["render",Y]]);export{te as default};
