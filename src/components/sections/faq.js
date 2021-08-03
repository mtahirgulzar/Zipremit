import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { Link, Trans } from "gatsby-plugin-react-i18next"

import Section from "components/layouts/section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Faq = () => {
  const data = useStaticQuery(graphql`
    query PricesQuery {
      allPricesJson {
        edges {
          node {
            country
            price1
            price2
            currency {
              code
            }
          }
        }
      }
    }
  `)

  return (
    <Section className="bg-white">
      <h2 className="text-9 text-center">
        <Trans>
          Frequently Asked Questions
        </Trans>
      </h2>

      <p className="text-4 text-center mb-4 mb-sm-5">
        <Trans>
          Can't find it here? Check out our
        </Trans>

        {" "}

        <Link to="/help" className="text-4">
          <Trans>Help center</Trans>
        </Link>
      </p>

      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="0">
                  <Trans>How do I use ZipRemit to send money?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>
                    <Trans>
                      Sending money with ZipRemit is easy, secure and fast!We give you choices, so you can decide how you want to send or receive money.
                    </Trans>
                  </p>

                  <p><Trans>Sending money with ZipRemit is easy, secure and fast!</Trans></p>

                  <p>
                    <Trans>
                      First, use your email address to create a free account on our website -
                    </Trans>{" "}

                    <Link to="/">www.zipcoinremit.com</Link>
                  </p>

                  <p className="mb-0">
                    <Trans>
                      Enter the amount of money you want to send, your beneficiary’s information, and your payment information. Pay for your transaction
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="1">
                  <Trans>What payment methods can I use for sending money online?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p>
                    <Trans>
                      You can pay for online transfers using a credit or debit card (Visa or MasterCard), INTERAC online, email payment; and the cheapest way is to use our ZipWallet - ZIPCASH/CAD/USD/GBP/EUR/ZAR/ZIPALL
                    </Trans>
                  </p>

                  <p className="mb-0">
                    <Trans>
                      Fund your ZipWallet for as little as $5.00 CAD.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="2">
                  <Trans>
                    When adding a new payment method online, which address do I need to use?
                  </Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p>
                    <Trans>
                      You need to use the billing address associated with the bank account or card you are using to pay. ZipRemit currently allows only one billing address on file. This address will be associated with all your payment methods.
                    </Trans>
                  </p>

                  <p className="mb-0">
                    <Trans>
                      To update your address, log in to your ZipRemit online profile and visit the ‘Payment Methods’ section.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="3">
                  <Trans>What receiving methods can I use for receiving money?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p>
                    <Trans>
                      Depending on where your beneficiary is located, he/she may have multiple options for how to receive money including cash pick up, bank deposit, mobile money, ZipWallet or airtime topup.
                    </Trans>
                  </p>

                  <p className="mb-0">
                    <Trans>
                      You can send money directly to your receiver's ZipWallet account. The money is reliably sent to the account typically within minutes after the transfer is submitted and successfully processed. Credit will be applied to the beneficiary wallet.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="4">
                  <Trans>
                    When sending money to be picked up as cash, how long does it take for the money to become available for pick up?
                  </Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p className="mb-0">
                    <Trans>
                      Money is typically ready for cash pickup within minutes after the transfer has been sent successfully, regardless of the payment method used, subject to  compliance with regulatory requirements
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="5">
                  <Trans>
                    What information do I need to pick up money that was sent to me?
                  </Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <p className="mb-0">
                    <Trans>
                      When picking up cash, you will need the Transaction Number for the transaction along with a valid photo ID. The person who sent you money should have the Transaction Number. Some countries also require a valid proof of address when an ID does not contain an address.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="6">
                  <Trans>What Services you offer?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <p>
                    <Trans>
                      We have flexible options for everyone and our service is built to solve day-to-day issues. So start sending with your community and low cost money transfer. Our solutions are all in One.
                    </Trans>
                  </p>

                  <ul className="list-style-type-circle mb-0">
                    <li><Trans>Send Money</Trans></li>
                    <li><Trans>Airtime Top-up</Trans></li>
                    <li><Trans>Send Food</Trans></li>
                    <li>
                      ZipWallet <small>(<b>ZIPCASH/CAD/USD/GBP/EUR/ZAR/ZIPALL</b>)</small>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="7">
                  <Trans>What is your fees?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  <p>
                    <Trans>
                      Start sending money to family in minutes using our lowest standard fee structure below
                    </Trans>:
                  </p>

                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th><Trans>Country</Trans></th>
                        <th>5 - 100</th>
                        <th>101 - 1,999</th>
                        <th><Trans>Currency</Trans></th>
                      </tr>
                    </thead>

                    <tbody>
                      {data.allPricesJson.edges.map(({ node }, index) => (
                        <tr key={index}>
                          <th scope="row">{node.country}</th>
                          <td>{node.price1}</td>
                          <td>{node.price2}</td>
                          <td>{node.currency.code}</td>
                        </tr>
                      ))}
                    </tbody>

                    <tfoot className="thead-light">
                      <tr>
                        <th colSpan="4">
                          <Trans>NOTE</Trans>: 2,000+ <Trans>we apply </Trans>3.5% +

                          {" "}<Trans>email</Trans>:{" "}
                          
                          <a href="mailto:compliance@zipcoinremit.com">
                            compliance@zipcoinremit.com
                          </a>
                        </th>
                      </tr>
                    </tfoot>
                  </table>

                  <h6><Trans>Processing fees</Trans></h6>

                  <ul className="list-style-type-circle pl-3 mb-0">
                    <li>Debit/Credit card (Visa, Master card) - 4.25%</li>
                    <li>Email Payment - CAD 1.00</li>
                    <li>INTERAC Online - CAD 1.49</li>
                    <li>
                      ZipWallet <small>(<b>ZIPCASH/CAD/USD/GBP/EUR/ZAR/ZIPALL</b>)</small> - 0.50
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="8">
                  <Trans>What are your sending limits?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="8">
                <Card.Body>
                  <p>
                    <Trans>
                      Our sending limits are based on the three type of Know Your Customer (KYC) onboarding procedure. This is a process of verifying our customers.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      Based on how much you need to send to family; please select the appropriate KYC and complete the required steps. This is a one time process; done to protect you the customer, ZipCoin’s assets and to comply with the FINTRAC or other regulators.
                    </Trans>
                  </p>

                  <div className="d-inline-block w-100 overflow-x-auto">
                    <table className="table white-space-nowrap">
                      <tbody>
                        <tr>
                          <th>Required</th>
                          <th>Basic KYC</th>
                          <th>Standard KYC</th>
                          <th>Advanced KYC</th>
                        </tr>

                        <tr>
                          <td><strong>Sending Amount</strong></td>
                          <td><strong>$5 - $1,000</strong></td>
                          <td><strong>$1,001 - $2,999</strong></td>
                          <td><strong>$3,000+</strong></td>
                        </tr>

                        <tr>
                          <td>Document</td>
                          <td>
                            <FontAwesomeIcon icon="times-circle" /><br />
                            <sub>Enter Information Only</sub>
                          </td>
                          <td><FontAwesomeIcon icon="check-circle" /></td>
                          <td><FontAwesomeIcon icon="check-circle" /></td>
                        </tr>

                        <tr>
                          <td>Document Type</td>
                          <td>--</td>
                          <td>
                            State ID, Driver Lic Or Passport<br />
                            <sup>(Enter Information + Upload Doc)</sup>
                          </td>
                          <td>
                            State ID, Driver Lic Or Passport, Utility Bill, Bank Statement &amp; Selfie
                            <br /><sup>(Enter Information + Upload)</sup>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="9">
                  <Trans>What are the currency options when receiving money?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="9">
                <Card.Body>
                  <p className="mb-0">
                    <Trans>
                      ZipRemit allows the sender to choose the currency in which the receiver can receive money. This option will appear when you are sending money or estimating fees. Payout in a choice of currencies is available only at select receive locations and subject to availability of that currency at time of collection.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="10">
                  <Trans>Which countries can I send money to?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="10">
                <Card.Body>
                  <p className="mb-0">
                    <Trans>
                      Currently we are in most of the African countries and Nepal for money transfer
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="11">
                  <Trans>Which countries can I send airtime?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="11">
                <Card.Body>
                  <p className="mb-0">
                    <Trans>
                      We are present in 170 countries globally including Canada and USA. Start your airtime top as low as $5.00 CAD
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="12">
                  <Trans>How do I track the status of a transfer?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="12">
                <Card.Body>
                  <p>
                    <Trans>There are two ways to track the status of your transfer</Trans>:
                  </p>

                  <ul className="list-style-type-circle pl-3 mb-0">
                    <li>
                      <Trans>
                        If you have an online profile, log in and view your Transaction History.
                      </Trans>
                    </li>

                    <li>
                      <Trans>
                        Enter your transaction number and your last name on our Track Money section.
                      </Trans>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="13">
                  <Trans>Why do you authenticate my identity?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="13">
                <Card.Body>
                  <p className="mb-0">
                    <Trans>
                      We authenticate your identity to ensure your personal and financial safety and to prevent fraud.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="14">
                  <Trans>How does ZipRemit keep my account safe and secure?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="14">
                <Card.Body>
                  <p>
                    <Trans>
                      We work hard to protect your information and to ensure your peace of mind and have a robust security system to keep you safe around the clock.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      Our company-level security uses 256-bit encryption so all the information you send to us remains private and secure. For example; the whole www.zipcoinremit.com website. 
                    </Trans>
                  </p>

                  <p className="mb-0">
                    <Trans>
                      If you encounter an unauthorized charge from ZipRemit, please contact us: <a href="mailto:compliance@zipcoinremit.com">compliance@zipcoinremit.com</a> immediately so that we may secure your account and investigate the activity.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="15">
                  <Trans>How do I cancel a money transfer?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="15">
                <Card.Body>
                  <p><Trans>There are multiple ways to cancel a money transfer</Trans>:</p>

                  <p className="mb-0">
                    <Trans>
                      If you sent the transaction online and you have an account, log in to your account and find the transaction in your transaction history. There is an option to cancel it on the Transaction Details page.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="16">
                  <Trans>I’ve cancelled my payment, how long will my refund take?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="16">
                <Card.Body>
                  <p>
                    <Trans>
                      We’ll let you know when we’ve refunded your money. The time it takes for you to get your refund depends on how you paid,
                    </Trans>
                  </p>

                  <ul className="list-style-type-circle">
                    <li><Trans>Card payments take 2–10 working days</Trans></li>
                    <li><Trans>ZipWallet and Email payment is instant</Trans></li>
                    <li><Trans>INTERAC online is upto 24 hours</Trans></li>
                  </ul>

                  <p className="mb-0">
                    <Trans>
                      Make sure to wait until the above time frame has passed before getting in touch about a refund - we’re not able to speed up the process.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="17">
                  <Trans>
                    How Do I change my Beneficiary information if I entered it incorrectly?
                  </Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="17">
                <Card.Body>
                  <p className="mb-0">
                    <Trans>
                      If you’ve found an error with your beneficiary’s information, contact us immediately via tawk.to or <a href="mailto:admin@zipcoinremit.com">admin@zipcoinremit.com</a>. Keep any confirmation number or receipt handy to help in pulling up your transfer. ZipRemit and or our agents should be able to correct or modify your beneficiary’s details for you, even if it means adding a few more days to your delivery window as the system updates. If you’ve discovered the error outside business hours, try logging in to your account — you may be able to make the changes yourself if your transfer isn’t yet complete.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="18">
                  <Trans>Does ZipRemit have a Loyalty program?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="18">
                <Card.Body>
                  <p>
                    <Trans>
                      Yes, we do and amazing loyalty program rewards you big time. The more you spent with on our products; the more free freebies and goodies we will pamper you.
                    </Trans>
                  </p>

                  <p className="mb-0">
                    <Trans>
                      We honor simple things like your birthday, anniversary, graduation and community events.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="19">
                  <Trans>Do you have a Referral program</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="19">
                <Card.Body>
                  <p>
                    <Trans>
                      Yes, our refer and earn provides you and every friend you refer who signs up and sends money successfully with our solution a platform to earn unlimited opportunity to send money free.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      And the best part is that there’s no limit to how many new customers one person can refer.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      Free money transfers; no problem at all refer 4 customers to us and your 5th transaction is always free. Refer more and earn more.
                    </Trans>
                  </p>

                  <p className="mb-0">
                    <Trans>
                      To get started, just click “Refer &amp; Earn ” on our website and share your unique referral link with your friends &amp; family through social media, text message, or email anytime and anywhere.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="20">
                  <Trans>What are my rights when transferring money internationally?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="20">
                <Card.Body>
                  <p>
                    <Trans>
                      For first-timers, transferring money out of the country can be intimidating. However, your money is protected even after it leaves Canada.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      Canadian law now requires banks; credit unions and money transfer providers to disclose information both before and after a transfer. These rules apply to all international transfers of $15 or more. Before an international transfer, you have the right to know:
                    </Trans>
                  </p>

                  <ul className="list-style-type-circle">
                    <li><Trans>The exact exchange rate you will pay.</Trans></li>
                    <li><Trans>Fees and taxes collected from you.</Trans></li>
                    <li>
                      <Trans>
                        Fees charged by agents overseas and others involved in the process.
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        The amount your recipient is expected to receive (excluding foreign taxes and any pickup fees).
                      </Trans>
                    </li>
                  </ul>

                  <p>
                    <Trans>You should also be provided details on</Trans>:
                  </p>

                  <ul className="list-style-type-circle mb-0">
                    <li>
                      <Trans>
                        Your right to cancel the transfer. Unless the transfer has been picked up or deposited, you have 30 minutes (and sometimes more) to cancel at no charge.
                      </Trans>
                    </li>

                    <li>
                      <Trans>
                        Our company’s process to investigate and fix any errors. It generally has 90 days to resolve any problems.
                      </Trans>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="21">
                  <Trans>Is ZipRemit regulated and why?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="21">
                <Card.Body>
                  <p>
                    <Trans>
                      Yes we are. As a licensed Money Services Business (MSB) registered in Alberta, Canada with license #2021372194 and is regulated by Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) registration #18463842.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      ZipRemit and it's partners are required to comply with government-mandated verification requirements and Know Your Customer (KYC), which include validating customers' personal information.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      For your safety and convenience, we will use information that you provide to verify your identity electronically.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      However, we ask for additional documentation, such as your ID, a bank statement, or utility bill, etc.
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      In some cases, we may ask about the nature of your remittance. This information gives us a better understanding of whom you are sending money to and your reason for using ZipRemit
                    </Trans>
                  </p>

                  <p>
                    <Trans>
                      This understanding not only allows us to meet our regulatory obligations, but also, more importantly allows us to continually improve our service to you.
                    </Trans>
                  </p>

                  <p className="mb-0">
                    <Trans>
                      Any information you provide to ZipRemit is securely stored in accordance with our privacy policy.
                    </Trans>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey="22">
                  <Trans>How do I manage my ZipRemit account?</Trans>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="22">
                <Card.Body>
                  <p>
                    <Trans>
                      You can make changes to your password, address, phone number and email address through our website.
                    </Trans>
                  </p>

                  <ul className="list-style-type-circle mb-0">
                    <li><Trans>Sign in to your account.</Trans></li>
                    <li><Trans>Select “Settings”.</Trans></li>
                    <li><Trans>From “Settings”, select “Profile information”.</Trans></li>
                    <li><Trans>Select “edit password”.</Trans></li>
                    <li><Trans>Enter your current password.</Trans></li>
                    <li><Trans>Enter your new password twice.</Trans></li>
                    <li>
                      <Trans>Select “change password” to complete and save your changes.</Trans>
                    </li>
                    <li><Trans>Select “edit address”.</Trans></li>
                    <li><Trans>Enter your new address.</Trans></li>
                    <li>
                      <Trans>Select “change address” to complete and save your changes.</Trans>
                    </li>
                    <li><Trans>Select “edit mobile number”.</Trans></li>
                    <li><Trans>Enter your new mobile number.</Trans></li>
                    <li>
                      <Trans>Select “change mobile number” to complete and save your changes.</Trans>
                    </li>
                    <li><Trans>Select “edit email address”.</Trans></li>
                    <li><Trans>Enter your new email address.</Trans></li>
                    <li>
                      <Trans>Select “change email” to complete and save your changes.</Trans>
                    </li>
                    <li>
                      <Trans>
                        If you have any additional questions, please contact us <a href="mailto:support@zipcoinremit.com">support@zipcoinremit.com</a>
                      </Trans>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </Section>
  )
}

export default Faq
