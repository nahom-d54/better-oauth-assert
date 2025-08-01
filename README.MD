# OAuth Assert
![License](https://img.shields.io/github/license/nahom-d54/better-oauth-assert?color=yellow)
![Build](https://img.shields.io/github/actions/workflow/status/nahom-d54/better-oauth-assert/ci.yml)
![npm bundle size](https://img.shields.io/bundlephobia/min/better-oauth-assert)
![NPM Version](https://img.shields.io/npm/v/better-oauth-assert?color=red)
![NPM Downloads](https://img.shields.io/npm/dm/better-oauth-assert?color=8A2BE2)



> A lightweight plugin to assert and validate OAuth clients and flows.

## Overview
OAuth Assert is a project designed to simplify the process of testing and validating OAuth implementations. It provides tools and utilities to ensure secure and compliant authentication flows.

## Features
- Easy-to-use utilities for OAuth testing.
- Support for assert Oauth

## Installation
To install the project, clone the repository and install dependencies:

```bash
pnpm install better-oauth-assert
```

## Usage
Run the application using the following command:

```typescript
import { betterAuth } from "better-auth"
import { oAuthAssert } from "better-oauth-assert"
 
export const auth = betterAuth({
    // ... other config options
    plugins: [
			oAuthAssert({
				config: [
					{
						providerId: "provider-id" ,
						discoveryUrl: "http://example.com/.well-known/openid-configuration",
						clientId: clientId,
						clientAssertion: clientAssertionFunction,
					 // ... other config options
                }, 
                // Add more providers as needed
				],
			}),
		],
})
```

Refer to the documentation for detailed usage instructions.

## Contributing
Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or support, please contact [developer@nahom.codes](mailto:developer@nahom.codes).