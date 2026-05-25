export interface GHLContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  source: string;
  tags?: string[];
}

export async function sendToGHL(payload: GHLContactPayload): Promise<void> {
  try {
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("GHL sendToGHL error:", err);
  }
}
