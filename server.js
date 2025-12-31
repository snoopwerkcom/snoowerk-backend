const API_BASE = "https://snoopwerkcom-production.up.railway.app";

/**
 * Fetch user credits
 */
export async function fetchCredits() {
  const res = await fetch(`${API_BASE}/user/credits`);

  if (!res.ok) {
    throw new Error("Failed to fetch credits");
  }

  return res.json();
}

/**
 * Generate AI image
 */
export async function generateAIImage(
  prompt: string,
  aspectRatio: string = "1:1"
) {
  const res = await fetch(`${API_BASE}/ai/generate-image`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, aspectRatio }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Server error");
  }

  return res.json();
}
