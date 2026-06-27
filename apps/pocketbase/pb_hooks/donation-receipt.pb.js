/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: e.record.get("donor_email") }],
    subject: "Donation Receipt",
    html: "<h1>Thank You for Your Donation!</h1><p>Dear " + e.record.get("donor_name") + ",</p><p>We sincerely appreciate your generous donation.</p><p><strong>Donation Details:</strong></p><ul><li><strong>Amount:</strong> $" + e.record.get("amount") + "</li>" + (e.record.get("payment_method") ? "<li><strong>Payment Method:</strong> " + e.record.get("payment_method") + "</li>" : "") + (e.record.get("transaction_id") ? "<li><strong>Transaction ID:</strong> " + e.record.get("transaction_id") + "</li>" : "") + "</ul><p>Your contribution will make a real difference. Thank you for your support!</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "donations");