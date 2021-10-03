import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import loadingImg from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function RequiredAuth(props) {

    const { user, loading } = useAuth()

    function renderContent() {
        return (
            <>
                <Head>
                    <script
                        // Check if logged in user cookie is set and if not, return to auth page
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-auth")) {
                                    window.location.href = "/auth"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loadingImg} />
            </div>
        )
    }

    if (!loading && user?.email) {
        //returns page content if user is logged in and page is not loading
        return renderContent()
    } else if (loading) {
        return renderLoading()
    } else {
        router.push('/auth')
        return null
    }
}