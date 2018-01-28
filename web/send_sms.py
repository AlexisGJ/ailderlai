# /usr/bin/env python
# Download the twilio-python library from twilio.com/docs/libraries/python
from twilio.rest import Client

# Find these values at https://twilio.com/user/account
account_sid = "ACcc5caacec82143e98b99c2be4dd94c5a"
auth_token = "fab5ac701ecb3b4b22cd78d1eac5ed7c"

client = Client(account_sid, auth_token)

client.api.account.messages.create(
   to="+14388635345",
   from_="+15146125782",
   body="Hi, I have an emergency right now.")