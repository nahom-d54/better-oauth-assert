import { betterFetch } from "@better-fetch/fetch";
import type { OAuth2Tokens, ProviderOptions } from "./types";

export async function refreshAccessToken({
	refreshToken,
	options,
	tokenEndpoint,
	extraParams,
	grantType = "refresh_token",
}: {
	refreshToken: string;
	options: ProviderOptions;
	tokenEndpoint: string;
	extraParams?: Record<string, string>;
	grantType?: string;
}): Promise<OAuth2Tokens> {
	const body = new URLSearchParams();
	const headers: Record<string, any> = {
		"content-type": "application/x-www-form-urlencoded",
		accept: "application/json",
	};

	body.set("grant_type", grantType);
	body.set("refresh_token", refreshToken);

	body.set("client_id", options.clientId);
	if (options.clientAssertion && options.clientAssertionType) {
		body.set("client_assertion", options.clientAssertion);
		body.set("client_assertion_type", options.clientAssertionType);
	} else {
		throw new Error(
			" clientAssertion with clientAssertionType must be provided.",
		);
	}

	if (extraParams) {
		for (const [key, value] of Object.entries(extraParams)) {
			body.set(key, value);
		}
	}

	const { data, error } = await betterFetch<{
		access_token: string;
		refresh_token?: string;
		expires_in?: number;
		token_type?: string;
		scope?: string;
		id_token?: string;
	}>(tokenEndpoint, {
		method: "POST",
		body,
		headers,
	});
	if (error) {
		throw error;
	}
	const tokens: OAuth2Tokens = {
		accessToken: data.access_token,
		refreshToken: data.refresh_token,
		tokenType: data.token_type,
		scopes: data.scope?.split(" "),
		idToken: data.id_token,
	};

	if (data.expires_in) {
		const now = new Date();
		tokens.accessTokenExpiresAt = new Date(
			now.getTime() + data.expires_in * 1000,
		);
	}

	return tokens;
}
