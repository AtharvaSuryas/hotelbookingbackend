import axios from "axios";

export const sendEmail = async ({ email, subject, text }) => {
    try {
        await axios.post(
            "https://api.brevo.com/v3/smtp/email",
            {
                sender: { email: process.env.SENDER_EMAIL },
                to: [{ email }],
                subject,
                textContent: text,
            },
            {
                headers: {
                    "api-key": process.env.BREVO_API_KEY,
                    "Content-Type": "application/json",
                },
                timeout: 10000
            }
        );

        console.log("Email sent");

    } catch (error) {
        console.error("Email error:", error.response?.data || error.message);
    }
};