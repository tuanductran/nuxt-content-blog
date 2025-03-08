---
title: "My NextDNS Setup"
description: "NextDNS protects you from all kinds of security threats, blocks ads and trackers on websites and in apps and provides a safe and supervised Internet for kids — on all devices and on all networks."
published: 2024/07/23
slug: "my-nextdns-setup"
cover: "/images/my-nextdns-setup.png"
---

NextDNS protects you from all kinds of **security threats**, blocks **ads and trackers on websites and in apps** and provides a **safe and supervised Internet for kids** — on **all devices** and on **all networks**.

![My NextDNS Setup](/images/my-nextdns-setup.png)

## Signup

Sign up for NextDNS here and support me!

[NextDNS](https://nextdns.io/?from=wpp35fr3)

## Linked IP (Setup on my iPhone)

If you are unable to set up NextDNS using our apps, DNS-over-TLS, DNS-over-HTTPS or IPv6, then use the DNS servers below and link your IP. This is mostly for use on home networks and not recommended on mobile.

💡 By employing this method, your network IP will be automatically updated on NextDNS each time you restart your home network device.

- **Show advanced options**

  You can also programmatically update your linked IP by calling.

  1. Navigate to Settings > Wi-Fi to reach the proxy configuration on your iPhone.
  2. Select the name of the Wi-Fi network you're currently connected to.
  3. Scroll down, and you'll find the "Configure Proxy" option at the bottom of the display.
  4. Choose "Auto" and enter an address formatted like this: https://link-ip.nextdns.io/xxxxxx/9541288ae9febb35.

## Setup Guide

Follow the instructions below to set up NextDNS on your device, browser or router.

### NextDNS for Routers (This is my current setup)

Only works on routers that can run executables.

Head over to our open-source repository at [https://github.com/nextdns/nextdns/wiki](https://github.com/nextdns/nextdns/wiki) for installation instructions.

### IPv6

1. Open the preferences for your router. Usually you can access it from your browser via a URL (like [http://192.168.0.1/](http://192.168.0.1/) or [http://192.168.1.1/](http://192.168.1.1/)).
2. Locate the DNS settings inside the interface.
3. Remove all addresses (if any) then add **2a07:a8c0::xx:xxxx** and **2a07:a8c1::xx:xxxx**.
4. Click Save (or similar).

⚠️ Some routers may not support the IPv6 notation above. In that case, use **2a07:a8c0:0000:0000:0000:0000:00xx:xxxx** and **2a07:a8c1:0000:0000:0000:0000:00xx:xxxx**.

### IPv4 (with Linked IP)

1. Open the preferences for your router. Usually you can access it from your browser via a URL (like [http://192.168.0.1/](http://192.168.0.1/) or [http://192.168.1.1/](http://192.168.1.1/)).
2. Locate the DNS settings inside the interface.
3. Remove all addresses (if any) then add **45.90.28.14** and **45.90.30.14**.
4. Click Save (or similar).

## Security

Protect yourself against malware and phishing attacks, cryptojacking and more.

Determine your threat model and fine-tune your security strategy by enabling 10+ different types of protections.

Use the most trusted threat intelligence feeds containing millions of malicious domains — all updated in real-time.

Go beyond the domain — we analyze DNS questions and answers on-the-fly (in a matter of nanoseconds) in order to detect and block malicious behavior.

With usually only a few hours between domain registration and the start of an attack, our threat intelligence system is built to catch malicious domains earlier than classic security solutions.

### Threat Intelligence Feeds

Block domains known to distribute malware, launch phishing attacks and host command-and-control servers using a blend of the most reputable threat intelligence feeds — all updated in real-time.

- [ ] Use Threat Intelligence Feeds

### AI-Driven Threat Detection (Beta)

Block millions of threats detected by our AI technology — a proprietary AI engine designed from the ground up for DNS with hundreds of signals, terabytes of training data and real-time decision making.

- [x] Enable AI-Driven Threat Detection

### Google Safe Browsing

Block malware and phishing domains using Google Safe Browsing — a technology that examines billions of URLs per day looking for unsafe websites. Unlike the version embedded in some browsers, this does not associate your public IP address to threats and does not allow bypassing the block.

- [x] Enable Google Safe Browsing

### Cryptojacking Protection

Prevent the unauthorized use of your devices to mine cryptocurrency.

- [x] Enable Cryptojacking Protection

### DNS Rebinding Protection

Prevent attackers from taking control of your local devices through the Internet by automatically blocking DNS responses containing private IP addresses.

- [x] Enable DNS Rebinding Protection

### IDN Homograph Attacks Protection

Block domains that impersonate other domains by abusing the large character set made available with the arrival of Internationalized Domain Names (IDNs) — e.g. replacing the Latin letter "e" with the Cyrillic letter "е".

- [x] Enable Homograph Attacks Protection

### Typosquatting Protection

Block domains registered by malicious actors that target users who incorrectly type a website address into their browser — e.g. [gooogle.com](http://gooogle.com/) instead of [google.com](http://google.com/).

- [x] Enable Typosquatting Protection

### Domain Generation Algorithms (DGAs) Protection

Block domains generated by Domain Generation Algorithms (DGAs) seen in various families of malware that can be used as rendezvous points with their command and control servers.

- [x] Enable DGA Protection

### Block Newly Registered Domains (NRDs)

Block domains registered less than 30 days ago. Those domains are known to be favored by threat actors to launch malicious campaigns.

- [x] Block Newly Registered Domains (NRDs)

### Block Dynamic DNS Hostnames

Dynamic DNS (or DDNS) services let malicious actors quickly set up hostnames for free and without any validation or identity verification. While legit DDNS hostnames are rarely accessed in every-day use, their malicious counterparts are heavily used in phishing campaigns — e.g. paypal‑login.duckdns.org.

If you are using DDNS, note that this setting will not block the DDNS services' own website or their update API.

- [x] Enable Block Dynamic DNS Hostnames

### Block Parked Domains

Parked domains are single-page websites often laden with ads and devoid of any value. Parked domain monetization can sometimes get mixed up with suspicious practices and malicious content.

- [x] Block Parked Domains

### Block Top-Level Domains (TLDs)

Block all domains and subdomains belonging to specific TLDs.

1. .work
2. .fit
3. .surf
4. .review
5. .asia
6. .tokyo
7. .cn
8. .monster
9. .info
10. .机构

### Block Child Sexual Abuse Material

Block domains hosting child sexual abuse material with the help of Project Arachnid, operated by the Canadian Centre for Child Protection. No information is transmitted back to Project Arachnid when a domain is blocked.

- [x] Block Child Sexual Abuse Material

## Privacy

Block ads and trackers on websites and in apps — including the most devious ones.

Use the most popular ads & trackers blocklists — millions of domains all updated in real-time.

With Native Tracking Protection, block wide spectrum trackers that record your activity on a device at the operating system level.

Detect and block third-party trackers disguising themselves as first-party to circumvent browsers' privacy protections like ITP.

### Blocklists

Block ads & trackers using the most popular blocklists available — all updated in real-time.

| **Name**                             | **Description**                                                                                                                                                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **hBlock**                           | Improve your security and privacy by blocking ads, tracking and malware domains.                                                                                                                                              |
| **OISD**                             | Internet's #1 domain blocklist. Blocks Ads, Mobile Ads, Phishing, Malvertising, Malware, Tracking, Telemetry, CryptoJacking, Analytics, Spyware, Ransomware, Exploit, Fraud, Abuse, Scam, Spam, Hijack, Misleading Marketing. |
| **NextDNS Ads & Trackers Blocklist** | A comprehensive blocklist to block ads & trackers in all countries. This is the recommended starter blocklist.                                                                                                                |
| **Goodbye Ads**                      | Specially Designed for Mobile Ad Protection.                                                                                                                                                                                  |
| **ABPVN List**                       | The ABP advertising filter is built with the mission of improving the browsing experience for users and for the Vietnamese.                                                                                                   |
| **hostsVN**                          | Hosts block ads of Vietnamese - Hosts chặn quảng cáo của người Việt.                                                                                                                                                          |

### Native Tracking Protection (Beta)

Block wide spectrum trackers — often operating at the operating system level — that track your activity on a device. This could include all the websites you visit, everything you type or your location at all times.

| **Name**         | **Description**                      |
| ---------------- | ------------------------------------ |
| **Windows**      | All versions                         |
| **Apple**        | iOS, macOS, tvOS                     |
| **Samsung**      | Phones, Tablets, Smart TVs           |
| **Xiaomi**       | Phones & Tablets, Smart TVs, Routers |
| **Huawei**       | Phones & Tablets                     |
| **Amazon Alexa** | Alexa-enabled devices                |
| **Roku**         | All Roku devices                     |
| **Sonos**        | Speakers                             |

### Block Disguised Third-Party Trackers

Automatically detect and block third-party trackers disguising themselves as first-party to circumvent recent browser's privacy protections like ITP.

- [x] Block Disguised Third-Party Trackers

### Allow Affiliate & Tracking Links

Allow affiliate & tracking domains common on deals websites, in emails or in search results. Those usually only get called after manually clicking on a link.

**Your IP address will automatically be hidden from those websites to preserve your privacy.**

- [x] Allow Affiliate & Tracking Links

## Parental Control

Protect your kids and control what they can access online, and when.

Block all websites containing porn, violence, piracy and more.

Enforce SafeSearch — filter explicit results on all search engines, including images and videos.

Enforce YouTube Restricted Mode — filter mature videos on YouTube and other websites.

Block specific websites, apps and games — Facebook, Tinder, Fortnite and many more.

With Recreation Time, only allow access to some websites, apps or games during specific times each day.

### Categories

Restrict access to specific categories of websites and apps.

- [x] Porn
- [x] Gambling
- [x] Dating
- [x] Piracy

### SafeSearch

Filter explicit results on all major search engines, including images and videos. This will also block access to search engines not supporting this feature.

- [x] Enforce SafeSearch

## Block Bypass Methods

Prevent or hinder the use of methods that can help bypass NextDNS filtering on the network. This includes VPNs, proxies, Tor-related software and encrypted DNS providers.

- [x] Block Bypass Methods

## Denylist

Denying a domain will automatically deny all its subdomains.

1. gliavideo.com

## Allowlist

Allowing a domain will automatically allow all its subdomains. Allowing takes precedence over everything else, including security features.

1. logrocket.com
2. umami.is
3. viblo.asia

## Settings

### Logs

Fine tune your Logs settings.

- [x] Enable Logs

**Privacy adjustments**

- [x] Log clients IPs
- [x] Log domains

**Retention**: 2 years
**Storage location**: Switzerland

### Block Page

Display a block page when a domain is being blocked. This may slightly increase page load time and an HTTPS warning may appear in some cases. When disabled, blocked queries will be answered with the unspecified address (0.0.0.0 or ::).

**NextDNS Root CA**: Remove the HTTPS warning when loading the block page by installing and trusting our root CA at [https://nextdns.io/ca](https://nextdns.io/ca). Read instructions on how to do this [here](https://help.nextdns.io/t/g9hmv0a/how-to-install-and-trust-nextdns-root-ca).

- [x] Enable Block Page

### Performance

Speed up your browsing.

**Anonymized EDNS Client Subnet**

Speed up the delivery of data from content delivery networks without exposing your IP address.

- [x] Enable Anonymized EDNS Client Subnet

**Cache Boost**

Minimize DNS queries by enforcing a minimum TTL (Time to live).

- [x] Enable Cache Boost

**CNAME Flattening**

Prevent CNAME-chasing resolvers from making unnecessary queries and pollute the logs with intermediate domains.

- [x] Enable CNAME Flattening

## Web3 (Beta)

Web3 refers to a decentralized and censorship-resistant online ecosystem comprised of innovative technologies such as blockchain-based domain registries (e.g. Ethereum Name Service) and distributed content storage and delivery networks (e.g. IPFS). When enabled, NextDNS will act as an unfiltered gateway to this new Web, letting you experience it firsthand without the need to install anything.

As most browsers only support classic top-level domains at the moment, you should add a trailing slash ("/") when trying to access a Web3 domain directly (e.g. "vitalik.eth/" instead of "vitalik.eth").

- [x] Enable Web3
