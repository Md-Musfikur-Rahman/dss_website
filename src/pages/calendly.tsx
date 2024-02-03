import Head from 'next/head';
import React, { useEffect } from 'react';
import MainLayout from '../layouts/main';
import { MeetingHero } from '../sections/meeting';

Calendly.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title> Get started | Devsite Studio</title>
      </Head>
      <MeetingHero />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/devsitestudio/client-meeting"
        style={{ minWidth: 320, height: 700 }}
      />
    </>
  );
}
