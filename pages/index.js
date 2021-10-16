import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout title="Sistema Futebolistico">
      <h1 className={styles.title}>Sistema Futebolístico</h1>

      <ul>
        {data.map((liga) => (
          <li key={liga.id}>
            <Link href={`/liga?id=${liga.id}`}>
              <a>{liga.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://api-football-standings.azharimm.site/leagues`
  );

  const { data } = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
