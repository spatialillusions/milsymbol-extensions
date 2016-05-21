# bubble-svg

![](bubble-example.png?raw=true)

The halo-svg extension creates a halo around the symbol that can be used to indicate selected symbols, or to simply make the symbols stand out against the background.

This extension only works with SVG output and not with Canvas output. If you use it with Canvas methods the symbol will be returned without the halo.

## Usage
Include the javascript file milsymbol-bubble-svg.js in your HTML page. It is now possible to use a custom propertie on your symbols. You can set and modify them as any other properties on your symbols, either when you create your symbol, or at any time before you request a new marker.

### bubble
Enables 3d effect on your symbols, if not set or set to false, the extension is disabled.

Example: (Enables 3d effect on symbols)
```
mysymbol.bubble = true;
```

## milsymbol version
Tested with milsymbol 0.5.6.