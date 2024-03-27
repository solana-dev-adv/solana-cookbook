import{_ as p,r as o,o as c,c as u,a as n,b as e,F as l,d as s,e as t}from"./app.31cab234.js";const r={},i=n("h1",{id:"les-nfts-dans-les-jeux",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#les-nfts-dans-les-jeux","aria-hidden":"true"},"#"),s(" Les NFTs dans les jeux")],-1),k=n("p",null,"Les jetons non fongibles (NFT) deviennent rapidement populaires en tant que moyen d'int\xE9grer Solana dans les jeux. Ces actifs num\xE9riques uniques sont stock\xE9s sur la blockchain Solana et sont accompagn\xE9s de m\xE9tadonn\xE9es JSON. Les m\xE9tadonn\xE9es permettent aux d\xE9veloppeurs de stocker des attributs et des informations importants sur le NFT, tels que sa raret\xE9 ou ses caract\xE9ristiques sp\xE9cifiques dans le jeu. Les NFTs peuvent \xEAtre utilis\xE9s dans les jeux pour repr\xE9senter n'importe quoi, des armes et armures aux biens immobiliers num\xE9riques et aux objets de collection, offrant ainsi aux joueurs un nouveau niveau de propri\xE9t\xE9 et de raret\xE9.",-1),d=n("h2",{id:"token-gating-avec-des-nfts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#token-gating-avec-des-nfts","aria-hidden":"true"},"#"),s(" Token gating avec des NFTs")],-1),m=s("Gr\xE2ce aux NFTs, vous pouvez autoriser l'acc\xE8s \xE0 une certaine partie d'un jeu en fonction de la possession d'un NFT. Cela permet de cr\xE9er une communaut\xE9 plus soud\xE9e au sein de votre jeu. En "),b={href:"https://docs.solana.com/de/developing/clients/javascript-api",target:"_blank",rel:"noopener noreferrer"},f=s("JS"),h=s(" et en utilisant le "),g={href:"https://github.com/metaplex-foundation/js#readme",target:"_blank",rel:"noopener noreferrer"},y=s("SDK de Metaplex"),_=s(", cela ressemblerait \xE0 ceci :"),v=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>
  <span class="token comment">// For example &#39;.config/solana/devnet.json&#39;</span>
  fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;yourKeyPair.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> keyPair <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">fromSecretKey</span><span class="token punctuation">(</span>decodedKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> metaplex <span class="token operator">=</span> Metaplex<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">keypairIdentity</span><span class="token punctuation">(</span>keyPair<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> nfts <span class="token operator">=</span> <span class="token keyword">await</span> metaplex
  <span class="token punctuation">.</span><span class="token function">nfts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">findAllByOwner</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">owner</span><span class="token operator">:</span> wallet<span class="token punctuation">.</span>publicKey <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> collectionNfts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nfts<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nfts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>collection<span class="token operator">?.</span>address<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> collectionAddress<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    collectionNfts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nfts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="bonus-d-effets-avec-des-nfts" tabindex="-1"><a class="header-anchor" href="#bonus-d-effets-avec-des-nfts" aria-hidden="true">#</a> Bonus d&#39;Effets avec des NFTs</h2><p>En plus de fournir de nouvelles sources de revenus, les NFT peuvent \xE9galement \xEAtre utilis\xE9s pour offrir des avantages et des bonus aux joueurs. Par exemple, un joueur qui poss\xE8de un NFT &quot;doubleur de pi\xE8ces&quot; peut recevoir le double de pi\xE8ces tant qu&#39;il conserve le NFT dans son portefeuille. De plus, les NFTs peuvent \xEAtre utilis\xE9s comme consommables, ce qui permet aux joueurs de les utiliser pour obtenir des effets temporaires tels que des potions ou des sorts. Une fois consomm\xE9, le NFT est br\xFBl\xE9 et l&#39;effet est appliqu\xE9 au personnage du joueur. Ainsi, ces fonctionnalit\xE9s innovantes des NFTs offrent aux d\xE9veloppeurs de jeux de nouvelles opportunit\xE9s de cr\xE9er des exp\xE9riences de jeu uniques et de r\xE9compenser les joueurs pour leur possession d&#39;actifs sur la blockchain Solana.</p><p><a href="../references/token#how-to-burn-tokens">Comment interagir avec les jetons</a></p><p><a href="../references/nfts">NFTs</a></p><h2 id="utilisation-des-metadonnees-d-un-nft-pour-les-statistiques-des-joueurs" tabindex="-1"><a class="header-anchor" href="#utilisation-des-metadonnees-d-un-nft-pour-les-statistiques-des-joueurs" aria-hidden="true">#</a> Utilisation des m\xE9tadonn\xE9es d&#39;un NFT pour les statistiques des joueurs</h2><p>Les NFTs disposent \xE9galement de m\xE9tadonn\xE9es qui peuvent \xEAtre utilis\xE9es pour toutes sortes de caract\xE9ristiques relatives aux objets du jeu. Par exemple, un NFT pourrait repr\xE9senter un personnage de jeu et ses traits Force/Intelligence/Agilit\xE9 pourraient directement influencer la puissance du personnage dans le jeu. Vous pouvez charger les m\xE9tadonn\xE9es NFT et leurs attributs \xE0 l&#39;aide du SDK de Metaplex :</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metaplex<span class="token punctuation">,</span> keypairIdentity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@metaplex-foundation/js&quot;</span><span class="token punctuation">;</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>
  <span class="token comment">// For example &#39;.config/solana/devnet.json&#39;</span>
  fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;yourKeyPair.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> keyPair <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">fromSecretKey</span><span class="token punctuation">(</span>decodedKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> metaplex <span class="token operator">=</span> Metaplex<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">keypairIdentity</span><span class="token punctuation">(</span>keyPair<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nfts <span class="token operator">=</span> <span class="token keyword">await</span> metaplex<span class="token punctuation">.</span><span class="token function">nfts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findAllByOwner</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">owner</span><span class="token operator">:</span> keyPair<span class="token punctuation">.</span>publicKey<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> physicalDamage <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> magicalDamage <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

nfts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">nft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> metaData <span class="token operator">=</span> <span class="token keyword">await</span> metaplex<span class="token punctuation">.</span><span class="token function">nfts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">metadata</span><span class="token operator">:</span> nft<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    metaData<span class="token punctuation">.</span>json<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">attribute</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>attribute<span class="token punctuation">.</span>trait_type <span class="token operator">==</span> <span class="token string">&quot;Strength&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        physicalDamage <span class="token operator">+=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>attribute<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>attribute<span class="token punctuation">.</span>trait_type <span class="token operator">==</span> <span class="token string">&quot;Int&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        magicalDamage <span class="token operator">+=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>attribute<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Player Physical Damage: &quot;</span> <span class="token operator">+</span> physicalDamage<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Player Magical Damage: &quot;</span> <span class="token operator">+</span> magicalDamage<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="fusionner-des-nfts" tabindex="-1"><a class="header-anchor" href="#fusionner-des-nfts" aria-hidden="true">#</a> Fusionner des NFTs</h2>`,9),x=s("Le "),F={href:"https://docs.metaplex.com/programs/fusion/overview",target:"_blank",rel:"noopener noreferrer"},w=s("programme Fusion Trifle de Metaplex"),j=s(" vous permet de faire en sorte que des NFTs poss\xE8dent d'autres NFTs. Par exemple, vous pouvez cr\xE9er un NFT pour une zone de plantation, puis le combiner avec un NFT d'eau et un NFT de semences pour cr\xE9er un NFT de tomates."),T=n("h2",{id:"utilisation-de-nfts-3d-dans-un-jeu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#utilisation-de-nfts-3d-dans-un-jeu","aria-hidden":"true"},"#"),s(" Utilisation de NFTs 3D dans un jeu")],-1),N=s("Les m\xE9tadonn\xE9es d'un NFT peuvent \xE9galement avoir une url d'animation. Cette url peut contenir une vid\xE9o, un gif ou un fichier 3D. Ces fichiers 3D utilisent g\xE9n\xE9ralement le format .glb ou .gltf et peuvent \xEAtre charg\xE9s dynamiquement dans un jeu. Pour Unity, vous pouvez utiliser le package "),q={href:"https://github.com/atteneder/glTFast",target:"_blank",rel:"noopener noreferrer"},S=s("GLTFast"),D=s(" et pour JS le package "),K={href:"https://discoverthreejs.com/book/first-steps/load-models/",target:"_blank",rel:"noopener noreferrer"},L=s("GLTFast JS"),P=s(". Exemple de "),M={href:"https://solscan.io/token/DzHPvbGzrHK4UcyeDurw2nuBFKNvt4Kb7K8Bx9dtsfn#metadata",target:"_blank",rel:"noopener noreferrer"},A=s("m\xE9tadonn\xE9es d'un NFT avec un mod\xE8le glb"),B=t(`<div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>  var gltf <span class="token operator">=</span> gameObject<span class="token punctuation">.</span>AddComponent<span class="token operator">&lt;</span>GLTFast<span class="token punctuation">.</span>GltfAsset<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gltf<span class="token punctuation">.</span>url <span class="token operator">=</span> nft<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>animationUrl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev gltf<span class="token operator">-</span>loader<span class="token operator">-</span>ts

<span class="token keyword">import</span> <span class="token punctuation">{</span> GltfLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gltf-loader-ts&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GltfLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> uri <span class="token operator">=</span> <span class="token string">&#39;https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxTextured/glTF/BoxTextured.gltf&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">asset</span><span class="token operator">:</span> Asset <span class="token operator">=</span> <span class="token keyword">await</span> loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">gltf</span><span class="token operator">:</span> GlTf <span class="token operator">=</span> asset<span class="token punctuation">.</span>gltf<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gltf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; {asset: {\u2026}, scene: 0, scenes: Array(1), nodes: Array(2), meshes: Array(1), \u2026}</span>

<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> asset<span class="token punctuation">.</span><span class="token function">accessorData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fetches BoxTextured0.bin</span>
<span class="token keyword">let</span> <span class="token literal-property property">image</span><span class="token operator">:</span> Image <span class="token operator">=</span> <span class="token keyword">await</span> asset<span class="token punctuation">.</span>imageData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// fetches CesiumLogoFlat.png</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="personnaliser-des-nfts-avec-des-items-et-des-traits-raindrops-boots" tabindex="-1"><a class="header-anchor" href="#personnaliser-des-nfts-avec-des-items-et-des-traits-raindrops-boots" aria-hidden="true">#</a> Personnaliser des NFTs avec des items et des traits (Raindrops boots)</h2>`,3),C=s("Avec le "),G={href:"https://docs.raindrops.xyz/services/boots",target:"_blank",rel:"noopener noreferrer"},I=s("programme Raindrops Boots"),z=s(" vous pouvez avoir un personnage de jeu d'aventure qui poss\xE8de une \xE9p\xE9e et un casque. Lorsque le NFT du personnage est vendu sur une place de march\xE9, les autres NFTs qu'il poss\xE8de sont \xE9galement vendus."),E=n("h2",{id:"comment-creer-une-collection-nft",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#comment-creer-une-collection-nft","aria-hidden":"true"},"#"),s(" Comment cr\xE9er une collection NFT")],-1),U=n("p",null,[s("Les NFTs sur Solana suivent pour la plupart la norme de Metaplex. Metaplex est une entreprise qui s'occupe de la norme NFT la plus utilis\xE9e sur Solana. La mani\xE8re la plus courante de cr\xE9er une collection NFT consiste \xE0 cr\xE9er une "),n("em",null,"candy machine"),s(" avec Metaplex. Celle-ci permet \xE0 l'utilisateur de mint des paires de m\xE9tadonn\xE9es et d'images pr\xE9d\xE9finies.")],-1),J={href:"https://docs.metaplex.com/programs/candy-machine/how-to-guides/my-first-candy-machine-part1",target:"_blank",rel:"noopener noreferrer"},O=s("Documentations de Metaplex"),V={href:"https://youtu.be/0KHv1dMV8zU",target:"_blank",rel:"noopener noreferrer"},H=s("Configuration d'une candy machine, \xE9tape par \xE9tape"),R=n("p",null,[n("a",{href:"../references/nfts"},"NFTs")],-1);function Q(W,X){const a=o("ExternalLinkIcon");return c(),u(l,null,[i,k,d,n("p",null,[m,n("a",b,[f,e(a)]),h,n("a",g,[y,e(a)]),_]),v,n("p",null,[x,n("a",F,[w,e(a)]),j]),T,n("p",null,[N,n("a",q,[S,e(a)]),D,n("a",K,[L,e(a)]),P,n("a",M,[A,e(a)])]),B,n("p",null,[C,n("a",G,[I,e(a)]),z]),E,U,n("p",null,[n("a",J,[O,e(a)])]),n("p",null,[n("a",V,[H,e(a)])]),R],64)}var Z=p(r,[["render",Q]]);export{Z as default};
