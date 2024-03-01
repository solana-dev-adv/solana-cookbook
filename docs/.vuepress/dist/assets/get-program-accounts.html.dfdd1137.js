import{_ as c,r as o,o as l,c as i,a as n,b as s,w as r,F as u,d as a,e as t}from"./app.55b1b60c.js";var d="/assets/account-size.398f17bf.png",k="/assets/memcmp.c5e1f050.png";const b={},m=n("h1",{id:"get-program-accounts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#get-program-accounts","aria-hidden":"true"},"#"),a(" Get Program Accounts")],-1),g=n("p",null,"Bir program\u0131n sahip oldu\u011Fu t\xFCm account'lar\u0131 d\xF6nd\xFCren bir RPC y\xF6ntemidir. \u015Eu anda pagination desteklenmemektedir. getProgramAccounts requests, yan\u0131t s\xFCresini iyile\u015Ftirmek ve yaln\u0131zca ama\xE7lanan sonu\xE7lar\u0131 d\xF6nd\xFCrmek i\xE7in dataSlice ve/veya filters parametrelerini i\xE7ermelidir.",-1),h=n("h2",{id:"facts-ozet-bilgiler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#facts-ozet-bilgiler","aria-hidden":"true"},"#"),a(" Facts (\xD6zet Bilgiler)")],-1),_=n("p",null,":::Parametreler",-1),y=n("li",null,[n("code",null,"programId"),a(": "),n("code",null,"string"),a(" - Sorgulanacak program\u0131n public key\u2019i, base58 kodlu bir string olarak sa\u011Flan\u0131r")],-1),f=a("(iste\u011Fe ba\u011Fl\u0131) "),z=n("code",null,"configOrCommitment",-1),v=a(": "),A=n("code",null,"object",-1),P=a(" - A\u015Fa\u011F\u0131daki iste\u011Fe ba\u011Fl\u0131 alanlar\u0131 i\xE7eren yap\u0131land\u0131rma parametreleri: "),w=a("(iste\u011Fe ba\u011Fl\u0131) "),S=n("code",null,"commitment",-1),q=a(": "),B=n("code",null,"string",-1),D=a(" - "),T={href:"https://docs.solana.com/developing/clients/jsonrpc-api#configuring-state-commitment",target:"_blank",rel:"noopener noreferrer"},E=a("Durum Taahh\xFCd\xFC"),K=a("(iste\u011Fe ba\u011Fl\u0131) "),N=n("code",null,"encoding",-1),C=a(": "),x=n("code",null,"string",-1),R=a(" - Account verileri i\xE7in encode: base58, base64 veya jsonParsed\u2019d\u0131r. Web3js kullan\u0131c\u0131lar\u0131n\u0131n bunun yerine "),M={href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getParsedProgramAccounts",target:"_blank",rel:"noopener noreferrer"},L=a("getParsedProgramAccounts"),G=a(" kullanmas\u0131 gerekti\u011Fini unutmay\u0131n."),O=t("<li>(iste\u011Fe ba\u011Fl\u0131) <code>dataSlice</code>: <code>object</code> - Geri d\xF6nd\xFCr\xFClen account verilerini a\u015Fa\u011F\u0131dakilere g\xF6re s\u0131n\u0131rlay\u0131n: <ul><li><code>offset</code>: <code>number</code> - Geri d\xF6nd\xFCrmeye ba\u015Flamak i\xE7in account verisindeki bayt say\u0131s\u0131</li><li><code>length</code>: <code>number</code> - Geri d\xF6nd\xFCr\xFClecek account verilerinin bayt say\u0131s\u0131</li></ul></li><li>(iste\u011Fe ba\u011Fl\u0131) <code>filters</code>: <code>array</code> - A\u015Fa\u011F\u0131daki filters nesnelerini kullanarak sonu\xE7lar\u0131 filtreleyin: <ul><li><code>memcmp</code>: <code>object</code> - Bir dizi bayt\u0131 account verileriyle e\u015Fle\u015Ftirin: <ul><li><code>offset</code>: <code>number</code> - Kar\u015F\u0131la\u015Ft\u0131rmaya ba\u015Flamak i\xE7in account verilerinin bayt say\u0131s\u0131</li><li><code>bytes</code>: <code>string</code> - 129 bayt ile s\u0131n\u0131rl\u0131 base58 kodlu string olarak e\u015Fle\u015Fecek veriler</li></ul></li><li><code>dataSize</code>: <code>number</code> - Account data uzunlu\u011Funu sa\u011Flanan veri boyutuyla kar\u015F\u0131la\u015Ft\u0131r\u0131r</li></ul></li>",2),j=a("(iste\u011Fe ba\u011Fl\u0131) "),H=n("code",null,"withContext",-1),V=a(": "),Y=n("code",null,"boolean",-1),F=a(" - Sonucu bir "),U={href:"https://docs.solana.com/developing/clients/jsonrpc-api#rpcresponse-structure",target:"_blank",rel:"noopener noreferrer"},I=a("RpcResponse JSON nesnesine sarmalay\u0131n"),W=t('<h5 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h5><p>Varsay\u0131lan olarak <code>getProgramAccounts</code>, a\u015Fa\u011F\u0131daki yap\u0131ya sahip bir dizi JSON nesnesi d\xF6nd\xFCr\xFCr:</p><ul><li><code>pubkey</code>: <code>string</code> - Base58 kodlu bir string olarak account&#39;\u0131n pubkeyi</li><li><code>account</code>: <code>object</code> - a\u015Fa\u011F\u0131daki alt alanlara sahip bir JSON nesnesi:</li><li><code>lamports</code>: <code>number</code>, account&#39;a atanan lamport say\u0131s\u0131</li><li><code>owner</code>: <code>string</code>, Hesab\u0131n atand\u0131\u011F\u0131 program\u0131n base58 kodlu yay\u0131n anahtar\u0131</li><li><code>data</code>: <code>string</code> | <code>object</code> - account&#39;la ili\u015Fkili veriler, sa\u011Flanan kodlama parametresine ba\u011Fl\u0131 olarak kodlanm\u0131\u015F binary data veya JSON format\u0131d\u0131r</li><li><code>executable</code>: <code>boolean</code>, Hesap bir program i\xE7erp i\xE7ermedi\u011Finin g\xF6stergesi</li><li><code>rentEpoch</code>: <code>number</code>, Bu account&#39;\u0131n bir sonraki rent borcunun olaca\u011F\u0131 epoch :::</li></ul><h2 id="deep-dive-derinlemesine-bak\u0131s" tabindex="-1"><a class="header-anchor" href="#deep-dive-derinlemesine-bak\u0131s" aria-hidden="true">#</a> Deep Dive (Derinlemesine Bak\u0131\u015F)</h2><p><code>getProgramAccounts</code>, bir program\u0131n sahip oldu\u011Fu t\xFCm account&#39;lar\u0131 d\xF6nd\xFCren \xE7ok y\xF6nl\xFC bir RPC methodudur. <code>getProgramAccounts</code>&#39;u a\u015Fa\u011F\u0131dakileri bulmak gibi bir dizi yararl\u0131 sorgu i\xE7in kullanabiliriz:</p>',5),Z=n("li",null,"Belirli bir c\xFCzdan i\xE7in t\xFCm token account'lar\u0131",-1),J=a("Belirli bir mint i\xE7in t\xFCm token account'lar\u0131 (t\xFCm "),$={href:"https://www.projectOpenBook.com/",target:"_blank",rel:"noopener noreferrer"},Q=a("SRM"),X=a(" sahipleri)"),nn=a("Belirli bir program i\xE7in t\xFCm private account'lar (t\xFCm "),an={href:"https://mango.markets/",target:"_blank",rel:"noopener noreferrer"},sn=a("Mango"),en=a(" kullan\u0131c\u0131lar\u0131)"),tn=t("<p>Kullan\u0131\u015Fl\u0131l\u0131\u011F\u0131na ra\u011Fmen, <code>getProgramAccounts</code>, mevcut k\u0131s\u0131tlamalar\u0131 nedeniyle genellikle yanl\u0131\u015F anla\u015F\u0131l\u0131r. <code>getProgramAccounts</code> taraf\u0131ndan desteklenen sorgular\u0131n \xE7o\u011Fu, b\xFCy\xFCk veri k\xFCmelerini taramak i\xE7in RPC node\u2019lar\u0131n\u0131 gerektirir. Bu taramalar hem bellek hem de kaynak yo\u011Fundur. Sonu\xE7 olarak, \xE7ok s\u0131k veya \xE7ok geni\u015F kapsaml\u0131 \xE7a\u011Fr\u0131lar ba\u011Flant\u0131 zaman a\u015F\u0131mlar\u0131na neden olabilir. Ayr\u0131ca, bu yaz\u0131n\u0131n yaz\u0131ld\u0131\u011F\u0131 s\u0131rada <code>getProgramAccounts</code> u\xE7 noktas\u0131 sayfaland\u0131rmay\u0131 desteklemez. Bir sorgunun sonu\xE7lar\u0131 \xE7ok b\xFCy\xFCkse, yan\u0131t kesilecektir.</p><p>Bu mevcut k\u0131s\u0131tlamalar\u0131 a\u015Fmak i\xE7in <code>getProgramAccounts</code> bir dizi faydal\u0131 parametre sunar: <code>dataSlice</code>, <code>memcmp</code> ve <code>dataSize</code>, <code>filters</code> se\xE7enekleri. Bu parametrelerin kombinasyonlar\u0131n\u0131 sa\u011Flayarak sorgular\u0131m\u0131z\u0131n kapsam\u0131n\u0131 y\xF6netilebilir ve \xF6ng\xF6r\xFClebilir boyutlara indirebiliriz.</p>",2),on=a("Yayg\u0131n bir "),pn=n("code",null,"getProgramAccounts",-1),cn=a(" \xF6rne\u011Fi, "),ln={href:"https://spl.solana.com/token",target:"_blank",rel:"noopener noreferrer"},rn=a("SPL-Token Program\u0131"),un=a(" ile etkile\u015Fimi i\xE7erir. Token Program\u0131n\u0131n sahip oldu\u011Fu t\xFCm account'lar\u0131 bir "),dn=a("basic call"),kn=a(" ile request etmek, \xE7ok b\xFCy\xFCk miktarda veri gerektirecektir. Ancak parametreleri sa\u011Flayarak, yaln\u0131zca kullanmay\u0131 d\xFC\u015F\xFCnd\xFC\u011F\xFCm\xFCz verileri verimli bir \u015Fekilde request edebiliriz."),bn=t('<h3 id="filters" tabindex="-1"><a class="header-anchor" href="#filters" aria-hidden="true">#</a> <code>filters</code></h3><p><code>getProgramAccounts</code> ile kullan\u0131lacak en yayg\u0131n parametre <code>filters</code> array\u2019idir. Bu array, <code>dataSize</code> ve <code>memcmp</code> olmak \xFCzere iki t\xFCr filtre kabul eder. Bu filtrelerden herhangi birini kullanmadan \xF6nce, request etti\u011Fimiz verilerin nas\u0131l d\xFCzenlendi\u011Fini ve serile\u015Ftirildi\u011Fini bilmeliyiz.</p><h4 id="datasize" tabindex="-1"><a class="header-anchor" href="#datasize" aria-hidden="true">#</a> <code>dataSize</code></h4>',3),mn=a("Token Program\u0131 i\xE7in, "),gn={href:"https://github.com/solana-labs/solana-program-library/blob/08d9999f997a8bf38719679be9d572f119d0d960/token/program/src/state.rs#L86-L106",target:"_blank",rel:"noopener noreferrer"},hn=a("token account'lar\u0131n\u0131n 165 bayt uzunlu\u011Funda"),_n=a(" oldu\u011Funu g\xF6rebiliriz. Spesifik olarak, bir belirte\xE7 account'\u0131n\u0131n her biri tahmin edilebilir say\u0131da bayt gerektiren sekiz farkl\u0131 alan\u0131 vard\u0131r. A\u015Fa\u011F\u0131daki \xE7izimi kullanarak bu verilerin nas\u0131l d\xFCzenlendi\u011Fini g\xF6rselle\u015Ftirebiliriz."),yn=t('<p><img src="'+d+'" alt="Account Size"></p><p>C\xFCzdan adresimize ait t\xFCm token account&#39;lar\u0131n\u0131 bulmak istiyorsak, sorgumuzun kapsam\u0131n\u0131 tam olarak 165 bayt uzunlu\u011Fundaki account&#39;lara daraltmak i\xE7in <code>filters</code> dizimize <code>{ dataSize: 165 }</code> ekleyebiliriz. Ancak bu tek ba\u015F\u0131na yetersiz olacakt\u0131r. Ayr\u0131ca adresimize ait account&#39;lar\u0131 arayan bir filtre eklememiz gerekir. Bunu <code>memcmp</code> filtresiyle ba\u015Farabiliriz</p><h4 id="memcmp" tabindex="-1"><a class="header-anchor" href="#memcmp" aria-hidden="true">#</a> <code>memcmp</code></h4><p><code>memcmp</code> filtresi veya &quot;bellek kar\u015F\u0131la\u015Ft\u0131rma&quot; filtresi, account&#39;\u0131m\u0131zda depolanan herhangi bir alandaki verileri kar\u015F\u0131la\u015Ft\u0131rmam\u0131za olanak tan\u0131r. Spesifik olarak, yaln\u0131zca belirli bir konumda belirli bir bayt k\xFCmesiyle e\u015Fle\u015Fen account&#39;lar\u0131 sorgulayabiliriz. <code>memcmp</code> iki arg\xFCman gerektirir:</p><ul><li><code>offset</code>: Verileri kar\u015F\u0131la\u015Ft\u0131rmaya ba\u015Flayaca\u011F\u0131n\u0131z konum. Bu konum bayt cinsinden \xF6l\xE7\xFCl\xFCr ve bir tamsay\u0131 olarak ifade edilir.</li><li><code>bytes</code>: Hesab\u0131n verileriyle e\u015Fle\u015Fmesi gereken veriler. Bu, base-58 kodlu bir string olarak temsil edilir, 129 bayttan daha az ile s\u0131n\u0131rland\u0131r\u0131lmal\u0131d\u0131r.</li></ul><p><code>Memcmp</code>&#39;nin yaln\u0131zca <code>bytes</code> ile tam olarak e\u015Fle\u015Fen sonu\xE7lar\u0131 d\xF6nd\xFCrece\u011Fini unutmamak \xF6nemlidir. \u015Eu anda, sa\u011Flad\u0131\u011F\u0131m\u0131z <code>bytes</code>\u2019dan daha k\xFC\xE7\xFCk veya daha b\xFCy\xFCk de\u011Ferler i\xE7in kar\u015F\u0131la\u015Ft\u0131rmalar\u0131 desteklememektedir.</p><p>Token Program\u0131 \xF6rne\u011Fimize uygun olarak, sorgumuzu yaln\u0131zca c\xFCzdan adresimize ait olan token account&#39;lar\u0131n\u0131 d\xF6nd\xFCrecek \u015Fekilde de\u011Fi\u015Ftirebiliriz. Bir belirte\xE7 account&#39;\u0131na bakt\u0131\u011F\u0131m\u0131zda, bir belirte\xE7 account&#39;\u0131nda depolanan ilk iki alan\u0131n her ikisinin de pubkey oldu\u011Funu ve her bir pubkey&#39;nin 32 bayt uzunlu\u011Funda oldu\u011Funu g\xF6rebiliriz. <code>Owner</code>\u2019\u0131n ikinci alan oldu\u011Fu g\xF6z \xF6n\xFCne al\u0131nd\u0131\u011F\u0131nda, <code>memcmp</code>&#39;mize 32 baytl\u0131k bir <code>offset</code> ile ba\u015Flamal\u0131y\u0131z. Buradan, owner alan\u0131 c\xFCzdan adresimizle e\u015Fle\u015Fen account&#39;lar\u0131 arayaca\u011F\u0131z.</p><p><img src="'+k+`" alt="Account Size"></p><p>Bu sorguyu a\u015Fa\u011F\u0131daki \xF6rnek \xFCzerinden \xE7a\u011F\u0131rabiliriz:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">TOKEN_PROGRAM_ID</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> clusterApiUrl<span class="token punctuation">,</span> Connection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">MY_WALLET_ADDRESS</span> <span class="token operator">=</span> <span class="token string">&quot;FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&quot;devnet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;confirmed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> accounts <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getParsedProgramAccounts</span><span class="token punctuation">(</span>
    <span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// new PublicKey(&quot;TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA&quot;)</span>
    <span class="token punctuation">{</span>
      filters<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          dataSize<span class="token operator">:</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token comment">// number of bytes</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          memcmp<span class="token operator">:</span> <span class="token punctuation">{</span>
            offset<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token comment">// number of bytes</span>
            bytes<span class="token operator">:</span> <span class="token constant">MY_WALLET_ADDRESS</span><span class="token punctuation">,</span> <span class="token comment">// base58 encoded string</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>accounts<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> token account(s) for wallet </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">MY_WALLET_ADDRESS</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  accounts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-- Token Account Address </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>account<span class="token punctuation">.</span>pubkey<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> --</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Mint: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>account<span class="token punctuation">.</span>account<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token string">&quot;parsed&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;mint&quot;</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Amount: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>account<span class="token punctuation">.</span>account<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token string">&quot;parsed&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;tokenAmount&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;uiAmount&quot;</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/*
    // Output

    Found 2 token account(s) for wallet FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T: 
    -- Token Account Address 0:  H12yCcKLHFJFfohkeKiN8v3zgaLnUMwRcnJTyB4igAsy --
    Mint: CKKDsBT6KiT4GDKs3e39Ue9tDkhuGUKM3cC2a7pmV9YK
    Amount: 1
    -- Token Account Address 1:  Et3bNDxe2wP1yE5ao6mMvUByQUHg8nZTndpJNvfKLdCb --
    Mint: BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf
    Amount: 3
  */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="dataslice" tabindex="-1"><a class="header-anchor" href="#dataslice" aria-hidden="true">#</a> <code>dataSlice</code></h3><p>\u0130ki filtre parametresinin d\u0131\u015F\u0131nda, <code>getProgramAccounts</code> i\xE7in en yayg\u0131n \xFC\xE7\xFCnc\xFC parametre <code>dataSlice</code>&#39;d\u0131r. <code>filters</code> parametresinin aksine <code>dataSlice</code>, bir sorgu taraf\u0131ndan d\xF6nd\xFCr\xFClen account say\u0131s\u0131n\u0131 azaltmaz. Bunun yerine <code>dataSlice</code>, her account i\xE7in veri miktar\u0131n\u0131 s\u0131n\u0131rlar.</p><p><code>memcmp</code> gibi <code>dataSlice</code> iki arg\xFCman\u0131 kabul eder:</p><ul><li><code>offset</code>: Verileri kar\u015F\u0131la\u015Ft\u0131rmaya ba\u015Flayaca\u011F\u0131n\u0131z konum.</li><li><code>length</code>: D\xF6nd\xFCr\xFClmesi gereken bayt say\u0131s\u0131.</li></ul><p><code>dataSlice</code>, \xF6zellikle b\xFCy\xFCk bir veri k\xFCmesinde sorgu \xE7al\u0131\u015Ft\u0131rd\u0131\u011F\u0131m\u0131zda, ancak asl\u0131nda account verilerinin kendisiyle ilgilenmedi\u011Fimizde kullan\u0131\u015Fl\u0131d\u0131r. Bunun bir \xF6rne\u011Fi, belirli bir token mint etmek(basmak) i\xE7in token account&#39;lar\u0131n\u0131n say\u0131s\u0131n\u0131 (token sahiplerinin say\u0131s\u0131n\u0131) bulmak istiyorsak olabilir.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">TOKEN_PROGRAM_ID</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> clusterApiUrl<span class="token punctuation">,</span> Connection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">MY_TOKEN_MINT_ADDRESS</span> <span class="token operator">=</span> <span class="token string">&quot;BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&quot;devnet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;confirmed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> accounts <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getProgramAccounts</span><span class="token punctuation">(</span>
    <span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// new PublicKey(&quot;TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA&quot;)</span>
    <span class="token punctuation">{</span>
      dataSlice<span class="token operator">:</span> <span class="token punctuation">{</span>
        offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// number of bytes</span>
        length<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// number of bytes</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      filters<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          dataSize<span class="token operator">:</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token comment">// number of bytes</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          memcmp<span class="token operator">:</span> <span class="token punctuation">{</span>
            offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// number of bytes</span>
            bytes<span class="token operator">:</span> <span class="token constant">MY_TOKEN_MINT_ADDRESS</span><span class="token punctuation">,</span> <span class="token comment">// base58 encoded string</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>accounts<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> token account(s) for mint </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">MY_TOKEN_MINT_ADDRESS</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>accounts<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/*
  // Output (notice the empty &lt;Buffer &gt; at acccount.data)
  
  Found 3 token account(s) for mint BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf
  [
    {
      account: {
        data: &lt;Buffer &gt;,
        executable: false,
        lamports: 2039280,
        owner: [PublicKey],
        rentEpoch: 228
      },
      pubkey: PublicKey {
        _bn: &lt;BN: a8aca7a3132e74db2ca37bfcd66f4450f4631a5464b62fffbd83c48ef814d8d7&gt;
      }
    },
    {
      account: {
        data: &lt;Buffer &gt;,
        executable: false,
        lamports: 2039280,
        owner: [PublicKey],
        rentEpoch: 228
      },
      pubkey: PublicKey {
        _bn: &lt;BN: ce3b7b906c2ff6c6b62dc4798136ec017611078443918b2fad1cadff3c2e0448&gt;
      }
    },
    {
      account: {
        data: &lt;Buffer &gt;,
        executable: false,
        lamports: 2039280,
        owner: [PublicKey],
        rentEpoch: 228
      },
      pubkey: PublicKey {
        _bn: &lt;BN: d4560e42cb24472b0e1203ff4b0079d6452b19367b701643fa4ac33e0501cb1&gt;
      }
    }
  ]
  */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><p>\xDC\xE7 parametrenin t\xFCm\xFCn\xFC (<code>dataSlice</code>, <code>dataSize</code>, ve <code>memcmp</code>) birle\u015Ftirerek sorgumuzun kapsam\u0131n\u0131 s\u0131n\u0131rlayabilir ve yaln\u0131zca ilgilendi\u011Fimiz verileri verimli bir \u015Fekilde d\xF6nd\xFCrebiliriz.</p><h2 id="other-resources" tabindex="-1"><a class="header-anchor" href="#other-resources" aria-hidden="true">#</a> Other Resources</h2>`,18),fn={href:"https://docs.solana.com/developing/clients/jsonrpc-api#getprogramaccounts",target:"_blank",rel:"noopener noreferrer"},zn=a("RPC API Documentation"),vn={href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getProgramAccounts",target:"_blank",rel:"noopener noreferrer"},An=a("Web3js Documentation"),Pn={href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getParsedProgramAccounts",target:"_blank",rel:"noopener noreferrer"},wn=a("JSON-parsed Web3js Documentation");function Sn(qn,Bn){const e=o("ExternalLinkIcon"),p=o("RouterLink");return l(),i(u,null,[m,g,h,_,n("ul",null,[y,n("li",null,[f,z,v,A,P,n("ul",null,[n("li",null,[w,S,q,B,D,n("a",T,[E,s(e)])]),n("li",null,[K,N,C,x,R,n("a",M,[L,s(e)]),G]),O,n("li",null,[j,H,V,Y,F,n("a",U,[I,s(e)])])])])]),W,n("ul",null,[Z,n("li",null,[J,n("a",$,[Q,s(e)]),X]),n("li",null,[nn,n("a",an,[sn,s(e)]),en])]),tn,n("p",null,[on,pn,cn,n("a",ln,[rn,s(e)]),un,s(p,{to:"/tr/references/accounts.html#get-program-accounts"},{default:r(()=>[dn]),_:1}),kn]),bn,n("p",null,[mn,n("a",gn,[hn,s(e)]),_n]),yn,n("ul",null,[n("li",null,[n("a",fn,[zn,s(e)])]),n("li",null,[n("a",vn,[An,s(e)])]),n("li",null,[n("a",Pn,[wn,s(e)])])])],64)}var Tn=c(b,[["render",Sn]]);export{Tn as default};
