# 💵 eBot2 (The continuation of eBot)

A discord bot used to sell services/products.

## 📝 Features

**Commands:**

| Command | What does it do? |
| ---- | ---- |
| `/ping` | Gets the Client & API Latency for eBot. |
| `/setup` | Sets up all of the neccessary channels so that you can begin selling your products. *W.I.P* |
| `/package` | Sets up a package for you that you can then sell. *W.I.P* |

## 🤖 Installation

To install the bot simply clone the repository to a computer and then run `yarn install` (If you don't have yarn installed, then run `npm install -g yarn`) or `npm install`, this should install all neccessary packages.

After that you need to create a `.env` file inside of the root directory with the following content:

```text
CLIENT_TOKEN=[YOUR_BOT_TOKEN]
OWNER=[YOUR_CLIENT_ID]
```

You can then start the bot using `yarn development` or `yarn production`. Each mode will differ, especially in the ammount of logging it makes to certain channels. More documentation on this will be written at a later date when it gets implemented.

## 🏠 Enfiorment Differences

| Environment | Logs Commands | Logs Upstarts | Warns for config errors |
| --- | :---: | :---: | :---: |
| DEVELOPMENT | ✔️ | ✔️ | ✔️ |
| PRODUCTION | ❌ | ✔️ | ❌ |
| NONE | ❌ | ✔️ | ❌ |

## 🏆 Want to contribute?

Great, simply make a commit and I'll have a look at it. If you have any further questions you can contact me on dicord, *Atlas#6666*.
