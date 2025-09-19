export interface AuthProvider {
    type: string;
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    [key: string]: any;
}
export interface AuthDatabase {
    url?: string;
    type?: string;
    dialect?: string;
    adapter?: string;
    provider?: string;
    [key: string]: any;
}
export interface AuthConfig {
    database?: {
        type?: string;
        adapter?: string;
        provider?: string;
        dialect?: string;
        casing?: string;
        debugLogs?: boolean;
        url?: string;
        connectionString?: string;
        [key: string]: any;
    };
    emailAndPassword?: {
        enabled?: boolean;
        disableSignUp?: boolean;
        requireEmailVerification?: boolean;
        maxPasswordLength?: number;
        minPasswordLength?: number;
        resetPasswordTokenExpiresIn?: number;
        autoSignIn?: boolean;
        revokeSessionsOnPasswordReset?: boolean;
        [key: string]: any;
    };
    socialProviders?: Array<{
        id: string;
        name: string;
        enabled: boolean;
    }>;
    trustedOrigins?: string[];
    advanced?: {
        defaultCookieAttributes?: {
            sameSite?: string;
            secure?: boolean;
            httpOnly?: boolean;
        };
        ipAddress?: {
            ipAddressHeaders?: string[];
            disableIpTracking?: boolean;
        };
        useSecureCookies?: boolean;
        disableCSRFCheck?: boolean;
        crossSubDomainCookies?: {
            enabled?: boolean;
            additionalCookies?: string[];
            domain?: string;
        };
        cookies?: Record<string, any>;
        cookiePrefix?: string;
        database?: {
            defaultFindManyLimit?: number;
            useNumberId?: boolean;
        };
        [key: string]: any;
    };
    [key: string]: any;
}
export declare function findAuthConfig(configPath?: string): Promise<AuthConfig | null>;
export declare function extractBetterAuthConfig(content: string): AuthConfig | null;
//# sourceMappingURL=config.d.ts.map