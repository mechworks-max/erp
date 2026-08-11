import { IK_PUBLIC_KEY, IK_PRIVATE_KEY, IK_URL_ENDPOINT } from "@/lib/imagekit";
import { getUploadAuthParams } from "@imagekit/next/server";
import { NextResponse } from "next/server";
import { getUser } from "@/lib/auth";

export async function GET() {
  // STEP 1: Log the start of the request
  console.log("=== [ImageKit Auth API] Request Received ===");

  try {
    // STEP 2: Verify the user session and log the result
    const user = await getUser();
    console.log(
      "[ImageKit Auth API] User Status:",
      user ? `Authenticated (ID: ${user.id}, Role: ${user.role})` : "Unauthenticated"
    );

    if (!user) {
      console.warn("[ImageKit Auth API] Rejected: User session missing or expired.");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // STEP 3: Validate that the environment variables are successfully loaded in Vercel
    const keyDiagnostic = {
      hasPublicKey: Boolean(IK_PUBLIC_KEY),
      publicKeyPrefix: IK_PUBLIC_KEY ? IK_PUBLIC_KEY.substring(0, 10) + "..." : "MISSING",
      hasPrivateKey: Boolean(IK_PRIVATE_KEY),
      privateKeyLength: IK_PRIVATE_KEY ? IK_PRIVATE_KEY.length : 0,
      urlEndpoint: IK_URL_ENDPOINT || "MISSING",
    };

    console.log("[ImageKit Auth API] Env Keys Presence Check:", keyDiagnostic);

    if (!IK_PRIVATE_KEY || !IK_PUBLIC_KEY || !IK_URL_ENDPOINT) {
      console.error(
        "[ImageKit Auth API] CRITICAL ERROR: ImageKit environment variables are empty or missing in Vercel!"
      );
    }

    // STEP 4: Generate Auth Tokens using the official SDK
    const authParams = getUploadAuthParams({
      privateKey: IK_PRIVATE_KEY,
      publicKey: IK_PUBLIC_KEY,
    });

    // STEP 5: Log the generated signature details to ensure the SDK didn't fail silently
    console.log("[ImageKit Auth API] Generated Auth Parameters:", {
      token: authParams.token,
      expire: authParams.expire,
      hasSignature: Boolean(authParams.signature),
      signatureLength: authParams.signature ? authParams.signature.length : 0,
    });

    // STEP 6: Return the payload to the frontend
    return NextResponse.json({
      token: authParams.token,
      expire: authParams.expire,
      signature: authParams.signature,
      publicKey: IK_PUBLIC_KEY,
      urlEndpoint: IK_URL_ENDPOINT,
    });
  } catch (error) {
    // STEP 7: Catch and log any server crashes
    console.error("[ImageKit Auth API] Unexpected Server Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}