import styles from "../styles/liga.module.css";

export default function liga({ IndividualLiga, timesClassif }) {
  console.log(timesClassif);
  return (
    <div className={styles.container}>
      {/* Title da Liga */}
      <h1>{IndividualLiga.name}</h1>

      {/* Lista de Classificação dos times da liga */}
      <ol className={styles.timesClassif}>
        {timesClassif.map((timeClassif, index) => (
          <li key={index} className={styles.timeClassif}>
            <a>{timeClassif.team.displayName}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}

// REQUISÂO da API da classificação dos times de cada liga Via ServerSideProps
export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const response = await fetch(
      `https://api-football-standings.azharimm.site/leagues/${id}/standings?season=2020&sort=asc`
    );
    const { data } = await response.json();
    const IndividualLiga = data;
    const timesClassif = IndividualLiga.standings;

    return {
      props: { IndividualLiga, timesClassif },
    };
  } catch (error) {
    console.log(err);
  }
}
