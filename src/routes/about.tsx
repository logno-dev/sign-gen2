import { Title } from "@solidjs/meta";
import { createSignal, createResource } from 'solid-js';
// import { getHoldSigns } from '../api/db';
import { createClient } from '@libsql/client/web'

const client = createClient({
  url: import.meta.env.VITE_DB_URI as string,
  authToken: import.meta.env.VITE_DB_TOKEN as string,
})

const getSigns = async () => {
  const data =  await client.execute("select * from test")
  return data.rows[0][1]
}


export default function Home() {
  const [testResource] = createResource({}, getSigns)
  // const test = String( data.rows[0][1] );
  

  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <pre>{JSON.stringify( testResource(), null, 2 )}</pre>
    </main>
  );
}
