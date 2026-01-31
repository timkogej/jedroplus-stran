import { NextRequest, NextResponse } from "next/server";

const N8N_ENDPOINT = "https://tikej.app.n8n.cloud/webhook/jedroplus/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(N8N_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit inquiry" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
