import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return new NextResponse("Missing code parameter", { status: 400 });
  }

  const clientId = (process.env.GITHUB_OAUTH_CLIENT_ID || "").trim();
  const clientSecret = (process.env.GITHUB_OAUTH_CLIENT_SECRET || "").trim();

  if (!clientId || !clientSecret) {
    return new NextResponse("OAuth not configured", { status: 500 });
  }

  // Exchange code for access token
  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error) {
    return new NextResponse(`GitHub OAuth error: ${tokenData.error_description || tokenData.error}`, { status: 401 });
  }

  const token = tokenData.access_token;

  const content = `<!DOCTYPE html>
<html>
  <body>
    <script>
      (function() {
        var token = "${token}";
        var provider = "github";

        function sendMessage(e) {
          window.opener.postMessage(
            "authorization:" + provider + ":success:" + JSON.stringify({ token: token, provider: provider }),
            e.origin
          );
          window.removeEventListener("message", sendMessage, false);
        }

        window.addEventListener("message", sendMessage, false);
        window.opener.postMessage("authorizing:" + provider, "*");
      })();
    </script>
  </body>
</html>`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/html" },
  });
}
