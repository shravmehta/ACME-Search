
## Problem

Alice is about to head into a meeting with Acme Co. She visits https://foo.com which
has a search box where she types "Acme Co." and gets content from various data
sources (listed below) relevant to the upcoming meeting.

Data sources (JSON files inside the data folder):
Contacts
Dropbox file
Slack message/thread
Calendar entry
Twitter
Each item has a matching_terms field, you could treat that as the set of query terms
which will retrieve that item (so you don't have to bother with actually searching
content).

## Requirements

Build a search UI that supports searching over the items contained in the JSON files.
There should be a search box where the user can type, press a button, and see
content that matches the search query.
Additionally, please pick one of these "advanced" features to implement:
Dynamically update results as new data becomes available
User interaction with search results (pin, delete, tagging)
Analytics (track user clicks and other behavior while on the page)

Note: The take home assignment was given by Neeva.co for software engineering position.

## How to run the project:

- Install Node and NPM package manager from the official site
- Open terminal and go to the directory of the project
- Run following commands : 
        - npm install 
        - npm start
- Navigate to "http://localhost:3000" on your browser.
