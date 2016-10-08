# halo-svg

![](halo-example.png?raw=true)

----
**It is now possible to use built in functionality in milsymbol to have this for both SVG and Canvas**
https://github.com/spatialillusions/milsymbol/issues/50

----

The halo-svg extension creates a halo around the symbol that can be used to indicate selected symbols, or to simply make the symbols stand out against the background.

This extension only works with SVG output and not with Canvas output. If you use it with Canvas methods the symbol will be returned without the halo.

## Usage
Include the javascript file milsymbol-halo-svg.js in your HTML page. It is now possible to use two custom properties on your symbols. You can set and modify them as any other properties on your symbols, either when you create your symbol, or at any time before you request a new marker.

### haloRadius
Sets the radius of the halo, if not set or set to 0, the extension is disabled.

Example: (Sets radius to 3)
```
mysymbol.haloRadius = 3;
```

### haloColor
Sets the color of the halo, if not set it defaults to yellow. Can be set to any SVG color value.

Example: (Sets halocolor to white)
```
mysymbol.haloColor = 'rgb(255,255,255)';
```


## milsymbol version
Tested with milsymbol 0.5.6.
