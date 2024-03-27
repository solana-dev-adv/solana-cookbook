import{_ as t,r as p,o as c,c as r,a as n,b as e,F as l,e as o,d as s}from"./app.31cab234.js";const i={},u=o('<h1 id="invocations-de-programme-croise-cpis" tabindex="-1"><a class="header-anchor" href="#invocations-de-programme-croise-cpis" aria-hidden="true">#</a> Invocations de Programme Crois\xE9 (CPIs)</h1><p>Une Invocation de Programme Crois\xE9 (CPI) est un appel direct d&#39;un programme \xE0 un autre, ce qui permet la composabilit\xE9 des programmes Solana. Tout comme n&#39;importe quel client peut appeler n&#39;importe quel programme \xE0 l&#39;aide d&#39;une m\xE9thode JSON-RPC, n&#39;importe quel programme peut appeler n&#39;importe quel autre programme par l&#39;interm\xE9diaire d&#39;une CPI. Les CPIs transforment l&#39;ensemble de l&#39;\xE9cosyst\xE8me Solana en une API g\xE9ante \xE0 la disposition des d\xE9veloppeurs.</p><p>L&#39;objectif de cette section est de fournir une vue d&#39;ensemble des CPIs. Veuillez vous r\xE9f\xE9rer aux ressources ci-dessous pour obtenir des explications plus d\xE9taill\xE9es, des exemples et des guides.</p><h2 id="faits" tabindex="-1"><a class="header-anchor" href="#faits" aria-hidden="true">#</a> Faits</h2><div class="custom-container tip"><p class="custom-container-title">Fiche d&#39;Information</p><ul><li>Une Invocation de Programme Crois\xE9 (CPI)\xA0est un appel d&#39;un programme \xE0 un autre qui cible une instruction sp\xE9cifique du programme appel\xE9</li><li>Les CPIs permettent au programme appelant d&#39;\xE9tendre ses privil\xE8ges de signature au programme appel\xE9</li><li>Les programmes peuvent ex\xE9cuter des CPI en utilisant soit <code>invoke</code> ou <code>invoke_signed</code> dans leurs instructions</li><li><code>invoke</code> est utilis\xE9 lorsque toutes les signatures requises sont accessibles avant l&#39;invocation. Il n&#39;est pas n\xE9cessaire que des PDAs soient signataires</li><li><code>invoke_signed</code> est utilis\xE9 lorsque des PDAs du programe appelant doivent \xEAtre signataires dans la CPI</li><li>Lorsqu&#39;une CPI est effectu\xE9e aupr\xE8s d&#39;un autre programme, le programme appel\xE9 peut effectuer d&#39;autres CPI aupr\xE8s d&#39;autres programmes, jusqu&#39;\xE0 une profondeur maximale de 4</li></ul></div><h2 id="examen-plus-approfondi" tabindex="-1"><a class="header-anchor" href="#examen-plus-approfondi" aria-hidden="true">#</a> Examen plus approfondi</h2><p>Les Invocations de Programmes Crois\xE9s (CPIs) permettent la composabilit\xE9 des programmes Solana, ce qui permet aux d\xE9veloppeurs d&#39;utiliser les instructions des programmes existants et de construire \xE0 partir de celles-ci.</p>',7),d=s("Pour ex\xE9cuter des CPIs, utilisez la fonction "),k={href:"https://docs.rs/solana-program/latest/solana_program/program/fn.invoke.html",target:"_blank",rel:"noopener noreferrer"},m=s("invoke"),b=s(" ou "),g={href:"https://docs.rs/solana-program/latest/solana_program/program/fn.invoke_signed.html",target:"_blank",rel:"noopener noreferrer"},h=s("invoke_signed"),_=s(" qui se trouve dans la crate "),f=n("code",null,"solana_program",-1),v=s("."),y=o(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// Used when there are not signatures for PDAs needed</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">invoke</span><span class="token punctuation">(</span>
    instruction<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Instruction</span><span class="token punctuation">,</span>
    account_infos<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;_</span><span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">ProgramResult</span>

<span class="token comment">// Used when a program must provide a &#39;signature&#39; for a PDA, hence the signer_seeds parameter</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">invoke_signed</span><span class="token punctuation">(</span>
    instruction<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Instruction</span><span class="token punctuation">,</span>
    account_infos<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;_</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    signers_seeds<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">ProgramResult</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Pour r\xE9aliser une CPI, vous devez sp\xE9cifier et construire une instruction du programme invoqu\xE9 et fournir une liste de comptes n\xE9cessaires \xE0 cette instruction. Si un PDA est requis comme signataire, <code>signers_seeds</code> doit \xE9galement \xEAtre fourni lors de l&#39;utilisation de <code>invoke_signed</code>.</p><h3 id="cpi-avec-invoke" tabindex="-1"><a class="header-anchor" href="#cpi-avec-invoke" aria-hidden="true">#</a> CPI avec\xA0<code>invoke</code></h3><p>La fonction <code>invoke</code> est utilis\xE9e lorsque nous r\xE9alisons une CPI qui ne n\xE9cessite pas la signature de PDA. Lors de la r\xE9alisation de CPIs, le runtime de Solana \xE9tend la signature originelle transmise \xE0 un programme au programme appel\xE9.</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token function">invoke</span><span class="token punctuation">(</span>
    <span class="token operator">&amp;</span>some_instruction<span class="token punctuation">,</span>                           <span class="token comment">// instruction to invoke</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> account_two<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// accounts required by instruction</span>
<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="cpi-avec-invoke-signed" tabindex="-1"><a class="header-anchor" href="#cpi-avec-invoke-signed" aria-hidden="true">#</a> CPI avec <code>invoke_signed</code></h3><p>Pour r\xE9aliser une CPI qui n\xE9cessite la signature d&#39;un PDA, utilisez la fonction <code>invoke_signed</code> et fournissez les seeds n\xE9cessaires pour d\xE9river le PDA requis du programme appelant.</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token function">invoke_signed</span><span class="token punctuation">(</span>
    <span class="token operator">&amp;</span>some_instruction<span class="token punctuation">,</span>                   <span class="token comment">// instruction to invoke</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pda<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// accounts required by instruction, where one is a pda required as signer</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>signers_seeds<span class="token punctuation">]</span><span class="token punctuation">,</span>                    <span class="token comment">// seeds to derive pda</span>
<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Bien que les PDAs ne poss\xE8dent pas de cl\xE9s priv\xE9es propres, ils peuvent n\xE9anmoins agir en tant que signataire d&#39;une instruction par le biais d&#39;une CPI. Pour v\xE9rifier qu&#39;un PDA appartient au programme appelant, les seeds utilis\xE9es pour g\xE9n\xE9rer le PDA qui doit signer doivent \xEAtre incluses dans <code>signers_seeds</code>.</p><p>Le runtime de Solana appellera en interne\xA0<code>create_program_address</code>\xA0en utilisant les seeds fournies et le\xA0<code>program_id</code>\xA0du programme appelant. Le PDA obtenu est ensuite compar\xE9 aux adresses fournies dans l&#39;instruction. S&#39;il y a correspondance, le PDA est consid\xE9r\xE9 comme un signataire valide.</p><h3 id="cpi-instruction" tabindex="-1"><a class="header-anchor" href="#cpi-instruction" aria-hidden="true">#</a> CPI <code>Instruction</code></h3><p>Selon le programme appel\xE9, il peut y avoir une crate disponible avec des fonctions d&#39;aide pour cr\xE9er l&#39;<code>Instruction</code>. De nombreuses personnes et organisations cr\xE9ent des crates accessibles au public avec leurs programmes qui expliquent ce type de fonctions afin de simplifier l&#39;appel de leurs programmes.</p><p>La d\xE9finition du type <code>Instruction</code> n\xE9cessaire pour une CPI comprend :</p><ul><li><code>program_id</code>\xA0- la cl\xE9 publique du programme qui ex\xE9cute l&#39;instruction</li><li><code>accounts</code>\xA0- une liste de tous les comptes qui peuvent \xEAtre lus ou \xE9crits pendant l&#39;ex\xE9cution de l&#39;instruction</li><li><code>data</code>\xA0- les donn\xE9es d&#39;instruction n\xE9cessaires \xE0 l&#39;instruction</li></ul><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Instruction</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> program_id<span class="token punctuation">:</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> accounts<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">AccountMeta</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> data<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">u8</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>La structure <code>AccountMeta</code>\xA0a la d\xE9finition suivante :</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">AccountMeta</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> pubkey<span class="token punctuation">:</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> is_signer<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> is_writable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Lors de la cr\xE9ation d&#39;une CPI, utilisez la syntaxe suivante pour sp\xE9cifier le <code>AccountMeta</code> de chaque compte :</p><ul><li><code>AccountMeta::new</code>\xA0- indique qu&#39;il est accessible en \xE9criture</li><li><code>AccountMeta::new_readonly</code>\xA0- indique qu&#39;il est\xA0<em>non</em> accessible en \xE9criture</li><li><code>(pubkey, true)</code>\xA0- indique que le compte est signataire</li><li><code>(pubkey, false)</code>\xA0- indique que le compte <em>n&#39;est pas</em> signataire</li></ul><p>Voici un exemple :</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">solana_program<span class="token punctuation">::</span>instruction<span class="token punctuation">::</span></span><span class="token class-name">AccountMeta</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> account_metas <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>account1_pubkey<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>account2_pubkey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new_readonly</span><span class="token punctuation">(</span>account3_pubkey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new_readonly</span><span class="token punctuation">(</span>account4_pubkey<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="cpi-accountinfo" tabindex="-1"><a class="header-anchor" href="#cpi-accountinfo" aria-hidden="true">#</a> CPI <code>AccountInfo</code></h3><p>Pour utiliser <code>invoke</code> et <code>invoke_signed</code>, une liste d&#39;<code>account_infos</code> est \xE9galement n\xE9cessaire. Comme pour la liste des <code>AccountMeta</code> de l&#39;instruction, vous devez inclure toutes les <code>AccountInfo</code> de chaque compte que le programme que vous appelez va lire ou dans lequel il va \xE9crire.</p><p>Pour information, la structure <code>AccountInfo</code> a la d\xE9finition suivante :</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">/// Account information</span>
<span class="token attribute attr-name">#[derive(Clone)]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/// Public key of the account</span>
    <span class="token keyword">pub</span> key<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token comment">/// Was the transaction signed by this account&#39;s public key?</span>
    <span class="token keyword">pub</span> is_signer<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// Is the account writable?</span>
    <span class="token keyword">pub</span> is_writable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// The lamports in the account.  Modifiable by programs.</span>
    <span class="token keyword">pub</span> lamports<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">mut</span> <span class="token keyword">u64</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token comment">/// The data held in this account.  Modifiable by programs.</span>
    <span class="token keyword">pub</span> data<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">mut</span> <span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token comment">/// Program that owns this account</span>
    <span class="token keyword">pub</span> owner<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token comment">/// This account&#39;s data contains a loaded program (and is now read-only)</span>
    <span class="token keyword">pub</span> executable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// The epoch at which this account will next owe rent</span>
    <span class="token keyword">pub</span> rent_epoch<span class="token punctuation">:</span> <span class="token class-name">Epoch</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,25),w=s("Vous pouvez cr\xE9er une copie de "),P=n("code",null,"AccountInfo",-1),I=s(" pour chaque compte n\xE9cessaire en utilisant le trait "),q={href:"https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html#impl-Clone-for-AccountInfo%3C'a%3E",target:"_blank",rel:"noopener noreferrer"},x=s("Clone"),C=s(" qui est impl\xE9ment\xE9 pour la structure "),A={href:"https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html",target:"_blank",rel:"noopener noreferrer"},L=s("AccountInfo"),D=s(" dans le crate "),M=n("code",null,"solana_program",-1),S=s("."),z=o(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> accounts_infos <span class="token operator">=</span> <span class="token punctuation">[</span>
    account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    account_two<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    account_three<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Bien que cette section ait fourni une vue d&#39;ensemble des CPI, des explications plus d\xE9taill\xE9es, des exemples et des guides peuvent \xEAtre trouv\xE9s dans les ressources ci-dessous.</p><h2 id="autres-ressources" tabindex="-1"><a class="header-anchor" href="#autres-ressources" aria-hidden="true">#</a> Autres Ressources</h2>`,3),R={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations",target:"_blank",rel:"noopener noreferrer"},V=s("Documentation offcielle"),E={href:"https://solanacookbook.com/references/programs.html#how-to-do-cross-program-invocation",target:"_blank",rel:"noopener noreferrer"},N=s("R\xE9f\xE9rence Solana Cookbook"),T={href:"https://www.soldev.app/course/cpi",target:"_blank",rel:"noopener noreferrer"},B=s("Solana Course Native CPI Lesson"),F={href:"https://www.soldev.app/course/anchor-cpi",target:"_blank",rel:"noopener noreferrer"},U=s("Solana Course Anchor CPI Lesson"),j={href:"https://github.com/solana-developers/program-examples/tree/main/basics/cross-program-invocation",target:"_blank",rel:"noopener noreferrer"},J=s("Exemple de programmes par Solana Developers");function O(W,G){const a=p("ExternalLinkIcon");return c(),r(l,null,[u,n("p",null,[d,n("a",k,[m,e(a)]),b,n("a",g,[h,e(a)]),_,f,v]),y,n("p",null,[w,P,I,n("a",q,[x,e(a)]),C,n("a",A,[L,e(a)]),D,M,S]),z,n("ul",null,[n("li",null,[n("a",R,[V,e(a)])]),n("li",null,[n("a",E,[N,e(a)])]),n("li",null,[n("a",T,[B,e(a)])]),n("li",null,[n("a",F,[U,e(a)])]),n("li",null,[n("a",j,[J,e(a)])])])],64)}var K=t(i,[["render",O]]);export{K as default};
