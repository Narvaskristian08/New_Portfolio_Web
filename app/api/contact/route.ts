import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const MAX_BODY_LENGTH = 10_000
const DEFAULT_FROM_EMAIL = 'KDBN Portfolio <onboarding@resend.dev>'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactRequest = {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
  website?: unknown
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status })
}

function getTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return errorResponse('Please submit the contact form again.', 415)
  }

  let body: ContactRequest

  try {
    const rawBody = await request.text()

    if (rawBody.length > MAX_BODY_LENGTH) {
      return errorResponse('Your message is too long. Please shorten it and try again.', 413)
    }

    body = JSON.parse(rawBody) as ContactRequest
  } catch {
    return errorResponse('Please check the form and try again.', 400)
  }

  const website = getTrimmedString(body.website)

  if (website) {
    return NextResponse.json({ ok: true })
  }

  const name = getTrimmedString(body.name)
  const email = getTrimmedString(body.email)
  const subject = getTrimmedString(body.subject)
  const message = getTrimmedString(body.message)

  if (name.length < 2 || name.length > 80) {
    return errorResponse('Please enter a name between 2 and 80 characters.', 400)
  }

  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return errorResponse('Please enter a valid email address.', 400)
  }

  if (subject.length < 3 || subject.length > 120 || /[\r\n]/.test(subject)) {
    return errorResponse('Please enter a subject between 3 and 120 characters.', 400)
  }

  if (message.length < 10 || message.length > 3000) {
    return errorResponse('Please enter a message between 10 and 3,000 characters.', 400)
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim()
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL

  if (!apiKey || !toEmail) {
    console.error('Contact form email delivery is not configured.')
    return errorResponse('The contact form is temporarily unavailable. Please try again later.', 503)
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio inquiry: ${subject}`,
      text: [
        'New portfolio inquiry',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend could not deliver the portfolio inquiry.', error)
      return errorResponse('Your message could not be sent. Please try again shortly.', 502)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Unexpected contact form delivery failure.', error)
    return errorResponse('Your message could not be sent. Please try again shortly.', 500)
  }
}
