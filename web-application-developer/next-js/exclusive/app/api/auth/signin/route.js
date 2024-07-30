// app/api/auth/signin/route.js
import axios from "axios";

export async function POST(request) {
  const { username, password } = await request.json();

  try {
    // Forward the request to the Django API
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/auth/signin/`,
      {
        username,
        password,
      }
    );

    // Return the response from the Django API
    return new Response(JSON.stringify(response.data), {
      status: response.status,
    });
  } catch (error) {
    // Return an error response
    return new Response(
      JSON.stringify({
        detail: error.response?.data?.detail || "Something went wrong",
      }),
      { status: error.response?.status || 500 }
    );
  }
}
