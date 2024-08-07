i18next.init({
    lng: Cookies.get('lang') || 'en',
    resources: {
        en: {
            translation: {
                navbar: {
                    home: 'Dler Cloud',
                    features: {
                        title: 'Features',
                        source: 'Servers',
                        data: 'Data Center',
                        panel: 'Control Panel'
                    },
                    support: {
                        title: 'Support',
                        soft: 'Client',
                        word: 'Document',
                        status: 'Status'
                    },
                    terms: {
                        title: 'Terms',
                        use: 'Terms of Service',
                        policy: 'Usage Policy',
                        server: 'Service Agreement'
                    },
                    about: {
                        title: 'About',
                        us: 'About Us',
                        aff: 'Referral'
                    },
                    center: {
                        title: 'User Center',
                        login: 'Sign In',
                        register: 'Register'
                    },
                    lang: {
                        title: '简体中文',
                        ch: '简体中文',
                        en: 'English'
                    }
                },
                index: {
                    inner: {
                        title: 'Simple & trustworthy',
                        slogan1: 'Create the trunking infrastructure you need',
                        slogan2: 'Connect content providers you can’t access',
                        slogan3: 'Access to our network anytime & anywhere',
                        slogan4: 'We know your needs best.',
                        slogan5: 'Cross-platform Support',
                        slogan6: 'Our services are compatible with the excellent applications on many platforms.',
                        slogan7: 'We progress together with developers, update in real time, just to provide the best experience.',
                        slogan8: '* These softwares are not developed by Dler Cloud, we only provide configuration solutions for some of them.',
                        slogan9: 'Start Now',
                        slogan10: 'Let us present with our partners',
                        slogan11: 'Meet your data transfer services',
                        slogan12: "Supported by our carrier partners and Internet data center partners, it's compatible with your local carrier and offers the same access speeds as if you were overseas.",
                        slogan13: 'We ensure a smooth and reliable network with quality resources and redundant backups to provide you with fast and stable international internet access.',
                        slogan14: 'Your requests will be transmitted using the latest encryption technology, which we confuse with secure transport layer protocols to prevent your carrier from adjusting your network speed and to keep your data safe.',
                        slogan15: 'Peer-to-peer interconnection with hundreds of content providers across multiple different Internet exchanges.'
                    },
                    des: {
                        edge: 'Global network infrastructure (Edge)',
                        edge1: 'Our relationships with carriers and upstream partners allow us to provide network capacity ranging from 300 Mbps to 10 Gbps, providing you with a steady stream of data acceleration.',
                        edge2: 'Our high-performance servers, high-performance networks and ISP partner diversity have enabled us to take our data transfer services to the next level.',
                        wavelength: 'AWS Wavelength (5G)',
                        wavelength1: 'AWS Wavelength is an AWS Infrastructure offering optimized for mobile edge computing applications. Wavelength Zones are AWS infrastructure deployments that embed AWS compute and storage services within communications service providers’ (CSP) datacenters at the edge of the 5G network, so application traffic from 5G devices can reach application servers running in Wavelength Zones without leaving the telecommunications network. This avoids the latency that would result from application traffic having to traverse multiple hops across the Internet to reach their destination, enabling customers to take full advantage of the latency and bandwidth benefits offered by modern 5G networks.',
                        gia: 'Chinatelecom Next Carrier Network - Global Internet Access (GIA)',
                        gia1: 'Provides higher-quality backbone bearer network with 50% lower latency, 30% lower freeze rate and less than 0.05% packet loss.',
                        bgp: 'Border Gateway Protocol (BGP)',
                        bgp1: 'Based on the high-quality/high-priority commercial broadband provided by operators or cloud service providers, Optimized for all lines across the country, with new tunneling technology to enjoy faster, more stable connections.',
                        iepl: 'International Ethernet Private Line (IEPL)',
                        iepl1: 'The enhanced IPLC product of the Ethernet interface is an end-to-end real Ethernet circuit. The pure Ethernet circuit will provide less jitter and higher performance than IPLC.',
                        ac: 'ADN Hybrid Connect (AC)',
                        ac1: 'Based on the users network proximity access, full interconnection is achieved between servers in each region through high-performance, high-reliability and low-latency cloud connectivity services.'
                    },
                    meal: {
                        title: 'Choose your plan',
                        year: '/Year',
                        season: '/3 month',
                        Edge: 'Edge Network',
                        Wavelength: 'AWS Wavelength',
                        GIA: 'China Routing Optimization',
                        IEPL_Lite: 'IEPL Lite Connect',
                        IEPL_Std: 'IEPL Std Connect',
                        IEPL_Pro: 'IEPL Pro Connect',
                        AC: 'ADN Hybrid Connect',
                        Type: 'More Proxy Type',
                        Relay: 'Network Trans Relay',
                        HA: 'High Availability',
                        HighSpeed: 'High-speed(G/m): ',
                        LowSpeed: 'Low-speed(G/m): ∞',
                        RealPay: 'Real-Pay(G/¥): '
                    },
                    description: {
                        stand: {
                            stand1: '✓ Direct connection to all domestic websites',
                            stand2: '✓ Streaming Unlocked (Netflix, Hulu, HBO, MytvSUPER, Happyon (Hulu Japan), AbemaTV, etc.)',
                            stand3: '✓ Apple Services Acceleration (App Store, Apple Music, Apple Streaming, iCloud Backup, iCloud Drive, iTunes, etc.)',
                            stand4: '✓ Foreign websites Acceleration (Google/Youtube/Twitter/Facebook/instagram/wikipedia/Github, etc.)'
                        },
                        notSupport: {
                            stand1: '✗ Partial Mining JS Plugin',
                            stand2: '✗ Behavior analysis of applications and web pages',
                            stand3: '✗ Statistics of applications and web pages',
                            stand4: '✗ Privacy tracking of applications and web pages',
                            stand5: '✗ Operator hijacking of major shopping sites',
                            stand6: '✗ Content Security Policy Hijacking',
                            stand7: '✗ CNNIC root certificate hijacking',
                            stand8: '✗ Startup ads for some applications',
                            stand9: '✗ Some carriers hijack web page pop-up traffic statistics',
                            stand10: '✗ Some carriers hijack web page pop-ups with floating ball ads',
                            stand11: '✗ Common Video Ads',
                            stand12: '✗ Popular website ads, other streaming website ads',
                            stand13: '* Require third-party applications & hosting rules'
                        }
                    },
                    moreInfo: 'Data Center'
                },
                about: {
                    text1: 'About Us',
                    text2: 'Only provide efficient, stable, reliable and secure data transmission services.',
                    text3: 'About Us',
                    text4: 'Terms',
                    text5: 'Subversive & Global',
                    text6: 'With nodes we provided in major cities around the world, you can get private, unrestricted access to all your favorite content now.',
                    text7: 'We adopt a series of measures to improve the reliability of our services, launching the global acceleration network from the user center. So simple, without any additional setup and specific services.',
                    text8: 'Global Acceleration Network',
                    text9: 'With over 100 accelerated network nodes deployed globally by us, we can help users break through network censorship and access international network resources faster, make your business go further!',
                    text10: 'Easy to Use',
                    text11: 'No need to configure complicated settings, just follow the help we provide, then you can easily connect to the accelerated network from anywhere.',
                    text12: 'Intelligent Shunting',
                    text13: "Through intelligent shunt technology, the pressure of user's access is distributed to each node, so that users can enjoy faster Internet speed without having to change any settings.",
                    text14: 'Perfect Technical Support',
                    text15: 'With managed services, user will be able to get extended technical support that will help them deal with any issues they encounter while using the services, making user easier to use our services.',
                    text16: 'Cross-platform Support',
                    text17: "Works on all your devices, whether it's on a Windows PC, macOS, iOS, Android, or even a router, only one account is required!",
                    text18: 'Direct connection to Internet exchanges around the world',
                    text19: 'Trusted upstream and operator partners'
                },
                aff: {
                    text1: 'Join the referral program!',
                    text2: 'Get earnings by referring others!',
                    text3: 'Join Now',
                    text4: 'How it works',
                    text5: 'After joining the referral program, when your friend registers through your affiliate link and purchases the service, then you will get 5% referral revenue from it.',
                    text6: 'When to settle',
                    text7: 'The earnings from the referrals are settled as soon as the user purchases the service. You can always check the proceeds of your referrals in the User Center.',
                    text8: 'Earnings withdrawal',
                    text9: 'Absolutely! When your earnings reaches ¥100, you only need to apply for withdrawal in the work order system, then we will transfer the earnings directly to your account.',
                    text10: 'Purchases the service',
                    text11: "By default, we'll return the earnings directly to your account, which can be used to purchase any service! With the referral program, you can even use our service for free.",
                    text12: 'Do I have to pay a fee?',
                    text13: 'Once you join to the referral program, you will be able to earn money directly by referencing products and services. We will not charge any additional fees in the process.',
                    text14: 'Who can join',
                    text15: 'Any user can join the referral program to get benefits from it.',
                    text16: 'Any question? We are always ready to assist you!',
                    text17: 'Contact Us'
                },
                client: {
                    inner: {
                        title: 'Excellent client',
                        intro: 'Enjoy the ultimate network experience on all your devices',
                        manual: 'Manual',
                        ios: 'iOS',
                        macOS: 'macOS',
                        windows: 'Windows',
                        android: 'Android',
                        router: 'Router',
                        tv: 'TV',
                        linux: 'Linux'
                    },
                    box: {
                        ios: 'iOS',
                        macOS: 'macOS',
                        ios_macOS: 'iOS & macOS',
                        windows: 'Windows',
                        windows_game: 'Windows Game',
                        android: 'Android',
                        router: 'Linux/OpenWrt',
                        download: 'Download',
                        home: 'Home Page',
                        ss_simple: '* Install Simple Obfs first',
                        merlin_simple: '* Install Clash for Merlin Patch first'
                    }
                },
                dataCenter: {
                    inner: {
                        slogan: 'Exchange data',
                        slogan1: 'with content partners',
                        slogan2: 'With the global Internet exchange center and hundreds of content providers, we make users enjoy faster and more stable connections when downloading apps from the App Store, watching online movies and listening to streaming music.'
                    },
                    server: 'Worldwide',
                    serverText: 'Our globally distributed acceleration allows you to trade internationally, mail and watch videos from anywhere. In addition, social networking is a basic feature, not only in terms of the number of nodes, but also in terms of the speed, which is three times faster than the industry average!',
                    box: {
                        title: 'Seattle',
                        title1: 'Los Angeles',
                        title2: 'Dallas',
                        title3: 'Amsterdam',
                        title4: 'France',
                        title5: 'Korea',
                        title6: 'Shenzhen',
                        title7: 'Shanghai',
                        title8: 'Beijing',
                        title9: 'Taiwan',
                        title10: 'Hong Kong',
                        title11: 'Macao',
                        title12: 'Singapore',
                        title13: 'Japan',
                        title14: 'Russia',
                        title15: 'United Kingdom'
                    },
                    slogan: {
                        title1: 'Works smarter',
                        title2: 'With Dler Cloud, you can easily access to global network resources. With our intelligent shunt and distribution-load balancing technology, you will be able to automatically connect to the fastest nodes without any operation.',
                        title3: 'Goes further',
                        title4: 'Our networks are equipped with advanced TCP acceleration technology, so you can enjoy an immersive network experience without having to download any additional software.',
                        title5: 'Enjoy yourself',
                        title6: 'Our network has ultra-high redundancy to avoid network congestion and keep your download tasks running at full broadband anytime, anywhere.'
                    }
                },
                features: {
                    inner: {
                        slogan: 'Compatible with your',
                        slogan1: 'device & network',
                        slogan2: 'It runs on all your devices, provides you with a cross-platform service and protects your privacy.'
                    },
                    server: 'More Efficient',
                    server2: 'Accelerate access to cloud-based office applications and increase productivity by increasing speed and reducing upload time.',
                    box: {
                        title: 'Secure Encryption',
                        title1: 'Safe and stable stream encryption algorithm, Support a multiple 256-bit secure encryption to protect your data.',
                        title2: 'Intelligent Shunting',
                        title3: 'Intelligent shunt and multiple distribution-load balancing mechanisms.',
                        title4: 'Quick Start',
                        title5: "Easy-to-use control panel, no learning costs. It's quick and easy to use in one second after payment.",
                        title6: 'Agreement Guarantee',
                        title7: 'Provide SLA guarantee, smooth and efficient acceleration at any time. Round-the-clock work order support and the best technical after-sales service in the industry.',
                        title8: 'Powerful Server',
                        title9: 'All servers are powered by Intel and AMD cores. Faster and more efficient.',
                        title10: 'Cross-platform Support',
                        title11: "Works on all your devices, whether it's on a Windows PC, macOS, iOS, Android, Linux, or even a router, only one account is required!"
                    },
                    slogan: {
                        title1: 'Activate Immediately',
                        title2: 'After your payment, Dler Cloud will process your order within one second and activate it immediately.',
                        title3: 'Advanced Network',
                        title4: "Part of Dler Cloud's network is not only available in IPv4 environments, but also supports interoperability with IPv6. With your carrier's deployment of IPv6, you will have access to a faster IPv6 network.",
                        title5: 'Higher Authority',
                        title6: 'You can customize your preferences. In addition, if you need to modify your connection parameters, ityou can simply operate in the panel. you have complete control of your account.'
                    }
                },
                panel: {
                    inner: {
                        slogan: 'Enter the internet now',
                        slogan1: 'Just as you wish',
                        slogan2: 'Simple panel, quick to use. You can also view and manage your connection information and traffic usage at any time.'
                    },
                    server: 'Simple panel, easy to use',
                    serverText: "The control panel is very easy to manage, whether it's to view your accelerated service connection information or to check your traffic usage, the interface is so easy to use.",
                    box: {
                        title: 'All information is under control.',
                        title1: 'Money',
                        title2: 'Bonus',
                        title3: 'Quota',
                        title4: 'Remain',
                        title5: 'Available: ',
                        title6: '/Used: ',
                        title7: 'Instant activation, easy to manage',
                        title8: 'Plan',
                        title9: 'Price',
                        title10: 'Date',
                        title11: 'Renewal'
                    }
                },
                sla: {
                    text1: 'Uptime Guarantee',
                    text2: 'Dler Cloud provides multiple redundancy and load balancing mechanisms in the core architecture of its cloud service platform to ensure stable operation of services. It provides enterprise-class security and stability.',
                    text3: 'Full SLA',
                    text4: 'About us',
                    text5: 'Terms',
                    text6: 'online',
                    text7: 'Server Online Guarantee',
                    text8: 'The hosting services provided by Dler Cloud are designed for maximum stability, we identify problems and deal with them through a set of proactive monitoring mechanisms, with Dler Cloud hosting services, you will not have to worry about line maintenance issues, all environmental issues and data transfer mechanisms will be solved by Dler Cloud, with multi-level disaster prevention measures to minimize the problems caused by unexpected situations.',
                    text9: 'online',
                    text10: 'Accelerated Network Online Guarantee',
                    text11: 'With the connection point redundancy mechanism and the intelligent shunt-load balancing configuration provided by Dler Cloud, it will be possible to provide a stable connection point online time guarantee.',
                    text12: 'Interrupt Compensation',
                    text13: 'When the SLA is interrupted due to unexpected circumstances, all affected users will automatically get time-of-use compensation, as follows:',
                    text14: 'Effective availability',
                    text15: 'Duration of interruption',
                    text16: 'Compensatory time',
                    text17: '< 60 min',
                    text18: '1 day',
                    text19: '60-120 min',
                    text20: '3 days',
                    text21: '120-360 min',
                    text22: '5 days',
                    text23: '360-720 min',
                    text24: '10 days',
                    text25: '> 720 min',
                    text26: '15 days'
                },
                sla_full: {
                    text1: 'Full Network Uptime Guarantee',
                    text2: 'Dler Cloud offers uptime guarantees based on network and node hosts. In general, these guarantees are provided as a supplement to the ',
                    text3: 'Terms of Service',
                    text4: ". When you become a Dler Cloud customer, these terms automatically come into effect and become an integral part of Dler Cloud's entire service life cycle.",
                    text5: 'These guarantees apply to each of your products and services, not to all bills. The following conditions do not apply to this SLA.',
                    text6: 'For the normal routine maintenance of the Services you have purchased, we will notify you in advance and notify adjustments to traffic policies and DNS policies to temporarily migrate your Services to the parts that work. However, delays in adjustments caused by your Internet Service Provider are not applicable.',
                    text7: 'APIs, control panels and trunk servers, router plug-ins, etc. provided by Dler Cloud.',
                    text8: "The customer has been informed prior to purchase that the service is not covered by the SLA.",
                    text9: 'Our platform is very reliable! With perfect quality assurance!',
                    text10: 'In the event of a contingency, you will be able to receive compensation, such as Dler Cloud "Compensatory Time".',
                    text11: 'Packet Loss and Delay',
                    text12: "Dler Cloud proactively monitors the lines conditions at each of Dler Cloud's connection points and adjusts network strategy as much as possible to minimize the impact of network fluctuations as they occur. the Dler Cloud's global acceleration network has 0% packet loss and low latency lines within its own locale, but when customers are connected to the network in their own country, they may be affected by cable Quality, carrier routing strategy, subscriber broadband usage and other factors cause packet loss and high latency. In this case, we offer the Dler Cloud Global Optimized Network, which provides more stable and low-latency connections to our subscribers via backbone and CN2 trunks, as an optional item with the SLA guarantee.",
                    easy: 'More simply: ',
                    text13: "The purpose of the relay nodes provided by Dler Cloud is to break through network censorship and establish a fast connection to the target server, so the acceleration strategy is more inclined to use China Telecom's backbone network access (ChinaNet Backbone) with large bandwidth and medium connection quality; the goal of some high-quality lines is to establish as low latency and high stability as possible. so the acceleration strategy favors medium connection speed and high connection quality for the China Telecom CN2 network and country-specific direct connect optimized lines. Different SLA levels apply to different services.",
                    text14: 'Our accelerated network works in a 0% packet loss environment, which applies to Dler Cloud accelerated network to the backbone lines. If you find any packet loss, please contact us, generally less than 5% packet loss is normal. It depends on your local network to the national backbone node. This SLA does not apply to packet loss/high latency conditions caused by national backbone BGP routing and carrier routing adjustments.',
                    text15: 'Restriction',
                    text16: 'This uptime guarantee only applies if the user is using the services provided by the Dler Cloud normally. This SLA does not apply to users on private lines who have a higher level of control over their connection point and choose to use a higher level of TCP acceleration that may cause instability. This SLA will no longer apply if a user uses the Dler Cloud Accelerated Network to engage in behavior that violates the laws, regulations of the user and connection point region and the Dler Cloud Terms of Service.',
                    text17: 'When Dler Cloud performs routine maintenance on connection point software and hardware, we will notify the user 24 hours in advance. and for urgent issues, Dler Cloud will take care of them within 10-30 minutes and ensure a working connection point for users to use. All connection points should not be maintained for more than 24 hours, otherwise Dler Cloud users will be compensated for Dler Cloud "Compensatory Time".',
                    text18: 'The SLA applies if the user is using the services provided by Dler Cloud correctly. The SLA will not apply when the user has other hardware and software issues and misconfigurations. In addition, Dler Cloud will be able to perform routine maintenance on the connection points unless it takes more than 30 minutes.',
                    text19: 'Interrupt Compensation',
                    text20: 'We will automatically compensate the user for "Compensatory Time" when the SLA fails to meet the promised items.',
                    text21: 'Duration',
                    text22: 'Compensatory Time',
                    text23: '< 60 min',
                    text24: '1 day',
                    text25: '60-120 min',
                    text26: '3 days',
                    text27: '120-360 min',
                    text28: '5 days',
                    text29: '360-720 min',
                    text30: '10 days',
                    text31: '> 720 min',
                    text32: '15 days'
                },
                tos: {
                    text1: 'Last edited: 18 July 2020 at 12:04.',
                    text2: 'These Terms of Service are binding on all products and services provided by Dler Cloud. The following are the terms and conditions:',
                    text3: '',
                    text4: 'The parties referred to in this Agreement are defined as follows:',
                    text5: 'Whenever the first person pronouns (Dler Cloud, we, us, etc.) are used in this Agreement, they refer to Dler Cloud. In addition, when the "website" or "this website site" is used, it refers to any website provided by Dler Cloud, unless a site is expressly exempted by this policy.',
                    text6: 'You, Dler Cloud Customer - ',
                    text7: 'As our customer or user of the Web Services, this Agreement may be replaced by any second person pronouns instead.',
                    text8: "Please read the Hosting Service Terms and Conditions below. By subscribing to the ",
                    text9: 'Dler Cloud',
                    text10: " Service, you agree to abide by all of the terms and conditions of this Agreement (Agreement). You should print or save this Agreement as a copy that can be referenced in the future. If you do not agree to all of the terms and conditions, do not purchase Dler Cloud's products and services, Dler Cloud will only provide you with services after you agree to this Agreement. This agreement is signed under the permission of global and domestic commercial laws. By using any of the services provided by Dler Cloud, you are deemed to be aware of and agree to the following terms of service.",
                    text11: 'Common Terms',
                    text12: 'While this agreement represents the primary terms of use, other guidelines and rules are incorporated herein by reference. These documents, which can be found on our website, contain:',
                    easy: 'More simply: ',
                    text13: 'In order to provide you with a better service, we need you to agree to the following terms.',
                    text14: 'Service',
                    text15: 'Each account has a unique port and configuration information, which will be opened automatically after purchase.',
                    text16: 'If individual client requires payment, the user must purchase the client by himself/herself.',
                    text17: 'We reserve the right to refuse any instruction or teaching on the client.',
                    text18: 'Some sites are audited for anti-Chinese forces such as Falun Gong and child pornography.',
                    text19: 'No guarantee of stream unlocking, but we will do our best.',
                    text20: 'Refund requests are not accepted with any conditions.',
                    text21: 'All services protect your rights based on SLA agreements.',
                    text22: 'The service is available immediately after you purchase it and is protected by SLA-based agreements.',
                    text23: 'You need to be aware of our restrictions.',
                    text24: 'We are not obliged to meet any other requirements you may have.',
                    text25: 'Resource & Security',
                    text26: 'Security: ',
                    text27: "Any violation of the Site's security/services is prohibited, and may result in criminal and civil liability. You agree not to violate or attempt to alter or manipulate hardware and software, endanger the servers, or any other unauthorized use by such activities. You are prohibited from engaging in:",
                    text28: 'Any form of unauthorized access to or use of data, systems or networks, including websites/services.',
                    text29: "Unauthorized interference with any user's service, host or network.",
                    text30: 'Malicious programs are introduced into networks or servers (such as viruses and worms), including Website/Services.',
                    text31: 'Circumvent any host, network or account security authentication',
                    text32: 'Use our Services to compromise security of other websites.',
                    text33: 'Distribute illegal information.',
                    text34: 'Engage in illegal transactions.',
                    text35: "We do not actively detect content used by end users on our Services, although we may, in our sole discretion, use technical means to monitor our customers' use of the Services on our network and disclose any necessary information about your account if required to do so by law, regulation, or governmental organization. We will investigate complaints of violations of third party rights or violations of acceptable use policies. We will attempt to reduce the abuse of our Services. We will have the right to cooperate with law enforcement agencies and reserve the right to notify such agencies, if they suspect that you and your end users are engaging in activities that violate the laws, regulations, and policies of the jurisdictions in which you and your server are located. All terms contained in this section are intended to grant rights to third parties, but no third party has the right to enforce any term of this Agreement.",
                    text36: 'Traffic Usage: ',
                    text37: "Your monthly traffic is determined by your purchase of certain services. If your traffic usage exceeds the monthly limit, it will be restricted and resumed the following month. Unused traffic is not carried forward to the next month's traffic.",
                    text38: 'Fair Usage Policy: ',
                    text39: 'We offer specific services and our Virtual Private Servers to our customers. Normal, fair and reasonable usage are defined throughout any given billing cycle or traffic package. We expect users to use each service as described. We may take action to mitigate negative consequences if, in our judgment, a user is using the Services unreasonably. Unfair use includes, but is not limited to, the following:',
                    text40: 'Sublicense, resale, or share accounts or services.',
                    text41: 'Use various types of P2P and BT to download pirated resources.',
                    text42: 'Use a web crawler or scan and send packages.',
                    text43: 'Send SPAM.',
                    text44: 'System health is very important. If you have too many crazy processes, we may have to block or limit the rate of these services.',
                    text45: "We don't want you to hack and destroy our system.",
                    text46: 'You must abide by the usage guidelines we have established.',
                    text47: 'No Spam',
                    text48: 'The SPAM on the Dler Cloud network is strictly prohibited, and we reserve the right to terminate your service at any time if you and your end users are using SPAM on the Dler Cloud network.',
                    text49: "Dler Cloud posts the revised policy on the website and reserves the right to modify the anti-spam policy at any time. You agree to periodically visit the Dler Cloud website and review the latest Anti-Spam Policy, and your continued use of the Dler Cloud Services after any Anti-Spam Policy change logs constitutes your acceptance of the new Anti-Spam Policy and you will be bound by it. If an end user's actions violate the Terms of Service or the Anti-Spam Policy, Dler Cloud will have the right to suspend your access to the Service at any time.",
                    text50: "No one likes spam! You must comply with Dler Cloud's anti-spam policy.",
                    text51: 'Price Changes',
                    text52: "The services you pay for will not change price for a certain period of time. We reserve the right to change the price of Dler Cloud's services at any time, without notice, and to modify the number of resources provided to our users.",
                    text53: 'The services you purchased will not change for a certain period of time.',
                    text54: 'The price of Dler Cloud services is adjusted dynamically.',
                    text55: 'Revision of User Agreement',
                    text56: 'This Agreement contains the complete terms and conditions applicable to your use of the Dler Cloud Services (as defined below).Dler Cloud may modify the terms of this Agreement, including the Fees (as defined below), at any time.',
                    text57: 'We may modify this Agreement from time to time. You agree that we reserve the right to do so. You agree that we have the unilateral right to do so. The updated version will replace any previous version immediately upon posting, and the previous version will be of no further legal effect unless the revised version is consistent with the previous version. Any third party revision of this Agreement are deemed invalid.',
                    text58: 'If you do not review this Agreement on a regular basis, it is your sole responsibility for ignoring any changes to this Agreement. You have the right to review this revised version at any time. Due to your own neglect of viewing, Dler Cloud does not take any responsibility.',
                    text59: 'We may update this agreement from time to time.',
                    text60: 'Continued use of our services indicates your acceptance of the revised terms.'
                },
                use_policy: {
                    text1: "Before using Dler Cloud's Services, you must agree to this AUP, and you agree to require your end users to comply with this AUP. Dler Cloud reserves the right to modify this AUP at any time, without any obligation to notify you.",
                    text2: 'According to your Service Release Agreement, Dler Cloud may, in its sole discretion, terminate your access to the Services if your behavior violates (or is suspected of violating) this AUP, or if your End Users violate (or are suspected of violating) this AUP.',
                    text3: 'Prohibited Unlawful & Prohibited Uses',
                    text4: 'As part of the terms of using Dler Cloud services, you and your end users may not use the services provided by Dler Cloud for any unlawful purpose. You and your end-users may not use anything that could potentially damage, disable, overload or otherwise impair any of the Dler Cloud Services provided by a third party. You and your end users may not attempt to obtain any information in any way that is not provided by the Service.',
                    text5: 'Use of Service',
                    text6: 'The purpose of this service is to enable you and your end users to communicate with others via the Internet, and you agree to the proper use of the Service (and not as a restriction), for example, you and your end users will not do the following.',
                    text7: 'Use the Services to connect to illegal contests, gambling, illegal lotteries, send spam or any duplicate and unsolicited messages.',
                    text8: 'Defame, abuse, harass, stalk, threaten, or otherwise violate the legal rights of others (such as rights of privacy and publicity).',
                    text9: 'Publish, post, upload, distribute, transport or transmit any defamatory, obscene or otherwise unlawful content, such as child pornography or virtual child pornography.',
                    text10: 'Publish, post, upload, distribute or disseminate any topic, name, material or information that incites discrimination, hatred or violence against a person or because of their racial, religious or ethnic affiliation.',
                    text11: 'Violate copyright or trademark laws (privacy/publicity rights),unless you own the copyright or have all the necessary permissions to do so.',
                    text12: 'Use any material or information, including images or photographs, in a manner that infringes any copyright, trademark, patent, trade secret or other proprietary right of any party through the provision of the Services.',
                    text13: 'Upload files that contain viruses, Trojan horses, worms, time-based malicious programs designed to delete or damage files, or any other similar software or programs that may damage the property of others.',
                    text14: 'Download or post any file that you know or reasonably should know cannot be legally distributed.',
                    text15: 'Falsify or delete any author attributions, legal or other proper notices, proprietary names, or labels of origin or source of any software or other material contained in the uploaded files.',
                    text16: 'Behavior beyond reasonable limits to the extent that it interferes with the enjoyment of the Service by other users.',
                    text17: 'Violate any of the Terms or other guidelines that may apply to any particular Service.',
                    text18: "Gather or otherwise collect information about others, including email addresses, unless this is necessary to operate your site and is permitted by your site's privacy policy (if any).",
                    text19: 'Violate any applicable law or regulation.',
                    text20: 'Create a fake identity for the purpose of misleading others.',
                    text21: 'Create and operate a TOR node.',
                    text22: 'Scan and sniff the ports of other web hosts for any reason, unless this is permitted in writing by the other party.',
                    text23: 'Perform any type of BitTorrent downloading, unless specifically stated in a service to allow such behavior.',
                    text24: 'Use in a way that does not meet the subscription usage conditions (e.g. using a personal type of subscription package within an organisation or business).',
                    text25: "Dler Cloud reserves the right to disclose any information at any time, when such information is required by law, regulation or governmental request, or to edit, delete or refuse to post any information or materials. Doing so, in whole or in part, is in Dler Cloud's sole discretion.",
                    text26: 'Dler Cloud does not control or endorse any content, messages or information found in the Services. Therefore, Dler Cloud expressly refuses to take any responsibility and does not serve any behaviors or problems arising from your participation.',
                    text27: 'When your service consumes excessive resources, such as high-traffic downloads, PT/BT, Dler Cloud reserves the right to limit the resources available to you at any time in order to ensure proper use by other users of that node.',
                    text28: 'Terminate/Restrict Access',
                    text29: 'Dler Cloud has no obligation to monitor the Services, however, Dler Cloud reserves the right to review any Services and materials posted to Dler Cloud and to remove Services and Content in its sole discretion, Dler Cloud reserves the right to terminate all or part of its Services and related services or restrict access to them at any time in its sole discretion and Dler Cloud has no obligation to inform you, and we have no obligation to perform any subsequent maintenance once the service is terminated for use in violation of this AUP.',
                    text30: 'No Spam',
                    text31: 'Dler Cloud will immediately terminate any service that is deemed to be sending spam or a large number of unsolicited emails, without any obligation to restore it.',
                    text32: 'Infringement Involved',
                    text33: 'Dler Cloud respects intellectual property rights and asks our customers to do the same, if you believe that your intellectual property rights have been infringed, or if we believe that your content infringes the intellectual property rights of others, please provide Dler Cloud with the following information:',
                    text34: 'Obtain an electronic or handwritten signature of an individual representing the owner of a copyright license or other intellectual property interest.',
                    text35: 'Copyrighted works, or descriptions in which you claim infringement of other intellectual property rights.',
                    text36: 'Material describing the services you claim are being infringed.',
                    text37: 'Your address, telephone number and email address.',
                    text38: 'Through your representations, you have a good faith belief that the disputed content is not authorized by the owner or agent of the work or authorized by law.',
                    text39: 'A statement that can certify that the above information is correct and that you are the owner, agent, legal representative or authorized person of the copyright or intellectual property right, work, or other information.',
                    text40: 'Notice & Remove',
                    text41: 'Dler Cloud reserves the right to remove services and content at any time that are deemed to be infringing or for which a claim of infringement has been received.',
                    text42: 'Dler Cloud reserves the right at any time to block access to the infringing content or any allegedly fact-based infringing content by disabling access or removing the content.'
                },
                register: {
                    text: 'Start Now',
                    text1: 'Connect to the Dler Cloud & enjoy the ultimate network experience',
                    text2: 'Join us'
                },
                footer: {
                    features: {
                        title: 'Features',
                        source: 'Servers',
                        data: 'Data Center',
                        panel: 'Control Panel'
                    },
                    support: {
                        title: 'Support',
                        soft: 'Client',
                        word: 'Document',
                        status: 'Status'
                    },
                    terms: {
                        title: 'Terms',
                        use: 'Terms of Service',
                        policy: 'Usage Policy',
                        server: 'Service Agreement'
                    },
                    about: {
                        title: 'About',
                        us: 'About Us',
                        aff: 'Referral'
                    }
                }
            }
        },
        zh: {
            translation: {
                navbar: {
                    home: 'Dler Cloud',
                    features: {
                        title: '特性',
                        source: '优质资源',
                        data: '数据中心',
                        panel: '控制面板'
                    },
                    support: {
                        title: '数据及支持',
                        soft: '软件中心',
                        word: '文档中心',
                        status: '服务状态'
                    },
                    terms: {
                        title: '条款及保障',
                        use: '使用条款',
                        policy: '使用政策',
                        server: '服务水平协议'
                    },
                    about: {
                        title: '关于',
                        us: '关于我们',
                        aff: '推介计划'
                    },
                    center: {
                        title: '用户中心',
                        login: '登录',
                        register: '注册'
                    },
                    lang: {
                        title: 'English',
                        ch: '简体中文',
                        en: 'English'
                    }
                },
                index: {
                    inner: {
                        title: '简单 值得信赖',
                        slogan1: '创建您需要的中继基础设施',
                        slogan2: '助力连接您不能直接访问的内容提供商',
                        slogan3: '给您随时随地访问我们的网络的权限',
                        slogan4: '我们最了解您的需求',
                        slogan5: '丰富的第三方应用兼容性',
                        slogan6: '我们的服务与诸多平台上的优秀应用程序兼容',
                        slogan7: '我们与开发者一同进步 实时更新 只为提供最优秀的体验',
                        slogan8: '* 这些软件并非 Dler Cloud 开发，仅为其中部分应用提供配置方案与对接，Dler Cloud 并无义务为您提供下载，iOS 用户可能需要自行购买这些应用程序。某些应用程序在中国区下架也并非由Dler\n' + 'Cloud 所决定，您应当联系Apple或自行注册其他国家或地区的Apple ID，以便下载这些程序。',
                        slogan9: '现在就开始',
                        slogan10: '让我们和合作伙伴一同呈现',
                        slogan11: '满足您需求的数据传输服务',
                        slogan12: '由我们的运营商合作伙伴和互联网数据中心合作伙伴提供支持，与您的当地运营商兼容，体验宛若身在海外的访问速度。',
                        slogan13: '我们以优质资源与冗余备份确保其畅通可靠，为您提供快速稳定的国际网络接入。',
                        slogan14: '您的请求将被采用最新的加密技术传输，我们将其混淆为安全传输层协议而避免被运营商调整网速，更能保证您的数据安全。',
                        slogan15: '通过在多个不同的互联网交换中心 与数百家内容提供商对等互联。'
                    },
                    des: {
                        edge: '全球网络基础设施 (Edge)',
                        edge1: '我们与运营商及上游合作伙伴的关系使得我们可提供的网络容量从 300Mbps 到 10Gbps 不等，为您提供源源不断的数据加速。',
                        edge2: '数据传输服务提升到新的能力和性能水平。我们的高性能服务器、高性能网络能力以及ISP合作伙伴的多样性都将比以往任何时候都更快。',
                        wavelength: 'AWS Wavelength (5G)',
                        wavelength1: 'AWS Wavelength 是一款针对移动边缘计算应用程序优化的AWS 基础设施产品。Wavelength 区域是一种AWS 基础设施部署，可在 5G 网络边缘的通信服务提供商 (CSP) 数据中心中嵌入AWS 计算和存储服务，因而来自5G 设备的应用程序流量可以在不离开移动通信网络的情况下到达Wavelength 区域中运行的应用程序服务器。这就避免了因应用程序流量必须遍历互联网中的多个跃点才能达到其目的地而导致的延迟，从而使客户能够充分利用现代5G 网络提供的低延迟和带宽优势。',
                        gia: '多线路互联 (BGP)',
                        gia1: '基于运营商或云服务商提供的高质量/高优先级的商业宽带，针对全国所有链路进行了优化，配合全新的隧道传输技术连接至海外。',
                        bgp: '下一代承载网 (GIA)',
                        bgp1: '提供更高质量骨干承载网络而建立，延迟降低了50％；冻结率下降30％；丢包率低于0.05％。',
                        iepl: '国际以太网专线 (IEPL)',
                        iepl1: '以太网接口的增强型的IPLC 产品，是一个端到端的真正的以太网电路，纯以太网电路将提供比 IPLC 更少的抖动和更高的性能。',
                        ac: '动态混合云连接 (AC)',
                        ac1: '根据用户网络就近接入，各区域服务器之间通过高性能高可靠低时延的云连接服务实现全互联。'
                    },
                    meal: {
                        title: '选择您的套餐',
                        year: '/年',
                        season: '/季',
                        Edge: '边缘网络 (Edge)',
                        Wavelength: '边缘网络 (5G)',
                        GIA: '新承载网 (GIA)',
                        IEPL_Lite: '专线连接 (Lite)',
                        IEPL_Std: '专线连接 (Std)',
                        IEPL_Pro: '专线连接 (Pro)',
                        AC: '动态混合云连接 (AC)',
                        Type: '更多协议支持',
                        Relay: '流量转发服务',
                        HA: '高可用性支持',
                        HighSpeed: '高速数据传输/GiB/月：',
                        LowSpeed: '低速数据传输/GiB/月：∞',
                        RealPay: '按量付费/GiB/元：'
                    },
                    description: {
                        stand: {
                            stand1: '✓ 所有国内网站直线连接',
                            stand2: '✓ 流媒体解锁(Netflix、Hulu、HBO、MytvSUPER、Happyon(Hulu Japan)、AbemaTV等)',
                            stand3: '✓ Apple服务加速(App Store、Apple Music、Apple流媒体、iCloud备份、iCloud Drive、iTunes等)',
                            stand4: '✓ 国外常用网站加速(Google/Youtube/Twitter/Facebook/instagram/wikipedia/Github等)'
                        },
                        notSupport: {
                            stand1: '✗ 部分挖矿JS插件',
                            stand2: '✗ 常用应用程序及网页的行为分析',
                            stand3: '✗ 常用应用程序及网页的数据统计',
                            stand4: '✗ 常用应用程序及网页的隐私跟踪',
                            stand5: '✗ 各大购物网站的运营商劫持',
                            stand6: '✗ Content Security Policy劫持',
                            stand7: '✗ CNNIC根证书劫持',
                            stand8: '✗ 部分应用程序的启动广告',
                            stand9: '✗ 部分运营商劫持网页弹出的流量统计',
                            stand10: '✗ 部分运营商劫持网页弹出的漂浮球广告',
                            stand11: '✗ 常用视频广告',
                            stand12: '✗ 常用网站广告、其他流媒体网站广告',
                            stand13: '* 需第三方软件与托管规则配合实现'
                        }
                    },
                    moreInfo: '数据中心及线路更多信息'
                },
                about: {
                    text1: '关于我们',
                    text2: '我们的使命：提供高效、稳定、可靠、安全的数据传输服务。',
                    text3: '关于我们',
                    text4: '服务协议',
                    text5: '一个颠覆传统、全球性的加速服务。',
                    text6: '提供了全球主要城市的节点，以便阁下可以在 Dler Cloud 提供的服务下畅享全球的精彩内容。',
                    text7: '采用一系列措施来提高我们服务的可靠性，从用户中心中启动全球加速网络，如此简单，不需要任何额外的设置和特定的服务。',
                    text8: '全球加速',
                    text9: '我们与合作伙伴在全球部署加速网络节点能够帮助用户突破网络审查并更快地使用国际网际网络资源，帮助您的业务更进一步！',
                    text10: '操作简易',
                    text11: '无需配置繁杂的设置，只需要根据 Dler Cloud 提供的帮助，就可以轻松地在任何地方连接到 Dler Cloud 加速网络。',
                    text12: '智能分流',
                    text13: '通过智能分流技术，将用户的访问压力分配到各个连接点上，使得用户在无需变更任何设置的情况下就可以享受更快速度。',
                    text14: '完善技术支持',
                    text15: '通过购买管理型服务，将可以获取扩展技术支持，帮助您处理您在使用过程中遇到的任何问题，更加方便地使用各种服务。',
                    text16: '全平台支持',
                    text17: '可以用于您的所有设备上，无论是 Windows PC、macOS、iOS、Android 系统，甚至是路由器上，只需要一个帐号！',
                    text18: '直接连接到世界各地的互联网交换中心',
                    text19: '可信赖的上游及运营商伙伴'
                },
                aff: {
                    text1: '加入推介计划！',
                    text2: '通过推荐他人来获取收益！',
                    text3: '现在就加入推介计划！',
                    text4: '推介系统如何工作？',
                    text5: '加入推介计划后，当您的朋友通过您的邀请链接注册，当他充值，您将可以从中获得5%的推介收益。',
                    text6: '推介收益将何时到账？',
                    text7: '推介收益的我们将会在用户购买产品服务后立即结算该推介佣金。您始终可以通过用户中心查看到您的推介情况。',
                    text8: '我是否可以提现推介佣金？',
                    text9: '当然可以！当您的推介佣金达到100元，只需要在工单系统中申请提现，我们就会在处理中直接将佣金打入您的账户中。',
                    text10: '推介佣金是否可以用于购买 Dler Cloud 服务？',
                    text11: '我们默认情况下会将推介佣金直接返到您的账户，可以用于购买任何服务！通过推介计划，您甚至可以免费使用。',
                    text12: '我是否需要支付费用？',
                    text13: '您无需为推介计划支付任何的费用，在您选择加入推介计划后，您将可以直接通过推介产品与服务来获取收益，我们不会在此过程中收取任何的额外费用。',
                    text14: '谁有资格加入推介计划？',
                    text15: '任何客户都可以加入推介计划来从中获取收益。',
                    text16: '有任何问题？我们随时准备协助您！',
                    text17: '联系我们'
                },
                client: {
                    inner: {
                        title: '优秀的软件',
                        intro: '我们提供的服务与大多数平台和操作系统上的众多应用程序兼容。',
                        manual: '使用教程',
                        ios: 'iOS',
                        macOS: 'macOS',
                        windows: 'Windows',
                        android: 'Android',
                        router: '路由器',
                        tv: 'TV',
                        linux: 'Linux'
                    },
                    box: {
                        ios: '为 iOS 设计',
                        macOS: 'macOS',
                        ios_macOS: '为 iOS 和 macOS 设计',
                        windows: '为 Windows 设计',
                        windows_game: '为 Windows 游戏设计',
                        android: '为 Android 设计',
                        router: '为 Linux/OpenWrt 设计',
                        download: '立即下载',
                        home: '前往获取',
                        ss_simple: '* 请先安装 Simple Obfs',
                        merlin_simple: '* 请先安装 Clash for Merlin Patch'
                    }
                },
                dataCenter: {
                    inner: {
                        slogan: '和内容合作伙伴',
                        slogan1: '交换数据',
                        slogan2: '提供分布全球的加速服务, 让您可以在任何地方展开工作。'
                    },
                    server: '遍布全球',
                    serverText: '提供分布全球的加速服务，使得您可以在任何地方开展国际贸易、收发Gmail 及观看视频。此外，使用社交网络更是一项基本功能。不仅节点繁多，更具有高出业界平均速度三倍的巨大优势！',
                    box: {
                        title: '西雅图',
                        title1: '洛杉矶',
                        title2: '达拉斯',
                        title3: '阿姆斯特丹',
                        title4: '法国',
                        title5: '韩国',
                        title6: '深圳',
                        title7: '上海',
                        title8: '北京',
                        title9: '台湾',
                        title10: '香港',
                        title11: '澳门',
                        title12: '新加坡',
                        title13: '日本',
                        title14: '俄罗斯',
                        title15: '英国'
                    },
                    slogan: {
                        title1: '全球互联',
                        title2: '您可以便捷地访问全球网络资源，并自动通过智能分流 - 负载均衡的技术便可在无需任何操作的情况下自动连接到最快的接入点。',
                        title3: '享受',
                        title4: '我们的网络均部署了先进的 TCP 加速技术，您无需下载任何额外软件，就可以享受到宛如身临其境的网络体验。',
                        title5: '尽兴',
                        title6: '我们的网络拥有超高网络冗余，避免网络堵塞，让您的下载任务随时随地跑满宽带。'
                    }
                },
                features: {
                    inner: {
                        slogan: '兼容您的设备',
                        slogan1: '兼容您的网络',
                        slogan2: '可运行在您的所有网络设备上，为您提供跨平台的优质服务，更能保护您的隐私。'
                    },
                    server: '更高效率',
                    server2: '加速对基于云的办公应用程序的访问，并通过提高速度和减少上传时间来提高生产力。',
                    box: {
                        title: '安全加密',
                        title1: '安全稳定的流加密算法，安全与速度兼得。支持多种256位安全加密，保障您的使用。',
                        title2: '智能分流',
                        title3: '连接点智能分流，多重负载均衡机制。',
                        title4: '快速上手',
                        title5: '简单易用的控制面板，无需任何学习成本。付款后一秒开通，快捷迅速。',
                        title6: '协议保障',
                        title7: '提供 SLA 保证，随时畅通的高效加速。全天候工单支持，业界最佳技术售后。',
                        title8: '强力服务器',
                        title9: '所有服务器均采用强劲 Intel/AMD 内核。不仅快速，更高效。',
                        title10: '全平台通用',
                        title11: '全平台支持，一个帐号畅通你的所有设备。iOS、Android、Windows、macOS、Linux 均支持。'
                    },
                    slogan: {
                        title1: '即时开通',
                        title2: '在您付款后，系统将在一秒内处理您的订单，并立即开通。',
                        title3: '先进的网络连接',
                        title4: 'Dler Cloud 的部分网络，不仅可以在IPv4 环境下使用，还支持与 IPv6 互通。在您的运营商部署 IPv6 之后，您即可使用更快捷的 IPv6 网络服务。',
                        title5: '更高权限',
                        title6: '您可以自定义设置您的连接参数。此外，若您需要修改连接参数，仅需在后台简单操作即可。您完全掌握您的账户。'
                    }
                },
                panel: {
                    inner: {
                        slogan: '现在进入互联网',
                        slogan1: '正如你希望那样',
                        slogan2: '简单的面板，快速上手使用。更可随时查看及管理连接信息及查看流量使用状况。'
                    },
                    server: '简单面板，方便易用',
                    serverText: '用户中心非常直观，不论是查看加速服务连接信息，还是查询流量使用情况，界面是那么简单易用，让人惊喜连连。',
                    box: {
                        title: '所有信息，尽在掌控',
                        title1: '余额',
                        title2: '返利',
                        title3: '积分',
                        title4: '剩余流量',
                        title5: '可用：',
                        title6: '/已用：',
                        title7: '秒级开通，便捷管理',
                        title8: '套餐',
                        title9: '价格',
                        title10: '日期',
                        title11: '自动续费'
                    }
                },
                sla: {
                    text1: '我们的正常运行时间保证',
                    text2: 'Dler Cloud 在其云服务平台的核心架构中提供多重冗余机制和负载均衡机制来保证服务的稳定运行。提供企业级的安全与稳定性。',
                    text3: '阅读完整 SLA',
                    text4: '关于我们',
                    text5: '服务协议',
                    text6: '在线率',
                    text7: '服务器在线保证',
                    text8: 'Dler Cloud 提供的主机托管服务是为了最大稳定性而设计的，我们通过一套主动监测机制来发现问题并处理问题，使用 Dler Cloud 的主机服务，阁下将无需担心线路的维护问题，所有环境问题和传输数据机制将由 Dler Cloud 解决，通过多级灾难防止措施，最大程度地减少意外情况所带来的问题。',
                    text9: '在线率',
                    text10: '加速网络在线保证',
                    text11: '通过连接点冗余机制，和 Dler Cloud 提供的智能分流 - 负载均衡配置，将能够提供稳定的连接点在线时间保证。',
                    text12: '中断补偿',
                    text13: '当因为意外情况导致 SLA 中断时，所有受到影响的用户将自动获取使用时间补偿，具体如下：',
                    text14: '大致有效可用性',
                    text15: '中断时长',
                    text16: '补偿时间',
                    text17: '低于60分钟',
                    text18: '1天',
                    text19: '60-120分钟',
                    text20: '3天',
                    text21: '120-360分钟',
                    text22: '5天',
                    text23: '360-720分钟',
                    text24: '10天',
                    text25: '超过720分钟',
                    text26: '15天'
                },
                sla_full: {
                    text1: '全网正常运行时间保证',
                    text2: 'Dler Cloud 提供基于网络和节点主机正常运行时间保证，总的来说，这些保证是作为',
                    text3: '服务条款',
                    text4: '的一个补充。阁下成为 Dler Cloud 的客户时，这些条款就将自动生效，并成为 Dler Cloud 整个服务周期中不可或缺的一部分。',
                    text5: '这些保证适用于阁下的每一个产品/服务，而不是适用于所有账单。以下情况不适用于该 SLA。',
                    text6: '阁下所购买服务的正常例行维护，我们会提前通知阁下，并通知调整流量策略和DNS策略临时迁移阁下的服务到可以正常使用的部分。但由于阁下网络服务提供商造成的调整延迟；',
                    text7: 'Dler Cloud 提供的 API、控制面板和中继服务器、路由器插件等；',
                    text8: '客户在购买前已经被告知该服务属于不在 SLA 保障以内的。',
                    text9: '我们的平台是非常可靠的！有完善的质量保证！',
                    text10: '在遭遇突发情况时，阁下将可以获得补偿，比如 Dler Cloud “补偿时间”。',
                    text11: '丢包和延迟',
                    text12: 'Dler Cloud 会主动监测 Dler Cloud 各连接点的链路情况，并在出现网络波动时尽可能调整网络策略以减少波动可能带来的影响。Dler Cloud 的全球加速网络在所在地境内的链路是0丢包和低延迟的，但当客户在其所在国家的网络连接时，可能会因为线缆质量、运营商路由策略、用户宽带使用和其他因素造成丢包和高延迟。在这种情况下，我们会提供 Dler Cloud 全球优化网络，通过骨干网络和 CN2 网络中继，来对用户提供更加稳定和低延迟的连接，用户可以在产品中选购此项目，此项目适用于 SLA 保证。',
                    easy: '更简单的说：',
                    text13: 'Dler Cloud 所提供的中继节点，其目的是为了突破网络审查，建立快速的连接到目标服务器，因此在加速策略上更偏向于使用拥有较大带宽和中等连接质量的中国电信骨干网接入 (ChinaNet Backbone)；部分高质量线路的目标是建立尽可能低延迟和高稳定性的连接到目标服务器，因此在加速策略上偏向于中等连接速度和高连接质量的中国电信 CN2 网络和各国直连优化链路。不同的服务适用于不同的 SLA 等级。',
                    text14: '我们的加速网络工作在0%丢包的环境下，这适用于 Dler Cloud 加速网络到骨干线路的情况。如果阁下发现丢包，请联系我们，一般情况下，5%以下的丢包属于正常情况。具体视阁下的本地网络到国家骨干网络节点的情况。该 SLA 不适用于国家骨干网络 BGP 路由和运营商路由调整造成的丢包/高延迟情况。',
                    text15: '限制',
                    text16: '该正常运行时间保证只适用于用户正常使用Dler Cloud 所提供服务的情况下。特别低，对于私有线路的用户而言，由于拥有更高的连接点控制权限，同时客户可以选择使用更高级别但可能造成不稳定现象的TCP 加速技术，因此将不适用于此 SLA。如果用户使用 Dler Cloud 加速网络进行违反用户和连接点所在地相关法律法规和 Dler Cloud 服务条款的行为，将不再适用于此 SLA。',
                    text17: '当Dler Cloud 对连接点软件和硬件进行例行维护时，将会提前24小时通知用户，对于紧急发生的问题，Dler Cloud 将在10-30分钟内处理完成，并保证同可用区仍然有正常工作的连接点以供用户使用。所有连接点的维护时长不应长于24小时，否则 Dler Cloud 的用户将收到 Dler Cloud “补偿时间”的补偿。',
                    text18: '该 SLA 适用于用户正确地使用 Dler Cloud 所提供服务。当用户因为其他软硬件问题和错误配置的情况下，SLA 将不适用。另外，Dler Cloud 将可以对连接点进行例行维护，除非所需时间超过30分钟。',
                    text19: '中断补偿',
                    text20: '当该 SLA 未能达到所承诺项目时，我们将会自动发放“补偿时间”。',
                    text21: '中断时长',
                    text22: '补偿时间',
                    text23: '低于60分钟',
                    text24: '1天',
                    text25: '60-120分钟',
                    text26: '3天',
                    text27: '120-360分钟',
                    text28: '5天',
                    text29: '360-720分钟',
                    text30: '10天',
                    text31: '超过720分钟',
                    text32: '15天'

                },
                tos: {
                    text1: '最后修订时间：2020年7月18日 12:04',
                    text2: '该服务条款是约束由 Dler Cloud 提供的所有产品和服务，以下是条款和条件：',
                    text3: '当事双方及术语介绍 -',
                    text4: '本协议所提及的当事人的定义如下：',
                    text5: '当第一人称代词（Dler Cloud，我们，我们的等）在本协议中使用，均指 Dler Cloud。此外，当使用术语“网站”或“本网站站点”，指的是由 Dler Cloud 提供的任意网站，除非某个网站是这一政策明确免除的。',
                    text6: '您，Dler Cloud 客户 -',
                    text7: '作为我们的客户或网站服务的使用者，本协议可能使用任意第二人称代替。',
                    text8: '请阅读下面的托管服务条款和条件。通过订阅的',
                    text9: 'Dler Cloud',
                    text10: '服务，即表示您同意遵守本协议的所有条款和条件（协议）。如果使用此协议的同意条款和条件，按一下我接受（或类似的场景）或选中相应的框体，即表示您意图接受这些条款和条件。您应该打印或以其他方式保存该协议，作为未来可引用的副本。如果您并非适用于所有本协议的条款和条件的认同，如果您不同意此服务和条款，请勿购买Dler Cloud 的产品和服务，并点击浏览器“返回”按钮，或关闭本网站。Dler Cloud 仅在您同意此服务条款后，为您提供服务。此协议是在全球和国内的商业法允许下签署。任何使用Dler Cloud 提供的服务的行为，都认为您知晓并同意一下服务条款。',
                    text11: '共同条款',
                    text12: '尽管此协议代表主要的使用条款，其他准则和规则在此通过引用并入本文。这些文件可以在我们网站上找到，其中包含：',
                    easy: '更简单的说：',
                    text13: '为了给您提供更好的服务，我们需要您同意以下条款。',
                    text14: '服务',
                    text15: '每个账号都拥有唯一端口以及配置信息，购买后自动开通。',
                    text16: '如个别客户端需要付费，需用户自行购买。',
                    text17: '我们有权拒绝软件服务指导或教学，请在购买前自行学习相关资料。',
                    text18: '对法轮功等反华势力、儿童色情等部分站点进行审计。',
                    text19: '不保证流媒体解锁，但尽力而为。',
                    text20: '不接受任何条件的退款申请。',
                    text21: '所有服务基于 SLA 协议保护您的权益。',
                    text22: '您购买服务后即可马上使用，且获得基于 SLA 协议保护。',
                    text23: '您需要知道我们的限制。',
                    text24: '我们没有义务满足您的其他要求。',
                    text25: '资源使用',
                    text26: '安全',
                    text27: '：任何违反网站的安全/服务的行为都是被禁止的，并可能导致刑事和民事责任。您同意不以此类活动违反或企图改变或操纵硬件和软件，危及服务器，或任何其他未经授权的使用。您被禁止从事：',
                    text28: '任何形式的未经授权的访问或使用数据，系统或网络，包括网站/服务。',
                    text29: '与任何用户的服务，主机或网络进行未经授权的干扰。',
                    text30: '恶意程序引入网络或服务器（例如病毒和蠕虫），包括网站/服务。',
                    text31: '规避任何主机，网络或账户的用户和安全认证。',
                    text32: '利用我们的服务为危及安全或其它网站。',
                    text33: '散布违法信息。',
                    text34: '从事非法交易。',
                    text35: '我们不会主动侦测最终用户在我们服务上所使用的内容，虽然我们可以自行决定，以技术手段监测客户在我们网络上所使用的服务，并在法律、法规或政府组织要求的情况下透露您账户的任何必要信息。我们将调查侵犯第三方权利或违反可接受使用策略的投诉。我们将试图减少对我们服务的滥用。我们将有权与执法机关合作，并保留通知该机关的权力，如果执法机关怀疑您和您的最终用户进行违反的您和服务器所在地区法律、法规和相关政策的活动。本节包含的所有条款，是为了授予第三方权利，但没有第三方有权强制执行本协议的任何条款。',
                    text36: '流量使用',
                    text37: '：您每月的流量是由您购买特定的服务来确定。如果您的流量使用超过每月限额将会被限速，在下个月恢复。未使用的流量不结转到下个月的流量。',
                    text38: '公平使用政策',
                    text39: '：我们提供特定的服务给我们的客户和我们的虚拟专用服务器的使用。是整个任何给定的计费周期或流量包来定义正常，公平，合理的使用。我们期望用户按照描述来使用每一项服务。我们在我们的判断某一个用户不合理使用服务，我们可能会采取行动，以减轻负面影响。不公平的使用包括但不限于以下内容：',
                    text40: '转借、转售、合租账户或服务。',
                    text41: '使用各类型 P2P、BT 下载盗版资源。',
                    text42: '使用网络爬虫程序或对外扫描、发包。',
                    text43: '发送垃圾邮件',
                    text44: '系统健康是非常重要的。如果您有太多疯狂进程，我们可能要阻止或对这些服务限制速率。',
                    text45: '我们不希望您入侵，破坏我们的系统。',
                    text46: '您必须遵守我们制定的使用原则。',
                    text47: '零容忍垃圾邮件政策',
                    text48: '对于任何垃圾邮件在 Dler Cloud 网络上的使用是严格禁止的，如果您和您的最终用户在 Dler Cloud 网络上使用 SPAM，我们有权随时终止您的服务。',
                    text49: 'Dler Cloud 在网站上张贴修改后的政策，并保留在任何时间修改反垃圾邮件政策的权力。您同意定期访问 Dler Cloud 网站并查看最新的反垃圾邮件政策，在任何反垃圾邮件政策更改日志后继续使用Dler Cloud 服务，则代表您接受新的反垃圾邮件政策并受到它的约束。如果最终用户的行为违反服务条款或者反垃圾邮件政策，Dler Cloud 将有权在任何时间中止您对服务的访问。',
                    text50: '没有人喜欢垃圾邮件！您必须遵守 Dler Cloud 的反垃圾邮件政策。',
                    text51: '价格变化',
                    text52: '您支付的服务在一定时间内不会改变价格。我们保留在任何时候更改 Dler Cloud 的服务价格，恕不另行通知，并保留修改提供给用户的资源数量的权利。',
                    text53: '您已经购买的服务在一定时间内不会变化。',
                    text54: 'Dler Cloud 服务的价格会动态调整。',
                    text55: '用户协议修订',
                    text56: '本协议包含完整的条款和条件适用于您使用 Dler Cloud 服务（定义如下）。Dler Cloud 可以在任何时间修改本协议的条款，包括费用（定义见下文）。',
                    text57: '我们可能随时修改本协议。您同意我们保留这样做的权利。您同意我们有单方面这样做的权利。更新的版本将在发布后立即取代任何以前的版本，之前的版本是不再具备法律效力，除非修订版和之前版本一致。本协议的任何第三方修改版本均被视为无效。',
                    text58: '如果您没有定期查看此协议,您自行承担忽略此协定更改的责任。您拥有随时查看此修订版本的权利。由于您自己忽略查看的原因，Dler Cloud 不负任何责任。',
                    text59: '我们会不定期更新此协议。',
                    text60: '继续使用我们的服务，表示您接受此条款的修订。'
                },
                use_policy: {
                    text1: '在使用 Dler Cloud 的服务之前，您必须同意此 AUP，您也同意要求您的最终用户遵守此 AUP。Dler Cloud 保留随时修改本 AUP 的权力，并没有通知您的义务。',
                    text2: '根据您的服务发布协议，Dler Cloud 可自行决定终止您对服务的访问，如果您的行为违反了（或疑似违反了）本 AUP，或者您的最终用户违反了（或疑似违反了）本 AUP。',
                    text3: '禁止非法用途和违禁用途',
                    text4: '作为使用 Dler Cloud 服务的条款之一，您和您的最终用户不能把 Dler Cloud 提供的服务用于任何非法用途，否则您将不能使用本服务。您和您的最终用户不得使用任何有可能损害、禁用、过载或以其他方式损害任何由第三方提供的Dler Cloud 服务。您和您的最终用户不得以任何方式尝试获取服务并未提供的任何信息。',
                    text5: '服务的使用',
                    text6: '该服务旨在使您和您的最终用户通过互联网与他人沟通，您同意使用的服务（并要求用户使用到的服务），才发布、发送和接受信息。在适用时，您同意正确使用服务（而不是作为一个限制），举例来说，您和您的最终用户不会做出以下行为：',
                    text7: '使用服务连接非法竞赛、赌博、非法彩票、发送垃圾邮件或任何重复并未经请求的信息。',
                    text8: '诽谤，辱骂，骚扰，跟踪，威胁或以其他方式侵犯他人合法权利（如隐私权和公开权）。',
                    text9: '出版，发布，上传，分发，运输或传播任何诽谤，猥亵或其他非法内容，如儿童色情或虚拟儿童色情制品。',
                    text10: '发表，张贴，上传，分发或散布煽动歧视，仇恨或暴力对待一个人或因其属于种族，宗教或民族中的任何的主题，名称，材料或信息。',
                    text11: '上传，或者以可用文件的方式以其他方式包含图像，照片，软件或其他材料受知识产权法保护（包括而不限于），而未进行限制，违反版权或商标法（或隐私或公开权），除非你拥有版权或已得到所有必要的许可这样做。',
                    text12: '使用侵犯任何版权，商标，专利，商业秘密或任何一方的其他所有权的任何材料或信息，包括图片或照片的方式通过提供服务。',
                    text13: '上传含有病毒，木马，蠕虫，定时恶意程序，以删除，损坏文件为目的，或任何其他类似的软件或程序，可能损害他人财产的文件。',
                    text14: '下载、发布任何你知道或者理应知道不能被合法传播的文件。',
                    text15: '伪造或删除任何作者归属，法律或其他适当声明，专有名称或包含在上传文件的软件或其他资料的原产地或来源标签。',
                    text16: '超出合理限制以至影响其他用户享受服务的行为。',
                    text17: '违反条款或可能适用于任何特定服务的其他准则中的任何内容。',
                    text18: '收集或以其他方式收集他人，包括电子邮件地址的信息，除非这是运行你的网站必须的且你的网站的隐私政策允许的（如果有的话）。',
                    text19: '违反任何适用的法律或法规。',
                    text20: '创建误导他人为目的的假身份。',
                    text21: '创建、运营一个 TOR 节点。',
                    text22: '扫描、嗅探其他网络主机的端口，除非这是受到对方书面允许的，其他任何理由均为不允许的。',
                    text23: '进行任何类型的BitTorrent下载，除非在某个服务中特别声明允许这样的行为。',
                    text24: '以不符合订阅使用条件的方式使用（如在组织或企业内部使用个人类型的订阅套餐）。',
                    text25: 'Dler Cloud 保留在任何时候透露任何信息，当这些信息被法律、法规和政府要求时，或是编辑、删除、拒绝发布任何信息或资料。全部或部分这样做由 Dler Cloud 自行决定。',
                    text26: 'Dler Cloud 不控制或认可服务中发现的任何内容、消息或信息。因此，Dler Cloud 明确拒绝承担任何责任，并不服务您参与产生的任何行为和问题。',
                    text27: '当您的服务消耗了过多资源时，如大流量下载、PT/BT，Dler Cloud 有权随时限制提供给您的资源，以保证该节点其他用户的正常使用。',
                    text28: '终止/限制访问',
                    text29: 'Dler Cloud 没有义务监督服务，然而，Dler Cloud 保留审查发布于 Dler Cloud 的任何服务和材料，并有自行决定是否删除服务和内容的权力。Dler Cloud 保留权利自行决定在何时终止其所有或部分服务和相关服务，或限制其访问权限，并没有义务通知您，对于违反本 AUP 的用于，一旦服务终止，Dler Cloud 没有任何义务进行后续维护。',
                    text30: '禁止 SPAM',
                    text31: 'Dler Cloud 将会立即终止任何被认为发送垃圾邮件或者大量未经请求的邮件的服务，并且没有任何义务进行恢复。',
                    text32: '注意涉及侵权',
                    text33: 'Dler Cloud 尊重知识产权并要求我们的客户做到相同的，如果您认为您的知识产权被侵犯，或者我们认为您的内容侵犯了他人的知识产权，请向 Dler Cloud 提供以下资料：',
                    text34: '获得代表版权授权或其他知识产权利益所有者的个人的电子签名或亲笔签名；',
                    text35: '版权作品，或者你声称受到侵犯其他知识产权的描述；',
                    text36: '描述您声称侵权服务的材料；',
                    text37: '您的地址，电话号码和电子邮件地址；',
                    text38: '通过你的陈述，您有充分理由相信该有争议内容未经著作所有人或者代理人授权或法律授权的内容；',
                    text39: '一份声明，能够证明您上述信息是正确的，您是版权或者知识产权、著作的所有者、代理人、法定代表或者被授权者的信息。',
                    text40: '通知和移除程序',
                    text41: 'Dler Cloud 保留在任何时候删除被认为侵权或者收到侵权声明的服务和内容。',
                    text42: 'Dler Cloud 保留随时有权禁止访问或者删除内容的方式阻止被侵权内容访问或任何声称是基于事实的侵权内容。'
                },
                register: {
                    text: '现在就开始',
                    text1: '接入 Dler Cloud，享受极致网络体验',
                    text2: '立即注册'
                },
                footer: {
                    features: {
                        title: '特性',
                        source: '优质资源',
                        data: '数据中心',
                        panel: '控制面板'
                    },
                    support: {
                        title: '数据及支持',
                        soft: '软件中心',
                        word: '文档中心',
                        status: '服务状态'
                    },
                    terms: {
                        title: '条款及保障',
                        use: '使用条款',
                        policy: '使用政策',
                        server: '服务水平协议'
                    },
                    about: {
                        title: '关于',
                        us: '关于我们',
                        aff: '推介计划'
                    }
                }
            }
        }
    }
},
function(err, t) {
    jqueryI18next.init(i18next, $);

    $('.navbar').localize();
    $('.index').localize();
    $('.about').localize();
    $('.aff').localize();
    $('.client').localize();
    $('.dataCenter').localize();
    $('.features').localize();
    $('.panel').localize();
    $('.sla').localize();
    $('.sla_full').localize();
    $('.tos').localize();
    $('.use_policy').localize();
    $('.register').localize();
    $('.footer').localize();
    $('.container').localize();

    // 切换语言
    $("#langZh").click(function name(params) {
        i18next.changeLanguage("zh");
        $('.navbar').localize();
        $('.index').localize();
        $('.about').localize();
        $('.aff').localize();
        $('.client').localize();
        $('.dataCenter').localize();
        $('.features').localize();
        $('.panel').localize();
        $('.sla').localize();
        $('.sla_full').localize();
        $('.tos').localize();
        $('.use_policy').localize();
        $('.register').localize();
        $('.footer').localize();
        $('.container').localize();
        Cookies.set('lang', 'zh');
    }),
    $("#langEn").click(function name(params) {
        i18next.changeLanguage("en");
        Cookies.set('lang', 'en');
        $('.navbar').localize();
        $('.index').localize();
        $('.about').localize();
        $('.aff').localize();
        $('.client').localize();
        $('.dataCenter').localize();
        $('.features').localize();
        $('.panel').localize();
        $('.sla').localize();
        $('.sla_full').localize();
        $('.tos').localize();
        $('.use_policy').localize();
        $('.register').localize();
        $('.footer').localize();
        $('.container').localize();
    })
});