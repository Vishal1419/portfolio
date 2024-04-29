import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Box, Stack, ThemeProvider } from '@mui/material';

import theme from '@/theme';
import GlobalStyles from '@/utils/GlobalStyles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vishal - Senior Frontend Engineer',
  description:
    'Vishal is a Senior Frontend Engineer, who views coding as an art. He blends logic and creativity to create inventive solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Stack height="100vh">
              <Header />
              <Box flex={1} component="main" overflow="auto" p={2}>
                {children}
              </Box>
              <Footer />
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
