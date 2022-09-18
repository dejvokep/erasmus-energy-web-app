import Head from 'next/head'
import PinnedMap from "../components/pinned-map";

export default function Map() {
  return (
    <div>
        <Head>
            <title>Map | Energy is the future of the world</title>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <PinnedMap />
    </div>
  )
}
