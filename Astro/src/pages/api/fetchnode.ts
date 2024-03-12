export async function GET({ params, request }) {
    const response = await fetch("http://localhost:3000/posts");
    return new Response(await response.json());
  }