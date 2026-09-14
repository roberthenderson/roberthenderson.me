import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import { getYearsExperience } from '@/app/utils/getYearsExperience';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const baseUrl = requestUrl.toString().split('/api')[0];

  const dmSerifText = await fetch(
    `${baseUrl}/fonts/DM_Serif_Text/DMSerifText-Regular.ttf`,
  ).then((res) => res.arrayBuffer());

  const leagueSpartan = await fetch(
    `${baseUrl}/fonts/League_Spartan/static/LeagueSpartan-Medium.ttf`,
  ).then((res) => res.arrayBuffer());

  const dmSans = await fetch(
    `${baseUrl}/fonts/DM_Sans/static/DMSans_36pt-Medium.ttf`,
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: '#1e293b',
        width: '100%',
        height: '100%',
        position: 'relative',
        borderTop: '10px solid #475569',
        borderBottom: '24px solid #475569',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: -110,
          top: -25,
          width: 620,
          height: 620,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 620,
            height: 620,
            borderRadius: 310,
            background:
              'radial-gradient(circle, rgba(99,102,241,0.34) 0%, rgba(99,102,241,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 70,
            top: 70,
            width: 480,
            height: 480,
            borderRadius: 240,
            border: '1px solid rgba(148,163,184,0.28)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 140,
            top: 140,
            width: 340,
            height: 340,
            borderRadius: 170,
            border: '1px solid rgba(148,163,184,0.4)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 205,
            top: 205,
            width: 210,
            height: 210,
            borderRadius: 105,
            border: '2px solid rgba(148,163,184,0.5)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 303,
            top: 63,
            width: 14,
            height: 14,
            borderRadius: 7,
            background: '#ca8a04',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 539,
            top: 304,
            width: 11,
            height: 11,
            borderRadius: 6,
            background: '#ca8a04',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 166,
            top: 476,
            width: 9,
            height: 9,
            borderRadius: 5,
            background: '#64748b',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'DM Sans',
          marginLeft: 'auto',
          paddingTop: 30,
          paddingRight: 60,
        }}
      >
        <p
          style={{
            letterSpacing: -2,
            color: '#ca8a04',
            fontFamily: 'DM Serif Text',
            fontSize: 107,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          Robert Henderson
        </p>
        <p
          style={{
            fontFamily: 'League Spartan',
            color: '#64748b',
            marginTop: 30,
            marginBottom: 0,
            marginLeft: 'auto',
            fontSize: 35,
          }}
        >
          Accomplished Senior
        </p>
        <p
          style={{
            fontFamily: 'League Spartan',
            color: '#e2e8f0',
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 'auto',
            fontSize: 81,
          }}
        >
          Full-Stack
        </p>
        <p
          style={{
            fontFamily: 'League Spartan',
            color: '#e2e8f0',
            marginTop: -10,
            marginLeft: 'auto',
            paddingRight: 4,
            fontSize: 83,
            letterSpacing: -1,
          }}
        >
          Engineer
        </p>
        <p
          style={{
            fontFamily: 'DM Sans',
            color: '#64748b',
            fontSize: 22,
            letterSpacing: 1,
            marginTop: 30,
            marginLeft: 'auto',
          }}
        >
          {getYearsExperience()} years of experience in big tech and startups
        </p>
        <div
          style={{
            display: 'flex',
            gap: 32,
            alignItems: 'center',
            marginTop: 8,
            marginLeft: 'auto',
            marginRight: 5,
          }}
        >
          <img
            alt="Next.js"
            src={`${baseUrl}/icons/og/nextjs.svg`}
            width={50}
            height={50}
          />
          <img
            alt="React"
            src={`${baseUrl}/icons/og/react.svg`}
            width={60}
            height={60}
          />
          <img
            alt="TypeScript"
            src={`${baseUrl}/icons/og/ts.svg`}
            width={50}
            height={50}
          />
          <img
            alt="Tailwind CSS"
            src={`${baseUrl}/icons/og/tailwind.svg`}
            width={60}
            height={60}
          />
          <img
            alt="Postgres"
            src={`${baseUrl}/icons/og/postgres.svg`}
            width={54}
            height={54}
          />
          <img
            alt="Expo and React Native"
            src={`${baseUrl}/icons/og/expo.svg`}
            width={52}
            height={52}
          />
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'DM Serif Text',
          data: dmSerifText,
          style: 'normal',
        },
        {
          name: 'League Spartan',
          data: leagueSpartan,
          style: 'normal',
        },
        {
          name: 'DM Sans',
          data: dmSans,
          style: 'normal',
        },
      ],
    },
  );
}
