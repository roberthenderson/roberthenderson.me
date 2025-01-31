import { getYearsExperience } from '@/src/utils/getYearsExperience';
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
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
    (
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
            left: -140,
            top: -10,
          }}
        >
          <img
            src={`${baseUrl}/robert.png`}
            alt="Robert Henderson, Frontend Engineer"
            width="583"
            height="630"
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
            Frontend
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
            <img src={`${baseUrl}/icons/og/react.svg`} width={60} height={60} />
            <img src={`${baseUrl}/icons/og/ts.svg`} width={50} height={50} />
            <img
              src={`${baseUrl}/icons/og/tailwind.svg`}
              width={60}
              height={60}
            />
            <img
              src={`${baseUrl}/icons/og/nextjs.svg`}
              width={50}
              height={50}
            />
            <img src={`${baseUrl}/icons/og/js.svg`} width={50} height={50} />
            <img src={`${baseUrl}/icons/og/git.svg`} width={50} height={50} />
          </div>
        </div>
      </div>
    ),
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
