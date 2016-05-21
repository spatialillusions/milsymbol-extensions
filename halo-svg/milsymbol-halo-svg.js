MS.addMarkerParts(
	function halo(){
		var haloColor = this.haloColor || 'rgb(255,255,0)';
		var haloRadius = this.haloRadius;
		//var haloBlur = 0;
		var drawArray1 = [];
		var drawArray2 = [];
		var gbbox = new MS.bbox();
		if(haloRadius){	
			var filter = '<defs>';
			filter += '<filter id="morphology">';
			filter += '<feFlood id="outline-color" flood-color="'+haloColor+'" result="base" />';
			filter += '<feMorphology result="bigger" in="SourceGraphic" operator="dilate" radius="'+haloRadius+'" />';
			filter += '<feColorMatrix result="mask" in="bigger" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />';
			filter += '<feComposite result="drop" in="base" in2="mask" operator="in" />';
			//filter += '<feGaussianBlur result="blur" in="drop" stdDeviation="'+haloBlur+'" />';
			filter += '<feBlend in="SourceGraphic" in2="drop" mode="normal" />';
			filter += '</filter>';
			filter += '</defs>';
	
			drawArray1 = [{type:'svg',svg:(filter + '<g filter="url(#morphology)">')}];
			drawArray2 = [{type:'svg',svg:'</g>'}];
			gbbox.y1 = this.bbox.y1 - (haloRadius);
			gbbox.y2 = this.bbox.y2 + (haloRadius);
			gbbox.x1 = this.bbox.x1 - (haloRadius);
			gbbox.x2 = this.bbox.x2 + (haloRadius);
		}
		return MS.buildingBlock(drawArray1,drawArray2,gbbox);
	}
);