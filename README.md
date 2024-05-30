# strapi-provider-email-resend

A email provider for Strapi for Resend [https://resend.com/]

## Installation

In the root directory of your project, run:

```bash
npm i strapi-provider-email-resend-strapi
```

## Configuration

In your `config/plugins.js`, set the following:

```javascript
module.exports = ({ env }) => ({
  ...
  email: {
    config: {
      provider: 'strapi-provider-email-resend-strapi',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'), // Required
      },
      settings: {
        defaultFrom: 'me@example.com', // env('RESEND_DEFAULT_FROM')
        defaultReplyTo: 'me@example.com', // env('RESEND_DEFAULT_FROM')
      },
    }
  },
});
```
