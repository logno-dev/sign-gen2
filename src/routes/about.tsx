import { Title } from "@solidjs/meta";
import { getHoldSigns } from '../api/db';

const data = await getHoldSigns();

export default function Home() {
  const test = String( data.rows[0][1] );

  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <p>{test}</p>
    </main>
  );
}
