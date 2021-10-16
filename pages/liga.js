export default function liga({ IndividualLiga }) {
  console.log(IndividualLiga);
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const response = await fetch(
      `https://api-football-standings.azharimm.site/leagues/${id}/standings?season=2021&sort=asc`
    );
    const IndividualLiga = await response.json();

    return {
      props: { IndividualLiga },
    };
  } catch (error) {
    console.log(err);
  }
}
