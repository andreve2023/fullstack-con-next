import '../styles/tailwind.css';
import MainLayout from '@layout/MainLayout';
import { ProvideAuth } from '@hooks/useAuth';
export default function App({ Component, pageProps }) {
    return (
        <ProvideAuth>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ProvideAuth>
    );
}
