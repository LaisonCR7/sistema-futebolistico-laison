/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home({ data }) {
  return (
    <Layout title="Sistema Futebolistico">
      <div className={styles.container}>
        {/* TITLE DO SISTEMA */}
        <h1 className={styles.title}>
          <span>Sistema</span> Futebolístico{" "}
        </h1>

        {/* List das Ligas */}
        <ul className={styles.ligasList}>
          {data.map((liga) => (
            <li key={liga.id}>
              <Link href={`/liga?id=${liga.id}`}>
                <a>
                  {/* Logo da Liga */}
                  <img
                    src={liga.logos.dark}
                    alt={data.name}
                    className={styles.ligaImage}
                  />

                  {/* Nome / Abrev / Botão */}
                  <div className={styles.ligaNames}>
                    <span>{liga.abbr}</span>
                    <p>{liga.name}</p>
                    <p className={styles.btnClassic}>
                      Classificação da Liga {">"}
                      {">"}
                    </p>
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

// REQUISÂO da API das Listas das Ligas Via StaticProps
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
