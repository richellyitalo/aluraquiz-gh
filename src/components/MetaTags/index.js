export default function MetaTags() {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>Quiz CSS da Alura by RichellyItalo</title>
      <meta name="title" content="Quiz CSS da Alura by RichellyItalo" />
      <meta name="description" content="Quiz CSS da Alura by RichellyItalo" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://aluraquiz-gh.richellyitalo.vercel.app/"
      />
      <meta property="og:title" content="Quiz CSS da Alura by RichellyItalo" />
      <meta
        property="og:description"
        content="Quiz CSS da Alura by RichellyItalo"
      />
      <meta property="og:image" content="/bg.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://aluraquiz-gh.richellyitalo.vercel.app/"
      />
      <meta
        property="twitter:title"
        content="Quiz CSS da Alura by RichellyItalo"
      />
      <meta
        property="twitter:description"
        content="Quiz CSS da Alura by RichellyItalo"
      />
      <meta property="twitter:image" content="/bg.jpg" />
    </>
  );
}
