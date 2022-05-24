import { FC } from "react";

const Links:FC = () => {
    return(
        <div className="footer--bottom">
            <div className="links--left">
                <div>
                    <a href="https://www.samsung.com/pe/function/ipredirection/ipredirectionLocalList/">
                        Perú/Español
                    </a>
                </div>
                <div>
                    <a href="https://www.samsung.com/pe/accessibility/overview/">
                        Accesibilidad
                    </a>
                </div>
                <div>
                    <a href="https://www.samsung.com/pe/info/privacy/">
                        Politicas de Privacidad
                    </a>
                </div>
                <div>
                    <a href="https://www.samsung.com/pe/info/legal/">
                        Legal
                    </a>
                </div>
                <div>
                    <a href="https://www.samsung.com/pe/info/sitemap/">
                        Mapa del Sitio
                    </a>
                </div>
            </div>
            <div className="links--right">
                <div>
                    <span>¡Mantente Informado!</span>
                </div>
                <div>
                    <a href="https://www.facebook.com/SamsungPeru/">
                    <svg className="icon" focusable="false" viewBox="0 0 96 96" id="facebook-bold" xmlns="http://www.w3.org/2000/svg">
                   <path d="M92 48.267c0-24.3-19.699-44-44-44s-44 19.7-44 44C4 70.23 20.09 88.433 41.125 91.733V60.987H29.953v-12.72h11.172v-9.694c0-11.026 6.569-17.117 16.619-17.117 4.815 0 9.85.858 9.85.858v10.828h-5.549c-5.465 0-7.17 3.392-7.17 6.871v8.255h12.203l-1.951 12.718H54.875v30.747C75.91 88.433 92 70.228 92 48.267"></path>
						</svg>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/SamsungPeru">
                    <svg className="icon" focusable="false" viewBox="0 0 96 96" id="twitter-bold" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.304 84.563c33.964 0 52.537-28.13 52.537-52.524 0-.8-.016-1.595-.053-2.387A37.575 37.575 0 0093 20.095 36.871 36.871 0 0182.396 23a18.523 18.523 0 008.119-10.21 37.053 37.053 0 01-11.724 4.48 18.452 18.452 0 00-13.479-5.832c-10.198 0-18.467 8.268-18.467 18.459 0 1.449.162 2.857.479 4.209-15.346-.773-28.954-8.119-38.06-19.288a18.382 18.382 0 00-2.501 9.278c0 6.405 3.26 12.058 8.217 15.366a18.327 18.327 0 01-8.363-2.309c-.004.078-.004.154-.004.236 0 8.941 6.365 16.404 14.814 18.097a18.518 18.518 0 01-4.868.65 18.36 18.36 0 01-3.471-.334c2.351 7.334 9.167 12.673 17.25 12.822a37.061 37.061 0 01-22.934 7.903c-1.49 0-2.959-.085-4.404-.257a52.281 52.281 0 0028.304 8.293"></path>
						</svg>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/samsungpe/">
                    <svg className="icon" focusable="false" viewBox="0 0 96 96" id="instagram-bold" xmlns="http://www.w3.org/2000/svg">
						<path d="M41.56 5.004h12.88c6.046.022 7.725.088 11.289.25 4.577.21 7.703.936 10.438 1.999 2.827 1.099 5.225 2.57 7.616 4.96 2.39 2.39 3.86 4.789 4.96 7.616 1.019 2.625 1.73 5.611 1.97 9.896l.15 3.428c.101 2.775.133 5.555.136 13.312l-.009 8.204c-.022 5.858-.088 7.54-.25 11.056-.208 4.577-.935 7.703-1.997 10.438-1.1 2.827-2.57 5.225-4.96 7.616-2.391 2.39-4.79 3.86-7.616 4.96-2.626 1.02-5.612 1.73-9.896 1.97l-3.429.15c-2.775.102-5.555.133-13.312.137l-8.204-.01c-5.857-.022-7.538-.088-11.055-.25-4.577-.208-7.703-.934-10.438-1.997-2.827-1.1-5.225-2.57-7.616-4.96-2.39-2.391-3.861-4.79-4.96-7.616-1.02-2.626-1.73-5.612-1.97-9.896l-.12-2.62c-.119-2.915-.159-5.323-.166-12.71l.007-9.381c.021-6.047.087-7.726.25-11.29.21-4.576.937-7.702 1.999-10.437 1.099-2.827 2.57-5.225 4.96-7.616 2.39-2.39 4.789-3.861 7.616-4.96 2.625-1.02 5.611-1.73 9.895-1.97l2.621-.12c2.397-.097 4.45-.142 9.21-.159zm13.468 7.75H40.971c-5.353.023-6.969.087-10.347.24-4.192.192-6.47.892-7.984 1.48-2.007.78-3.44 1.713-4.944 3.218-1.505 1.504-2.437 2.937-3.217 4.944l-.186.496c-.522 1.452-1.079 3.56-1.274 7.062l-.138 3.177c-.09 2.447-.123 4.828-.131 10.757l.008 10.896c.022 5.353.086 6.969.24 10.347.192 4.193.892 6.47 1.48 7.985.78 2.007 1.713 3.44 3.218 4.944 1.504 1.505 2.937 2.437 4.944 3.217l.495.186c1.395.5 3.393 1.034 6.648 1.247l.84.047c4.328.197 5.764.247 15.872.25l8.475-.01c5.4-.022 7.015-.085 10.406-.24l.84-.047c3.662-.24 5.733-.885 7.144-1.433 2.007-.78 3.44-1.712 4.944-3.217 1.505-1.504 2.437-2.937 3.217-4.944l.185-.496c.522-1.453 1.079-3.56 1.274-7.062l.136-3.131c.091-2.466.125-4.84.133-10.814l-.008-10.827c-.022-5.4-.085-7.015-.24-10.405-.191-4.193-.891-6.47-1.48-7.985-.78-2.007-1.712-3.44-3.217-4.944-1.504-1.505-2.937-2.437-4.944-3.217l-.496-.186c-1.453-.522-3.56-1.078-7.062-1.273l-3.36-.145c-1.896-.068-3.806-.101-7.414-.117zM48 25.914c12.195 0 22.08 9.886 22.08 22.082 0 12.194-9.885 22.081-22.08 22.081-12.195 0-22.081-9.887-22.081-22.08 0-12.197 9.886-22.083 22.08-22.083zm0 7.748c-7.916 0-14.333 6.417-14.333 14.334 0 7.916 6.417 14.333 14.333 14.333s14.333-6.417 14.333-14.333c0-7.917-6.417-14.334-14.333-14.334zm22.953-13.78a5.16 5.16 0 110 10.32 5.16 5.16 0 010-10.32z"></path>
						</svg>
                    </a>
                </div>
                <div>
                    <a href="https://www.youtube.com/user/SamsungPeru">
                    <svg className="icon" focusable="false" viewBox="0 0 96 96" id="youtube-bold" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.415 15.003h3.174c6.211.033 28.834.27 35.138 1.965a11.79 11.79 0 018.31 8.336c1.662 6.217 1.918 18.146 1.958 21.682l.003 1.712c-.028 3.084-.247 15.579-1.96 21.994a11.793 11.793 0 01-8.311 8.336c-6.89 1.851-33.277 1.962-36.419 1.97l-3.137-.014c-7.542-.058-27.956-.36-33.894-1.956a11.794 11.794 0 01-8.311-8.336c-1.849-6.921-1.957-20.917-1.964-22.54l.01-1.364c.046-3.763.323-15.378 1.954-21.484a11.793 11.793 0 018.31-8.336c6.305-1.695 28.928-1.932 35.139-1.965zm-8.262 18.66V62.33l25.28-14.332-25.28-14.334z"></path>
						</svg>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/samsung-electronics/">
                    <svg className="icon" focusable="false" viewBox="0 0 96 96" id="linked-in-bold" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.001 8a4.999 4.999 0 014.994 4.782L88 13v70.002a4.999 4.999 0 01-4.782 4.994L83 88H12.998a4.999 4.999 0 01-4.993-4.782L8 83V12.999a4.999 4.999 0 014.781-4.994L12.998 8h70.003zM32.188 37.804H19.833l.15 38.5 12.205-.155V37.804zm40.639 3.05c-2.686-3.016-7.337-4.54-12.14-3.985-4.253.495-7.856 2.544-9.812 5.538l.006-1.879.025-2.724H38.994l.15 38.5 12.205-.155.001-21.494c.012-.346.106-1.882.849-3.4 1.112-2.272 3.089-3.438 5.876-3.465 1.597.006 2.91.472 3.903 1.451 1.748 1.726 2.02 4.508 2.063 5.282l.008.205.049 21.575L76.3 76.15l.015-1.654c.013-1.988.015-4.814.013-7.783l-.038-14.555c-.025-1.366-.314-7.766-3.463-11.303zM25.924 19.212a6.869 6.869 0 100 13.738 6.869 6.869 0 000-13.738z"></path>
						</svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Links;