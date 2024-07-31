import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/products/?qsize=8"
    );
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching data" }), {
      status: 500,
    });
  }
}
