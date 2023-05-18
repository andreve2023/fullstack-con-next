import '@styles/globals.css';
import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';
import Header from '@components/Header';
export default function App({ Component, pageProps }) {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <Header />
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}
