import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, businessType, message } = body;

        // Create a transporter
        // NOTE: In production, you should use environment variables for these credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nimtechnologiez@gmail.com',
                pass: process.env.GMAIL_APP_PASSWORD // You need to set this in your .env
            }
        });

        const mailOptions = {
            from: 'nimtechnologiez@gmail.com',
            to: 'nimtechnologiez@gmail.com',
            subject: 'New Demo Request - Nim Technologies',
            text: `
                Name: ${name}
                Email: ${email || 'Not provided'}
                Phone: ${phone}
                Business Type: ${businessType}
                Message: ${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #0395B2;">New Demo Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email || 'Not provided'}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Business Type:</strong> ${businessType}</p>
                    <div style="margin-top: 20px; padding: 15px; background: #f4f4f4; border-left: 4px solid #0395B2;">
                        <strong>Message:</strong><br/>
                        ${message.replace(/\n/g, '<br/>')}
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
