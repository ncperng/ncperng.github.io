<template lang="pug">
#index
	h2
		img(src="/images/heading_NeiChiungPerng.gif")
	p Nei-Chiung Perng (also known as Neil) just left his 5-year-long job and becomes a freelancer of Information Technology now.
	p He received his Ph.D. degree in Computer Science and Information Engineering from National Taiwan University, Taipei, Taiwan, in 2006. During the five-year Ph.D. life, he was a member of the <a href="http://newslab.csie.ntu.edu.tw/">Embedded Systems and Wireless Networking Laboratory</a> supervised by Professor <a href="http://www.csie.ntu.edu.tw/~ktw">Tei-Wei Kuo</a>. He also holds a Bachelor degree and a Master degree in Computer and Information Science from National Chao Tung University in 1999 and 2001, respectively. He was supervised by Professor <a href="http://dcsw3.cis.nctu.edu.tw/DCSLab/AboutUs.aspx?QueryType=Professor">Shyan-Ming Yuan</a> in <a href="http://dcsw3.cis.nctu.edu.tw/DCSLab/">Distributed Computing System Laboratory</a> during 1998 to 2001. His research interests include real-time and embedded systems, distributed computing, and scheduling algorithms.
	p He could be contacted through emails: neil (AT) cis.nctu.edu.tw or ncperng (AT) gmail.com.
	br

	h2
		img(src="/images/heading_Honors.gif")
	ul
		li Delegate of YEF Competition 2005 to MIT and Silicon Valley (Sep 2005)
		li Champion of Trend Natural Born Programmer Context 2004 (Aug 2004)
		li Second Place of Trend Natural Born Programmer Contest 2002 (Aug 2002)
		li Third Place of Trend Natural Born Programmer Contest 2001 (Aug 2001)
		li National Chao-Tung University Graduate Outstanding Contribution Award (Jun 2001)
		li Selected as an Outstanding College Youth in 2001 by China Youth Corps (May 2001)
		li Speaker at Student Council of NCTU (Jun 1999 - Dec 1999)
		li Participation in ACM Asia Regional Programming Context (Nov 1997)
		li General Director at Student Association of Dept. CIS, NCTU (Jun 1997 - May 1998)
		li Participation in the 1st training tour for Taiwan International Olympiad in Informatics (Apr 1994)
		li Champion of Taipei senior high school programming contest (Oct 1993)
		li Second Prize of Taipei senior high school programming contest (Apr 1993)


	mixin paper(author, title, conference)
		li
			| !{author}
			| !{title}
			| !{conference}

	a(name="publication")
	h2
		img(src="/images/heading_PublicationList.gif")

	h3 Journals
	ol
		+paper(
			'Chai-Hien Gan, Phone Lin, <em>Nei-Chiung Perng</em>, Tei-Wei Kuo, and Ching-Chi Hsu,',
			'"Time-Division-Based Cyclic Scheduling for UMTS High-Speed Downlink Shared-Channels,"',
			'IEEE Transactions on Vehicular Technology, Vol.56, Issue 4, Part 2, 2007.',
		)
		+paper(
			'Chai-Hien Gan, Phone Lin, <em>Nei-Chiung Perng</em>, Tei-Wei Kuo, and Ching-Chi Hsu,',
			'"Scheduling for Time-Division Based Shared Channel Allocation for UMTS,"',
			'Journal of Wireless Networks, Vol.13, No.2, pp.189-202, April 2007.',
		)
		+paper(
			'<em>Nei-Chiung Perng</em>, Chin-Shuang Liu, and Tei-Wei Kuo,',
			'"Real-Time Linux with Budget-Based Resource Reservation,"',
			'Journal Information Science and Engineering, Vol.22, No.1, 2006.',
		)
		+paper(
			'Tsun-Yu Hsiao, <em>Nei-Chiung Perng</em>, Winston Lo, Yue-Shan Chang, and Shy-Ming Yuan,',
			'"A New Development Environment for an Event-Based Distributed System,"',
			'Computer Standard & Interfaces (CS&I), special issue on CORBA: protocols, applications, process models and standards, Vol.25, Issue 4, pp.345-355, August 2003.',
		)

	h3 International Conferences
	ol
		+paper(
			'<em>Nei-Chiung Perng</em>, Jian-Jia Chen, and Tei-Wei Kuo,',
			'"The minimization of hardware size in reconfigurable embedded platforms,"',
			'Proceedings of the 2008 ACM Symposium on Applied Computing (SAC), 2008.',
		)
		+paper(
			'<em>Nei-Chiung Perng</em> and Shih-Hao Hung,',
			'"Task Scheduling for Context Minimization in Dynamically Reconfigurable Platforms,"',
			'The 2007 IFIP International Conference on Embedded and Ubiquitous Computing, LNCS 4808, pp.55-63, 2007.',
		)
		+paper(
			'<em>Nei-Chiung Perng</em>, Jian-Jia Chen, Chuan-Yue Yang, and Tei-Wei Kuo,',
			'"Energy-Efficient Scheduling on Multi-Context FPGA\'s,"',
			'IEEE International Symposium on Circuits and Systems (ISCAS), 2006.',
		)
		+paper(
			'Ya-Shu Chen, <em>Nei-Chiung Perng</em>, Chi-Sheng Shih, and Tei-Wei Kuo,',
			'"Interference Analysis of Multiple Critical Paths,"',
			'Asia and South Pacific International Conference on Embedded SoCs (ASPICES 2005).',
		)
		+paper(
			'<em>Nei-Chiung Perng</em>, Ai-Chun Pang, Tei-Wei Kuo, and Chuan-Yue Yang,',
			'"A Tiny Real-Time Kernel for Embedded Systems,"',
			'International SoC Design Conference (ISOCC 2004).',
		)
		+paper(
			'Phone Lin, Chai-Hien Gan, <em>Nei-Chiung Perng</em>, Tei-Wei Kuo, and Ching-Chi Hsu,',
			'"Time Division Based Shared Channel Allocation Algorithm for UMTS,"',
			'IEEE Wireless Communications and Networking Conference (WCNC), Vol.2, pp.717-721, Mar 2004.',
		)
		+paper(
			'<em>Nei-Chiung Perng</em>, Neung-Tsung Tsai, Jen-Wei Hsieh, and Tei-Wei Kuo,',
			'"The Design and Implementation of a Real-Time Data Dispatching System,"',
			'6th IEEE International Symposium on Object-oriented Real-time Distributed Computing (ISORC 2003).',
		)
		+paper(
			'Tsun-Yu Hsiao, Ruey-Kai Sheu, Kai-Chih Liang, <em>Nei-Chiung Perng</em>, and Shyan-Ming Yuan,',
			'"An Asynchronous High Confident Information Interchange Infrastructure,"',
			'World Multiconference on Synergetics, Cybernetics and Informatics (ISAS-SCIs 2001).',
		)

	h3 International Workshop
	ol
		+paper(
			'Chuan-Yue Yang, Yu-Kai Huang, <em>Nei-Chiung Perng</em>, Jian-Jia Chen, Yun-Han Lee, Chia-Mei Hung, Heng-Ruey Hsu, Szu-Wei Huang, Ai-Chun Pang, and Tei-Wei Kuo,',
			'"Another Real-Time Operating System and Unified MAC Protocol for Home Controlling and Monitoring,"',
			'the 3rd Workshop on Software Technologies for Future Embedded & Ubiquitous Systems in conjunction with IEEE International Symposium on Object-oriented Real-time distributed Computing, Gyeongju, Korea, April 27-28, 2006.',
		)
		+paper(
			'li Chin-Shuang Liu, <em>Nei-Chiung Perng</em>, and Tei-Wei Kuo,',
			'"An Implementation of Budget-Based Resource Reservation for Real-Time Linux,"',
			'Interational Conference on Computational Science (ICCS 2004), Next Generation Computing Workshop, 2004.',
		)
	//-
	h3 Local Conferences
	ol
		+paper(
			'<em>Nei-Chiung Perng</em>, Cheng-Min Lien, Chi-Sheng Shih, and Tei-Wei Kuo,',
			'"On the Minimization of Buffer Memory for Hardware/Software Co-Synthesis Processes,"',
			'VLSI Design/CAD Conference, 2005.',
		)
		+paper(
			'<em>彭念劬</em>、蕭存喻、許瑞愷、袁賢銘,',
			'"以事件為基礎之分散式系統建構環境 (A Development Environment for Event-Based Distributed Systems),"',
			'廿一世紀數位生活與網際網路科技研討會, 2001.',
		)
		+paper(
			'高子漢、洪傳寶、許瑞愷、蕭存喻、<em>彭念劬</em>、袁賢銘,',
			'"內文導向之訊息交換仲介層設計與實作,"',
			'廿一世紀數位生活與網際網路科技研討會, 2001.',
		)
		+paper(
			'<em>彭念劬</em>、鄭兆翔、黃宗元、王聖博、袁賢銘,',
			'"網路化啟發性幾何數學互動學習系統 (Web-based Geometry Inter-Creative Learning System),"',
			'TANET 2000.',
		)

	h3 Others
	ol
		+paper(
			'<em>Nei-Chiung Perng</em>,',
			'"Context Minimization and Task Scheduling for Reconfigurable Embedded Platforms of Real-Time Systems," Ph.D. Dissertation, 2006.',
		)
		+paper(
			'<em>Nei-Chiung Perng</em>,',
			'"A Development Environment for Event-Based Distributed Systems," Master Thesis, June, 2001.',
		)

	#update Last Updated on Sep 29, 2008

</template>

<style lang="stylus">
ol
	li
		margin-bottom: 10px
</style>
