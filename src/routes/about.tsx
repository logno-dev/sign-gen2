import { Title } from "@solidjs/meta";
import { createSignal, createResource } from 'solid-js';
import { getHoldSigns } from '../api/db';
// import { createClient } from '@libsql/client/web'


export default function Home() {
  const [testResource] = createResource({}, getHoldSigns)
  

  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <pre>{JSON.stringify( testResource(), null, 2 )}</pre>
    </main>
  );
}
