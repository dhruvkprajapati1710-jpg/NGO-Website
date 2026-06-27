/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: e.record.get("email") }],
    subject: "We Received Your Inquiry",
    html: "<h1>Thank You for Contacting Us</h1><p>Dear " + e.record.get("name") + ",</p><p>We have received your inquiry and will get back to you as soon as possible.</p><p><strong>Your Message Details:</strong></p><ul><li><strong>Subject:</strong> " + e.record.get("subject") + "</li><li><strong>Message:</strong> " + e.record.get("message") + "</li></ul><p>Our team will review your message and respond within 24-48 hours.</p><p>Thank you for reaching out!</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "contact_inquiries");