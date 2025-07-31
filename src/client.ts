import type { BetterAuthClientPlugin } from "better-auth";
import type { oAuthAssert } from ".";

export const oAuthAssertClient = () => {
	return {
		id: "oauth-assert-client",
		$InferServerPlugin: {} as ReturnType<typeof oAuthAssert>,
	} satisfies BetterAuthClientPlugin;
};
