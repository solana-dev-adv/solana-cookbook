import{_ as o,r as e,o as i,c as r,a,b as t,F as l,e as g,d as n}from"./app.31cab234.js";var p="/assets/tx_format.1023848a.png",c="/assets/compact_array_format.6984243f.png",u="/assets/legacy_message.09ab30b7.png",d="/assets/message_header.8eb7d589.png",m="/assets/compat_array_of_account_addresses.7792e5c7.png",h="/assets/compact_array_of_ixs.6281d70b.png",y="/assets/issues_with_legacy_txs.5766db66.png",k="/assets/luts.96a8a310.png",b="/assets/lut_format.060d6be2.png",_="/assets/messagev0.c089b240.png",f="/assets/compact_array_of_luts.9175e491.png",x="/assets/new_compact_array_of_ixs.54090dc5.png";const w={},v=g('<h1 id="mga-bersyon-na-transaksyon" tabindex="-1"><a class="header-anchor" href="#mga-bersyon-na-transaksyon" aria-hidden="true">#</a> Mga Bersyon na Transaksyon</h1><p>Inilabas kamakailan ni Solana ang Mga Bersyon na Transaksyon. Ang mga iminungkahing pagbabago ay ang mga sumusunod:</p><ol><li><p>Magpakilala ng bagong programa na namamahala sa mga talahanayan ng paghahanap ng on-chain na address</p></li><li><p>Magdagdag ng bagong format ng transaksyon na maaaring gumamit ng on-chain na mga talahanayan ng paghahanap ng address</p></li></ol><h2 id="facts" tabindex="-1"><a class="header-anchor" href="#facts" aria-hidden="true">#</a> Facts</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>May malaking isyu ang mga legacy na transaksyon: Maximum na pinapayagang laki na 1232 bytes, at samakatuwid ang bilang ng mga account na maaaring magkasya sa isang atomic na transaksyon: 35 na address.</li><li>Address Lookup Tables (LUTs): Kapag naimbak na ang mga account sa talahanayang ito, ang address ng talahanayan ay maaaring i-reference sa isang mensahe ng transaksyon gamit ang 1-byte u8 na mga indeks.</li><li>Maaaring gamitin ang <code>solana/web3.js</code> na <code>createLookupTable()</code> upang bumuo ng bagong lookup table, pati na rin matukoy ang address nito.</li><li>Kapag nalikha ang isang LUT, maaari itong palawigin, ibig sabihin, ang mga account ay maaaring idagdag sa talahanayan.</li><li>Mga Bersyon na Transaksyon: Ang istraktura ng legacy na transaksyon ay kailangang baguhin upang maisama ang mga LUT</li><li>Bago ipinakilala ang bersyon, nag-iwan ng hindi nagamit na upper bit ang mga tx sa unang byte ng kanilang mga header, na maaaring magamit upang tahasang ideklara ang bersyon ng txs</li></ul></div><p>Pag-uusapan pa natin ang tungkol sa mga ipinakilalang pagbabago sa itaas at kung ano ang ibig sabihin ng mga ito para sa mga developer. Upang mas maunawaan ang mga pagbabago, gayunpaman, kailangan muna nating maunawaan ang anatomy ng isang regular (o legacy) na transaksyon.</p><h2 id="legacy-na-transaksyon" tabindex="-1"><a class="header-anchor" href="#legacy-na-transaksyon" aria-hidden="true">#</a> Legacy na Transaksyon</h2>',7),T=n("Gumagamit ang Solana network ng maximum transactional unit (MTU) na laki na 1280 bytes, na sumusunod sa mga hadlang sa laki ng "),A={href:"https://en.wikipedia.org/wiki/IPv6_packet",target:"_blank",rel:"noopener noreferrer"},q=n("IPv6 MTU"),M=n(" upang matiyak ang bilis at pagiging maaasahan. Nag-iiwan ito ng "),L=a("strong",null,"1232 bytes",-1),C=n(" para sa packet data tulad ng mga serialized na transaksyon."),I=a("p",null,"Ang isang transaksyon ay binubuo ng:",-1),V=n("Isang compact na hanay ng mga lagda, kung saan ang bawat lagda ay isang 64 byte "),U={href:"https://ed25519.cr.yp.to/",target:"_blank",rel:"noopener noreferrer"},S=n("ed25519"),B=n("."),K=a("li",null,"Isang (legacy) na mensahe",-1),N=a("p",null,[a("img",{src:p,alt:"Transaction Format"})],-1),P={class:"custom-container tip"},j=a("p",{class:"custom-container-title"},"Compact-Array format",-1),H=a("p",null,"Ang isang compact array ay isang array na naka-serialize upang magkaroon ng mga sumusunod na bahagi:",-1),R=n("Isang haba ng array sa isang multi-byte na encoding na tinatawag na "),F={href:"https://beta.docs.solana.com/developing/programming-model/transactions#compact-u16-format",target:"_blank",rel:"noopener noreferrer"},D=n("Compact-u16"),E=a("li",null,"Sinusundan ng bawat array item",-1),G=a("p",null,[a("img",{src:c,alt:"Compact array format"})],-1),W=g('<h2 id="legacy-message" tabindex="-1"><a class="header-anchor" href="#legacy-message" aria-hidden="true">#</a> Legacy Message</h2><p>Ang isang Legacy na Mensahe ay may mga sumusunod na bahagi:</p><ol><li>Isang header</li><li>Isang compact-array ng mga address ng account, kung saan ang bawat address ng account ay tumatagal ng 32 byte</li><li>Isang kamakailang blockhash <ul><li>isang 32-byte na SHA-256 hash na ginamit upang ipahiwatig kung kailan huling naobserbahan ang ledger. Kung ang isang blockhash ay masyadong luma, tinatanggihan ito ng mga validator.</li></ul></li><li>Isang compact-array ng Mga Instruction</li></ol><p><img src="'+u+'" alt="Legacy Message"></p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><p>Ang header ng mensahe ay 3 byte ang haba at naglalaman ng 3 u8 integer:</p><ol><li>Ang bilang ng mga kinakailangang lagda: ang Solana runtime ay nagpapatunay sa numerong ito sa haba ng compact array ng mga lagda sa transaksyon.</li><li>Ang bilang ng mga read-only na address ng account na nangangailangan ng mga lagda.</li><li>Ang bilang ng mga read-only na address ng account na hindi nangangailangan ng mga lagda.</li></ol><p><img src="'+d+'" alt="Message Header"></p><h3 id="compact-array-ng-mga-address-ng-account" tabindex="-1"><a class="header-anchor" href="#compact-array-ng-mga-address-ng-account" aria-hidden="true">#</a> Compact-array ng mga address ng account</h3><p>Nagsisimula ang compact array na ito sa isang compact-u16 encoding ng bilang ng mga address ng account, na sinusundan ng:</p><ol><li><strong>Mga address ng account na nangangailangan ng mga lagda</strong>: Ang mga address na humihiling ng read at write access ay unang nakalista, na sinusundan ng mga address na humihiling ng read-only na access</li><li><strong>Mga address ng account na hindi nangangailangan ng mga lagda</strong>: Katulad ng nasa itaas, unang nakalista ang mga address na humihiling ng read at write access, na sinusundan ng mga humihiling ng read-only na access</li></ol><p><img src="'+m+'" alt="Compact array of account addresses"></p><h3 id="compact-na-hanay-ng-mga-instruction" tabindex="-1"><a class="header-anchor" href="#compact-na-hanay-ng-mga-instruction" aria-hidden="true">#</a> Compact na hanay ng mga instruction</h3><p>Katulad ng hanay ng mga address ng account, ang compact array na ito ay nagsisimula sa isang compact-u16 encoding ng bilang ng mga instruction, na sinusundan ng hanay ng mga instruction. Ang bawat pagtuturo sa array ay may mga sumusunod na bahagi:</p><ol><li><strong>Program ID</strong>: kinikilala ang isang on-chain program na magpoproseso ng pagtuturo. Ito ay kinakatawan bilang u8 index sa isang address sa compact na hanay ng mga address ng account sa loob ng mensahe.</li><li><strong>Compact na hanay ng mga index ng address ng account</strong>: Ang u8 ay nag-i-index sa isang subset ng mga address ng account sa compact na hanay ng mga address ng account, na nangangailangan ng mga lagda.</li><li><strong>Compact array ng opaque u8 data</strong>: isang general purpose byte array na partikular sa program ID na nabanggit dati. Ang hanay ng data na ito ay tumutukoy sa anumang mga operasyon na dapat gawin ng program at anumang karagdagang impormasyon na maaaring hindi naglalaman ng mga account.</li></ol><p><img src="'+h+'" alt="Compact array of Instructions"></p><h2 id="mga-isyu-sa-mga-legacy-na-transaksyon" tabindex="-1"><a class="header-anchor" href="#mga-isyu-sa-mga-legacy-na-transaksyon" aria-hidden="true">#</a> Mga Isyu sa Mga Legacy na Transaksyon</h2><p>Ano ang isyu sa modelo ng Transaksyon sa itaas?</p><p><strong>Ang maximum na laki ng isang transaksyon, at samakatuwid ang bilang ng mga account na maaaring magkasya sa isang atomic na transaksyon.</strong></p><p>Gaya ng tinalakay kanina, ang maximum na pinapayagang laki ng isang transaksyon ay <strong>1232 bytes</strong>. Ang laki ng isang account address ay 32 bytes. Kaya, ang isang transaksyon ay maaaring mag-imbak ng <strong>35 account</strong> sa pinakamagandang tindahan, na isinasaalang-alang ang ilang espasyo para sa mga header, lagda at iba pang metadata.</p><p><img src="'+y+'" alt="Issue with legacy transactions"></p><p>Ito ay may problema dahil may ilang mga kaso kung saan ang mga developer ay kailangang magsama ng 100s ng signature-free account sa isang transaksyon. Kasalukuyang hindi ito posible sa legacy na modelo ng transaksyon. Ang solusyon na kasalukuyang ginagamit ay pansamantalang mag-imbak ng estado on-chain at gamitin ito sa ibang pagkakataon sa mga transaksyon. Hindi gumagana ang workaround na ito kapag maraming program ang kailangang buuin sa isang transaksyon. Ang bawat programa ay nangangailangan ng maramihang mga account bilang input at samakatuwid ay nahuhulog tayo sa parehong problema tulad ng dati.</p><p>Dito ipinakilala ang <strong>Address Lookup Tables (LUT)</strong>.</p><h2 id="address-lookup-tables-lut" tabindex="-1"><a class="header-anchor" href="#address-lookup-tables-lut" aria-hidden="true">#</a> Address Lookup Tables (LUT)</h2><p>Ang ideya sa likod ng Address Lookup Tables ay ang pag-imbak ng mga address ng account sa isang tulad ng talahanayan (array) na istraktura ng data na on-chain. Kapag naimbak na ang mga account sa talahanayang ito, maaaring i-reference ang address ng talahanayan sa isang mensahe ng transaksyon. Upang tumuro sa isang indibidwal na account sa loob ng talahanayan, kailangan ng 1-byte na u8 index.</p><p><img src="'+k+'" alt="LUTs"></p><p>Nagbubukas ito ng espasyo dahil hindi na kailangang itago ang mga address sa loob ng mensahe ng transaksyon. Kailangan lamang na i-reference ang mga ito sa anyo ng isang index sa loob ng array tulad ng talahanayan. Ito ay humahantong sa posibilidad ng pagtukoy sa 2^8=<strong>256</strong> na account, dahil ang mga account ay nire-reference gamit ang u8 index.</p><p>Kailangang maging rent-exempt ang mga LUT kapag nasimulan o kapag may idinagdag na bagong address sa talahanayan. Maaaring idagdag ang mga address sa talahanayang ito sa pamamagitan ng isang on-chain buffer, o sa pamamagitan ng direktang pagdaragdag sa mga ito sa talahanayan sa pamamagitan ng pagtuturo ng <code>Extension</code>. Higit pa rito, maaaring mag-imbak ang mga LUT ng nauugnay na metadata na sinusundan ng isang compact-array ng mga account. Sa ibaba makikita mo ang istraktura ng isang tipikal na Address Lookup Table.</p><p><img src="'+b+`" alt="LUT Format"></p><p>Ang isang mahalagang patibong ng mga LUT ay dahil ang mga paghahanap ng address ay nangangailangan ng dagdag na overhead sa panahon ng pagproseso ng transaksyon, kadalasang nagkakaroon sila ng mas mataas na gastos para sa isang transaksyon.</p><h2 id="mga-bersyon-na-transaksyon-transaksyonv0" tabindex="-1"><a class="header-anchor" href="#mga-bersyon-na-transaksyon-transaksyonv0" aria-hidden="true">#</a> Mga Bersyon na Transaksyon: TransaksyonV0</h2><p>Kailangang baguhin ang istruktura ng legacy na transaksyon upang maisama ang mga paghahanap sa talahanayan ng address. Hindi dapat masira ng mga pagbabagong ito ang pagpoproseso ng transaksyon sa Solana, at hindi rin dapat magpahiwatig ang mga ito ng anumang mga pagbabago sa format sa mga ini-invoke na programa.</p><p>Upang matiyak ang nasa itaas, mahalagang tahasang banggitin ang uri ng transaksyon: <code>legacy</code> o <code>versioned</code>. Paano namin isasama ang impormasyong ito sa isang transaksyon?</p><p>Bago ipinakilala ang bersyon, ang mga transaksyon ay nag-iwan ng hindi nagamit na upper bit sa unang byte ng kanilang mga header ng mensahe: <code>num_required_signatures</code>. Magagamit na namin ngayon ang bit na ito para tahasang ideklara ang bersyon ng aming mga transaksyon.</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">VersionedMessage</span> <span class="token punctuation">{</span>
    <span class="token class-name">Legacy</span><span class="token punctuation">(</span><span class="token class-name">Message</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token constant">V0</span><span class="token punctuation">(</span><span class="token namespace">v0<span class="token punctuation">::</span></span><span class="token class-name">Message</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Kung ang unang bit ay nakatakda, ang natitirang mga bit sa unang byte ay mag-e-encode ng numero ng bersyon. Nagsisimula ang Solana sa &quot;Bersyon 0&quot;, na kinakailangang bersyon upang simulan ang paggamit ng mga LUT.</p><p>Kung hindi nakatakda ang unang bit, ang transaksyon ay ituturing na &quot;Legacy Transaction&quot; at ang natitira sa unang byte ay ituturing bilang unang byte ng isang naka-encode na legacy na mensahe.</p><h2 id="messagev0" tabindex="-1"><a class="header-anchor" href="#messagev0" aria-hidden="true">#</a> MessageV0</h2><p>Ang istraktura ng bagong MessageV0 ay halos pareho, maliban sa dalawang maliit ngunit mahalagang pagbabago:</p><ol><li><strong>Message Header</strong>: hindi binago mula sa legacy</li><li><strong>Compact array ng mga account key</strong>: hindi nabago mula sa legacy. Ipapahiwatig namin ang hanay ng mga index na tumuturo sa mga elemento sa array na ito bilang <em>index array A</em> (makikita mo kung bakit namin ito tinutukoy sa lalong madaling panahon)</li><li><strong>Kamakailang blockhash</strong>: hindi nabago mula sa legacy</li><li><strong>Compact na hanay ng mga instruction</strong>: baguhin mula sa legacy</li><li><strong>Compact array ng address table lookups</strong>: ipinakilala sa v0</li></ol><p><img src="`+_+'" alt="Message v0"></p><p>Tatalakayin muna natin ang istruktura ng compact na hanay ng mga paghahanap sa talahanayan ng address bago makita kung ano ang nagbago sa hanay ng pagtuturo.</p><h3 id="compact-na-hanay-ng-mga-paghahanap-sa-talahanayan-ng-address" tabindex="-1"><a class="header-anchor" href="#compact-na-hanay-ng-mga-paghahanap-sa-talahanayan-ng-address" aria-hidden="true">#</a> Compact na hanay ng mga paghahanap sa talahanayan ng address</h3><p>Ang struct na ito ay nagpapakilala ng Address Lookup Tables (LUT) sa Mga Bersyon na Transaksyon, samakatuwid ay nagbibigay-daan sa paggamit ng mga LUT para sa pag-load ng higit pang readonly at masusulat na mga account sa iisang transaksyon.</p><p>Nagsisimula ang compact array sa isang compact-u16 encoding ng bilang ng mga paghahanap sa talahanayan ng address, na sinusundan ng isang hanay ng mga paghahanap sa talahanayan ng address. Ang bawat paghahanap ay may sumusunod na istraktura:</p><ol><li><strong>Account key</strong>: account key ng address lookup table</li><li><strong>Mga nasusulat na index</strong>: compact na hanay ng mga index na ginagamit upang i-load ang mga naisusulat na address ng account. Ipatukoy namin ang array na ito bilang <em>index array B</em>.</li><li><strong>Readonly indexes</strong>: compact array of indexes na ginagamit upang i-load ang readonly account address. Ipatukoy namin ang array na ito bilang <em>index array C</em>.</li></ol><p><img src="'+f+'" alt="Compact array of LUTs"></p><p>Ngayon tingnan natin kung anong mga pagbabago ang ginawa sa compact array ng mga instruction</p><h3 id="compact-na-hanay-ng-mga-instruction-1" tabindex="-1"><a class="header-anchor" href="#compact-na-hanay-ng-mga-instruction-1" aria-hidden="true">#</a> Compact na hanay ng mga instruction</h3><p>Gaya ng tinalakay dati, ang compact na hanay ng mga legacy na instruction ay nag-iimbak ng mga indibidwal na legacy na instruction na nag-iimbak ng mga sumusunod:</p><ol><li>Program ID index</li><li>Compact na hanay ng mga index ng address ng account</li><li>Compact na hanay ng opaque na 8-bit na data</li></ol><p>Ang pagbabago sa bagong pagtuturo ay wala sa istruktura ng mismong pagtuturo, ngunit ang array na ginagamit upang makakuha ng mga index mula sa para sa 1 at 2. Sa mga legacy na transaksyon, isang subset ng index array A ang ginagamit, habang sa mga bersyong transaksyon, isang subset ng pinagsamang hanay ng mga sumusunod ay ginagamit:</p><ol><li><strong>index array A</strong>: Compact array ng mga account na nakaimbak sa mensahe</li><li><strong>index array B</strong>: Mga nasusulat na index sa address table lookup</li><li><strong>index array C</strong>: Readonly index sa address table lookup</li></ol><p><img src="'+x+`" alt="New Compact array of Instructions"></p><h2 id="mga-pagbabago-sa-rpc" tabindex="-1"><a class="header-anchor" href="#mga-pagbabago-sa-rpc" aria-hidden="true">#</a> Mga Pagbabago sa RPC</h2><p>Ang mga tugon sa transaksyon ay mangangailangan ng bagong field ng bersyon: <code>maxSupportedTransactionVersion</code> upang isaad sa mga kliyente kung aling istraktura ng transaksyon ang kailangang sundin para sa deseryalisasyon.</p><p>Ang mga sumusunod na pamamaraan ay kailangang i-update upang maiwasan ang mga error:</p><ul><li><code>getTransaction</code></li><li><code>getBlock</code></li></ul><p>Ang sumusunod na parameter ay kailangang idagdag sa mga kahilingan:</p><p><code>maxSupportedTransactionVersion: 0</code></p><p>Kung ang <code>maxSupportedTransactionVersion</code> ay hindi tahasang idinagdag sa kahilingan, ang bersyon ng transaksyon ay magbabalik sa <code>legacy</code>. Anumang block na naglalaman ng isang bersyon na transaksyon ay babalik na may error ng kliyente sa kaso ng isang legacy na transaksyon.</p><p>Maaari mong itakda ito sa pamamagitan ng mga kahilingang naka-format sa JSON sa endpoint ng RPC tulad ng nasa ibaba:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>curl http://localhost:8899 -X POST -H &quot;Content-Type: application/json&quot; -d \\
&#39;{&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;id&quot;:1, &quot;method&quot;: &quot;getBlock&quot;, &quot;params&quot;: [430, {
  &quot;encoding&quot;:&quot;json&quot;,
  &quot;maxSupportedTransactionVersion&quot;:0,
  &quot;transactionDetails&quot;:&quot;full&quot;,
  &quot;rewards&quot;:false
}]}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,63),z=n("Magagawa mo rin ang parehong gamit ang "),O={href:"https://solana-labs.github.io/solana-web3.js/",target:"_blank",rel:"noopener noreferrer"},J=a("code",null,"@solana/web3.js",-1),Q=n(" library."),X=g(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// connect to the \`devnet\` cluster and get the current \`slot\`</span>
<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">web3<span class="token punctuation">.</span>Connection</span><span class="token punctuation">(</span>web3<span class="token punctuation">.</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&quot;devnet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> slot <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getSlot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// get the latest block (allowing for v0 transactions)</span>
<span class="token keyword">const</span> block <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getBlock</span><span class="token punctuation">(</span>slot<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">maxSupportedTransactionVersion</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// get a specific transaction (allowing for v0 transactions)</span>
<span class="token keyword">const</span> getTx <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getTransaction</span><span class="token punctuation">(</span>
  <span class="token string">&quot;3jpoANiFeVGisWRY5UP648xRXs3iQasCHABPWRWnoEjeA93nc79WrnGgpgazjq4K9m8g2NJoyKoWBV1Kx5VmtwHQ&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">maxSupportedTransactionVersion</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="other-resources" tabindex="-1"><a class="header-anchor" href="#other-resources" aria-hidden="true">#</a> Other Resources</h2>`,2),Y={href:"https://beta.docs.solana.com/developing/versioned-transactions#how-create-a-versioned-transaction",target:"_blank",rel:"noopener noreferrer"},Z=n("How to build a Versioned Transaction"),$={href:"https://beta.docs.solana.com/developing/lookup-tables#how-to-create-an-address-lookup-table",target:"_blank",rel:"noopener noreferrer"},aa=n("How to build a Versioned Transaction with Address Lookup using LUTs"),na={href:"https://beta.docs.solana.com/proposals/transactions-v2#limitations",target:"_blank",rel:"noopener noreferrer"},sa=n("Limitations of Versioned Transactions"),ta={href:"https://beta.docs.solana.com/proposals/transactions-v2#security-concerns",target:"_blank",rel:"noopener noreferrer"},ga=n("Security concerns of Versioned Transactions"),oa={href:"https://beta.docs.solana.com/proposals/transactions-v2#other-proposals",target:"_blank",rel:"noopener noreferrer"},ea=n("Alternate proposed solutions to Versioned Transactions"),ia=a("h2",{id:"references",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),n(" References")],-1),ra={href:"https://beta.docs.solana.com/proposals/transactions-v2",target:"_blank",rel:"noopener noreferrer"},la=n("Transactions-V2 Proposal"),pa={href:"https://beta.docs.solana.com/developing/versioned-transactions",target:"_blank",rel:"noopener noreferrer"},ca=n("Developing with Versioned Transactions");function ua(da,ma){const s=e("ExternalLinkIcon");return i(),r(l,null,[v,a("p",null,[T,a("a",A,[q,t(s)]),M,L,C]),I,a("ol",null,[a("li",null,[V,a("a",U,[S,t(s)]),B]),K]),N,a("div",P,[j,H,a("ol",null,[a("li",null,[R,a("a",F,[D,t(s)])]),E]),G]),W,a("p",null,[z,a("a",O,[J,t(s)]),Q]),X,a("ul",null,[a("li",null,[a("a",Y,[Z,t(s)])]),a("li",null,[a("a",$,[aa,t(s)])]),a("li",null,[a("a",na,[sa,t(s)])]),a("li",null,[a("a",ta,[ga,t(s)])]),a("li",null,[a("a",oa,[ea,t(s)])])]),ia,a("ul",null,[a("li",null,[a("a",ra,[la,t(s)])]),a("li",null,[a("a",pa,[ca,t(s)])])])],64)}var ya=o(w,[["render",ua]]);export{ya as default};
