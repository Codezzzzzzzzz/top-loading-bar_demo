import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top loading bar demo</title>
      </Head>
      <h1>Top Loading Bar Demo</h1>

      <a
        href="https://www.producthunt.com/posts/top-loading-bar?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-top&#0045;loading&#0045;bar"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=361998&theme=light"
          alt="Top&#0032;Loading&#0032;Bar - reactjs | Product Hunt"
          className={styles.img}
          width="250"
          height="54"
        />
      </a>

      <br />
      <br />
      <br />
      <button>

      <Link href={'/ref'}>
<a>
  Using ref
</a>

</Link>
      </button>
<br />
<button>


<Link href={'/state'}>
<a>
  Using state
</a>

</Link>
</button>

    </div>
  );
}
