/*
 * Cloudflare Pages Function - QR Code API Proxy
 * 解決 CORS 問題並代理請求到 QRCode Monkey API
 * https://www.qrcode-monkey.com/qr-code-api-with-logo
 */
export async function onRequestPost(context) {
  try {
    const request = context.request;
    const payload = await request.json();

    console.log("Received request");

    // 如果是獲取已生成的圖片
    if (payload.imageUrl) {
      const imageUrl = "https://api.qrcode-monkey.com" + payload.imageUrl;
      console.log("Fetching image from:", imageUrl);

      const imageResponse = await fetch(imageUrl);

      if (!imageResponse.ok) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch image" }),
          {
            status: imageResponse.status,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          },
        );
      }

      const imageBlob = await imageResponse.blob();
      return new Response(imageBlob, {
        headers: {
          "Content-Type":
            imageResponse.headers.get("content-type") || "image/png",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    // 原本的 QR Code 生成邏輯
    console.log("Generating QR Code");

    const response = await fetch("https://api.qrcode-monkey.com/qr/custom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("QRCode Monkey API Error:", errorText);
      return new Response(
        JSON.stringify({
          error: "API request failed",
          status: response.status,
          details: errorText,
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        },
      );
    }

    const contentType = response.headers.get("content-type");
    console.log("Response content type:", contentType);

    if (contentType && contentType.includes("image")) {
      const imageBlob = await response.blob();
      return new Response(imageBlob, {
        headers: {
          "Content-Type": contentType,
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Function Error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
