export default function Header() {
    return (
        <header>
            <link rel="stylesheet" href="/App.css" />
            <img src="/CookShare.svg" alt="logo" id="logo" height={60} width={80}/>
            <h3>CookShare</h3>

            <textarea name="search" id="search"></textarea>
        </header>
    )
}