import{_ as r,r as a,o as i,c,a as t,b as n,w as l,F as d,d as e,e as h}from"./app.c241040b.js";const _={},u=t("h1",{id:"transactions",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#transactions","aria-hidden":"true"},"#"),e(" Transactions")],-1),p=e("Clients \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 invoke "),m=e("programs"),f=e(" \u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07 (submitting) transaction \u0E44\u0E1B\u0E17\u0E35\u0E48 cluster. transaction \u0E08\u0E30\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E44\u0E1B\u0E14\u0E49\u0E27\u0E22 instructions, \u0E42\u0E14\u0E22\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2D\u0E31\u0E19\u0E08\u0E30\u0E21\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E44\u0E1B\u0E17\u0E35\u0E48 program \u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07. \u0E40\u0E21\u0E37\u0E48\u0E2D transaction submit \u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27, Solana "),b={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},g=e("Runtime"),k=e(" \u0E08\u0E30 process instructions \u0E15\u0E32\u0E21\u0E25\u0E33\u0E14\u0E31\u0E1A \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A atomic. \u0E16\u0E49\u0E32\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E44\u0E2B\u0E19\u0E02\u0E2D\u0E07 instruction \u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27 (fail), \u0E17\u0E31\u0E49\u0E07 transaction \u0E08\u0E30 fail \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14."),y=h('<h2 id="\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E19\u0E48\u0E32\u0E23\u0E39\u0E49" tabindex="-1"><a class="header-anchor" href="#\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E19\u0E48\u0E32\u0E23\u0E39\u0E49" aria-hidden="true">#</a> \u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E19\u0E48\u0E32\u0E23\u0E39\u0E49</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>Instructions \u0E04\u0E37\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07 Solana</li><li>\u0E41\u0E15\u0E48\u0E25\u0E30 instruction \u0E08\u0E30\u0E21\u0E35: <ul><li><code>program_id</code> \u0E02\u0E2D\u0E07 program</li><li>\u0E0A\u0E38\u0E14\u0E02\u0E2D\u0E07 <code>accounts</code> \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E48\u0E32\u0E19 (read) \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E02\u0E35\u0E22\u0E19 (write)</li><li><code>instruction_data</code> byte array \u0E17\u0E35\u0E48\u0E08\u0E33\u0E40\u0E1E\u0E32\u0E30\u0E40\u0E08\u0E32\u0E30\u0E08\u0E07\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E15\u0E48\u0E1A\u0E30 program</li></ul></li><li>\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E2A\u0E48\u0E40 instructions \u0E44\u0E14\u0E49\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E15\u0E31\u0E27 \u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E43\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07 transaction</li><li>\u0E41\u0E15\u0E48\u0E25\u0E30 transaction \u0E08\u0E30\u0E21\u0E35: <ul><li>\u0E0A\u0E38\u0E14\u0E02\u0E2D\u0E07 <code>accounts</code> \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E48\u0E32\u0E19 (read) \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E02\u0E35\u0E22\u0E19 (write)</li><li><code>instructions</code> \u0E2B\u0E19\u0E36\u0E48\u0E07\u0E15\u0E31\u0E27 \u0E2B\u0E23\u0E37\u0E2D\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32</li><li><code>blockhash</code> \u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14 (recent)</li><li><code>signatures</code> \u0E2B\u0E19\u0E36\u0E48\u0E07\u0E15\u0E31\u0E27 \u0E2B\u0E23\u0E37\u0E2D\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32</li></ul></li><li>Instructions \u0E08\u0E30 process instructions \u0E15\u0E32\u0E21\u0E25\u0E33\u0E14\u0E31\u0E1A \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A atomic</li><li>\u0E16\u0E49\u0E32\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E44\u0E2B\u0E19\u0E02\u0E2D\u0E07 instruction \u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27 (fail), \u0E17\u0E31\u0E49\u0E07 transaction \u0E08\u0E30 fail \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</li><li>\u0E02\u0E19\u0E32\u0E14\u0E02\u0E2D\u0E07 Transactions \u0E08\u0E33\u0E01\u0E31\u0E14\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48 1232 bytes</li></ul></div><h2 id="\u0E25\u0E07\u0E25\u0E36\u0E01" tabindex="-1"><a class="header-anchor" href="#\u0E25\u0E07\u0E25\u0E36\u0E01" aria-hidden="true">#</a> \u0E25\u0E07\u0E25\u0E36\u0E01</h2><p>Solana Runtime \u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E17\u0E31\u0E49\u0E07 instructions \u0E41\u0E25\u0E30 transactions \u0E23\u0E30\u0E1A\u0E38 accounts \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2D\u0E48\u0E32\u0E19 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E02\u0E35\u0E22\u0E19 \u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21 accounts \u0E44\u0E27\u0E49\u0E01\u0E48\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E19\u0E35\u0E49\u0E08\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49 runtime \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E19\u0E32\u0E19\u0E01\u0E31\u0E19 (parallelize execution) \u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07 transactions.</p><p>\u0E40\u0E21\u0E37\u0E48\u0E2D transaction \u0E16\u0E39\u0E01 submit \u0E44\u0E1B\u0E17\u0E35\u0E48 cluster \u0E41\u0E25\u0E49\u0E27, \u0E15\u0E31\u0E27 runtime \u0E08\u0E30 process instructions \u0E15\u0E32\u0E21\u0E25\u0E33\u0E14\u0E31\u0E1A \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A atomic. \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E15\u0E48\u0E25\u0E30 instruction, program \u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E44\u0E1B\u0E08\u0E30\u0E41\u0E1B\u0E25 (interpret) data array \u0E41\u0E25\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E1A\u0E19 accounts \u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49. program \u0E08\u0E30\u0E2A\u0E48\u0E07\u0E1C\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E2B\u0E23\u0E37\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14 (error code) \u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32. \u0E16\u0E49\u0E32\u0E2A\u0E48\u0E07 error \u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32 \u0E17\u0E31\u0E49\u0E07 transaction \u0E08\u0E30 fail \u0E17\u0E31\u0E19\u0E17\u0E35.</p><p>transaction \u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E16\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19 (debit) \u0E08\u0E32\u0E01 account \u0E2B\u0E23\u0E37\u0E2D\u0E08\u0E30\u0E41\u0E01\u0E49\u0E44\u0E02 data \u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 signature \u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07 account \u0E19\u0E31\u0E49\u0E19\u0E2A\u0E48\u0E07\u0E21\u0E32\u0E14\u0E49\u0E27\u0E22. account \u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E35\u0E22\u0E19\u0E44\u0E14\u0E49 \u0E08\u0E30\u0E16\u0E39\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E27\u0E49\u0E27\u0E48\u0E32 <code>writable</code>. account \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19 (credited) \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E08\u0E32\u0E01\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07 \u0E17\u0E31\u0E49\u0E07\u0E19\u0E35\u0E49\u0E04\u0E19\u0E08\u0E48\u0E32\u0E22 (payer)\u0E44\u0E14\u0E49\u0E08\u0E48\u0E32\u0E22\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E04\u0E48\u0E32 rent \u0E41\u0E25\u0E30 transaction fees \u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27.</p>',6),x=e("\u0E01\u0E48\u0E2D\u0E19\u0E01\u0E32\u0E23 submission, \u0E17\u0E38\u0E01 transactions \u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E49\u0E32\u0E07\u0E44\u0E1B\u0E17\u0E35\u0E48 "),v={href:"https://docs.solana.com/developing/programming-model/transactions#recent-blockhash",target:"_blank",rel:"noopener noreferrer"},S=e("recent blockhash"),T=e(". \u0E42\u0E14\u0E22\u0E17\u0E35\u0E48 blockhash \u0E08\u0E30\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07 transactions \u0E0B\u0E49\u0E33 \u0E41\u0E25\u0E30 transactions \u0E17\u0E35\u0E48\u0E40\u0E01\u0E48\u0E32\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B. \u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07 transaction's blockhash \u0E04\u0E37\u0E2D 150 blocks, \u0E2B\u0E23\u0E37\u0E2D\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 ~1 \u0E19\u0E32\u0E17\u0E35 19 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 \u0E43\u0E19\u0E40\u0E27\u0E25\u0E32\u0E15\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E19\u0E35\u0E49."),w=t("h3",{id:"\u0E04\u0E48\u0E32\u0E18\u0E23\u0E23\u0E21\u0E40\u0E19\u0E35\u0E22\u0E21-fees",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u0E04\u0E48\u0E32\u0E18\u0E23\u0E23\u0E21\u0E40\u0E19\u0E35\u0E22\u0E21-fees","aria-hidden":"true"},"#"),e(" \u0E04\u0E48\u0E32\u0E18\u0E23\u0E23\u0E21\u0E40\u0E19\u0E35\u0E22\u0E21 (Fees)")],-1),F=t("p",null,"Solana \u0E08\u0E30\u0E40\u0E01\u0E47\u0E1A fee 2 \u0E41\u0E1A\u0E1A:",-1),I={href:"https://docs.solana.com/transaction_fees",target:"_blank",rel:"noopener noreferrer"},L=e("Transaction fees"),R=e(" \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E33 transactions (\u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E35\u0E48\u0E40\u0E23\u0E35\u0E22\u0E01\u0E27\u0E48\u0E32 \u201Cgas fees\u201D)"),N={href:"https://docs.solana.com/developing/programming-model/accounts#rent",target:"_blank",rel:"noopener noreferrer"},V=e("Rent fees"),B=e(" \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E47\u0E1A data on-chain"),C=t("p",null,[e("\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A Solana, transaction fees \u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19 deterministic (\u0E17\u0E38\u0E01\u0E40\u0E2B\u0E15\u0E38\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19 \u0E21\u0E35\u0E1B\u0E31\u0E08\u0E08\u0E31\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C): \u0E08\u0E30\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35 fee market \u0E17\u0E35\u0E48\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 \u0E08\u0E48\u0E32\u0E22 fees \u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E43\u0E19\u0E01\u0E32\u0E23\u0E16\u0E39\u0E01\u0E1B\u0E23\u0E30\u0E21\u0E27\u0E25\u0E1C\u0E25\u0E43\u0E19 block \u0E16\u0E31\u0E14\u0E44\u0E1B\u0E43\u0E19\u0E40\u0E27\u0E25\u0E32\u0E15\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E19\u0E35\u0E49, transaction fees \u0E08\u0E30\u0E40\u0E01\u0E47\u0E1A\u0E15\u0E32\u0E21\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E2D\u0E07 signatures \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49 ("),t("code",null,"lamports_per_signature"),e("), \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E15\u0E32\u0E21\u0E08\u0E33\u0E19\u0E27\u0E19 resources \u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E44\u0E1B \u0E17\u0E31\u0E49\u0E07\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E21\u0E35 hard cap 1232 bytes \u0E43\u0E19\u0E17\u0E38\u0E01\u0E46 transactions \u0E2D\u0E22\u0E39\u0E48.")],-1),E=t("p",null,[e("\u0E17\u0E38\u0E01\u0E46 transactions \u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "),t("code",null,"writable"),e(" account \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22\u0E2B\u0E19\u0E36\u0E07\u0E15\u0E31\u0E27\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A sign transaction. \u0E40\u0E21\u0E37\u0E48\u0E2D submitted \u0E41\u0E25\u0E49\u0E27 writable signer account \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01 serialized \u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E41\u0E23\u0E01\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19 fee payer \u0E41\u0E25\u0E30 account \u0E19\u0E35\u0E49\u0E08\u0E30\u0E08\u0E48\u0E32\u0E22\u0E04\u0E48\u0E32 transaction \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E2A\u0E19\u0E43\u0E08\u0E27\u0E48\u0E32 transaction \u0E08\u0E30\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48. \u0E16\u0E49\u0E32 fee payer \u0E44\u0E21\u0E48\u0E21\u0E35 balance \u0E1E\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E08\u0E48\u0E32\u0E22 transaction fee \u0E44\u0E14\u0E49 transaction \u0E01\u0E47\u0E08\u0E30\u0E16\u0E39\u0E01\u0E17\u0E34\u0E49\u0E07\u0E44\u0E1B (dropped).")],-1),j=t("p",null,"\u0E43\u0E19\u0E40\u0E27\u0E25\u0E32\u0E15\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E19\u0E35\u0E49, 50% \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01 transaction fees \u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E1B\u0E42\u0E14\u0E22 validator \u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07 block, \u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48 50% \u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E1C\u0E32\u0E17\u0E34\u0E49\u0E07 (burn). \u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E1A\u0E1A\u0E19\u0E35\u0E49\u0E21\u0E35\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E23\u0E07\u0E08\u0E39\u0E07\u0E43\u0E08\u0E43\u0E2B\u0E49 validators \u0E1B\u0E23\u0E30\u0E21\u0E27\u0E13\u0E1C\u0E25 transactions \u0E43\u0E2B\u0E49\u0E21\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E40\u0E17\u0E48\u0E32\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E44\u0E14\u0E49\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07 slots \u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E19\u0E33 (leader)",-1),z=t("h2",{id:"\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E37\u0E48\u0E19",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E37\u0E48\u0E19","aria-hidden":"true"},"#"),e(" \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E37\u0E48\u0E19")],-1),A={href:"https://docs.solana.com/developing/programming-model/transactions",target:"_blank",rel:"noopener noreferrer"},D=e("Official Documentation"),J={href:"https://solana.wiki/docs/solidity-guide/transactions/#solana-transaction-structure",target:"_blank",rel:"noopener noreferrer"},H=e("Transaction Structure"),M={href:"https://jstarry.notion.site/Transaction-Fees-f09387e6a8d84287aa16a34ecb58e239",target:"_blank",rel:"noopener noreferrer"},O=e("Transaction Fees by Justin Starry"),P={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},q=e("An Introduction to Solana by Hana"),G={href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143",target:"_blank",rel:"noopener noreferrer"},K=e("Transaction Processing by Jito Labs"),Q={href:"https://medium.com/@asmiller1989/solana-transactions-in-depth-1f7f7fe06ac2",target:"_blank",rel:"noopener noreferrer"},U=e("Solana Transaction in Depth by Alex Miller");function W(X,Y){const s=a("RouterLink"),o=a("ExternalLinkIcon");return i(),c(d,null,[u,t("p",null,[p,n(s,{to:"/th/core-concepts/programs.html"},{default:l(()=>[m]),_:1}),f,t("a",b,[g,n(o)]),k]),y,t("p",null,[x,t("a",v,[S,n(o)]),T]),w,F,t("ul",null,[t("li",null,[t("a",I,[L,n(o)]),R]),t("li",null,[t("a",N,[V,n(o)]),B])]),C,E,j,z,t("ul",null,[t("li",null,[t("a",A,[D,n(o)])]),t("li",null,[t("a",J,[H,n(o)])]),t("li",null,[t("a",M,[O,n(o)])]),t("li",null,[t("a",P,[q,n(o)])]),t("li",null,[t("a",G,[K,n(o)])]),t("li",null,[t("a",Q,[U,n(o)])])])],64)}var $=r(_,[["render",W]]);export{$ as default};
