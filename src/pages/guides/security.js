import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import SEO from "components/utilities/seo"

const SecurityPage = () => {
  return (
    <>
      <SEO title="Security" />

      <h4><Trans>Internet Security</Trans></h4>

      <h5>01. <Trans>Staying safe on the Internet</Trans></h5>

      <p>
        <Trans>
          Managing your finances online is easy and convenient. However, there are best practices you should follow, whenever you go online to access your accounts. Because your online security is our priority, we have compiled suggestions and tips for staying safe on the internet.
        </Trans>
      </p>

      <h5>02. <Trans>Security Guarantee</Trans></h5>

      <p>
        <Trans>
          Our online system is safeguarded with the best security available in a commercial environment, ensuring that your information is protected while data is transmitted between your computer and our Infrastructure servers.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Encryption</Trans></h6>

      <p>
        <Trans>
          Internet encryption protects your information while it is in transit between your computer and our systems. Encryption ensures that data cannot be read or altered because the information is scrambled. Our online website uses SSL certificates, encrypting both request and response transactions, through a secure connection. To establish a secure connection, verify that the prefix of our website address in your browser reads 'https' (and not simply 'http'). All the browsers we support meet this requirement. If yours doesn't, please download the appropriate encryption support from your browser's supplier.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Controlled Access to your Accounts</Trans></h6>

      <p>
        <Trans>
          Your accounts can only be accessed by providing the correct login credentials and Personal Access Code (PAC), which only you know. Our employees never know these details and will never ask you to provide them with this information.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Enhanced Security Login Process</Trans></h6>

      <p>
        <Trans>
          The first time you log in to your ZIPREMIT account, you will be asked to fill in a KYC form with your personal details. For security reasons, we track the number of login attempts used to access your ZIPREMIT account. After a number of incorrect attempts to provide the correct PAC or answers to security questions, your online access will be immediately disabled. To regain access, please call our customer service representatives.
        </Trans>
      </p>

      <h5>03. <Trans>Safe Browsing</Trans></h5>

      <p>
        <Trans>
          We are keeping you just as safe when you access our online platform, but once your information reaches your computer, you have a responsibility to protect it. Below are some safe browsing tips;
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Personal Access Codes (PAC)</Trans></h6>

      <p>
        <Trans>
          It can be tempting to use the same password for all your accounts on the internet. But this makes it far too easy for hackers because once they have one password; they can access all your sites. Login credentials are the keys to your accounts so don't leave those keys around for anyone to find. We recommend you:
        </Trans>
      </p>

      <ul>
        <li>
          <Trans>
            Choose a PAC that is easy for you to remember but difficult for others to guess. Avoid using current phone numbers, dates of birth, or social insurance numbers.
          </Trans>
        </li>

        <li>
          <Trans>
            Be smart and don't save a list of your credentials on your PC. If you have to write them down, keep these details locked away somewhere only you can access or consider using password-management software, which secures and encrypts usernames and passwords and allows you to use a single master password.
          </Trans>
        </li>

        <li>
          <Trans>
            Do not share your PAC with anyone, especially online. Employees of institutions will never call, email, write or ask you to provide your online credentials. Ever.
          </Trans>
        </li>

        <li>
          <Trans>
            Don't authorize browsers to memorize your credentials. Saving these on your computer allows anyone using your PC to gain access to your login-protected sites.
          </Trans>
        </li>

        <li>
          <Trans>
            Consider changing your PAC every 60-90 days for optimum security.
          </Trans>
        </li>
      </ul>

      <h6 className="font-style-italic"><Trans>Personal Details</Trans></h6>

      <p>
        <Trans>
          It is always important to update your personal details. If your mailing information isn't up-to-date, statements or letters that contain personal information will continue to be sent to your former address.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>E-Statements</Trans></h6>

      <p>
        <Trans>
          Eliminate paper documents, go electronic and be secure while doing it. Our e-Statements are a digital archive of your monthly activity than can be downloaded as a PDF from our secure online site.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Logging In and Out</Trans></h6>

      <p>
        <Trans>
          When you are finished with your transaction session, always log out by clicking the "Log Out" button, as opposed to simply closing the browser window. To help protect your information, your online session will end automatically if there has been no activity for 20 minutes or if your visit lasts longer than 60 minutes. If your session has timed out, no further transactions can be made until you log in again. This time-out feature helps protect your accounts from unauthorized access if your PC is left unattended or if you have forgotten to log out.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Clearing Cookies and Cache</Trans></h6>

      <p>
        <Trans>
          When you spend time on the Internet, your browser stores information, such as the websites you visit, the images and files you view, and your personal information, including passwords and login details. This data is held on your computer's hard drive and is known as 'cache.' Even though you may have logged out and closed your browser, this information may remain accessible. You can protect your data by clearing your browsing history regularly. This can be done in a few easy steps:
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Internet Explorer Users</Trans></h6>

      <p>
        <Trans>
          Click on the 'Tools' tab (or use the 'Ctrl-Shift-Delete' shortcut)
        </Trans>
      </p>

      <ol>
        <li>
          <Trans>
            Select 'Delete Browsing History'
          </Trans>
        </li>

        <li>
          <Trans>
            Choose the options you wish to erase and click 'Delete'
          </Trans>
        </li>
      </ol>

      <h6 className="font-style-italic"><Trans>Firefox Users</Trans></h6>

      <p>
        <Trans>
          Click on the 'History' tab (or use the 'Ctrl-Shift-Delete' shortcut)
        </Trans>
      </p>

      <ol>
        <li>
          <Trans>
            Select 'Show All History' and/or
          </Trans>
        </li>

        <li>
          <Trans>
            Choose the time frame you wish to erase and click 'Delete'
          </Trans>
        </li>
      </ol>

      <h6 className="font-style-italic"><Trans>Safari Users</Trans></h6>

      <p>
        <Trans>
          Click on the 'History' tab
        </Trans>
      </p>

      <ol>
        <li>
          <Trans>
            Select 'Show all History'
          </Trans>
        </li>

        <li>
          <Trans>
            Choose the period you wish to erase and click 'Clear History'
          </Trans>
        </li>
      </ol>

      <h6 className="font-style-italic"><Trans>Chrome Users</Trans></h6>

      <p>
        <Trans>
          Delete all your data:
        </Trans>
      </p>

      <ol>
        <li>
          <Trans>
            In the top-right corner of Chrome, click the Chrome menu.
          </Trans>
        </li>

        <li>
          <Trans>
            Select More tools &gt; Clear browsing data.In the dialog that appears, select the checkboxes for the types of information that you want to remove.
          </Trans>
        </li>

        <li>
          <Trans>
            Use the menu at the top to select the amount of data that you want to delete. Select beginning of time to delete everything.
          </Trans>
        </li>

        <li>
          <Trans>
            Click Clear browsing data.
          </Trans>
        </li>
      </ol>

      <p>
        <Trans>Delete specific items from your browsing data:</Trans>
      </p>

      <p>
        <Trans>
          Instead of deleting entire categories of your browsing data, you can pick specific items to delete.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Private Browsing</Trans></h6>

      <p>
        <Trans>
          Some web browsers have a feature that allows you to browse the Internet without the browser storing information, such as the sites you visit, the images you see and videos you watch. This feature is sometimes used by people who share the same computer. Private browsing is a temporary option and must be selected in order for it to be activated. Private browsing, however, does not give you immunity to spyware or make you anonymous. It is still possible for your Internet service provider, employer or the websites you visit to track your online activity.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Monitoring Your Accounts</Trans></h6>

      <p>
        <Trans>
          Frequently reviewing your electronic account and/or registering for our transaction alert system ensures that you spot any incorrect or fraudulent transactions as soon as they occur. If unauthorized transactions have been made, you will want to catch this as soon as possible. Every time you receive an account statement, verify you made all the transactions or let us notify you whenever there has been movement in your accounts (with the transaction alert system).
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Transaction Alert System</Trans></h6>

      <p>
        <Trans>
          With this feature, you select what types of account activity you want to be notified about, and we'll alert you through text message or email. These alerts allow you to monitor your accounts effortlessly and detect suspicious activity immediately.
        </Trans>
      </p>

      <p>
        <Trans>
          While our alert messages provide balances and account activity, they will never ask for, or contain, your personal details, login credentials or any other type of confidential information. Also, our notifications will never include any links or instructions to click or download anything.
        </Trans>
      </p>

      <p className="text-danger">
        E-post &trade; (for India Deal)
      </p>

      <p className="text-danger">
        <Trans>
          Receive, manage and pay your bills through ZIPREMIT free online service. To sign up, create an account and scroll through the list of partners to find which bills you can receive.
        </Trans>
      </p>

      <h5>04. <Trans>Internet Scams</Trans></h5>
      
      <p>
        <Trans>
          While pickpockets can only target a few people each day, Internet fraudsters cast their nets much wider, using the anonymity and reach of mass emails and fake websites. You can protect yourself from these situations by knowing how to identify and avoid these scams.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Phishing</Trans></h6>

      <p>
        <Trans>
          Phishing is a common way used by internet hoodlums to obtain your personal information. Email or instant messaging is used to get usernames, passwords, banking information and credit card details. Phishing works by sending communications, which appear to be from your known institution, but they are not. You are asked, supposedly by your institution, to log in to your online platform to verify account information. Often some type of security concern is cited as the issue. The fake email instructs you to click on a link that takes you to a non-legitimate version of your online site – one that is largely indistinguishable from the legitimate site – and you'll be asked to enter your credentials.
        </Trans>
      </p>

      <p>
        <Trans>
          Phishing emails may include:
        </Trans>
      </p>

      <ul>
        <li>
          <Trans>Requests to update your information</Trans>
        </li>

        <li>
          <Trans>Warnings about account closures</Trans>
        </li>

        <li>
          <Trans>Offers to register for a new service</Trans>
        </li>

        <li>
          <Trans>Offers for pre-approved credit cards</Trans>
        </li>

        <li>
          <Trans>Free virus-protection programs</Trans>
        </li>
      </ul>

      <p>
        <Trans>
          Once you click on the link, which directs you to a phishing website, you'll be prompted to enter personal or banking information. Phishing scams seek personal details, such as your address, social security number or mother's maiden name. The details obtained will then be used for identity theft.
        </Trans>
      </p>

      <p>
        <Trans>
          Scam emails purporting to be from your known institution or financial institution often have some telling signs, including:
        </Trans>
      </p>

      <ul>
        <li>
          <Trans>
            Poor spelling or grammar
          </Trans>
        </li>

        <li>
          <Trans>
            Alarmist content, warning that your account will be closed if you don't provide your banking or personal details immediately
          </Trans>
        </li>

        <li>
          <Trans>
            Notices that you've won a prize and are required to pay a fee in order to claim it
          </Trans>
        </li>
      </ul>

      <p>
        <Trans>
          Never provide personal details or any account details in an email. Electronic messaging is not a secure form of communication. If you receive a message that you are unsure about, please contact us.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Pharming</Trans></h6>

      <p>
        <Trans>
          Another way for hackers to get their hands on your personals details is by pharming them. Pharming occurs when hackers use a malicious code on your PC, which compromises your computer's host file and redirects you to fake websites. The malware hides the fraudulent URL, cloaking it in the legitimate one that appears in your browser. With pharming, the dishonest redirection of URLs happens even when you type correct URLs directly into your browser, making you think that you're on the correct website when you are not. Once there, you are asked to enter your online credentials or account information, which hackers take and use for criminal activity.
        </Trans>
      </p>

      <h6><Trans>How to Avoid Phishing and Pharming Scams</Trans></h6>

      <p>
        <Trans>
          We will never send you emails or communications asking you to verify or provide your online details. The best way to protect yourself is to never use a link provided in an email to access your online banking (because we don't send those; scammers do). Do not open emails or email attachments from unknown sources. Scan email through your anti-virus software.
        </Trans>
      </p>

      <p>
        <Trans>
          Always type your institution's website address directly into your browser and remember to look for confirmation that you are browsing securely. The letter "s" in 'https' indicates you are navigating in a secure site, in comparison to the open and unprotected 'http' URLs. Look for the 'https' when online shopping, too.
        </Trans>
      </p>

      <p>
        <Trans>
          Don't panic when phishing emails caution of immediate account closures if your details cannot be verified. Don't believe emails warning that your account has been compromised or that you'll miss out on a great deal if you fail to act immediately. If you are concerned, call or visit one of our customer service representatives.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Anti-Virus Software</Trans></h6>

      <p>
        <Trans>
          Install anti-virus software on your computer to protect your information, money and privacy. Such software detects viruses and cleans your computer so that harmful viruses do not spread. Set up your anti-virus to run frequent scans and update the software as soon as it is required. Ensure you have real-time scanning of every email and every file you download.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Malware</Trans></h6>

      <p>
        <Trans>
          Malicious software (malware), spyware, worms and Trojans are the same class of destructive viruses; just with different names. Nobody wants a computer virus. They can steal your personal information, take over your PC and use your computer to attack other people's computers. Your PC can become infected through email attachments, downloading infected content or visiting harmful websites.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Spyware</Trans></h6>

      <p>
        <Trans>
          Spyware is exactly what it sounds like – tracking software that is downloaded to your computer (without your knowledge) when you visit certain Internet sites. Secretly, it gathers information about you and your browsing habits. This information can be trivial or it can include passwords and personal data that you wouldn't want criminals to get their hands on. It can also interfere with user controls and disable legitimate anti-virus programs.
        </Trans>
      </p>

      <p>
        <Trans>
          The best way to protect your computer against spyware is smart browsing. Stay away from sites that look unsafe and avoid streaming or downloading content from untrustworthy sources. Many anti-virus products offer targeted spyware solutions that inspect your operating system, installed programs, downloads and files.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Scareware</Trans></h6>

      <p>
        <Trans>
          One of the most common viruses to watch out for is known as scareware. These scams pop-up on your screen and display alarmist warnings, telling you a virus has invaded your computer. Scareware prompts you to download (and often pay for) fake anti-virus software to remove the non-existent viruses. Scareware is a scam that tries to trick you into paying money in exchange for nothing.
        </Trans>
      </p>

      <p>
        <Trans>
          You can protect against scareware by keeping your anti-virus software up-to-date and by being judicious about what you choose to download to your computer. You should also familiarize yourself with the interface of your legitimate anti-virus program, so you won't be fooled if one of these pop-ups appears.
        </Trans>
      </p>

      <h5>05. <Trans>Computers &amp; Smart Phones</Trans></h5>

      <p>
        <Trans>
          We have created a secure channel to communicate with our customers, but you need to do your part by maintaining your computer up-to-date and virus-free.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Operating Systems</Trans></h6>

      <p>
        <Trans>
          Your computer's operating system needs to be up-to-date in order to defend itself from viruses and malicious software (malware). If one part of your operating system develops a virus, it leaves holes in your PC's security defences and compromises the safety of the information contained in your computer.
        </Trans>
      </p>

      <p>
        <Trans>
          Keeping your software up-to-date is one of the most important ways of staying safe online because it is much harder for viruses to infect an updated operating system and software. Hackers are targeting operating systems with new viruses all the time and software companies combat these efforts with security patches. You should always download the latest security patch as soon as it becomes available.
        </Trans>
      </p>

      <p>
        <Trans>
          Your operating system lets you know when updates are available by notifying you there are new security features to download. You can also upgrade your operating system to the latest version available from the manufacturer; however, you should ensure your computer has sufficient hardware capacity to support an upgrade.
        </Trans>
      </p>

      <p>
        <Trans>
          Remember to back up your data. To fully eliminate a virus that has infected your machine, the re-installation of your operating system may be required. Protect yourself against the permanent loss of important data by frequently backing up your files on an external hard drive so you'll have the data should you ever have a problem with your operating system.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Browsers</Trans></h6>

      <p>
        <Trans>
          Web browsers are the gateways to the Internet. Similar to having an up-to-date operating system, upgraded browsers provide more features, stability and security. Whether you use Internet Explorer, Firefox, Safari, Chrome or something else, stay safe online by using the latest version available.
        </Trans>
      </p>

      <p>
        <Trans>
          The latest versions of web browsers have security features that can identify and block harmful and fake websites and pop-ups, and warn you if a site is flagged as unsafe. Some browsers also have a 'Private Browsing' feature, which conceals your browsing history from others.
        </Trans>
      </p>

      <p>
        <Trans>
          We suggest you update your browser Now.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Firewalls</Trans></h6>

      <p>
        <Trans>
          A firewall protects your computer and home network from harmful websites and hackers. It sits between your computer and the Internet, scanning information that is being transmitted. It allows for safe browsing, while blocking unauthorized intrusions. Even though you may think you have no information of value on your PC, firewalls also stop your computer from being used by hackers to send malicious software to other computers.
        </Trans>
      </p>

      <p>
        <Trans>
          Most computers now come with a firewall as part of the standard operating system. However, you can get the maximum protection for your computer by installing additional firewalls and ensuring they are kept up-to-date.
        </Trans>
      </p>

      <h6 className="font-style-italic"><Trans>Protecting Your Smartphone</Trans></h6>

      <p>
        <Trans>
          Browsing the web has never been easier – it's all at your fingertips. Smartphones let you surf, shop or bank wherever you are. Make sure your information stays secure while you're on the move by following these smartphone-safe browsing tips:
        </Trans>
      </p>

      <ol>
        <li>
          <Trans>
            Activate your phone's password feature, which locks the screen and prevents anyone but you from accessing your phone. Set up the password feature on your phone with a code that only you know.
          </Trans>
        </li>

        <li>
          <Trans>
            Don't connect to unknown networks through Wi-Fi hotspots to make financial transactions.
          </Trans>
        </li>

        <li>
          <Trans>
            Beware of smishing – that's phishing on phones through text messages. Never download media or images, or click on text-message links that come from unrecognizable people or phone numbers. Never provide personal details or any account details using any form of electronic messaging because this is not a secure form of communication. If you are unsure, please contact us.
          </Trans>
        </li>

        <li>
          <Trans>
            Download apps exclusively from the official source for your smartphone's platform, such as the Android, Apple or BlackBerry stores.
          </Trans>
        </li>

        <li>
          <Trans>
            Install anti-virus software for your smartphone when available and update it frequently.
          </Trans>
        </li>

        <li>
          <Trans>
            Install location finding applications, which work with your phone's built-in GPS. These applications allow you to locate and/or remotely erase (or "wipe") data in your phone if it is lost or stolen.
          </Trans>
        </li>

        <li>
          <Trans>
            Update your smartphone's operating system as soon as newer versions are available.
          </Trans>
        </li>
      </ol>

      <h5>06. <Trans>Wi-Fi &amp; E-Shopping</Trans></h5>

      <p>
        <Trans>
          These days, everyone is on the go and it's not uncommon to access Wi-Fi at coffee shops, hotels, restaurants or airports. Using wireless networks to access information is convenient, but not risk-free. Be smart when you surf. Protect yourself from threats by:
        </Trans>
      </p>

      <ul>
        <li>
          <Trans>
            Using only a trusted computer to access your online banking. Don't use shared library or café computers.
          </Trans>
        </li>

        <li>
          <Trans>
            Managing your online banking only from secure networks. We recommend that you don't use unsecured public networks for anything sensitive.
          </Trans>
        </li>

        <li>
          <Trans>
            Connecting only to password-protected networks. If there are several networks available, ask employees of the organization which network they operate.
          </Trans>
        </li>

        <li>
          <Trans>
            Never leaving your computer unattended, especially if you are logged into your online banking.
          </Trans>
        </li>

        <li>
          <Trans>
            Using different PACs and security questions as login credentials. If someone obtains your credentials for one site, such as a social networking site, you don't want them to be able to access your other ones.
          </Trans>
        </li>

        <li>
          <Trans>
            Ensuring you log out before you close your browsers.
          </Trans>
        </li>
      </ul>

      <h6 className="font-style-italic"><Trans>Shopping Online</Trans></h6>

      <p>
        <Trans>
          Online shopping is the epitome of convenience. There are no lines and no crowds, but it can also be a haven for hoodlums. Consider the following tips when using your credit cards online to ensure your information stays secure:
        </Trans>
      </p>

      <ul>
        <li>
          <Trans>
            Make sure that you are shopping at a trusted retailer when you enter your credit card details online.
          </Trans>
        </li>

        <li>
          <Trans>
            Provide retailers with only the necessary details to complete the transaction. These include your credit card number, expiry date, the security code on the back of the credit card and the card's billing address. 
          </Trans>
        </li>

        <li>
          <Trans>
            Never provide your social insurance number, account details or your mother's maiden name. For shopping sites that require you to register with a username and password, we recommend you do not use your online banking PAC.
          </Trans>
        </li>

        <li>
          <Trans>
            Use your credit cards only on e-commerce websites that use secure browsing technology on the screens where you enter your card information. Ensure the web address begins with 'https' (as opposed to 'http') and has a closed padlock icon on the screen.
          </Trans>
        </li>

        <li>
          <Trans>
            Ensure that smaller retailers requesting credit card details have reputable contact details, a physical address and you feel comfortable with providing them your card information.
          </Trans>
        </li>

        <li>
          <Trans>
            Never give your account or credit card details to anyone on eBay or Craigslist.
          </Trans>
        </li>
      </ul>
    </>
  )
}

export default SecurityPage
