import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // For now, we'll use a simple mailto approach
    // In production, you would use a service like Resend, SendGrid, or Nodemailer
    // This constructs the email content
    const emailContent = {
      to: 'jf2023kheil@gmail.com',
      from: email,
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    // TODO: Implement actual email sending using your preferred service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send(emailContent);

    // For now, we'll just log it and return success
    console.log('Email would be sent:', emailContent)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
