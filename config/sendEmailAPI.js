import axios from "axios";

export const sendEmail = async ({ email, subject, text }) => {
    try {
        console.log("Sending email via Brevo API...");

        const response = await axios({
            method: "post",
            url: "https://api.brevo.com/v3/smtp/email",
            headers: {
                "api-key": process.env.BREVO_API_KEY,
                "Content-Type": "application/json",
            },
            data: {
                sender: { email: process.env.SENDER_EMAIL },
                to: [{ email }],
                subject,
                textContent: text,
            },
            timeout: 10000 
        });

        console.log("Email sent:", response.data);

    } catch (error) {
        console.error("Brevo API error:", error.response?.data || error.message);
    }
};