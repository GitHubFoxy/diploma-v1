export async function GET({ params, request }) {
    const response = await fetch("http://localhost:3002");
    return new Response(await response.text());
  }