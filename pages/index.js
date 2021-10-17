/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout title="Sistema Futebolistico">
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>Sistema</span> Futebolístico{" "}
        </h1>
        <ul className={styles.ligasList}>
          {data.map((liga) => (
            <li key={liga.id}>
              <Link href={`/liga?id=${liga.id}`}>
                <a>
                  <img
                    src={liga.logos.dark}
                    alt={data.name}
                    className={styles.ligaImage}
                  />
                  <div className={styles.ligaNames}>
                    <span>{liga.abbr}</span>
                    <p>{liga.name}</p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
