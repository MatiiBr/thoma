import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Thoma — Software Development & Marketing'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(108, 92, 231, 0.15)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '200px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(0, 229, 160, 0.1)',
            filter: 'blur(80px)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#EAEAF0',
            display: 'flex',
          }}
        >
          Thoma
          <span style={{ color: '#6C5CE7' }}>.</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: '#7A7A8E',
            marginTop: '16px',
          }}
        >
          Software Development & Marketing
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            color: '#7A7A8E',
            marginTop: '32px',
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          Transformamos ideas en productos digitales de alto impacto.
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #6C5CE7, #00E5A0)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
