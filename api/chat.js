// api/chat.js
export default async function handler(req, res) {
  // CORS (adjust origin if you want to restrict)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(404).send("Not Found");
  }

  try {
    // Forward the incoming request body to OpenRouter (or any upstream)
    const upstreamResp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.MODEL_API_KEY}`
      },
      // If req.body is already parsed by Vercel, pass it as JSON text
      body: JSON.stringify(req.body)
    });

    const data = await upstreamResp.json();
    return res.status(upstreamResp.status).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    return res.status(500).json({ error: true, message: err.message });
  }
}
