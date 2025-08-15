import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

---
Sent from Dibujantis website contact form
    `.trim()

    // Send email using a simple approach (you might want to use a service like SendGrid, Resend, or Nodemailer)
    // For now, we'll use a basic email service or you can integrate with your preferred email service
    
    // Example using a simple email service (you'll need to replace this with your preferred method)
    const emailData = {
      to: 'antolaser@gmail.com',
      subject: `New Contact from ${name} - Dibujantis`,
      text: emailContent,
      from: email
    }

    // You can integrate with services like:
    // - SendGrid: https://sendgrid.com/
    // - Resend: https://resend.com/
    // - Nodemailer with Gmail SMTP
    // - EmailJS for client-side sending

    // For now, we'll simulate successful sending
    // Replace this with actual email sending logic
    console.log('Email would be sent:', emailData)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 