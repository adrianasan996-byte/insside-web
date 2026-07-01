import { readFileSync } from 'fs'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get('pap_auth')
  if (!cookie?.value) {
    return NextResponse.redirect(new URL('/capacitacion-pap', req.url))
  }
  const html = readFileSync(join(process.cwd(), 'public/capacitacion-pap/index.html'), 'utf-8')
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
