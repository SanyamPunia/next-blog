import Link from "next/link";

export default function Custom404() {
    return (
        <main>
            <h1>404 - That page does not seem to exist...</h1>
            <iframe src="https://giphy.com/embed/xTiN0L7EW5trfOvEk0"
                width="480"
                height="480"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <Link href="/">
                <button className="btn-blue">Go home</button>
            </Link>
        </main>
    )
}