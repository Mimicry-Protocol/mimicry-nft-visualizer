import Head from "next/head"; // Html head
import styles from "styles/Layout.module.scss"; // Component styles

export default function Layout({ children }) {
  return (
    <div>
      {/* Meta + Head */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Mimicry NFT Visualizer</title>
        <meta name="title" content="Mimicry NFT Visualizer" />
        <meta
          name="description"
          content="Explore the art behind Mimicry's Non-Fungible Token positions."
        />

        {/* Open Graph + Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mimicry-nft-visualizer.netlify.app" />
        <meta property="og:title" content="Mimicry NFT Visualizer" />
        <meta
          property="og:description"
          content="Explore the art behind Mimicry's Non-Fungible Token positions."
        />
        <meta
          property="og:image"
          content=""
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mimicry-nft-visualizer.netlify.app" />
        <meta property="twitter:title" content="Mimicry NFT Visualizer" />
        <meta
          property="twitter:description"
          content="Explore the art behind Mimicry's Non-Fungible Token positions."
        />
        <meta
          property="twitter:image"
          content=""
        />

        {/* Font preload */}
        <link
          rel="preload"
          href="/fonts/CourierNew.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Header content */}
      <div className={styles.layout__header}>
        <img src="/vectors/logo.svg" alt="Mimicry logo" />
        <h1>Mimicry NFT Visualizer</h1>
        <p>Mimics are NFTs that represent positions within the {" "}
          <a
            href="https://mimicry.finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mimicry Protocol
          </a>.
        </p> 
        <p>
          This work is based on {" "}
          <a
            href="https://anishagnihotri.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anish's
          </a>{" "}
          <a
            href="https://github.com/anish-agnihotri/uniswap-lp-nfts"
            target="_blank"
            rel="noopener noreferrer"
          >
            side project
          </a>,{" "}
          which is based on the incredible work by{" "}
          <a
            href="https://etherscan.io/address/0xe8ab59d3bcde16a29912de83a90eb39628cfc163"
            target="_blank"
            rel="noopener noreferrer"
          >
            0xe8...c163
          </a>
          ,{" "}
          <a
            href="https://twitter.com/_callil"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_callil
          </a>
          , and{" "}
          <a
            href="https://twitter.com/crypt0glitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            @crypt0glitter
          </a>
          .
        </p>
      </div>

      {/* Content */}
      <div className={styles.layout__content}>{children}</div>
    </div>
  );
}
