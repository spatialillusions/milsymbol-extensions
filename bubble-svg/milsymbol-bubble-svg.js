MS.addMarkerParts(
	function bubble(){
		var drawArray1 = [];
		var drawArray2 = [];
		var gbbox = new MS.bbox();
		if(this.bubble){	
			var filter = '<defs>';
			filter += '<filter id="bubble" style="color-interpolation-filters:sRGB;">'
			filter += '	<feGaussianBlur stdDeviation="20" in="SourceGraphic" result="result0" />'
			filter += '	<feDiffuseLighting lighting-color="rgb(240,240,240)" diffuseConstant="1" surfaceScale="4" result="result5">'
			filter += '		<feDistantLight elevation="43" azimuth="235" />'
			filter += '	</feDiffuseLighting>'
			filter += '	<feComposite k1="1.4" in2="SourceGraphic" in="result5" result="fbSourceGraphic" operator="arithmetic" />'
			filter += '	<feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="6" />'
			filter += '	<feSpecularLighting specularExponent="25" specularConstant="1" surfaceScale="4" lighting-color="rgb(255,255,255)" result="result1" in="result0">'
			filter += '		<feDistantLight azimuth="235" elevation="45" />'
			filter += '	</feSpecularLighting>'
			filter += '	<feComposite k3="1" k2="1" operator="arithmetic" in="fbSourceGraphic" in2="result1" result="result4" />'
			filter += '	<feComposite operator="in" result="result2" in2="SourceGraphic" in="result4" />'
			filter += '</filter>'    
			filter += '</defs>';
	
			drawArray1 = [{type:'svg',svg:(filter + '<g filter="url(#bubble)">')}];
			drawArray2 = [{type:'svg',svg:'</g>'}];
			gbbox.y1 = this.bbox.y1 - (haloRadius);
			gbbox.y2 = this.bbox.y2 + (haloRadius);
			gbbox.x1 = this.bbox.x1 - (haloRadius);
			gbbox.x2 = this.bbox.x2 + (haloRadius);
		}
		return MS.buildingBlock(drawArray1,drawArray2,gbbox);
	}
);