<template lang="pug">
#index_zh
	h2
		img(src="images/heading_Homepage.gif")
	
	h3 自我介紹	
	table(border="0", width="529")
		tr
			td
				dl
					dt
						b 姓名
						| : 彭念劬
					dt
						b Name
						| : Perng, Nei-Chiung (Neil)

				dl
					dt
						b 生日
						| : 66.10.01
					dt
						b 血型
						| : O 型                      
					dt
						b 身高
						| : 172 公分
					dt
						b 體重
						| : 60 公斤
					dt
						b 興趣
						| : 彈吉它、閱讀、球類運動

				dl
					dt
						b 信箱
						| : neil (AT) cis.nctu.edu.tw 或是 ncperng (AT) gmail.com
					dt
						b 網絡
						| : 
						a(href="http://www.new.facebook.com/people/Nei-Chiung_Perng/1310742010") Facebook
						| &nbsp;或是&nbsp;
						a(href="http://funp.com/user/ncperng") funP 麻吉
					dt
						b 個版
						| : 
						a(href="telnet://alexbbs.twbbs.org") 老鼠的香香乳酪洞
						| &nbsp;Libran 版
					dt
						b 部落格
						| : 
						a(href="http://ncperng.blogspot.com") 小蛆的蟲洞

	mixin update(date, desc)
		p
			em= date
			br
			!= desc

	h3 最近更新
	+update('2010.10.06', '更新一下工作經驗囉。')
	+update('2008.09.29', '只能說這個颱風來的剛好，給了我一天閒閒的颱風假。也不知道為什麼會一時興起，結果呢，就是把這整個網站完全改版了。天啊，我居然還像在學生時代一樣無聊... 總之，我的網頁整個更新了，希望你會喜歡。')
	+update('2006.10.21', '結束了三個月國防役的新訓，開始進入公司工作囉。更新了一下首頁的自我介紹，然後把 frappr 的資料放到我的旅遊地圖中，希望以後能直接把出去玩的照片放到地圖上。')
	+update('2006.05.29', '趁著剛從希臘回來，把自己的旅遊地圖更新了一下，也更新了 Publication List。')
	+update('2006.03.05', '其實一直想把網頁重新作一下，距離上次修改己經是快兩年前的事情了。當然，依慣例又是一個心血來潮，我再度修改了我的網頁。這次是作了一個相當大的改變，整個網頁的樣版全部更新，花了一整個下午的時間才完成。內容上倒是沒有太大的改變，讓我想想還應該放些什麼東西上去吧。不管怎麼說，新網頁看起來好舒服啊！')
	+update('2004.06.18', '轉眼間一年就過去了，然後什麼事都沒有動，哇哈哈，我果然是無敵懶人啊！ ^_^ <br>今天突然有興緻，把網頁稍作修改一下，大家看看有沒有好看一點。然後加了我的旅遊地圖，希望那天環遊世界的夢想真得能夠完成。<br>')
	+update('2003.05.30', '稍稍修了一下，把大部份可以用程式解決的部份處理掉，自介也整理了一下，看看吧！<br>')
	+update('2003.05.20', '把首頁搞定了，主要是放些更新公告，下一步是把自介再整理一下，然後作個小留言版。 :p')
	+update('2003.05.19', '不知怎麼搞的，一時心血來潮，就想弄弄自己的網頁，呃，這下可好了，看來得花翻工夫，好好作作網頁啦！<br>哇哈哈哈... 什麼都沒有，什麼都沒有... 哇哈哈哈~~~~（奇怪，怎麼笑得有點心酸..） 給點時間我吧！（港式文法）我會來好好弄弄的....<br>')

	#update Last Updated on Oct 06, 2010
</template>

<style lang="stylus">
#text_area #index_zh em
	font-style: italic
</style>
