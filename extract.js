const fs = require("fs")
const util = require("util")
const BP = require("bluebird")
const mkdirp = require("mkdirp")

const getDirName = require("path").dirname

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const write = async (path, content) => {
  await mkdirp(getDirName(path))
  return writeFile(path, JSON.stringify(content, null, 2), "utf8")
}

async function main() {
  const files = [
    { name: "actions", keys: ["heading"] },
    { name: "address", keys: ["heading"] },
    { name: "agent-how", keys: ["how"] },
    { name: "agent-reasons", keys: ["heading"] },
    { name: "airtime-why", keys: ["item"] },
    { name: "collaborate", keys: ["item"] },
    { name: "contact", keys: ["heading"] },
    { name: "fees", keys: ["heading", "description", "extra"] },
    { name: "foundation", keys: ["title"] },
    { name: "help-topics", keys: ["topic"] },
    { name: "norms", keys: ["norm"] },
    { name: "pickup", keys: ["heading", "description"] },
    { name: "refer", keys: ["item"] },
    { name: "remittance", keys: ["heading"] },
    { name: "stats", keys: ["title"] },
    { name: "values", keys: ["heading", "description"] },
    { name: "wallet-features", keys: ["feature", "highlight"] },
    { name: "wallets", keys: ["description"] },
    { name: "why-us", keys: ["heading", "description"] },
    { name: "testimonials", keys: ["message"] },
    { name: "pay", keys: ["method"] },
    { name: "receive", keys: ["method"] },
    { name: "goals", keys: ["goal"] },
  ]

  const words = [
    "Home",
    "About Us",
    "Airtime Topup",
    "Receive Money",
    "Fees/KYC",
    "See More Details",
    "Information",
    "Services",
    "Fund ",
    "Help Center",
    "News/Stories",
    "FAQ/Help",
    "Legal",
    "Terms & Conditions",
    "Customer Acceptance",
    "KYC/AML Policy",
    "Privacy Policy",
    "Cookie Policy",
    "Keep in Touch",
    "See How It Works",
    "donate",
    "volunteer",
    "fundraiser",
    "partner",
    "sponsor",
    "refer",
    "Terms and Conditions",
  ]

  const original = await readFile("locales/en/translation.json", "utf8")
  const originalJson = JSON.parse(original)

  await BP.map(files, async file => {
    try {
      const fileData = await readFile(`data/${file.name}.json`, "utf8")
      const jsonData = JSON.parse(fileData)

      await BP.map(file.keys, async key => {
        await BP.map(jsonData, async data => {
          if (data[key] === originalJson[key]) {
            return
          }

          const resultKey = data[key]
          originalJson[resultKey] = resultKey
        })
      })
    } catch (error) {
      console.log(error)
    }
  })

  await BP.map(words, async word => {
    if (word === originalJson[word]) {
      return
    }

    originalJson[word] = word
  })

  write(`locales/en/translation.json`, originalJson)

  console.log("Extraction Done")
}

main()
