"use strict"

const { Resend } = require("resend")

module.exports = {
  provider: "strapi-provider-email-resend-react",
  name: "Resend React",

  init: function (providerOptions, settings) {
    const resend = new Resend(providerOptions.apiKey)
    return {
      send: function (options) {
        var {
          from,
          to,
          cc,
          bcc,
          replyTo,
          subject,
          text,
          html,
          react,

          ...rest
        } = options

        let data = {
          from: from || settings.defaultFrom,
          to,
          cc,
          bcc,
          replyTo: replyTo || settings.defaultReplyTo,
          subject,
          text,
          html,
          ...rest,
        }

        return resend.emails.send(data)
      },
    }
  },
}
