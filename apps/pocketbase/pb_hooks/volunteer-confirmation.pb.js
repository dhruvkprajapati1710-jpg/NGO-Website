/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: e.record.get("email") }],
    subject: "Volunteer Signup Confirmation",
    html: "<h1>Thank You for Signing Up!</h1><p>Dear " + e.record.get("full_name") + ",</p><p>We have received your volunteer signup and appreciate your interest in joining our team.</p><p><strong>Your Details:</strong></p><ul><li><strong>Name:</strong> " + e.record.get("full_name") + "</li><li><strong>Email:</strong> " + e.record.get("email") + "</li>" + (e.record.get("phone") ? "<li><strong>Phone:</strong> " + e.record.get("phone") + "</li>" : "") + "</ul><p>We will review your application and get back to you soon.</p><p>Thank you!</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "volunteer_signups");