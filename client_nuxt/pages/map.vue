<template lang="pug">
#map
	h2
		img(src="/images/heading_TravelMap.gif")

	p 不管是功成名就之後，花大錢坐著噴射機、豪華郵輪；或是靠自己能力騎著腳踏車、自助旅行，很多人都有著環遊世界的夢想。
	p 而我，當然也不例外。
	p 我找到了底下這麼一個程式，可以讓我一塊一塊的填上去過的國家。希望真的有那麼一天，我可以至少填完三分之二的部份。

	h3 拜訪過的國家
	svg#world(width="512", height="350")
	br
	br

	h3 地圖與照片
	p 另外就是一些我的照片囉，這張是 Google Map，隨便看看吧！
	p
	iframe(src="https://www.google.com/maps/d/u/0/embed?mid=1u1oYLtjvVZdIOP-BzHzWvK8CrJk&ehbc=2E312F", width="510", height="350")

	#update Last Updated on Sep 29, 2008
</template>

<script setup>
/**
 * Reference from
 *   https://vizhub.com/sriramvsharma/ff9a12c4d0e44c53b0ac4405b7a68d40?edit=files&file=index.js.
 *   https://dev.to/sriramvsharma/drawing-a-world-map-in-13-lines-of-code-368a
 *
 * The topojson-client module provides tools for manipulating TopoJSON, such as to merge shapes or quantize coordinates, and for converting back to GeoJSON for rendering with standard tools such as d3.geoPath.
 */
import { select, json, geoPath, geoNaturalEarth1 } from "d3";
import { feature } from "topojson-client";

const svg = select("svg");
const projection = geoNaturalEarth1();
const pathGenerator = geoPath().projection(projection);
json("https://unpkg.com/world-atlas@1.1.4/world/110m.json").then((data) => {
	const countries = feature(data, data.objects.countries);
	svg.selectAll("path").data(countries.features).enter().append("path").attr("class", "country").attr("d", pathGenerator);
});
</script>
