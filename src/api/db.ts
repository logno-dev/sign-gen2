import { createClient } from "@libsql/client/web";

const client = createClient({
  url: import.meta.env.VITE_DB_URI as string,
  authToken: import.meta.env.VITE_DB_TOKEN as string,
});


export async function getHoldSigns() {
  return await client.execute("select * from test")

}
