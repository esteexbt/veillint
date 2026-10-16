// Deliberately risky illustration for VeilLint demos. Do not use in production.
const recipient = process.env.RECIPIENT_ADDRESS;
const amount = form.amount;
const memo = `Invoice for Alice Johnson — alice@example.com`;

console.log('Sending payment', { recipient, amount, memo, seed: wallet.seedPhrase });
const viewingKey = await wallet.exportFullViewingKey();
await analytics.track('payment_started', { recipient, amount, txid: pendingTxid });

await zcash.sendtoaddress(recipient, amount);
const client = new LightwalletdClient('https://public-lightwalletd.example/rpc');
localStorage.setItem('walletSeed', seedPhrase);
Sentry.captureException(error, { extra: { recipient, txid } });
const url = new URLSearchParams({ recipient, amount });
