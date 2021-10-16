export default function liga({ IndividualLiga, timesClassif }) {
  console.log(timesClassif);
  return (
    <>
      <h1>{IndividualLiga.name}</h1>

      <ul>
        {timesClassif.map((timeClassif, index) => (
          <li key={index}>
            <a>{timeClassif.team.displayName}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

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
