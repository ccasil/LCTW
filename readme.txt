//README

How to Setup API.

Paypal Developer Dashboard -> MY Apps & Credentials
Get your credentials. Use postman or curl 

//https://api.sandbox.paypal.com/v1/oauth2/token 
//body x-www-urlencoded KEY: grant_Type VALUE: client_credentials

//Sample Response
{
    "scope": "https://api.paypal.com/v1/payments/.* https://uri.paypal.com/services/payments/refund https://uri.paypal.com/services/applications/webhooks https://uri.paypal.com/services/payments/payment/authcapture https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.* https://uri.paypal.com/services/disputes/read-seller https://uri.paypal.com/services/subscriptions https://uri.paypal.com/services/disputes/read-buyer https://api.paypal.com/v1/vault/credit-card openid https://uri.paypal.com/services/disputes/update-seller https://uri.paypal.com/services/payments/realtimepayment",
    "nonce": "2018-07-25T22:47:59ZBrPqB6S5iBEGrNF-tJnO79yDNGSr-jWlbJ537-LNd6Y",
    "access_token": "A21AAGh6KsVp1OOa8hEiy0NT44s_UGS3AZNzvcWX4HWYHgqOkbVplI6zEpLMPrRCAzXXmQ2gb2qWQz9QOlum58q2ZbV1BjgcA",
    "token_type": "Bearer",
    "app_id": "APP-80W284485P519543T",
    "expires_in": 32399
}