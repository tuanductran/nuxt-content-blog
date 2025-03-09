---
title: "Common Wi-Fi Configuration Parameters and Their Meanings"
description: "Discover the meanings of essential Wi-Fi configuration parameters, including AP Isolation, Frame Burst, Authentication Types, and more. Optimize your network's performance, security, and connectivity with our expert guide on common wireless settings and adjustments."
published: 2024/02/21
slug: "common-wifi-configuration-parameters-and-their-meanings"
---

**AP Isolation**: This setting isolates wireless clients (like laptops and smartphones) on the network from each other, allowing them to communicate with the router, but not with other wireless clients.

**Frame Burst**: Enabling this function can enhance network performance and Wi-Fi speed, but its effectiveness varies with the brand of Wi-Fi used. It's recommended for 1-3 users, as it becomes less effective with more users.

**Authentication Type**: Defaults to 'Auto', allowing for both Open System Authentication (OSA) and Shared Key Authentication (SKA). OSA does not use a WEP key for data transmission authentication, while SKA does.

**Basic Rate**:

- Default setting is 'Default', which means the AP can transmit data at all standard wireless rates.
- A 1-2Mbps option is for older wireless technologies like 802.11b.
- The 'All' option allows the AP to transmit at all wireless rates.

**Transmission Rate**:

- By default, it is set to 'Auto', meaning the AP automatically uses the fastest rate for data transmission and activates the Auto-Fallback feature, which negotiates the best possible connection speed between the AP and wireless clients.
- Alternatively, a range of data transmission speeds can be selected.

**N Transmission Rate**: The transmission rate for wireless networks using the N standard.

**Transmission Power**: Higher transmission power increases the coverage area of the wireless network. It's safe to increase the power up to a value of 70. Going higher can cause interference and increase the AP chipset's temperature, reducing its longevity. The maximum value of Transmission Power varies by manufacturer, and many do not provide a specific value but offer High, Medium, Low options in a drop-down menu (default is high).

**CTS Protection Mode**: Defaults to 'Auto'. CTS Protection Mode ensures that computers can connect to a wireless router when multiple devices are connected to the wireless network.

**Beacon Interval**: Default value is 100. Beacon Interval determines the frequency of a beacon, which is a packet broadcasted by the AP to synchronize with the wireless network (50 is recommended when the signal is weak).

**DTIM Interval**: This value indicates the interval of a DTIM (Delivery Traffic Indication Message), a countdown field announcing the next window for clients to listen for broadcast and multicast messages. The default value is 3.

**Fragmentation Threshold**: Determines the maximum packet size before data is fragmented. To address a high error rate, increasing the Fragmentation Threshold slightly may help. However, setting it too low can degrade network performance. A slight decrease from the default value is recommended, which is usually set at 2346.

**RTS Threshold**: Should only be reduced slightly from the default value (2347) if inconsistent data flow is encountered. If a network data packet is smaller than the predefined RTS Threshold, the RTS/CTS mechanism is not triggered. The router sends RTS (Request to Send) frames to a specific station and negotiates the sending of a data frame. After receiving an RTS, wireless stations respond with a CTS (Clear to Send) frame to confirm the right to begin transmission. It's best to keep the RTS Threshold at the default of 2347.

**Interference Mitigation**:

- Choose "None" if no electrical devices are interfering with the wireless network.
- Select "Non-WLAN" when non-WLAN electronic devices like phones or microwaves cause interference.
- Opt for "WLAN Manual" to reduce interference from other Wireless LAN APs in the network.
- "WLAN Auto" functions similarly to "WLAN Manual".
