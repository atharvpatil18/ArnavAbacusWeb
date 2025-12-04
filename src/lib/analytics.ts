import { event } from "./gtm";

export const trackLeadSubmit = (program: string, location: string) => {
    event({
        action: "lead_submission",
        category: "Lead",
        label: `${program} - ${location}`,
    });
};

export const trackDemoBooking = (status: "started" | "completed") => {
    event({
        action: "demo_booking",
        category: "Booking",
        label: status,
    });
};

export const trackWhatsAppClick = (page: string) => {
    event({
        action: "whatsapp_click",
        category: "Contact",
        label: page,
    });
};
