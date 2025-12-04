type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXX";

export const pageview = (url: string) => {
    if (typeof window !== "undefined") {
        window.dataLayer.push({
            event: "pageview",
            page: url,
        });
    }
};

export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label: string;
    value?: number;
}) => {
    if (typeof window !== "undefined") {
        window.dataLayer.push({
            event: action,
            category,
            label,
            value,
        });
    }
};
