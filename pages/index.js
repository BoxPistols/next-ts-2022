import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[スライム（英: slime）は本来、ある種の性状を持った物質（どろどろ、ぬるぬるしたもの）を大ざっぱに指す言葉であった。従って粘土や泥などの無機物から、生物の分泌する粘液などの有機物、またそれらの複合体など実に様々なものがスライムと呼ばれる。]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
