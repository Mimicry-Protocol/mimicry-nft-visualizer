const getRandomColor = () => { 
  return Math.floor(Math.random() * 16777215).toString(16);
}

export default function generateSVG() {
  const params = {
    collectionChainId: "EVM 1",
    collectionAddress: "0xabcdeabcdefabcdefabcdefabcdefabcdefabcdf",
    collectionSymbol: "BAYC",
    color0: getRandomColor(),
    color1: getRandomColor(),
    color2: getRandomColor(),
    color3: getRandomColor(),
    direction: "👆", // or "👇"
    isRare: Math.random() <= 0.02, // shows up 2% of the time
    timeOpen: "23 hours", // human readable... e.g. 0-23 hours, 1 day, 2 days, etc.
    collateralTokenChainId: "EVM 137",
    collateralTokenAddress: "0x1234567890123456789123456789012345678901",
    collateralTokenSymbol: "USDC",
    collateralAmountUsd: 1,
    mimicTokenId: 123,
    x1: 192,
    x2: 243,
    x3: 37,
    y1: 362,
    y2: 362,
    y3: 131
  }
  
  return `
    <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      ${generateSVGDefs(params)}
      ${generateSVGBorderText(
        params.collateralTokenChainId,
        params.collateralTokenAddress,
        params.collectionChainId,
        params.collectionAddress,
        params.collateralTokenSymbol,
        params.collectionSymbol
      )}
      ${generateSVGCardMantle(
        params.collateralTokenSymbol,
        params.collectionSymbol,
        params.direction
      )}
      ${generateSVGPositionDataAndLocationCurve(
        params.mimicTokenId.toString(),
        params.collateralAmountUsd,
        params.timeOpen
      )}
      ${generateSVGRareSparkle(params.isRare)}
    </svg>
  `;
}

function btoa(string) {
  return Buffer.from(string).toString("base64");
}

function generateSVGDefs(params) {
  return `
    <defs>
      <filter id="f1">
        <feImage result="p0" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
            <rect width='300px' height='300px' fill='#${params.color0}'/>
          </svg>
          `
        )}" />
        <feImage result="p1" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x1}' cy='${params.y1}' r='120px' fill='#${params.color1}'/>
          </svg>
          `
        )}" />
        <feImage result="p2" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x2}' cy='${params.y2}' r='120px' fill='#${params.color2}'/>
          </svg>
          `
        )}" />
        <feImage result="p3" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x3}' cy='${params.y3}' r='100px' fill='#${params.color3}'/>
          </svg>
          `
        )}" />
        <feBlend mode="overlay" in="p0" in2="p1" />
        <feBlend mode="exclusion" in2="p2" />
        <feBlend mode="overlay" in2="p3" result="blendOut" />
        <feGaussianBlur in="blendOut" stdDeviation="40" />
      </filter>
      
      <clipPath id="corners">
        <rect width="300" height="300" rx="40" ry="40" />
      </clipPath>',
      <path id="text-path-a" d="
        M40 11 
        H260 
        A30 30 0 0 1 290 40 
        V260 
        A30 30 0 0 1 260 290 
        H40 
        A30 30 0 0 1 12 260 
        V40 
        A30 30 0 0 1 40 11
        z
        " />
      <filter id="top-region-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="24" />
      </filter>
      <linearGradient id="grad-up" x1="1" x2="0" y1="1" y2="0">
        <stop offset="0.0" stop-color="white" stop-opacity="1" />
        <stop offset=".9" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="grad-down" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0.0" stop-color="white" stop-opacity="1" />
        <stop offset="0.9" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-up" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-up)" />
      </mask>
      <mask id="fade-down" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-down)" />
      </mask>
      <mask id="none" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="white" />
      </mask>
      <linearGradient id="grad-symbol">
        <stop offset="0.7" stop-color="white" stop-opacity="1" />
        <stop offset=".95" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-symbol" maskContentUnits="userSpaceOnUse">
        <rect width="300px" height="200px" fill="url(#grad-symbol)" />
      </mask>
    </defs>
    <g clip-path="url(#corners)">
      <rect fill="${
        params.color0
      }" x="0px" y="0px" width="300px" height="300px" />
      <rect style="filter: url(#f2)" x="0px" y="0px" width="300px" height="300px" />
      <rect style="filter: url(#f1)" x="0px" y="0px" width="300px" height="300px" opacity="0.65" />
      <g style="filter:url(#top-region-blur); transform:scale(1.5); transform-origin:center top;">
      <rect fill="none" x="0px" y="0px" width="300px" height="300px" />
      <ellipse cx="50%" cy="0px" rx="180px" ry="120px" fill="#000" opacity="0.65" /></g>
      <rect x="0" y="0" width="300" height="300" rx="42" ry="42" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)" />
    </g>
  `;
}

function generateSVGBorderText(
  collateralTokenChainId,
  collateralTokenAddress,
  collectionChainId,
  collectionAddress,
  collateralTokenSymbol,
  collectionSymbol
) {
  return `
  <text text-rendering="optimizeSpeed">
    <textPath startOffset="-100%" fill="white" font-family="Courier New', monospace" font-size="10px" xlink:href="#text-path-a">
      ${collectionChainId}-${collectionAddress} • ${collectionSymbol}
      <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite" />
    </textPath> 
    <textPath startOffset="0%" fill="white" font-family="Courier New', monospace" font-size="10px" xlink:href="#text-path-a">
      ${collectionChainId}-${collectionAddress} • ${collectionSymbol}
      <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite" />
    </textPath>
    <textPath startOffset="50%" fill="white" font-family="Courier New', monospace" font-size="10px" xlink:href="#text-path-a">
      ${collateralTokenChainId}-${collateralTokenAddress} • ${collateralTokenSymbol}
      <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite" />
    </textPath>
    <textPath startOffset="-50%" fill="white" font-family="Courier New', monospace" font-size="10px" xlink:href="#text-path-a">
      ${collateralTokenChainId}-${collateralTokenAddress} • ${collateralTokenSymbol}
      <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite" />
    </textPath>
  </text>
	`;
}

function generateSVGCardMantle(collateralTokenSymbol, collectionSymbol, direction) {
  return `
  <g mask="url(#fade-symbol)">
    <rect fill="none" x="0px" y="0px" width="300px" height="200px" />
    <text y="70px" x="32px" fill="white" font-family="'Courier New', monospace" font-weight="200" font-size="36px">
      ${collectionSymbol}${direction}
    </text>
  </g>
  <rect x="16" y="16" width="270" height="270" rx="26" ry="26" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)" />'
	`;
}

function tickToString(tick) {
  let sign = "";

  if (tick < 0) {
    tick = tick * -1;
    sign = "-";
  }
  return `${sign}${tick.toString()}`;
}

function s(x) {
  return x.charCodeAt(0);
}

function bytes(string) {
  return string.split("").map(s);
}

function generateSVGPositionDataAndLocationCurve(
  mimicTokenId,
  collateralAmountUsd,
  timeOpen
) {
  const collateralAmountUsdStr = collateralAmountUsd.toString();
  const str1length = bytes(mimicTokenId).length + 4;
  const str2length = bytes(collateralAmountUsdStr).length + 13;
  const str3length = bytes(timeOpen).length + 11;

  return `
  <g style="transform:translate(29px, 175px)">
    <rect width="${(
      7 *
      (str1length + 4)
    ).toString()}px" height="26px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)" />
    <text x="12px" y="17px" font-family="Courier New', monospace" font-size="12px" fill="white">
      <tspan fill="rgba(255,255,255,0.6)">ID: </tspan>${mimicTokenId}
    </text>
  </g>
  <g style="transform:translate(29px, 205px)">
    <rect width="${(
      7 *
      (str2length + 4)
    ).toString()}px" height="26px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)" />
    <text x="12px" y="17px" font-family="Courier New', monospace" font-size="12px" fill="white">
      <tspan fill="rgba(255,255,255,0.6)">Collateral: $</tspan>${collateralAmountUsdStr}
    </text>
  </g>
  <g style="transform:translate(29px, 235px)">
    <rect width="${(
      7 *
      (str3length + 4)
    ).toString()}px" height="26px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)" />
    <text x="12px" y="17px" font-family="Courier New', monospace" font-size="12px" fill="white">
      <tspan fill="rgba(255,255,255,0.6)">Hold Time: </tspan>${timeOpen}
    </text>
  </g>
	`;
}

function generateSVGRareSparkle(isRare) {
  if (isRare) {
    return `
			<g style="transform:translate(226px, 224px)">
        <rect width="36px" height="36px" rx="8px" ry="8px" fill="none" stroke="rgba(255,255,255,0.2)" />
			<g>
      <path style="transform:translate(6px,6px)" d="M12 0L12.6522 9.56587L18 1.6077L13.7819 10.2181L22.3923 6L14.4341 11.3478L24 12L14.4341 12.6522L22.3923 18L13.7819 13.7819L18 22.3923L12.6522 14.4341L12 24L11.3478 14.4341L6 22.3923L10.2181 13.7819L1.6077 18L9.56587 12.6522L0 12L9.56587 11.3478L1.6077 6L10.2181 10.2181L6 1.6077L11.3478 9.56587L12 0Z" fill="white" />',
			<animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s" repeatCount="indefinite"/></g></g>
      `;
  } else {
    return "";
  }
}
